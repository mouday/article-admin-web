// @ts-nocheck
import React, { useState, useEffect } from 'react'
import { Space, Table, Tag, Button } from 'antd'

import { ContainerOutlined, FormOutlined } from '@ant-design/icons'

import { statusEnum, statusOptions } from './config'
import {
  useSearchParams,
  useParams,
  useHref,
  useResolvedPath,
} from 'react-router-dom'

function ToLogDetail({ record }) {
  // console.log(record);

  const logDetailUrl = useHref({ pathname: `/task-log/${record.taskLogId}` })

  const handleShowLog = () => {
    // navigate(`/task-log/${record.taskLogId}`);

    window.open(logDetailUrl, '_blank')
  }

  return (
    <Button
      type="link"
      disabled={!record.hasRunLog}
      onClick={handleShowLog}
    >
      <ContainerOutlined />
    </Button>
  )
}

export default [
  {
    title: '标题',
    dataIndex: 'title',
    key: 'title',
    align: 'center',
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    width: 100,
    align: 'center',
    render: (_, record) => {
      const item = statusOptions.find((item) => item.value === record.status)

      return <span style={{ color: item?.color }}>{item?.label}</span>
    },
  },
  {
    title: '开始时间',
    dataIndex: 'createTime',
    key: 'createTime',
    width: 200,
    align: 'center',
  },

  {
    title: '结束时间',
    dataIndex: 'endTime',
    key: 'endTime',
    width: 200,
    align: 'center',
    render: (_, record) => {
      if (record.endTime) {
        return <span>{record.endTime}</span>
      } else {
        return <>-</>
      }
    },
  },
  {
    title: '耗时（秒）',
    dataIndex: 'diffTime',
    key: 'diffTime',
    width: 120,
    align: 'center',
    render: (_, record) => {
      return <span>{record.diffTime}</span>
    },
  },

  {
    title: '日志',
    key: 'action',
    align: 'center',
    width: 80,
    render: (_, record) => <ToLogDetail record={record}></ToLogDetail>,
  },
]
