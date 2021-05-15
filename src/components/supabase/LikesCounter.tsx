import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce/lib";
import { supabaseQuery } from "../../data/supabase";
import useBrandColorName from "../../hooks/useBrandColorName";
import useHexToHSL from "../../hooks/useHexToHSL";
import { useColorState } from "../../store/ColorStateProvider";

const LikesCounter: React.FunctionComponent = () => {
  const { brandColor, likes, setLikes } = useColorState();
  const [debouncedValue] = useDebounce(brandColor, 300);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError]: any = useState(null);
  const [currentColor, setCurrentColor]: any = useState(null);

  useEffect(() => {
    setIsLoading(true);
    async function getLikes() {
      let { data }: any = await supabaseQuery
        .from("colors")
        .select("likes")
        .filter("id", "eq", debouncedValue);
      const likes = data[0] && data[0].likes;
      setLikes(likes || 0);
      // console.log(likes);
      setIsLoading(false);
    }
    getLikes();
  }, [debouncedValue]);

  useEffect(() => {
    async function insertColor() {
      let { data }: any = await supabaseQuery
        .from("colors")
        .select("id")
        .filter("id", "eq", brandColor);
      // console.log(data, "insert");
      setCurrentColor(data);

      console.log(currentColor);

      if (likes > 0) {
        let { error }: any = await supabaseQuery.from("colors").insert({
          id: debouncedValue,
          name: useBrandColorName(debouncedValue),
          hex: debouncedValue,
          hsl: useHexToHSL(debouncedValue),
          likes: likes,
        });
        setError(error);
      }
    }
    insertColor();
  }, [likes]);

  useEffect(() => {
    async function updateLikes() {
      if (currentColor && currentColor.length > 0) {
        console.log("inside");
        let { data, error }: any = await supabaseQuery
          .from("colors")
          .update({
            likes: likes,
          })
          .filter("id", "eq", debouncedValue);
        console.log(data, "updated", error);
      }
    }
    updateLikes();
  }, [error]);

  function handleCount() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <p>{isLoading ? "loading" : likes}</p>
      <button onClick={handleCount}>Increment</button>
    </div>
  );
};

export default LikesCounter;
