// @ts-nocheck
import React, { useState, useEffect } from "react";
import { Space, Switch, Table, Tag } from "antd";

import TaskEditForm from "./TaskEditForm";
import TableColumns from "./TableColumns";
import { Button, Modal, message, Checkbox, Form, Input } from "antd";

import api from "@/request/api";

const App: React.FC = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentRow, setCurrentRow] = useState(null);
  const [messageApi, contextHolder] = message.useMessage();

  const [pagination, setPagination] = useState({
    position: ["bottomCenter"],
    total: 0,
    current: 1,
    pageSize: 10,
  });

  const resetData = async () => {
    setPagination((pre) => {
      let value = { ...pre, current: 1 };
      getData(value);
      return value;
    });
  };

  const handleStatusChange = async (record, value) => {
    const res = await api.updateRunnerStatus({
      runnerId: record.runnerId,
      status: value,
    });

    if (res.ok) {
      message.success({
        content: "操作成功",
      });
    } else {
      message.error({
        content: res.msg,
      });
    }
  };

  const handleEditRow = async (record) => {
    setCurrentRow(record);
    setIsModalOpen(true);
  };

  const handleDeleteRow = async (record) => {
    const res = await api.removeRunner({
      runnerId: record.runnerId,
    });

    if (res.ok) {
      message.success({
        content: "操作成功",
      });
      resetData();
    } else {
      message.error({
        content: res.msg,
      });
    }
  };


  const handleShowLog = (record) => {
    // navigate(`/task-log/${record.taskLogId}`);
    window.open(`/#/task-log-list?runnerId=${record.runnerId}`, "_blank");
  };

  const getData = async (value) => {
    setLoading(true);
    const res = await api.getRunnerList({
      page: value.current,
      size: value.pageSize,
    });

    if (res.ok) {
      setList(
        res.data.list.map((item) => {
          item.handleStatusChange = handleStatusChange;
          item.handleEditRow = handleEditRow;
          item.handleDeleteRow = handleDeleteRow;
          item.handleShowLog = handleShowLog;
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

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setCurrentRow(null);
    setIsModalOpen(true);
  };

  const handleTaskEditFormSuccess = () => {
    setIsModalOpen(false);
    resetData();
  };

  const handleTaskEditFormCancel = () => {
    setIsModalOpen(false);
  };

  const handlePageChange = (value) => {
    console.log(value);

    setPagination((pre) => {
      let newValue = {
        ...pre,
        ...value,
      };

      getData(newValue);

      return newValue;
    });
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        添加执行器
      </Button>

      <Table className="mt-4"
        bordered
        rowKey="runnerId"
        loading={loading}
        columns={TableColumns}
        dataSource={list}
        pagination={pagination}
        onChange={handlePageChange}
      />

      {/* 编辑框 */}
      <Modal
        title={<div className="text-center">编辑任务</div>}
        footer={null}
        open={isModalOpen}
        destroyOnClose={true}
      >
        <TaskEditForm
          currentRow={currentRow}
          onCancel={handleTaskEditFormCancel}
          onSuccess={handleTaskEditFormSuccess}
        ></TaskEditForm>
      </Modal>
    </>
  );
};

export default App;
