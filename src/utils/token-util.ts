/**
 * Token 存取工具类
 */
import Cookies from "js-cookie";

const TOKEN_KEY = "token";

export function setToken(value: string): void {
  Cookies.set(TOKEN_KEY, value, {
    expires: 7, // 7天 有效期
  });
}

export function getToken(): string {
  return Cookies.get(TOKEN_KEY);
}

export function removeToken(): void {
  Cookies.remove(TOKEN_KEY);
}
