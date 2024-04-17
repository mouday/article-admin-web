import React, { useState, useEffect } from 'react'
import { Button, Space, Modal, Checkbox, message, Form, Input } from 'antd'
import { Switch } from 'antd'
import { Select } from 'antd'
import api from '@/request/api'
import { isValidCron } from 'cron-validator'
import { isValidCronExpression, getCrontabSchedule } from '@/utils/cron-util'

export default function TaskEditForm({ currentRow, onSuccess, onCancel }) {
  const [list, setList] = useState([])
  const [runnerList, setRunnerList] = useState([])
  const [cronNextList, setCronNextList] = useState([])

  const initialValues = {
    status: true,
    runnerId: null,
  }

  // const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm()

  const getData = async () => {
    const res = await api.getTask({
      taskId: currentRow.taskId,
    })

    if (res.ok) {
      form.setFieldsValue(res.data)
      parseCrontab(res.data.cron)
    }
  }

  const getRunnerList = async () => {
    const res = await api.getRunnerList({})
    if (res.ok) {
      setRunnerList(res.data.list)
    }
  }

  const parseCrontab = (cron) => {
    const cronNextList = getCrontabSchedule(cron)
    setCronNextList(cronNextList)
  }

  useEffect(() => {
    if (currentRow && currentRow.taskId) {
      getData()
    }

    getRunnerList()
  }, [])

  const onFinish = async (values) => {
    console.log('Success:', values)

    let res = null
    if (currentRow && currentRow.taskId) {
      res = await api.updateTask({
        ...values,
        taskId: currentRow.taskId,
      })
    } else {
      res = await api.addTask(values)
    }

    if (res.ok) {
      message.success({
        content: '操作成功',
      })
      onSuccess()
    } else {
      message.error({
        content: res.msg,
      })
    }
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  const onValuesChange = (changedValues, allValues) => {
    console.log('allValues:', allValues)
    parseCrontab(allValues.cron)
  }

  return (
    <Form
      form={form}
      name="basic"
      labelCol={{
        span: 4,
      }}
      initialValues={initialValues}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      onValuesChange={onValuesChange}
      autoComplete="off"
    >
      <Form.Item
        label="任务描述"
        name="title"
        rules={[
          {
            required: true,
            message: '请输入任务描述',
          },
        ]}
      >
        <Input placeholder="任务描述" />
      </Form.Item>

      {/* <Form.Item
        label="执行器"
        name="runnerId"
        rules={[
          {
            required: true,
            message: '请选择执行器',
          },
        ]}
      >
        <Select
          style={{ width: 120 }}
          options={runnerList.map((item) => ({
            value: item.runnerId,
            label: item.title,
          }))}
        />
      </Form.Item> */}

      <Form.Item
        label="调用链接"
        name="url"
        rules={[
          {
            required: true,
            message: '请输入调用链接',
          },
        ]}
      >
        <Input placeholder="调用链接" />
      </Form.Item>

      <Form.Item
        label="运行时间"
        name="cron"
        rules={[
          {
            required: true,
            validator: (rule, value) => {
              // if (!value) {
              //   return Promise.reject(new Error('请输入cron表达式'))
              // }

              if (
                isValidCronExpression(value)
              ) {
                return Promise.resolve()
              } else {
                return Promise.reject(new Error('输入正确的crontab表达式'))
              }
            },
          },
        ]}
      >
        <Input placeholder="cron表达式，示例：秒 分 时 日 月 周" />
      </Form.Item>

      <Form.Item
        label="启用"
        name="status"
        valuePropName="checked"
      >
        <Switch />
      </Form.Item>

      <Form.Item label="执行计划">
        {cronNextList.map((item) => {
          return <div>{item}</div>
        })}
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
  )
}
