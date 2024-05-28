import { Form, Upload } from "antd";
import "./BaseUpload.scss";
import {ReactComponent as SvgUpload } from "./upload.svg"

interface BaseUploadProps {
  label: string;
}

const BaseUpload = ({label}: BaseUploadProps) => {

    const normFile = (e: any) => {
      if (Array.isArray(e)) {
        return e;
      }
      return e?.fileList;
    };
    
  return (
    <div>
      <h1 className="BaseModal__Content__Inner__Text">{label}</h1>
      <Form.Item
        className="Form__Upload"
        valuePropName="fileList"
        getValueFromEvent={normFile}
      >
        <Upload
          className="Form__Upload"
          action="/upload.do"
          listType="picture-card"
        >
          <button className="Form__Upload__Button" type="button">
            <div className="Form__Upload__Text">Загрузить</div>
            <SvgUpload className="svg_upload" />
          </button>
        </Upload>
      </Form.Item>
    </div>
  );
};

export default BaseUpload;
