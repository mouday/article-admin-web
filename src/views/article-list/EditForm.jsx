import React, { useState, useEffect } from 'react'
import { Button, Space, Modal, Checkbox, message, Form, Input } from 'antd'
import { Switch } from 'antd'
import { Select } from 'antd'
import api from '@/request/api'
import request from '@/request/request'
import { isValidCron } from 'cron-validator'
import { isValidCronExpression, getCrontabSchedule } from '@/utils/cron-util'
import { Spin } from 'antd'
import { Tag } from 'antd'
import TagInput from '@/components/TagInput/TagInput.jsx'

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

  const [categoryOptions, setCategoryOptions] = React.useState([])

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
      if (res.data.categoryId == 0) {
        res.data.categoryId = null
      }

      form.setFieldsValue(res.data)
    }

    setSpinning(false)
  }

  const getCategoryList = async () => {
    const res = await request.post('/getCategoryList', {})

    if (res.ok) {
      setCategoryOptions(
        res.data.list.map((item) => {
          return {
            value: item.categoryId,
            label: item.title,
          }
        })
      )
    }
  }

  useEffect(() => {
    if (currentRow && currentRow.articleId) {
      getData()
    }

    getCategoryList()
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
    
    if(!values.categoryId){
      values.categoryId = 0;
    }

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
          label="文章链接"
          name="url"
          rules={rules.url}
        >
          <Input placeholder="文章链接" />
        </Form.Item>

        <Form.Item
          label="文章标题"
          name="title"
        >
          <Input placeholder="文章标题" />
        </Form.Item>

        <Form.Item
          label="文章分类"
          name="categoryId"
        >
          <Select
            allowClear={true}
            placeholder="请选择文章分类"
            options={categoryOptions}
          />
        </Form.Item>

        <Form.Item
          label="文章标签"
          name="tags"
        >
          <TagInput placeholder="文章标签"></TagInput>
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
