import { useColorState } from "../store/ColorStateProvider";

function useGetTailwindConfig(clipboard) {
  const { brandColorPaletteArray } = useColorState();

  const templateHTML = (shade) => {
    return `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"${shade.number}" : "${shade.hex}"`;
  };

  const shadesTempHTML = (color) => {
    return color.lightnessPalette.map((shade) => {
      return `<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${templateHTML(
        shade
      )}`;
    });
  };

  const colorFormatHTML = brandColorPaletteArray.map((color, index) => {
    return `${
      index !== 0
        ? "<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
        : ""
    }&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ${color.name.toLowerCase()}: {${shadesTempHTML(
      color
    )}<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}`;
  });

  let format = `
      module.exports = {<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;theme: {<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;extend: {<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;colors: {<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${colorFormatHTML},
      <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
      <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
      <br />&nbsp;&nbsp;}
    `;

  if (clipboard) {
    const template = (shade) => {
      return `\t\t\t\t\t\t\t\t\t\t\t"${shade.number}" : "${shade.hex}"`;
    };

    const shadesTemp = (color) => {
      return color.lightnessPalette.map((shade) => {
        return `\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t${template(shade)}`;
      });
    };

    const colorFormat = brandColorPaletteArray.map((color, index) => {
      return `${
        index !== 0 ? "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t" : "\t\t\t\t\t\t"
      }\t\t\t\t\t\t\t\t\t ${color.name.toLowerCase()}: {${shadesTemp(
        color
      )}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}`;
    });

    format = `
      module.exports = {
      \t\t\t\t\ttheme: {
      \t\t\t\t\t\t\t\t\textend: {
      \t\t\t\t\t\t\t\t\t\t\t\t\tcolors: {
      ${colorFormat},
      \t\t\t\t\t\t\t\t\t},
      \t\t\t\t\t},
      \t\t}
    `;
  }

  return format;
}

export default useGetTailwindConfig;
