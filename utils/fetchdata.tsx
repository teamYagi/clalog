// utils/fetchData.ts

import supabase from "./supabase";

const fetchTable1Data = async () => {
  const { data, error } = await supabase.from("table1").select("*");
  if (error) {
    console.error("Error fetching data from table1:", error.message);
    return [];
  } else {
    return data || [];
  }
};

export default fetchTable1Data;
