import React, { useState, useEffect } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";

export const MENU_ITEMS = [
  // {
  //   label: "Home",
  //   key: "/home",
  //   icon: <PieChartOutlined />,
  // },
  


  // {
  //   label: "执行器",
  //   key: "/runner-list",
  //   icon: <AppstoreOutlined />,
    // children: [
    //   {
    //     label: "Table",
    //     key: "/table",
    //   },
    //   {
    //     label: "Form",
    //     key: "/form",
    //   },
    // ],
  // },

  {
    label: "文章列表",
    key: "/article-list",
    icon: <PieChartOutlined />,
    // children: [
    //   {
    //     label: "Table",
    //     key: "/table",
    //   },
    //   {
    //     label: "Form",
    //     key: "/form",
    //   },
    // ],
  },
  {
    label: "文章分类",
    key: "/category-list",
    icon: <DesktopOutlined />,
    // children: [
    //   {
    //     label: "Table",
    //     key: "/table",
    //   },
    //   {
    //     label: "Form",
    //     key: "/form",
    //   },
    // ],
  },
  
  // {
  //   label: "数据",
  //   key: "/data",
  //   icon: <DesktopOutlined />,
  //   children: [
  //     {
  //       label: "Log",
  //       key: "/log",
  //     },
  //     {
  //       label: "User",
  //       key: "/user",
  //     },
  //   ],
  // },
];

export function getCurrentPath(pathname) {
  let routePath = [];

  for (let item of MENU_ITEMS) {
    if (item.key == pathname) {
      routePath.push(item);
    }
    //  else if (item?.children) {
    //   let currentChild = item?.children.find((child) => {
    //     return child.key == pathname;
    //   });

    //   if (currentChild) {
    //     routePath.push(item);
    //     routePath.push(currentChild);
    //   }
    // }
  }
  return routePath;
}
