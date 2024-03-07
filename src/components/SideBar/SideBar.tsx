import { observer } from "mobx-react-lite";
import { LogoutButton } from "../LogoutButton/LogoutButton";
import { SideBarMenu } from "./components/SideBarMenu";
import styles from "./SideBar.module.scss";

const SideBar = observer(() => {
  return (
    <div className={styles.sideBarWrapper}>
      <SideBarMenu />
      <LogoutButton />
    </div>
  );
});

export default SideBar;
