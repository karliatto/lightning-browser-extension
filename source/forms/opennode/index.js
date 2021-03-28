import React from "react";
import { Form, Input, Button } from "antd";

const FormItem = Form.Item;

const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 20,
  },
};

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const OpennodeForm = ({ ref, onFinish, onFinishFailed }) => {
  const [form] = Form.useForm();

  return (
    <Form
      {...layout}
      form={form}
      name="basic"
      onFinishFailed={onFinishFailed}
      onFinish={(values) => onFinish(values, form)}
      initialValues={{
        name: "Opennode",
        apiKey: "",
      }}
    >
      <FormItem
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: "Please enter the name!",
          },
        ]}
      >
        <Input />
      </FormItem>

      <FormItem
        label="API key"
        name="apiKey"
        rules={[
          {
            required: true,
            message: "Please enter your Opennode API key",
          },
        ]}
      >
        <Input />
      </FormItem>

      <FormItem {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Save
        </Button>
      </FormItem>
    </Form>
  );
};

export default OpennodeForm;
