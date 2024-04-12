import React, { useState, useEffect } from "react";
import type { ColumnsType } from "antd/es/table";
import { Space, Switch, Popconfirm, Button, Table, Tag } from "antd";
import {
  DeleteOutlined,
  FormOutlined,
  ContainerOutlined,
} from "@ant-design/icons";

export default [
  {
    title: "执行器名称",
    dataIndex: "title",
    key: "title",
    align: "center",
    render: (_, record) => {
      return <div className="text-left">{record.title}</div>;
    },
  },
  // {
  //   title: "Cron",
  //   align: "center",
  //   dataIndex: "cron",
  //   key: "cron",
  //   width: 200,
  //   render: (_, record) => {
  //     return <div className="text-left">{record.cron}</div>;
  //   },
  // },
  {
    title: "状态",
    align: "center",
    dataIndex: "status",
    key: "status",
    width: 100,
    render: (_, record) => {
      return (
        <Switch
          defaultChecked={record.status}
          onChange={(val) => {
            record.handleStatusChange(record, val);
          }}
        ></Switch>
      );
    },
  },
  // {
  //   title: "日志",
  //   key: "action",
  //   align: "center",
  //   width: 60,
  //   render: (_, record) => (
  //     <Button
  //       type="link"
  //       onClick={() => {
  //         record.handleShowLog(record);
  //       }}
  //     >
  //       <ContainerOutlined />
  //     </Button>
  //   ),
  // },
  {
    title: "操作",
    align: "center",
    dataIndex: "runnerId",
    key: "runnerId",
    width: 160,
    render: (_, record) => (
      <Space size="middle">
        <Button
          type="link"
          onClick={() => {
            record.handleEditRow(record);
          }}
        >
          <FormOutlined className="cursor-pointer" />
        </Button>

        <Popconfirm
          title="确认删除"
          description=""
          onConfirm={() => {
            record.handleDeleteRow(record);
          }}
        >
          <Button danger type="link">
            <DeleteOutlined className="cursor-pointer" />
          </Button>
        </Popconfirm>
      </Space>
    ),
  },
];
