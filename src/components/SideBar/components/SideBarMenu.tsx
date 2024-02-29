import { Menu, MenuProps } from "antd";
import {
  ROUTES,
  ROUTES_KEYS,
  SUBMENU_TITLES,
  getItem,
} from "../../../router/router.constants";
import {
  CalendarOutlined,
  CreditCardOutlined,
  ExperimentOutlined,
  FolderOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { observer } from "mobx-react-lite";
import { useLocation, useNavigate } from "react-router-dom";

export const SideBarMenu = observer(() => {
  const { pathname } = useLocation();

  const navigate = useNavigate();

  const onClick = (e: any) => {
    navigate(e.key);
  };

  const findSelectedKey = () => {
    return ROUTES_KEYS.filter((key) => pathname.includes(key));
  };

  const menuItems: MenuProps["items"] = [
    getItem("Početna", ROUTES.home, <HomeOutlined />),
    getItem("Pacijenti", SUBMENU_TITLES.patients, <ExperimentOutlined />, [
      getItem("Aktivni", ROUTES.patientsActive, <CreditCardOutlined />),
      getItem("Arhivirani", ROUTES.patientsArchive, <FolderOutlined />),
    ]),
    getItem("Raspored", ROUTES.schedule, <CalendarOutlined />),
  ];

  return (
    <Menu
      onClick={onClick}
      triggerSubMenuAction={"click"}
      //   className={styles.container}
      selectedKeys={findSelectedKey()}
      mode="inline"
      items={menuItems}
    />
  );
});
