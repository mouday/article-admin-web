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
  url: [
    {
      required: true,
      message: '请输入文章链接',
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
    setSpinning(true)

    const res = await request.post('/getArticle', {
      articleId: currentRow.articleId,
    })

    if (res.ok) {
      form.setFieldsValue(res.data)
    }

    setSpinning(false)
  }

  useEffect(() => {
    if (currentRow && currentRow.articleId) {
      getData()
    }
  }, [])

  const addArticle = async (values) => {
    let res = await request.post('/addArticle', values)

    if (res.ok) {
      message.success({
        content: '添加成功',
      })
      onSuccess()
    }
  }

  const updateArticle = async (values) => {
    let res = await request.post('/updateArticle', values)

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

    if (currentRow && currentRow.articleId) {
      await updateArticle({
        ...values,
        articleId: currentRow.articleId,
      })
    } else {
      await addArticle({ ...values })
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
          span: 4,
        }}
        initialValues={initialValues}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="文章标题"
          name="title"
        >
          <Input placeholder="文章标题" />
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
          label="文章链接"
          name="url"
          rules={rules.url}
        >
          <Input placeholder="文章链接" />
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
