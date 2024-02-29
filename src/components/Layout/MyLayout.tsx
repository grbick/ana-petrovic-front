import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import MyHeader from "../MyHeader/MyHeader";
import SideBar from "../SideBar/SideBar";

import styles from "./MyLayout.module.scss";
import { useEffect } from "react";
import { authStore } from "../../modules/auth/auth.store";

const MyLayout = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    authStore.handleNavigation(navigate, pathname);
  }, [navigate, pathname]);

  return (
    <Layout className={styles.page}>
      <SideBar />
      <Layout>
        <Header className={styles.header}>
          <MyHeader />
        </Header>
        <Content className={styles.content}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MyLayout;
