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
  {
    label: "任务列表",
    key: "/task-list",
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
    label: "任务日志",
    key: "/task-log-list",
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
    } else if (item.children) {
      let currentChild = item.children.find((child) => {
        return child.key == pathname;
      });

      if (currentChild) {
        routePath.push(item);
        routePath.push(currentChild);
      }
    }
  }
  return routePath;
}
