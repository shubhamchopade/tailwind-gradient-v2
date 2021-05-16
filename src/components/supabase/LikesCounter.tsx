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
    <div className="flex justify-center items-center mb-4">
      <button onClick={handleCount}>
        <svg
          width="30"
          height="27"
          viewBox="0 0 30 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.34456 0C3.28889 0 0 3.25511 0 7.27111C0 10.513 1.2853 18.2072 13.937 25.9851C14.1637 26.1229 14.4238 26.1959 14.6891 26.1959C14.9544 26.1959 15.2146 26.1229 15.4412 25.9851C28.0929 18.2072 29.3782 10.513 29.3782 7.27111C29.3782 3.25511 26.0893 0 22.0337 0C17.978 0 14.6891 4.40674 14.6891 4.40674C14.6891 4.40674 11.4002 0 7.34456 0Z"
            fill={brandColor}
          />
        </svg>
        {isLoading ? "loading" : likes}
      </button>
    </div>
  );
};

export default LikesCounter;
