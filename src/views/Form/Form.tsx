import { PlusOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import {
  Button,
  Cascader,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Slider,
  Switch,
  TreeSelect,
  Upload,
  Space,
} from "antd";

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const FormDisabledDemo: React.FC = () => {
  const [form] = Form.useForm();

  const [componentDisabled, setComponentDisabled] = useState<boolean>(false);

  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({ note: "Hello world!", gender: "male" });
  };

  return (
    <>
      <Checkbox
        checked={componentDisabled}
        onChange={(e) => setComponentDisabled(e.target.checked)}
      >
        Form disabled
      </Checkbox>

      <Form
        form={form}
        labelCol={{ span: 6 }}
        wrapperCol={{ offset: 1}}
        layout="horizontal"
        disabled={componentDisabled}
        style={{ maxWidth: 600 }}
      >
        <Form.Item label="Checkbox" name="disabled" valuePropName="checked">
          <Checkbox>Checkbox</Checkbox>
        </Form.Item>

        <Form.Item label="Radio">
          <Radio.Group>
            <Radio value="apple"> Apple </Radio>
            <Radio value="pear"> Pear </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item label="Input">
          <Input />
        </Form.Item>

        <Form.Item label="Select">
          <Select>
            <Select.Option value="苹果">苹果</Select.Option>
            <Select.Option value="桔子">桔子</Select.Option>
            <Select.Option value="香蕉">香蕉</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="TreeSelect">
          <TreeSelect
            treeData={[
              {
                title: "Light",
                value: "light",
                children: [
                    { title: "Bamboo", value: "bamboo" },
                    { title: "Foo", value: "Foo" }
                ],
              },
            ]}
          />
        </Form.Item>

        <Form.Item label="Cascader">
          <Cascader
            options={[
              {
                value: "zhejiang",
                label: "Zhejiang",
                children: [
                  {
                    value: "hangzhou",
                    label: "Hangzhou",
                  },
                  {
                    value: "huawei",
                    label: "huawei",
                  },
                ],
              },
            ]}
          />
        </Form.Item>

        <Form.Item label="DatePicker">
          <DatePicker />
        </Form.Item>

        <Form.Item label="RangePicker">
          <RangePicker />
        </Form.Item>

        <Form.Item label="InputNumber">
          <InputNumber />
        </Form.Item>

        <Form.Item label="TextArea">
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item label="Switch" valuePropName="checked">
          <Switch />
        </Form.Item>
        
        <Form.Item
          label="Upload"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item>

        <Form.Item label="Slider">
          <Slider />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Space>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button htmlType="button" onClick={onReset}>
              Reset
            </Button>
            <Button type="link" htmlType="button" onClick={onFill}>
              Fill form
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </>
  );
};

export default () => <FormDisabledDemo />;
