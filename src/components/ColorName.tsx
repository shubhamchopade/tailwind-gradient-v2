import useBrandColorName from "../hooks/useBrandColorName";
import useHSLToHex from "../hooks/useHSLToHex";

const ColorName = (props: any) => {
  const { value } = props;
  const brandColorName = useBrandColorName(value, 10);

  return <p>{brandColorName}</p>;
};
export const ColorNameHSL = (props: any) => {
  const { color } = props;
  let hslToHex = useHSLToHex(color.h, color.s, color.l);
  const brandColorName = useBrandColorName(hslToHex, 10);

  return (
    <p className="absolute top-3 -left-24 uppercase text-xs">
      {brandColorName}
    </p>
  );
};

export default ColorName;
