import namer from "color-namer";

function useBrandColorName(hex) {
  const names = namer(hex || "000");
  const { ntc, html, pantone, roygbiv, x11 } = names;
  let allColors = [...ntc, ...html, ...pantone, ...roygbiv, ...x11];
  let index = 0;

  function getNameString(allColors) {
    while (allColors[index].name.replace(/\s+/g, "").trim().length > 10) {
      index++;
    }

    console.log(index, allColors[index].name);
    return allColors[index].name;
  }

  return getNameString(allColors).replace(/\s+/g, "").trim();
}

export default useBrandColorName;
