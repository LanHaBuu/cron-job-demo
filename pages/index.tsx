/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

export default function Home() {
  const [news, setNews] = useState<any>(null)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://cron-job-demo.vercel.app/api/news");
        const result = await response.json();
        setNews(result);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchData();
  },[]);

  return (
    <div>
      {news?.map((item:any) => {
        return (
          <div>
            <p>{item?.id}</p>
            <p>{item?.name}</p>
          </div>
        )
      })}
    </div>
  );
}
