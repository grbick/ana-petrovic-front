import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import MyHeader from "../MyHeader/MyHeader";
import SideBar from "../SideBar/SideBar";

import styles from "./MyLayout.module.scss";
import { useEffect } from "react";
import { authStore } from "../../modules/auth/auth.store";
import Sider from "antd/es/layout/Sider";

const MyLayout = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    authStore.handleNavigation(navigate, pathname);
  }, [navigate, pathname]);

  return (
    <Layout className={styles.page}>
      <Header className={styles.header}>
        <MyHeader />
      </Header>
      <Layout>
        <Sider className={styles.sider}>
          <SideBar />
        </Sider>
        <Content className={styles.content}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MyLayout;
