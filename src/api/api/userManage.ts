// @ts-ignore
/* eslint-disable */
import request from "../http/http";

/** 此处后端没有提供注释 GET /api/users */
export async function getAllUsers(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getAllUsersParams,
  options?: { [key: string]: any }
) {
  return request<API.ResultPageInfoUser>("/api/users", {
    method: "GET",
    params: {
      // pageNum has a default value: 1
      pageNum: "1",
      // pageSize has a default value: 10
      pageSize: "10",
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/users */
export async function createUser(
  body: API.User,
  options?: { [key: string]: any }
) {
  return request<API.ResultUser>("/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/users/${param0} */
export async function getUserById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUserByIdParams,
  options?: { [key: string]: any }
) {
  const { userId: param0, ...queryParams } = params;
  return request<API.ResultUser>(`/api/users/${param0}`, {
    method: "GET",
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /api/users/${param0} */
export async function updateUser(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateUserParams,
  body: API.User,
  options?: { [key: string]: any }
) {
  const { userId: param0, ...queryParams } = params;
  return request<API.ResultUser>(`/api/users/${param0}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /api/users/${param0} */
export async function deleteUser(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteUserParams,
  options?: { [key: string]: any }
) {
  const { userId: param0, ...queryParams } = params;
  return request<API.ResultVoid>(`/api/users/${param0}`, {
    method: "DELETE",
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 批量删除用户 DELETE /api/users/batch */
export async function batchDeleteUsers(
  body: number[],
  options?: { [key: string]: any }
) {
  return request<API.ResultVoid>("/api/users/batch", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** 用户登录 POST /api/users/login */
export async function login(
  body: API.LoginRequest,
  options?: { [key: string]: any }
) {
  return request<API.ResultLoginResponse>("/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}
