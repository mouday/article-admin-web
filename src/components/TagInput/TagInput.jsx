import React from 'react'
import { Tag, Input } from 'antd'

export default function TagInput({ value = [], placeholder = '', onChange }) {
  const [inputValue, setInputValue] = React.useState('')

  const handlePressEnter = (e) => {
    e.preventDefault()

    if (Array.isArray(value)) {
      onChange([...new Set([...value, e.target.value])])
    } else {
      onChange([e.target.value])
    }

    setInputValue('')
  }

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleTagClose = (tag) => {
    onChange(value.filter((t) => t !== tag))
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
        {value &&
          value.map((tag) => {
            return (
              <Tag
                key={tag}
                bordered={false}
                closable
                color="blue"
                onClose={() => {
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
