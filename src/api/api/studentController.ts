// @ts-ignore
/* eslint-disable */
import request from "../http/http";

/** 此处后端没有提供注释 GET /api/students */
export async function getAllStudents(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getAllStudentsParams,
  options?: { [key: string]: any }
) {
  return request<API.ResultPageInfoStudent>("/api/students", {
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

/** 此处后端没有提供注释 POST /api/students */
export async function createStudent(
  body: API.Student,
  options?: { [key: string]: any }
) {
  return request<API.ResultStudent>("/api/students", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/students/${param0} */
export async function getStudentById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getStudentByIdParams,
  options?: { [key: string]: any }
) {
  const { studentId: param0, ...queryParams } = params;
  return request<API.ResultStudent>(`/api/students/${param0}`, {
    method: "GET",
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /api/students/${param0} */
export async function updateStudent(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateStudentParams,
  body: API.Student,
  options?: { [key: string]: any }
) {
  const { studentId: param0, ...queryParams } = params;
  return request<API.ResultStudent>(`/api/students/${param0}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /api/students/${param0} */
export async function deleteStudent(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteStudentParams,
  options?: { [key: string]: any }
) {
  const { studentId: param0, ...queryParams } = params;
  return request<API.ResultVoid>(`/api/students/${param0}`, {
    method: "DELETE",
    params: { ...queryParams },
    ...(options || {}),
  });
}
