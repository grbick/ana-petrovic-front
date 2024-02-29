import Sider from "antd/es/layout/Sider";
import { SideBarMenu } from "./components/SideBarMenu";
// import { Layout } from "antd";

const SideBar = () => {
  return (
    <Sider>
      <SideBarMenu></SideBarMenu>
    </Sider>
  );
};

export default SideBar;
