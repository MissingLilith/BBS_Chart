import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import UserNum from "./Components/UserNum";
import PostNum from "./Components/PostNum";
import ReplyNum from "./Components/ReplyNum";

function App() {
  return (
    <div className="App">
      <div className="charts">
        <div className="left"></div>
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
