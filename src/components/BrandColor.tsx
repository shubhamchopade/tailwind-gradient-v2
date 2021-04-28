import BrandColorPalette from "./BrandColorPalette";
import GetBrandColor from "./GetBrandColor";

export const BrandColor = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-around items-center">
        <GetBrandColor />
        <BrandColorPalette />
      </div>
    </div>
  );
};
