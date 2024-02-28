import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";

import MyHeader from "../MyHeader/MyHeader";
import SideBar from "../SideBar/SideBar";

import styles from "./MyLayout.module.scss";

const MyLayout = () => {
  return (
    <Layout className={styles.page}>
      <Header className={styles.header}>
        <MyHeader />
      </Header>
      <SideBar />
      <Content className={styles.content}>
        <Outlet />
      </Content>
    </Layout>
  );
};

export default MyLayout;
