// eslint-disable-next-line

import React, { useState } from "react";
import "./App.css";
import {
  Button,
  Radio,
  Space,
  Switch,
  TimePicker,
  DatePicker,
  Form,
  Cascader,
  Input,
  InputNumber,
  Select,
  TreeSelect,
  Upload,
  Checkbox,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import Toggle from "@atlaskit/toggle";

import spoqaToggle from "./assets/토글_스포카.PNG";
import spoqaDate from "./assets/datePicker_spoqa.PNG";

const { RangePicker } = DatePicker;
const { TextArea } = Input;

function App() {
  const [size, setSize] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [componentDisabled, setComponentDisabled] = useState(true);

  const toggle = () => {
    setDisabled(!disabled);
  };

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  return (
    <>
      <div class="button-container-1">
        <h2>Font: "Inter", sans-serif</h2>
        <h1>Buttons</h1>
        <h2>spoqa</h2>
        <label for="sm">sm</label>
        <button class="spoqa-button sm-spoqa">스몰 버튼</button>
        <br />
        <label for="md">md</label>
        <button class="spoqa-button md-spoqa">미디움 버튼</button>
        <label for="md">md, disable</label>
        <button class="spoqa-button md-spoqa" disabled>
          미디움 버튼
        </button>
        <br />
        <label for="lg">lg</label>
        <button class="spoqa-button lg-spoqa">라지 버튼</button>
      </div>
      <div class="button-container-2">
        <h2>ant-design</h2>
        <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
          <Radio.Button value="large">Large</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>
        <br />
        <br />
        <Space wrap>
          <Button type="primary" size={size}>
            Primary
          </Button>
          <Button size={size}>Default</Button>
          <Button type="dashed" size={size}>
            Dashed
          </Button>
          <Button size={size} disabled>
            Default
          </Button>
        </Space>
        <br />
        <br />
      </div>
      <div className="toggle-container">
        <h1>toggle-switch</h1>

        <h2>ant-design</h2>
        <Space wrap>
          <Switch defaultChecked disabled={disabled} /> default
          <br />
          <Switch size="small" defaultChecked />
          small
          <br />
          <Button type="primary" onClick={toggle}>
            Toggle disabled
          </Button>
        </Space>

        <h2>spoqa</h2>
        <a href="https://bi.spoqa.com/ui.html">토글 링크로 가기</a>
        <img className="spoqa-toggle" src={spoqaToggle} alt="toggle" />

        <h2>atlassian</h2>
        <Toggle id="toggle-default" />
      </div>

      <div className="timepicker-container">
        <h1>Time Picker</h1>
        <h2>ant-design</h2>
        <h5>three sizes: disable, large, medium, small</h5>
        <Space wrap>
          <TimePicker
            defaultValue={dayjs("12:08:23", "HH:mm:ss")}
            size="large"
            disabled
          />
          <TimePicker
            defaultValue={dayjs("12:08:23", "HH:mm:ss")}
            size="large"
          />
          <TimePicker defaultValue={dayjs("12:08:23", "HH:mm:ss")} />
          <TimePicker
            defaultValue={dayjs("12:08:23", "HH:mm:ss")}
            size="small"
          />
        </Space>
      </div>

      <div className="datepicker-container">
        <h1>Date Picker</h1>
        <h2>spoqa</h2>
        <img src={spoqaDate} alt="datePicker" />
        <br />

        <h2>ant-design</h2>
        <Space direction="vertical" size={12}>
          <Radio.Group value={size} onChange={handleSizeChange}>
            <Radio.Button value="large">Large</Radio.Button>
            <Radio.Button value="middle">Middle</Radio.Button>
            <Radio.Button value="small">Small</Radio.Button>
          </Radio.Group>
          <DatePicker size={size} />
          <DatePicker size={size} picker="month" />
          <RangePicker size={size} />
          <DatePicker size={size} picker="week" />
        </Space>
      </div>

      <div className="form-container">
        <h1>Form</h1>
        <h2>ant-design</h2>
        <Checkbox
          checked={componentDisabled}
          onChange={(e) => setComponentDisabled(e.target.checked)}
        >
          Form disabled
        </Checkbox>
        <Form
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
          disabled={componentDisabled}
          style={{
            maxWidth: 600,
          }}
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
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="TreeSelect">
            <TreeSelect
              treeData={[
                {
                  title: "Light",
                  value: "light",
                  children: [
                    {
                      title: "Bamboo",
                      value: "bamboo",
                    },
                  ],
                },
              ]}
            />
          </Form.Item>
          <Form.Item label="Cascader">
            <Cascader
              options={[
                {
                  value: "선택1",
                  label: "선택1",
                  children: [
                    {
                      value: "선택2",
                      label: "선택2",
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
          <Form.Item label="Upload" valuePropName="fileList">
            <Upload action="/upload.do" listType="picture-card">
              <div>
                <PlusOutlined />
                <div
                  style={{
                    marginTop: 8,
                  }}
                >
                  Upload
                </div>
              </div>
            </Upload>
          </Form.Item>
          <Form.Item label="Button">
            <Button>Button</Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}

export default App;
