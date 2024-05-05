import supabase from "./supabase";

const searchCollege = async (searchTerm: string) => {
  const { data, error } = await supabase
    .from("College_name")
    .select()
    .textSearch("College_name", searchTerm);
  if (error) {
    console.error("Error searching data in College_name:", error.message);
    return [];
  } else {
    return data || [];
  }
};
const searchClass = async (searchTerm: string) => {
  const { data, error } = await supabase
    .from("Class_name")
    .select()
    .textSearch("teacher_name", searchTerm);
  if (error) {
    console.error("Error searching data in Class_name:", error.message);
    return [];
  } else {
    return data || [];
  }
};

const searchData = async (searchTerm: string) => {
  const result1 = await searchCollege(searchTerm);
  const result2 = await searchClass(searchTerm);

  return { result1, result2 };
};

export default searchData;
