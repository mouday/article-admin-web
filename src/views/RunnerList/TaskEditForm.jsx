import React, { useState, useEffect } from "react";
import { Button, Space, Modal, Checkbox, message, Form, Input } from "antd";
import { Switch } from "antd";

import api from "@/request/api";

export default function TaskEditForm({ currentRow, onSuccess, onCancel }) {
  const [list, setList] = useState([]);
  const initialValues = { status: true };
  // const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();

  const getData = async () => {
    const res = await api.getRunner({
      runnerId: currentRow.runnerId,
    });

    if (res.ok) {
      form.setFieldsValue(res.data);
    }
  };

  useEffect(() => {
    if (currentRow && currentRow.runnerId) {
      getData();
    }
  }, []);

  const onFinish = async (values) => {
    console.log("Success:", values);

    let res = null;
    if (currentRow && currentRow.runnerId) {
      res = await api.updateRunner({
        ...values,
        runnerId: currentRow.runnerId,
      });
    } else {
      res = await api.addRunner(values);
    }

    if (res.ok) {
      message.success({
        content: "操作成功",
      });
      onSuccess();
    } else {
      message.error({
        content: res.msg,
      });
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      form={form}
      name="basic"
      labelCol={{
        span: 6,
      }}
      initialValues={initialValues}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="执行器名称"
        name="title"
        rules={[
          {
            required: true,
            message: "请输入执行器名称",
          },
        ]}
      >
        <Input placeholder="执行器名称" />
      </Form.Item>

      <Form.Item
        label="Url"
        name="url"
        rules={[
          {
            required: true,
            message: "请输入Url",
          },
        ]}
      >
        <Input placeholder="Url" />
      </Form.Item>

      <Form.Item
        label="AccessToken"
        name="accessToken"
        rules={[
          {
            required: true,
            message: "输入AccessToken",
          },
        ]}
      >
        <Input placeholder="AccessToken" />
      </Form.Item>

      <Form.Item label="启用" name="status" valuePropName="checked">
        <Switch />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Space>
          <Button onClick={onCancel}>取消</Button>

          <Button type="primary" htmlType="submit">
            保存
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
}
