module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "noto-sans": ["Noto Sans", "sans-serif"],
        "noto-serif": ["Noto Serif", "serif"],
      },
      fontSize: {
        xxs: "0.125rem",
      },
      cursor: {
        grabbing: "grabbing",
        grab: "grab",
      },
      margin: {
        0.5: "2px",
      },
      colors: {
        darkblue: {
          0: "#11061c",
          1: "#2b0e47",
          2: "#3f1569",
          3: "#531c8b",
          4: "#6823ad",
          5: "#771cd2",
          6: "#913ce5",
          7: "#aa69eb",
          8: "#c496f1",
          9: "#ddc3f7",
        },
        purple: {
          0: "#1d061d",
          1: "#470e47",
          2: "#691569",
          3: "#8b1b8b",
          4: "#ad22ad",
          5: "#d31bd3",
          6: "#e63ce6",
          7: "#ec69ec",
          8: "#f196f1",
          9: "#f7c3f7",
        },
        cerise: {
          0: "#1d0511",
          1: "#480d2b",
          2: "#6a143f",
          3: "#8d1a53",
          4: "#af2068",
          5: "#d51977",
          6: "#e83a91",
          7: "#ed67aa",
          8: "#f295c4",
          9: "#f8c2dd",
        },
        flamingo: {
          0: "#1d0905",
          1: "#49170d",
          2: "#6b2113",
          3: "#8e2c19",
          4: "#b1371f",
          5: "#d73717",
          6: "#e95538",
          7: "#ee7d66",
          8: "#f3a494",
          9: "#f8cbc2",
        },
        gamboge: {
          0: "#1d1505",
          1: "#49350c",
          2: "#6c4e11",
          3: "#906717",
          4: "#b3811d",
          5: "#d99815",
          6: "#ebaf36",
          7: "#f0c164",
          8: "#f4d493",
          9: "#f9e6c1",
        },
        fuego: {
          0: "#191e05",
          1: "#3f4a0b",
          2: "#5e6d11",
          3: "#7c9016",
          4: "#9ab41c",
          5: "#b9da14",
          6: "#ceec35",
          7: "#d9f163",
          8: "#e5f592",
          9: "#f0f9c1",
        },
        lima: {
          0: "#0d1e05",
          1: "#204a0b",
          2: "#306d11",
          3: "#3f9016",
          4: "#4eb41c",
          5: "#56da14",
          6: "#72ec35",
          7: "#93f163",
          8: "#b3f592",
          9: "#d4f9c1",
        },
        green: {
          0: "#041e09",
          1: "#0b4a16",
          2: "#106e20",
          3: "#16912a",
          4: "#1bb435",
          5: "#13db35",
          6: "#34ed53",
          7: "#63f17b",
          8: "#92f5a2",
          9: "#c1faca",
        },
      },
    },
  },
  variants: {
    extend: {
      scale: ["active", "group-hover"],
    },
  },
  plugins: [],
};
