import { useColorState } from "../store/ColorStateProvider";

function useGetTailwindConfig() {
  const { brandColorPaletteArray } = useColorState();

  //   const arr = brandColorPaletteArray.map((color) => {
  //     return color.hex;
  //   });

  const template = (shade) => {
    return `\t\t\t\t\t\t\t"${shade.number}" : "${shade.hex}"`;
  };

  const shadesTemp = (color) => {
    return color.lightnessPalette.map((shade) => {
      return `\n${template(shade)}`;
    });
  };

  const colorFormat = brandColorPaletteArray.map((color, index) => {
    return `${
      index !== 0 ? "\n" : ""
    }\t\t\t\t\t\t ${color.name.toLowerCase()}: {${shadesTemp(
      color
    )}\n\t\t\t\t\t\t}`;
  });

  const mainFormat = () => `
      module.exports = {
      \ttheme: {
      \t\textend: {
      \t\t\tcolors: {
      ${colorFormat},
      \t\t\t\t},
      \t\t\t},
      \t\t}
    `;

  return mainFormat();
}

export default useGetTailwindConfig;
