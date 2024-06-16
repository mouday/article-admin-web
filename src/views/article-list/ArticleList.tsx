// @ts-nocheck
import React, { useState, useEffect } from 'react'
import { Space, Drawer, Select, Switch, Table, Tag, Spin } from 'antd'

import TaskEditForm from './EditForm'
import TableColumns from './TableColumns'
import { Button, Modal, message, Checkbox, Form, Input } from 'antd'
import { PlusOutlined, DownloadOutlined } from '@ant-design/icons'
import api from '@/request/api'
import request from '@/request/request'
import FileSaver from 'file-saver'
import SelectCategory from '@/components/SelectCategory/SelectCategory.jsx'
import { DatePicker } from 'antd'
import dayjs from 'dayjs'

const { Search } = Input

const App: React.FC = () => {
  const [list, setList] = useState([])
  const [keyword, setKeyword] = useState('')
  const [categoryId, setCategoryId] = useState(null)
  const [loading, setLoading] = useState(true)
  const [currentRow, setCurrentRow] = useState(null)
  const [week, setWeek] = useState(null)
  const [messageApi, contextHolder] = message.useMessage()

  const defaultPagination = {
    position: ['bottomCenter'],
    total: 0,
    current: 1,
    pageSize: 10,
  }

  const [pagination, setPagination] = useState(defaultPagination)

  const resetData = async () => {
    setPagination((pre) => {
      let value = { ...pre, current: 1 }
      getData(value)
      return value
    })
  }

  const handleStatusChange = async (record, value) => {
    setLoading(true)

    const res = await request.post('/updateArticleStatus', {
      articleId: record.articleId,
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
    setLoading(true)

    const res = await request.post('/deleteArticle', {
      articleId: record.articleId,
    })

    if (res.ok) {
      message.success({
        content: '操作成功',
      })
      resetData()
    }

    setLoading(false)
  }

  const handleTagClick = (tag) => {
    setPagination({ ...defaultPagination })

    setKeyword((pre) => {
      getData({ keyword: tag })

      return tag
    })
  }

  const getDateRange = (value) => {
    const currentValue = value === undefined ? week : value
    if (!currentValue) {
      return {}
    } else {
      return {
        startDate: currentValue
          .startOf('week')
          .startOf('day')
          .format('YYYY-MM-DD HH:mm:ss'),
        endDate: currentValue
          .endOf('week')
          .endOf('day')
          .format('YYYY-MM-DD HH:mm:ss'),
      }
    }
  }

  const getData = async (value) => {
    console.log(value)
    const dateRange = getDateRange(value.week)
    setLoading(true)

    const res = await request.post('/getArticlePage', {
      page: value.current ?? pagination.current,
      size: value.pageSize ?? pagination.pageSize,
      keyword: value.keyword ?? keyword,
      categoryId: value.categoryId ?? categoryId ?? -1,
      startDate: dateRange.startDate,
      endDate: dateRange.endDate,
    })

    if (res.ok) {
      const resList = res.data.list.map((item) => {
        item.handleStatusChange = handleStatusChange
        item.handleEditRow = handleEditRow
        item.handleDeleteRow = handleDeleteRow
        item.handleTagClick = handleTagClick

        if (item.createTime) {
          item.createDate = dayjs(item.createTime).format('YYYY-MM-DD')
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

      getData({
        ...newValue,
      })

      return newValue
    })
  }

  const handleSearch = (value) => {
    console.log(value)

    setKeyword((pre) => {
      getData({
        keyword: value,
      })

      return value
    })
  }

  const renderArticle = async () => {
    const dateRange = getDateRange()

    const res = await request.post('/renderArticle', {
      keyword: keyword,
      categoryId: categoryId ?? -1,
      startDate: dateRange.startDate,
      endDate: dateRange.endDate,
    })

    if (res.ok) {
      var blob = new Blob([res.data], {
        type: 'text/plain;charset=utf-8',
      })
      FileSaver.saveAs(blob, 'Article.md')
    }
  }

  const handleKeywordChange = (e) => {
    setKeyword(e.target.value)
  }

  const handleCategoryChange = (value) => {
    console.log(value)

    setCategoryId((pre) => {
      getData({
        categoryId: value || -1,
      })
      return value
    })
  }

  const handleDateRangeChange = (date, dateString) => {
    console.log(date, dateString)
    setWeek((pre) => {
      getData({
        week: date,
      })
      return date
    })
  }

  useEffect(() => {
    getData({ ...pagination })
  }, [])

  return (
    <>
      <div className="flex">
        <Button
          type="primary"
          onClick={showModal}
          icon={<PlusOutlined />}
        >
          添加文章
        </Button>

        <SelectCategory
          className="ml-4"
          value={categoryId}
          onChange={handleCategoryChange}
        ></SelectCategory>

        <DatePicker
          className="ml-4"
          onChange={handleDateRangeChange}
          picker="week"
        />

        <Search
          style={{ width: '240px' }}
          className="ml-4"
          value={keyword}
          placeholder="搜索文章标题、标签"
          onSearch={handleSearch}
          onChange={handleKeywordChange}
          enterButton
          allowClear
        />

        <Button
          className="ml-auto"
          onClick={renderArticle}
          icon={<DownloadOutlined />}
        >
          导出文章
        </Button>
      </div>

      <Table
        className="mt-4"
        bordered
        rowKey="articleId"
        loading={loading}
        columns={TableColumns}
        dataSource={list}
        pagination={pagination}
        onChange={handlePageChange}
      />

      <Drawer
        title={currentRow ? '编辑文章' : '添加文章'}
        open={isModalOpen}
        width="600px"
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
        title={<div className="text-center">编辑文章</div>}
        footer={null}
        open={isModalOpen}
        destroyOnClose={true}
        width="600px"
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
