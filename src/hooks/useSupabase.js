import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

function useSupabase(table_name) {
  const supabaseUrl = "https://bpgpatznpbkbkiomgryo.supabase.co";
  const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;
  const supabase = createClient(supabaseUrl, supabaseKey);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getDataFromTable() {
      let { data, error } = await supabase.from(table_name).select("*");
      setData(data);
      setError(error);
    }

    getDataFromTable();
  }, []);

  return { data, error };
}

export default useSupabase;
