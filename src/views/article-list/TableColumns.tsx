import React, { useState, useEffect } from 'react'
import type { ColumnsType } from 'antd/es/table'
import { Space, Switch, Popconfirm, Button, Table, Tag } from 'antd'
import {
  DeleteOutlined,
  FormOutlined,
  ContainerOutlined,
  PlayCircleOutlined,
} from '@ant-design/icons'

export default [
  {
    title: '文章标题',
    dataIndex: 'title',
    key: 'title',
    align: 'center',
    render: (_, record) => {
      return (
        <div className="text-left">
          <a
            href={record.url}
            target="_blank"
          >
            {record.title || record.url}
          </a>
        </div>
      )
    },
  },

  {
    title: '分类',
    dataIndex: 'category',
    key: 'category',
    align: 'center',
    render: (_, record) => {
      return <>{record.category?.title || '-'}</>
    },
  },

  {
    title: '标签',
    dataIndex: 'title',
    key: 'title',
    align: 'center',
    render: (_, record) => {
      const tags = record.tags || []
      return (
        <div className="text-left">
          {tags && tags.length > 0
            ? tags.map((tag) => {
                return (
                  <Tag
                    key={tag}
                    bordered={false}
                    color="blue"
                  >
                    {tag}
                  </Tag>
                )
              })
            : '-'}
        </div>
      )
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
