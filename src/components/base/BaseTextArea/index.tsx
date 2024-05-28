import { FC } from "react";
import "./BaseTextArea.scss";
import { Form, Input } from "antd";
const { TextArea } = Input;

interface BaseTextAreaProps {
  label: string;
  rowsCount: number;
}

const BaseTextArea: FC<BaseTextAreaProps> = ({
  label
}) => (
  <div className="baseTextArea">
    <h1 className="BaseModal__Content__Inner__Text">{label}</h1>
    <Form.Item>
      <TextArea className="Form__TextArea" rows={4} />
    </Form.Item>
  </div>
);

export default BaseTextArea;
