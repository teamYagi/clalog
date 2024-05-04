import Image from "next/image";
import Head from "next/head"; 
import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

const supabaseUrl = "https://qeyuzvbfjkxzmklnurig.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey || '');

const TABLE_NAME = "uni_classes";

export const fetchUniClasses = async () => {
  try {
    const { data } = await supabase.from(TABLE_NAME).select("uni_classes:name");
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default function Home() {
  const [uniClasses, setUniClasses] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchUniClasses();
      setUniClasses(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <Head>
        <link rel="stylesheet" type="text/css" href="styles.css" />
      </Head>
      <main>
        <div className="header">こここ</div>
        <ul>
          {uniClasses.map((classItem, index) => (
            <li key={index}>{classItem.name}</li>
          ))}
        </ul>
      </main>
    </div>
  );
}
