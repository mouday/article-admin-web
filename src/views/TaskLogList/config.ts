import { blue, red, green, yellow } from "@ant-design/colors";

export const statusEnum = {
  // 启动失败
  TaskStatusStartError: 1,
  // 启动成功
  TaskStatusStartSuccess: 2,
  // === 运行阶段 ===
	// 开始运行
	TaskStatusStartRun: 3,
	// 运行中
	TaskStatusRunning: 4,

  // 运行成功
  TaskStatusRunningSuccess: 5,
  // 运行失败
  TaskStatusRunningError: 6,
};

export const statusOptions = [
  // {
  //   label: "启动失败",
  //   value: statusEnum.TaskStatusStartError,
  //   color: red[5],
  // },
  {
    label: "启动成功",
    value: statusEnum.TaskStatusStartSuccess,
    color: yellow[6],
  },
  // {
  //   label: "开始运行",
  //   value: statusEnum.TaskStatusStartRun,
  //   color: blue[6],
  // },
  // {
  //   label: "运行中",
  //   value: statusEnum.TaskStatusRunning,
  //   color: blue[6],
  // },
  {
    label: "运行成功",
    value: statusEnum.TaskStatusRunningSuccess,
    color: green[6],
  },
  {
    label: "运行失败",
    value: statusEnum.TaskStatusRunningError,
    color: red[5],
  },
];
