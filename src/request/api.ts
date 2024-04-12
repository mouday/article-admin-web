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
  updateTaskStatus: (params: any): Promise<IResult<any>> => {
    return request.post("/updateTaskStatus", params);
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
  
  getTaskLogDetail: (params: any): Promise<IResult<any>> => {
    return request.post("/getTaskLogDetail", params);
  },

  // 执行器
  addRunner: (params: any): Promise<IResult<any>> => {
    return request.post("/addRunner", params);
  },
  
  updateRunner: (params: any): Promise<IResult<any>> => {
    return request.post("/updateRunner", params);
  },

  updateRunnerStatus: (params: any): Promise<IResult<any>> => {
    return request.post("/updateRunnerStatus", params);
  },
  
  removeRunner: (params: any): Promise<IResult<any>> => {
    return request.post("/removeRunner", params);
  },

  getRunner: (params: any): Promise<IResult<any>> => {
    return request.post("/getRunner", params);
  },

  getRunnerList: (params: any): Promise<IResult<any>> => {
    return request.post("/getRunnerList", params);
  },
};

export default api;
