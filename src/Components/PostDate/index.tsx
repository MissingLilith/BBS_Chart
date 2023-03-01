import { Line } from "@ant-design/charts";
import { message } from "antd";
import { useEffect, useState } from "react";
import { GetPostDateNum } from "../../service/chart";
import { IDateNum } from "../../types/type";

const PostDate = () => {
  const [data, setData] = useState<IDateNum[]>([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = async () => {
    try {
      const { data, status } = await GetPostDateNum();
      if (status === 200) {
        setData(data);
      }
    } catch (error: any) {
      message.error(error);
    }
  };

  const config: any = {
    data,
    pading: "auto",
    xField: "date",
    yField: "num",
    smooth: true,
  };
  return <Line {...config} />;
};

export default PostDate;
