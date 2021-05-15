import React, { useEffect } from "react";

const Supabase: React.FunctionComponent = () => {
  useEffect(() => {
    // async function getDataFromTable() {
    //   let { data, error } = await supabaseQuery
    //     .from("colors")
    //     .insert(brandColorPaletteArray);
    //   console.log(data, error);
    // }
    // getDataFromTable();
  }, []);

  // console.log(brandColorPaletteArray);

  return <div></div>;
};

export default Supabase;
