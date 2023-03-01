import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import UserNum from "./Components/UserNum";
import PostNum from "./Components/PostNum";
import ReplyNum from "./Components/ReplyNum";
import UserDate from "./Components/UserDate";
import PostDate from "./Components/PostDate";
import ReplyDate from "./Components/ReplyDate";

function App() {
  return (
    <div className="App">
      <div className="charts">
        <div className="left">
          <Card bordered={false}>
            <Meta
              title="每月用户注册量"
              description="这里展示在每个月里新用户注册的数量"
            />
            <div className="date">
              <UserDate />
            </div>
          </Card>
          <Card className="leftChart" bordered={false}>
            <Meta
              title="每月新帖发布量"
              description="这里展示在每个月里用户发布新帖的数量"
            />
            <div className="date">
              <PostDate />
            </div>
          </Card>
          <Card className="leftChart" bordered={false}>
            <Meta
              title="每月回帖发布量"
              description="这里展示在每个月里用户回帖的数量"
            />
            <div className="date">
              <ReplyDate />
            </div>
          </Card>
        </div>
        <div className="right">
          <Card bordered={false}>
            <Meta title="总用户数" />
            <div className="user">
              <UserNum />
            </div>
          </Card>
          <Card className="leftChart" bordered={false}>
            <Meta title="总发帖数" />
            <div className="user">
              <PostNum />
            </div>
          </Card>
          <Card className="leftChart" bordered={false}>
            <Meta title="总回复数" />
            <div className="user">
              <ReplyNum />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
