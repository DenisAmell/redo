import { FC } from "react";
import Modal from "react-modal";

import { Button, BaseAreaText, BaseSelect, BaseUpload } from "../../../../index";
import { Form } from "antd";
import classNames from "classnames";
import "./HelpModal.scss";
import { SvgCrossIcon} from "../../../../../assets/SvgIcons"


interface HelpModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  className?: string;
}

const selectOptions = [
  { id: 0, text: "Проблема с сайтом", value: "site" },
  { id: 1, text: "Проблема с таблицей", value: "table" },
  { id: 2, text: "Другая проблема", value: "other" },
];

const HelpModal: FC<HelpModalProps> = ({
  isOpen,
  onRequestClose,
  className,
}) => (
  <Modal
    closeTimeoutMS={100}
    isOpen={isOpen}
    className={classNames("BaseModal__Content", className)}
    overlayClassName="BaseModal__Overlay"
    onRequestClose={onRequestClose}
    ariaHideApp={false}
  >
    <div className="BaseModal__Content__Container">
      <SvgCrossIcon
        className="BaseModal__Content__Close"
        onClick={onRequestClose}
      />
      <h2 className="BaseModal__Content__Title">Помощь</h2>
      <div className="BaseModal__Content__Inner">
        <Form className="HelpModal__Form">
          <BaseSelect label="Тема обращения" options={selectOptions} />

          <BaseAreaText rowsCount={4} label="Обращение" />

          <BaseUpload label="Снимки экрана" />

          <Button onClick={() => {}} rounded>
            Отправить
          </Button>
        </Form>
      </div>
    </div>
  </Modal>
);

export default HelpModal;
