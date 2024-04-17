// @ts-nocheck
import React, { useState, useEffect } from "react";
import { Space, Switch, Table, Tag, Radio, Flex } from "antd";
import type { ColumnsType } from "antd/es/table";
import {
  useSearchParams,
  useParams,
  useHref,
  useResolvedPath,
} from "react-router-dom";
import api from "@/request/api";
import TableColumns from "./TableColumns";
import dayjs from "dayjs";
import { statusEnum, statusOptions } from "./config";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const App: React.FC = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  //
  const [searchParams, setSearchParms] = useSearchParams();
  const taskId = searchParams.get("taskId");
  const timeStatus = false;

  const logDetailUrl = useHref({ pathname: `/task-log` });

  const [timer, setTimer] = useState(null);

  const [status, setStatus] = useState(0);

  const [pagination, setPagination] = useState({
    position: ["bottomCenter"],
    total: 0,
    current: 1,
    pageSize: 10,
  });

  const getData = async (value) => {
    setLoading(true);

    const res = await api.getTaskLogList({
      page: value.current,
      size: value.pageSize,
      status: value.status,
      taskId: taskId,
    });

    if (res.ok) {
      setList(
        res.data.list.map((item) => {
          item.isComplete = [
            statusEnum.TaskStatusStartError,
            statusEnum.TaskStatusRunningSuccess,
            statusEnum.TaskStatusRunningError,
          ].includes(item.status);

          const date1 = dayjs(item.createTime);
          const date2 = dayjs(item.endTime);
          const now = dayjs();

          if (item.endTime) {
            item.diffTime = date2.diff(date1, "seconds");
          } else {
            item.diffTime = now.diff(date1, "seconds");
          }

          item.hasRunLog = [
            statusEnum.TaskStatusStartRun,
            statusEnum.TaskStatusRunning,
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

    return () => {
      clearInterval(timer);
    };
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

  const handleTimeStatusChange = (checked) => {
    console.log(checked);

    if (checked) {
      setTimer((pre) => {
        return setInterval(() => {
          handlePageChange();
        }, 1000 * 3);
      });
    } else {
      setTimer((pre) => {
        clearInterval(pre);
        return null;
      });
    }
  };

  return (
    <>
      <Flex justify="space-between">
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

        <div className="flex items-center">
          <span className="mr-2">定时刷新</span>
          <Switch
            defaultChecked={timeStatus}
            onChange={handleTimeStatusChange}
          ></Switch>
        </div>
      </Flex>

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
