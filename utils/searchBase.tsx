import supabase from "./supabase";

const searchCollege = async (searchTerm: string) => {
  const { data, error } = await supabase
    .from("College_name")
    .select("College_name, Class_name_1, Class_name_2")
    .textSearch("College_name", searchTerm);
  if (error) {
    console.error("Error searching data in College_name:", error.message);
    return null;
  } else {
    return data ? data[0] : null;
  }
};

const searchClass = async (className: string) => {
  const { data, error } = await supabase
    .from("Class_name")
    .select("Class, teacher, classtype")
    .eq("Class", className);

  if (error) {
    console.error("Error searching data in Class_name:", error.message);
    return [];
  } else {
    const formattedData = data?.map(
      (item: any) => `${item.Class} ${item.teacher} ${item.classtype}`
    );
    return formattedData || [];
  }
};

const searchData = async (searchTerm: string) => {
  const collegeData = await searchCollege(searchTerm);

  if (collegeData) {
    const classData1 = await searchClass(collegeData.Class_name_1);
    const classData2 = await searchClass(collegeData.Class_name_2);

    return {
      collegeName: collegeData.College_name,
      classData: [...classData1, ...classData2],
    };
  } else {
    return { collegeName: null, classData: [] };
  }
};

export default searchData;
