// @ts-nocheck
import React, { useState, useEffect } from 'react'
import { Space, Switch, Table, Tag, Spin, Drawer } from 'antd'

import TaskEditForm from './EditForm'
import TableColumns from './TableColumns'
import { Button, Modal, message, Checkbox, Form, Input } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

import api from '@/request/api'
import request from '@/request/request'

const App = () => {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentRow, setCurrentRow] = useState(null)
  const [messageApi, contextHolder] = message.useMessage()

  const [pagination, setPagination] = useState({
    position: ['bottomCenter'],
    total: 0,
    current: 1,
    pageSize: 10,
  })

  const resetData = async () => {
    setPagination((pre) => {
      let value = { ...pre, current: 1 }
      getData(value)
      return value
    })
  }

  const handleStatusChange = async (record, value) => {
    setLoading(true)

    const res = await request.post('/updateCategoryStatus', {
      categoryId: record.categoryId,
      status: value,
    })

    if (res.ok) {
      message.success({
        content: '操作成功',
      })
    }

    setLoading(false)
  }

  const handleEditRow = async (record) => {
    setCurrentRow(record)
    setIsModalOpen(true)
  }

  const handleDeleteRow = async (record) => {
    const res = await request.post('/deleteCategory', {
      categoryId: record.categoryId,
    })

    if (res.ok) {
      message.success({
        content: '操作成功',
      })
      resetData()
    }
  }

  const getData = async (value) => {
    setLoading(true)

    const res = await request.post('/getCategoryList', {})

    if (res.ok) {
      const resList = res.data.list.map((item) => {
        item.handleStatusChange = handleStatusChange
        item.handleEditRow = handleEditRow
        item.handleDeleteRow = handleDeleteRow

        return item
      })

      setList(resList)

      setPagination((pre) => {
        return {
          ...pre,
          total: res.data.total,
        }
      })
    }

    setLoading(false)
  }

  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => {
    setCurrentRow(null)
    setIsModalOpen(true)
  }

  const handleTaskEditFormSuccess = () => {
    setIsModalOpen(false)
    resetData()
  }

  const handleTaskEditFormCancel = () => {
    setIsModalOpen(false)
  }

  const handlePageChange = (value) => {
    console.log(value)

    setPagination((pre) => {
      let newValue = {
        ...pre,
        ...value,
      }

      getData(newValue)

      return newValue
    })
  }

  useEffect(() => {
    getData(pagination)
  }, [])

  return (
    <>
      <Button
        type="primary"
        onClick={showModal}
        icon={<PlusOutlined />}
      >
        添加分类
      </Button>

      <Table
        className="mt-4"
        bordered
        rowKey="categoryId"
        loading={loading}
        columns={TableColumns}
        dataSource={list}
        pagination={pagination}
        onChange={handlePageChange}
      />

      <Drawer
        title={currentRow ? '编辑分类' : '添加分类'}
        open={isModalOpen}
        destroyOnClose={true}
        onClose={handleTaskEditFormCancel}
      >
        <TaskEditForm
          currentRow={currentRow}
          onCancel={handleTaskEditFormCancel}
          onSuccess={handleTaskEditFormSuccess}
        ></TaskEditForm>
      </Drawer>

      {/* <Modal
        title={<div className="text-center">编辑分类</div>}
        footer={null}
        open={isModalOpen}
        destroyOnClose={true}
        width="400px"
        onCancel={handleTaskEditFormCancel}
      >
        <TaskEditForm
          rootClassName="mt-6"
          currentRow={currentRow}
          onCancel={handleTaskEditFormCancel}
          onSuccess={handleTaskEditFormSuccess}
        ></TaskEditForm>
      </Modal> */}
    </>
  )
}

export default App
