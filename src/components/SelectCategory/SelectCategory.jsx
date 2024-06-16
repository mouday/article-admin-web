import React, { useState, useEffect } from 'react'
import { Select } from 'antd'
import request from '@/request/request'

export default function SelectCategory(children) {
  const [categoryOptions, setCategoryOptions] = React.useState([])

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
    getCategoryList()
  }, [])

  return (
    <Select
      style={{ width: 160 }}
      allowClear={true}
      placeholder="请选择文章分类"
      options={categoryOptions}
      {...children}
    />
  )
}
