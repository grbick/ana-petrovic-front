import { Menu } from "antd";
import {
  ROUTE_CONFIG,
  ROUTE_SUBMENU_KEYS,
  flattenRoutes,
} from "../../../router/router.constants";
import { observer } from "mobx-react-lite";
import { useLocation, useNavigate } from "react-router-dom";
import { authStore } from "../../../modules/auth/auth.store";

export const SideBarMenu = observer(() => {
  const { pathname } = useLocation();

  const navigate = useNavigate();
  if (!authStore.userData) return;

  const routes = ROUTE_CONFIG[
    authStore.userData["http://localhost:5173/roles"][0]
  ].filter((r) => !r.hideInMenu);

  const flatRoutes = flattenRoutes(routes);

  const onClick = (e: any) => {
    navigate(e.key);
  };

  const findSelectedKey = () => {
    const selectedRoute = flatRoutes.find(
      (route) => pathname.includes(route.path) || pathname.includes(route.key)
    );
    if (!selectedRoute) return undefined;

    return [selectedRoute.key];
  };

  const getOpenSubmenu = () => {
    const openSubmenuKeys = ROUTE_SUBMENU_KEYS.filter((key) => {
      if (pathname.includes(key)) return [key];
    });
    if (openSubmenuKeys.length) return openSubmenuKeys;
    return [];
  };

  return (
    <Menu
      onClick={onClick}
      triggerSubMenuAction={"click"}
      // className={styles.container}
      defaultOpenKeys={getOpenSubmenu()}
      selectedKeys={findSelectedKey()}
      mode="inline"
      items={routes}
    />
  );
});
