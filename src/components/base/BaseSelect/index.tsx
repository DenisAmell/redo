import { FC } from "react";
import { Form, Select } from "antd";
import "./BaseSelect.scss";



interface BaseSelectProps {
  label: string;
  options: {
    id: number,
    text: string,
    value: string,
  }[]
}

const BaseSelect: FC<BaseSelectProps> = ({ label, options }) => (
  <div className="react-select-container">
    <h1 className="BaseModal__Content__Inner__Text">{label}</h1>
    <Form.Item>
      <Select className="Form__Select">
        {options.map((option) => (
          <Select.Option className="Form__SelectOption" value={option.value} key={option.id}>
            {option.text}
          </Select.Option>
        ))}
      </Select>
    </Form.Item>
  </div>
);

export default BaseSelect;
