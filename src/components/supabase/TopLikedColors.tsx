import React, { useEffect, useState } from "react";
import { supabaseQuery } from "../../data/supabase";
import { useColorState } from "../../store/ColorStateProvider";

const TopLikedColors: React.FunctionComponent = () => {
  const [, setIsLoading] = useState(false);
  const [topFive, setTopFive] = useState([]);
  const { setBrandColor, likes } = useColorState();

  useEffect(() => {
    setIsLoading(true);
    async function getLikes() {
      let { data }: any = await supabaseQuery
        .from("colors")
        .select()
        .order("likes", { ascending: false })
        .limit(5);
      setTopFive(data);
      //   console.log(data, isLoading);
      setIsLoading(false);
    }
    getLikes();
  }, [likes]);

  function handleLike(index: number) {
    let col = topFive[index];
    const { hex } = col;
    setBrandColor(hex);
  }

  return (
    <div>
      {topFive.map((color, index) => {
        const { hex, likes } = color;
        return (
          <div
            onClick={() => handleLike(index)}
            key={index}
            className="w-8 h-8 flex justify-center items-center rounded-full"
            style={{ background: hex }}
          >
            <p>{likes}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TopLikedColors;
