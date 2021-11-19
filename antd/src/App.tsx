import { Form, Input, Button, Select, DatePicker } from "antd";

import "./App.css";
import { BuildFactors, EmployeeTitle, SalaryFactor, UserInfo } from "./models";

const { Option } = Select;

const initValue = new UserInfo({ employee: "Sang" });
export const App = () => {
  const [form] = Form.useForm<UserInfo>();
  const onFinish = () => {
    const data = form.getFieldsValue();
    const userInfo = new UserInfo(data);
    userInfo.CalcSalary();
    form.setFieldsValue(userInfo);
    console.log(`${userInfo.employee} 本月应发 ${userInfo.salary}`);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  const onTitleChanged = (title: EmployeeTitle) => {
    form.setFieldsValue({ title: title, factors: BuildFactors(title) });
  };
  return (
    <>
      <main>
        <Form
          form={form}
          wrapperCol={{ span: 24 }}
          initialValues={initValue}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          onFieldsChange={onFinish}
          size="middle"
          layout="inline"
        >
          <Form.Item name="employee" style={{ width: "100%" }}>
            <Input placeholder="姓名" addonBefore="姓名" />
          </Form.Item>

          <div className="base-info">
            <Form.Item name="title" className="base-title">
              <Select onChange={onTitleChanged}>
                <Option value="Director">课程总监/店长老师</Option>
                <Option value="FullTime">全职老师</Option>
                <Option value="HalfTime">半职老师</Option>
                <Option value="PartTime">兼职老师</Option>
                <Option value="Salesman">销售人员</Option>
                <Option value="Civilian">文职人员</Option>
              </Select>
            </Form.Item>

            <Form.Item name="date" className="base-date">
              <DatePicker />
            </Form.Item>
          </div>
          <Form.List name="factors">
            {(factors) => (
              <>
                {factors.map(({ key, name, fieldKey }, index) => {
                  const factor = form.getFieldValue("factors")[
                    index
                  ] as SalaryFactor;
                  return (
                    <div key={key} className="factor-item">
                      <Form.Item
                        name={[name, "value"]}
                        fieldKey={[fieldKey, "value"]}
                        labelCol={{ span: 9 }}
                        wrapperCol={{ span: 24 }}
                        className="factor-input"
                      >
                        <Input
                          addonBefore={factor.label}
                          suffix={factor.unit}
                          autoComplete="off"
                        />
                      </Form.Item>
                      <Form.Item
                        name={[name, "earned"]}
                        fieldKey={[fieldKey, "earned"]}
                        className="factor-output"
                        wrapperCol={{ span: 24 }}
                      >
                        <Input suffix="元" autoComplete="off" disabled />
                      </Form.Item>
                    </div>
                  );
                })}
              </>
            )}
          </Form.List>
          {/* <Form.Item style={{ width: "100%" }}>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              计算
            </Button>
          </Form.Item> */}
          <Form.Item name="salary" className="final-salary">
            <Input addonBefore="实发薪资" addonAfter="元" readOnly />
          </Form.Item>
        </Form>
      </main>
    </>
  );
};
