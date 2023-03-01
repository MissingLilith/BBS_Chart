import { Line } from "@ant-design/charts";
import { message } from "antd";
import { useEffect, useState } from "react";
import { GetUserDateNum } from "../../service/chart";
import { IDateNum } from "../../types/type";

const UserDate = () => {
  const [data, setData] = useState<IDateNum[]>([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = async () => {
    try {
      const { data, status } = await GetUserDateNum();
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

export default UserDate;
