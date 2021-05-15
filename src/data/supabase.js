import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bpgpatznpbkbkiomgryo.supabase.co";
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;
export const supabaseQuery = createClient(supabaseUrl, supabaseKey);
