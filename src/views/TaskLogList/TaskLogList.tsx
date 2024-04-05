// @ts-nocheck
import React, { useState, useEffect } from "react";
import { Space, Table, Tag, Radio } from "antd";
import type { ColumnsType } from "antd/es/table";

import api from "@/request/api";
import TableColumns from "./TableColumns";
import dayjs from "dayjs";
import { statusEnum, statusOptions } from "./config";

const App: React.FC = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  const [status, setStatus] = useState(0);

  const [pagination, setPagination] = useState({
    position: ["bottomCenter"],
    total: 0,
    current: 1,
    pageSize: 10,
  });

  const handleShowLog = (record) => {
    window.open(`/task-log/${record.taskLogId}`, "_blank");
  };

  const getData = async (value) => {
    setLoading(true);

    const res = await api.getTaskLogList({
      page: value.current,
      size: value.pageSize,
      status: value.status,
    });

    if (res.ok) {
      setList(
        res.data.list.map((item) => {
          item.handleShowLog = handleShowLog;

          const date1 = dayjs(item.createTime);
          const date2 = dayjs(item.updateTime);

          item.diffTime = date2.diff(date1, "seconds");

          item.isComplete = [
            statusEnum.TaskStatusRunningSuccess,
            statusEnum.TaskStatusRunningError,
          ].includes(item.status);

          return item;
        })
      );

      setPagination((pre) => {
        return {
          ...pre,
          total: res.data.total,
        };
      });
    }

    setLoading(false);
  };

  useEffect(() => {
    getData(pagination);
  }, []);

  const handlePageChange = (value) => {
    console.log(value);

    setPagination((pre) => {
      let newValue = {
        status,
        ...pre,
        ...value,
      };

      getData(newValue);

      return newValue;
    });
  };

  const handleStatusChange = (e) => {
    console.log(e.target.value);
    handlePageChange({ status: e.target.value });
    setStatus(e.target.value);
  };

  const statusRadioOptions = [
    {
      value: 0,
      label: "全部",
    },
    ...statusOptions,
  ];
  return (
    <>
      <Radio.Group
        value={status}
        buttonStyle="solid"
        onChange={handleStatusChange}
      >
        {statusRadioOptions.map((item) => {
          return (
            <Radio.Button key={item.value} value={item.value}>
              {item.label}
            </Radio.Button>
          );
        })}
      </Radio.Group>

      <Table
        className="mt-4"
        bordered
        loading={loading}
        columns={TableColumns}
        rowKey="taskLogId"
        dataSource={list}
        pagination={pagination}
        onChange={handlePageChange}
      />
    </>
  );
};

export default App;
