import React, { useEffect, useState } from "react";
import { supabaseQuery } from "../../data/supabase";
import { useColorState } from "../../store/ColorStateProvider";

interface Props {
  setLocalBrandColor: React.Dispatch<React.SetStateAction<string>>;
}

const TopLikedColors: React.FunctionComponent<Props> = ({
  setLocalBrandColor,
}) => {
  const [, setIsLoading] = useState(false);
  const [topFive, setTopFive] = useState([]);
  const { likes } = useColorState();

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
    const { id } = col;
    setLocalBrandColor(id);
  }

  return (
    <div>
      <p className="text-xs text-gray-400 mb-4">most liked</p>
      {topFive &&
        topFive.map((color, index) => {
          const { id, likes } = color;
          return (
            <div
              onClick={() => handleLike(index)}
              key={index}
              className="w-8 h-8 my-1 cursor-pointer flex justify-center items-center rounded-full"
              style={{ background: id }}
            >
              <p
                style={{ fontSize: "0.7rem" }}
                className="backdrop-filter bg-white bg-opacity-30 px-0.5 rounded font-bold text-cerise-0"
              >
                {likes}
              </p>
            </div>
          );
        })}
    </div>
  );
};

export default TopLikedColors;
