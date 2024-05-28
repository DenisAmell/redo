import "./MainPage.scss";
import { Reorder } from "framer-motion";
import { Simulate } from "react-dom/test-utils";
import drag = Simulate.drag;
import { useState, useRef, useEffect } from "react";
import {
  Widget,
  PersonWidget,
  NotificationsContainer,
  MobilePersonWidget,
  Button,
} from "../../components";
import WidgetList from "../../components/Widget/WidgetList";

const arrayWidgets = [
  {
    id: "1",
    title: "Сотрудники в подчинении",
    inner: [
      {
        id: 1,
        value: ["112233", "Вид", "Количество"],
      },
      {
        id: 2,
        value: ["112233", "Вид", "Количество"],
      },
      {
        id: 3,
        value: ["112233", "Вид", "Количество"],
      },
    ],
  },
  {
    id: "2",
    title: "Бригады",
    inner: [
      {
        id: 1,
        value: ["112233", "Вид", "Количество"],
      },
      {
        id: 2,
        value: ["112233", "Вид", "Количество"],
      },
      {
        id: 3,
        value: ["112233", "Вид", "Количество"],
      },
    ],
  },
  {
    id: "3",
    title: "Автомобили",
    inner: [
      {
        id: 1,
        value: ["112233", "Вид", "Количество"],
      },
      {
        id: 2,
        value: ["112233", "Вид", "Количество"],
      },
      {
        id: 3,
        value: ["112233", "Вид", "Количество"],
      },
    ],
  },
  {
    id: "4",
    title: "Работы на карте",
    inner: [
      {
        id: 1,
        value: ["112233", "Вид", "Количество"],
      },
      {
        id: 2,
        value: ["112233", "Вид", "Количество"],
      },
      {
        id: 3,
        value: ["112233", "Вид", "Количество"],
      },
    ],
  },
];

export interface IWidget {
  id: string;
  title: string;
  inner: { id: number; value: string[] }[];
}

const MainPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [items, setItems] = useState<IWidget[]>(arrayWidgets);

  useEffect(() => {
    if (localStorage.getItem("widgets") === null) {
      localStorage.setItem(
        "widgets",
        JSON.stringify([
          "Сотрудники в подчинении",
          "Бригады",
          "Автомобили",
          "Работы на карте",
        ])
      );
    }
  }, []);


  const notifications = [
    {
      id: 0,
      title: "Заголовок уведомления",
      description:
        "Описание уведомления Описание уведомления Описание уведомления Описание уведомления",
      details:
        "Тут будет какое-то подробное описание уведомления с какой-то информацией о чем-то Тут будет какое-то подробное описание уведомления с какой-то информацией о чем-то Тут будет какое-то подробное описание уведомление с какой-то информацией о чем-то",
    },
    {
      id: 1,
      title: "Необходимо проверить данную станцию",
      description:
        "На станции нужно что-то сделать, подробности можно увидеть в таблице",
    },
    {
      id: 2,
      title: "Автомобиль 12315, ТСО",
      description:
        "Автомобилю необходимо провести ТСО или еще что-то, тут будет написано все",
    },
    {
      id: 3,
      title: "Сотрудник Иванов И.И. просрочил обучение",
      description:
        "Сотруднику Иванову И.И. с табельным номером 3264468 необходимо пройти такое-то обучение",
      details:
        "Данное обучение можно найти в сервисе корпоративного университета. Обратите Внимание, что в случае, если сотрудник не пройдет обучение до 23.09, будет то-то",
    },
    {
      id: 4,
      title: "Сотрудник Иванов И.И. просрочил обучение",
      description:
        "Сотруднику Иванову И.И. с табельным номером 3264468 необходимо пройти такое-то обучение",
      details:
        "Данное обучение можно найти в сервисе корпоративного университета. Обратите Внимание, что в случае, если сотрудник не пройдет обучение до 23.09, будет то-то",
    },
  ];

  const personData = {
    fio: "Фамилия Имя Отчество",
    login: "mgts\\Name",
    tabNumber: "121331",
    phoneNumber: "+79999999999",
    email: "nameFIO@mgts.ru",
  };

  const brigade = [
    { id: 0, fio: "Фамилия Имя Отчество" },
    { id: 1, fio: "Фамилия Имя Отчество" },
    { id: 2, fio: "Фамилия Имя Отчество" },
    { id: 3, fio: "Фамилия Имя Отчество" },
    { id: 4, fio: "Фамилия Имя Отчество" },
  ];

  return (
    <div className="content">
      <div className="content-container">
        {brigade && <MobilePersonWidget brigade={brigade} />}
        <WidgetList
          items={items.filter((widget) =>
            JSON.parse(localStorage.getItem("widgets") || "[]").includes(
              widget.title
            )
          )}
          renderItem={(widget: IWidget) => (
            <Widget key={widget.id} widget={widget} />
          )}
        />
      </div>
      <div className="right-container">
        <PersonWidget personData={personData} brigade={brigade} />
        {brigade && (
          <div className="right-container_btns">
            <Button onClick={() => {}} rounded>
              Начать смену
            </Button>
            <Button onClick={() => {}} rounded>
              Списки на проход
            </Button>
          </div>
        )}
      </div>

      <NotificationsContainer notifications={notifications} />
    </div>
  );
};

export default MainPage;
