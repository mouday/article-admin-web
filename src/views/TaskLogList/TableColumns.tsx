// @ts-nocheck
import React, { useState, useEffect } from "react";
import { Space, Table, Tag, Button } from "antd";

import { ContainerOutlined, FormOutlined } from "@ant-design/icons";

import { statusEnum, statusOptions } from "./config";

export default [
  {
    title: "标题",
    dataIndex: "title",
    key: "title",
    align: "center",
  },
  {
    title: "状态",
    dataIndex: "status",
    key: "status",
    width: 100,
    align: "center",
    render: (_, record) => {
      const item = statusOptions.find((item) => item.value === record.status);

      return <span style={{ color: item.color }}>{item.label}</span>;
    },
  },
  {
    title: "开始时间",
    dataIndex: "createTime",
    key: "createTime",
    width: 200,
    align: "center",
  },

  {
    title: "结束时间",
    dataIndex: "updateTime",
    key: "updateTime",
    width: 200,
    align: "center",
    render: (_, record) => {
      if (record.isComplete) {
        return <span>{record.updateTime}</span>;
      } else {
        return <>-</>;
      }
    },
  },
  {
    title: "耗时（秒）",
    dataIndex: "diffTime",
    key: "diffTime",
    width: 120,
    align: "center",
    render: (_, record) => {
      if (record.isComplete) {
        return <span>{record.diffTime}</span>;
      } else {
        return <>-</>;
      }
    },
  },

  {
    title: "日志",
    key: "action",
    align: "center",
    width: 60,
    render: (_, record) => (
      <Button
        type="link"
        disabled={!record.isComplete}
        onClick={() => {
          record.handleShowLog(record);
        }}
      >
        <ContainerOutlined />
      </Button>
    ),
  },
];
