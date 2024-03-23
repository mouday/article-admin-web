/**
 * 通用的返回值
 */
interface IResult<T> {
  msg: string;
  ok: boolean;
  code: number;
  data: T;
}

/**
 * 登录参数
 */
interface LoginReq {
  username: string;
  password: string;
}

/**
 * 登录响应
 */
interface loginRes {
  token: string;
}
