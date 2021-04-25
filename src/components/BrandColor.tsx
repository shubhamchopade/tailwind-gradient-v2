import BrandColorPalette from "./BrandColorPalette";
import GetBrandColor from "./GetBrandColor";

export const BrandColor = () => {
  return (
    <div>
      <div className="sm:flex justify-around items-center">
        <GetBrandColor />
        <BrandColorPalette />
      </div>
    </div>
  );
};
