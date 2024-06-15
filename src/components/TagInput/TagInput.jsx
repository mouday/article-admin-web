import React from 'react'
import { Tag, Input } from 'antd'

export default function TagInput({ value = [], placeholder = '', onChange }) {
  const defaultValue = value || []

  const [inputValue, setInputValue] = React.useState('')

  const handlePressEnter = (e) => {
    e.preventDefault();
    
    console.log(e.target.value)

    onChange([...new Set([...defaultValue, e.target.value])])

    setInputValue('')
  }

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleTagClose = (tag) => {
    onChange(defaultValue.filter((t) => t !== tag))
  }

  return (
    <div>
      <Input
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
        onPressEnter={handlePressEnter}
      />
      <div className="mt-2">
        {defaultValue.map((tag) => {
          return (
            <Tag
              key={tag}
              bordered={false}
              closable
              color="blue"
              onClose={(tag) => {
                handleTagClose(tag)
              }}
            >
              {tag}
            </Tag>
          )
        })}
      </div>
    </div>
  )
}
