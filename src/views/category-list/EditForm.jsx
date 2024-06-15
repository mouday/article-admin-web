import React, { useState, useEffect } from 'react'
import { Button, Space, Modal, Checkbox, message, Form, Input } from 'antd'
import { Switch } from 'antd'
import { Select } from 'antd'
import api from '@/request/api'
import request from '@/request/request'
import { isValidCron } from 'cron-validator'
import { isValidCronExpression, getCrontabSchedule } from '@/utils/cron-util'
import { Spin } from 'antd'

const rules = {
  title: [
    {
      required: true,
      message: '请输入分类标题',
    },
  ],
}

export default function TaskEditForm({
  currentRow,
  onSuccess,
  onCancel,
  rootClassName,
}) {
  const [list, setList] = useState([])
  const [runnerList, setRunnerList] = useState([])
  const [cronNextList, setCronNextList] = useState([])
  const [spinning, setSpinning] = React.useState(false)

  const initialValues = {
    status: true,
  }

  // const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm()

  const getData = async () => {

    const res = await request.post('/getCategory', {
      categoryId: currentRow.categoryId,
    })

    if (res.ok) {
      form.setFieldsValue(res.data)
    }

    setSpinning(false)
  }

  useEffect(() => {
    if (currentRow && currentRow.categoryId) {
      getData()
    }
  }, [])

  const addCategory = async (values) => {
    let res = await request.post('/addCategory', values)

    if (res.ok) {
      message.success({
        content: '添加成功',
      })
      onSuccess()
    }
  }

  const updateCategory = async (values) => {
    let res = await request.post('/updateCategory', values)

    if (res.ok) {
      message.success({
        content: '更新成功',
      })
      onSuccess()
    }
  }

  const onFinish = async (values) => {
    console.log('Success:', values)

    setSpinning(true)

    if (currentRow && currentRow.categoryId) {
      await updateCategory({
        ...values,
        categoryId: currentRow.categoryId,
      })
    } else {
      await addCategory({ ...values })
    }

    setSpinning(false)
  }

  return (
    <>
      <Form
        form={form}
        rootClassName={rootClassName}
        name="basic"
        labelCol={{
          span: 6,
        }}
        initialValues={initialValues}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="分类标题"
          name="title"
          rules={rules.title}
        >
          <Input placeholder="分类标题" />
        </Form.Item>

        <Form.Item
          label="状态"
          name="status"
          valuePropName="checked"
        >
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

            <Button
              type="primary"
              htmlType="submit"
            >
              保存
            </Button>
          </Space>
        </Form.Item>
      </Form>
      <Spin
        spinning={spinning}
        fullscreen
      />
    </>
  )
}
