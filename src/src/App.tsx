import { Form, Input, Button, Layout, Select, DatePicker } from "antd";
import { Header, Content, Footer } from "antd/lib/layout/layout";
import moment from "moment";
import { Fragment } from "react";

import "./App.css";
import { BuildFactors, EmployeeTitle, UserInfo } from "./models/UserInfo";

const { Option } = Select;

export const App = () => {
  const [form] = Form.useForm<UserInfo>();
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  const onTitleChanged = (title: EmployeeTitle) => {
    form.setFieldsValue({ title: title, factors: BuildFactors(title) });
  };
  return (
    <>
      <Layout>
        <Header>Header</Header>
        <Content>
          <Form
            form={form}
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 8 }}
            initialValues={{ employee: "Sang", date: moment() }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="姓名"
              name="employee"
              rules={[{ required: true }]}
            >
              <Input placeholder="姓名" />
            </Form.Item>
            <Form.Item
              name="date"
              label="日期"
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 8 }}
              rules={[
                {
                  type: "object" as const,
                  required: true,
                  message: "Please select time!",
                },
              ]}
            >
              <DatePicker />
            </Form.Item>
            <Form.Item label="职位" name="title" rules={[{ required: true }]}>
              <Select placeholder="选择一个职位" onChange={onTitleChanged}>
                <Option value="Director">课程总监/店长老师</Option>
                <Option value="FullTime">全职老师</Option>
                <Option value="HalfTime">半职老师</Option>
                <Option value="PartTime">兼职老师</Option>
                <Option value="Salesman">销售</Option>
                <Option value="Civilian">文职</Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="实发薪资"
              name="salary"
            >
              <Input placeholder="实发薪资" readOnly />
            </Form.Item>

            <Form.List name="factors">
              {(factors) => (
                <>
                  {factors.map(({key, name, fieldKey}, index) => (
                    <Fragment key={key}>
                      <Form.Item
                        label={form.getFieldValue('factors')[index].label}
                        name={[name, "value"]}
                        fieldKey={[fieldKey, "value"]}
                        labelCol={{span: 4}}
                        wrapperCol={{span: 8}}
                      >
                        <Input suffix={form.getFieldValue('factors')[index].unit} />
                      </Form.Item>
                    </Fragment>
                  ))}
                </>
              )}
            </Form.List>
            <Form.Item wrapperCol={{ offset: 4, span: 8 }}>
              <Button type="primary" htmlType="submit">
                计算
              </Button>
            </Form.Item>
          </Form>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </>
  );
};
