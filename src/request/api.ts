import request from "./request";

const api = {
  // 获取用户信息
  get: (params: any): Promise<IResult<null>> => request.get("/get", params),

  /**
   * 登录
   */
  login: (params: LoginReq): Promise<IResult<loginRes>> =>
    request.post("/login", params),
  /**
   * 获取数据
   */
  getList: (params: any): Promise<IResult<any>> => {
    return request.post("/getList", params);
  },

  /**
   * 任务管理
   */
  addTask: (params: any): Promise<IResult<any>> => {
    return request.post("/addTask", params);
  },
  getTask: (params: any): Promise<IResult<any>> => {
    return request.post("/getTask", params);
  },
  updateTask: (params: any): Promise<IResult<any>> => {
    return request.post("/updateTask", params);
  },
  removeTask: (params: any): Promise<IResult<any>> => {
    return request.post("/removeTask", params);
  },
  getTaskList: (params: any): Promise<IResult<any>> => {
    return request.post("/getTaskList", params);
  },
  startTask: (params: any): Promise<IResult<any>> => {
    return request.post("/startTask", params);
  },
  stopTask: (params: any): Promise<IResult<any>> => {
    return request.post("/stopTask", params);
  },
  
  getTaskLogList: (params: any): Promise<IResult<any>> => {
    return request.post("/getTaskLogList", params);
  },
  
};

export default api;
