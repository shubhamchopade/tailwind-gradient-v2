import { useColorState } from "../store/ColorStateProvider";

function useGetTailwindConfig() {
  const { brandColorPaletteArray } = useColorState();

  //   const arr = brandColorPaletteArray.map((color) => {
  //     return color.hex;
  //   });

  const template = (shade) => {
    return `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"${shade.number}" : "${shade.hex}"`;
  };

  const shadesTemp = (color) => {
    return color.lightnessPalette.map((shade) => {
      return `<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${template(
        shade
      )}`;
    });
  };

  const colorFormat = brandColorPaletteArray.map((color, index) => {
    return `${
      index !== 0
        ? "<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
        : ""
    }&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ${color.name.toLowerCase()}: {${shadesTemp(
      color
    )}<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}`;
  });

  const mainFormat = () => `
      module.exports = {<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;theme: {<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;extend: {<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;colors: {<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${colorFormat},
      <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
      <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
      <br />&nbsp;&nbsp;}
    `;

  return mainFormat();
}

export default useGetTailwindConfig;
