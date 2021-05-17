import React, { useEffect, useReducer, useState } from "react";
import { useDebounce } from "use-debounce/lib";
import { supabaseQuery } from "../../data/supabase";
import useBrandColorName from "../../hooks/useBrandColorName";
import useHexToHSL from "../../hooks/useHexToHSL";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useColorState } from "../../store/ColorStateProvider";

type State = {
  count: number;
  isLoading?: boolean;
};

type Action =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "loading" }
  | { type: "loaded" };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "loading":
      return { count: (state.count = 0), isLoading: true };
    case "loaded":
      return { count: (state.count = 0), isLoading: false };
  }
};

const LikesCounter: React.FunctionComponent = () => {
  const { brandColor, likes, setLikes } = useColorState();
  const [debouncedValue] = useDebounce(brandColor, 300);
  const [error, setError]: any = useState(null);
  const [currentColor, setCurrentColor]: any = useState(null);
  const [, setIsLiked] = useLocalStorage(brandColor, "false");
  const [count, setCount] = useState(
    Boolean(localStorage.getItem(debouncedValue))
  );

  const [state, dispatch] = useReducer(reducer, { count: 0, isLoading: true });

  useEffect(() => {
    setIsLiked(count);
    console.log("localStrg", count);
  }, [count]);

  useEffect(() => {
    if (localStorage.getItem(debouncedValue) === null) {
      setCount(Boolean(localStorage.getItem(debouncedValue)));
    }
  }, [debouncedValue]);

  useEffect(() => {
    dispatch({ type: "loading" });
    async function getLikes() {
      let { data }: any = await supabaseQuery
        .from("colors")
        .select("likes")
        .filter("id", "eq", debouncedValue);
      const likes = data && data[0] && data[0].likes;
      setLikes(likes || 0);
      dispatch({ type: "loaded" });
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

      let { error }: any = await supabaseQuery.from("colors").insert({
        id: debouncedValue,
        name: useBrandColorName(debouncedValue),
        hex: debouncedValue,
        hsl: useHexToHSL(debouncedValue),
        likes: likes,
      });
      setError(error);
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
    setCount(!count);
    if (count) {
      setLikes(likes + 1);
    } else {
      setLikes(likes - 1);
    }
  }

  return (
    <div className="flex justify-center items-center mb-4">
      <button
        className="btn rounded-sm group text-center"
        onClick={handleCount}
      >
        <svg
          width="33"
          height="30"
          viewBox="1 -5 27 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transform group-hover:scale-105"
        >
          <path
            d="M7.34456 0C3.28889 0 0 3.25511 0 7.27111C0 10.513 1.2853 18.2072 13.937 25.9851C14.1637 26.1229 14.4238 26.1959 14.6891 26.1959C14.9544 26.1959 15.2146 26.1229 15.4412 25.9851C28.0929 18.2072 29.3782 10.513 29.3782 7.27111C29.3782 3.25511 26.0893 0 22.0337 0C17.978 0 14.6891 4.40674 14.6891 4.40674C14.6891 4.40674 11.4002 0 7.34456 0Z"
            stroke={brandColor}
            strokeWidth={3}
          />
        </svg>
        {state.isLoading ? "💫" : likes}
      </button>
    </div>
  );
};

export default LikesCounter;
