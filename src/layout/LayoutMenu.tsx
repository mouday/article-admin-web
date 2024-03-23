import React, { useState, useEffect } from "react";
import { MENU_ITEMS, getCurrentPath } from "./config";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { useNavigate, useLocation, useMatches } from "react-router-dom";

export default function LayoutMenu() {
  const navigateTo = useNavigate();
  const currentRoute = useLocation();
  
  const [openKeys, setOpenKeys] = useState([]);

  const handleMenuClick = (e) => {
    // 编程式路由导航
    navigateTo(e.key);
  };

  const handleOpenChange = (keys) => {
    setOpenKeys(keys.slice(-1));
  };

  useEffect(() => {
    const routePath = getCurrentPath(currentRoute.pathname);

    setOpenKeys(routePath.slice(0, 1).map((item) => item.key));
  }, []);

  // defaultOpenKeys 初始展开的 SubMenu 菜单项 key 数组
  // defaultSelectedKeys 初始选中的菜单项 key 数组
  return (
    <Menu
      theme="dark"
      defaultSelectedKeys={[currentRoute.pathname]}
      mode="inline"
      items={MENU_ITEMS}
      openKeys={openKeys}
      onOpenChange={handleOpenChange}
      onClick={handleMenuClick}
    />
  );
}
