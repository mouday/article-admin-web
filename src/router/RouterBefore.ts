/**
 * ref: 
 * 如何优雅的使用react router v6, 并实现全局守卫
 * https://juejin.cn/post/7222787944297791543
 */
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { routes } from "./index";
import { getToken } from "@/utils/token-util";


/**
 * 在路由表中获取到当前的路由对应的路由
 * @param routers 
 * @param path 
 * @returns 
 */
const getCurrentRouterMap = (routers: Route[], path: string) => {
  for (let router of routers) {
    if (router.path == path) return router;

    if (router.children) {
      const childRouter = getCurrentRouterMap(router.children, path);
      if (childRouter) return childRouter;
    }
  }

  return routes[routes.length - 1];
};

/**
 * 路由前置守卫
 * @param param0 
 * @returns 
 */
export default function RouterBefore({ children }: any) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const router = getCurrentRouterMap(routes, location.pathname);

    const token = getToken();

    if (!token && router.auth) {
      navigate("/login");
    }

  }, [location.pathname]);

  return children;
}
