import { useAuth0 } from "@auth0/auth0-react";
import styles from "./LogoutButton.module.scss";

export const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
      className={styles.logoutButton}
    >
      Log Out
    </button>
  );
};
