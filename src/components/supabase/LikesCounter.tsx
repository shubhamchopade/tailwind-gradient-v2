import React, { useEffect, useReducer } from "react";
import { useDebounce } from "use-debounce/lib";
import { supabaseQuery } from "../../data/supabase";
import { useColorState } from "../../store/ColorStateProvider";
import { reducer } from "./reducerFunction";

const LikesCounter: React.FunctionComponent = () => {
  const { brandColor } = useColorState();
  const [debouncedValue] = useDebounce(brandColor, 300);
  const toggleValueToBoolean =
    localStorage.getItem(debouncedValue) === "true" ? true : false;

  const initValues = {
    likes: 0,
    isLoading: true,
    toggle: toggleValueToBoolean,
  };

  const [state, dispatch] = useReducer(reducer, initValues);

  useEffect(() => {
    dispatch({ type: "LOADING" });
    async function getLikes() {
      let { data }: any = await supabaseQuery
        .from("colors")
        .select("likes")
        .filter("id", "eq", debouncedValue);
      const likes = data && data[0] && data[0].likes;
      dispatch({
        type: "RESOLVED",
        likes: likes || 0,
        toggle: toggleValueToBoolean,
        debouncedValue: debouncedValue,
      });
    }
    getLikes();
  }, [debouncedValue]);

  useEffect(() => {
    async function insertColor() {
      let { data }: any = await supabaseQuery.from("colors").insert(
        {
          id: debouncedValue,
          likes: state.likes,
        },
        { upsert: true }
      );
      console.log(data);
    }
    if (!state.isLoading) {
      insertColor();
    }
  }, [state.toggle]);

  function handleCount() {
    if (state.toggle) {
      dispatch({ type: "INCREMENT_LIKES" });
    } else {
      dispatch({ type: "DECREMENT_LIKES" });
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
            className="transition-all"
            stroke={brandColor}
            fill={state.toggle ? brandColor : ""}
            strokeWidth={3}
          />
        </svg>
        {!state.isLoading ? state.likes : "💫"}
      </button>
    </div>
  );
};

export default LikesCounter;
