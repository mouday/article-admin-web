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

  const handleOrderChange = async (source, target) => {
    console.log(source, target);
    setLoading(true)

    await request.post('/updateCategoryOrderValue', {
      categoryId: source.categoryId,
      orderValue: target.orderValue || target.categoryId,
    })

    await request.post('/updateCategoryOrderValue', {
      categoryId: target.categoryId,
      orderValue: source.orderValue || source.categoryId,
    })

    message.success({
      content: '操作成功',
    })

    resetData()

    setLoading(false)
  }

  const handleMoveDown = (list, index) => {
    handleOrderChange(list[index], list[index + 1])
  }
  const handleMoveUp = (list, index) => {
    handleOrderChange(list[index], list[index - 1])
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
      const len = res.data.list.length

      const resList = res.data.list.map((item, index) => {
        item.handleStatusChange = handleStatusChange
        item.handleEditRow = handleEditRow
        item.handleDeleteRow = handleDeleteRow
        item.handleMoveUp = (index)=>{handleMoveUp(res.data.list, index)}
        item.handleMoveDown = (index)=>{handleMoveDown(res.data.list, index)}

        if(len == index + 1){
          item.isLast = true
        } else if(index == 0){
          item.isFirst = true
        }

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
