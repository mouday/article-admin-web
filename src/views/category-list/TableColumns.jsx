import React, { useState, useEffect } from 'react'

import { Space, Switch, Popconfirm, Button, Table, Tag } from 'antd'
import {
  DeleteOutlined,
  FormOutlined,
  ContainerOutlined,
  PlayCircleOutlined,
} from '@ant-design/icons'

export default [
  {
    title: '分类名称',
    dataIndex: 'title',
    key: 'title',
    align: 'center',
    render: (_, record) => {
      return <div className="text-left">{record.title}</div>
    },
  },

  {
    title: '状态',
    align: 'center',
    dataIndex: 'status',
    key: 'status',
    width: 100,
    render: (_, record) => {
      return (
        <Switch
          defaultChecked={record.status}
          onChange={(val) => {
            record.handleStatusChange(record, val)
          }}
        ></Switch>
      )
    },
  },

  {
    title: '操作',
    align: 'center',
    dataIndex: 'taskId',
    key: 'taskId',
    width: 120,
    render: (_, record) => (
      <Space size="middle">
        <Button
          type="link"
          onClick={() => {
            record.handleEditRow(record)
          }}
        >
          <FormOutlined className="cursor-pointer" />
        </Button>

        <Popconfirm
          title="确认删除"
          description=""
          onConfirm={() => {
            record.handleDeleteRow(record)
          }}
        >
          <Button
            danger
            type="link"
          >
            <DeleteOutlined className="cursor-pointer" />
          </Button>
        </Popconfirm>
      </Space>
    ),
  },
]
