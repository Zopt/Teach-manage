// @ts-ignore
/* eslint-disable */
import request from "../http/http";

/** 分页获取所有教师 GET /api/teachers */
export async function getAllTeachers(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getAllTeachersParams,
  options?: { [key: string]: any }
) {
  return request<API.ResultPageInfoTeacher>("/api/teachers", {
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

/** 创建新教师 POST /api/teachers */
export async function createTeacher(
  body: API.Teacher,
  options?: { [key: string]: any }
) {
  return request<API.ResultTeacher>("/api/teachers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取指定ID的教师 GET /api/teachers/${param0} */
export async function getTeacherById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getTeacherByIdParams,
  options?: { [key: string]: any }
) {
  const { teacherId: param0, ...queryParams } = params;
  return request<API.ResultTeacher>(`/api/teachers/${param0}`, {
    method: "GET",
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 更新教师信息 PUT /api/teachers/${param0} */
export async function updateTeacher(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateTeacherParams,
  body: API.Teacher,
  options?: { [key: string]: any }
) {
  const { teacherId: param0, ...queryParams } = params;
  return request<API.ResultTeacher>(`/api/teachers/${param0}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 删除教师 DELETE /api/teachers/${param0} */
export async function deleteTeacher(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteTeacherParams,
  options?: { [key: string]: any }
) {
  const { teacherId: param0, ...queryParams } = params;
  return request<API.ResultVoid>(`/api/teachers/${param0}`, {
    method: "DELETE",
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 更新教师头像 PUT /api/teachers/${param0}/avatar */
export async function updateTeacherAvatar(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateTeacherAvatarParams,
  body: API.Teacher,
  options?: { [key: string]: any }
) {
  const { teacherId: param0, ...queryParams } = params;
  return request<API.ResultTeacher>(`/api/teachers/${param0}/avatar`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 上传教师头像 POST /api/teachers/${param0}/avatar/upload */
export async function uploadAvatar(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.uploadAvatarParams,
  body: {},
  options?: { [key: string]: any }
) {
  const { teacherId: param0, ...queryParams } = params;
  return request<API.ResultTeacher>(`/api/teachers/${param0}/avatar/upload`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 恢复已删除的教师 PUT /api/teachers/${param0}/restore */
export async function restoreTeacher(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.restoreTeacherParams,
  options?: { [key: string]: any }
) {
  const { teacherId: param0, ...queryParams } = params;
  return request<API.ResultTeacher>(`/api/teachers/${param0}/restore`, {
    method: "PUT",
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 批量删除教师 DELETE /api/teachers/batch */
export async function batchDeleteTeachers(
  body: number[],
  options?: { [key: string]: any }
) {
  return request<API.ResultVoid>("/api/teachers/batch", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取所有部门列表 GET /api/teachers/departments */
export async function getAllDepartments(options?: { [key: string]: any }) {
  return request<API.ResultListString>("/api/teachers/departments", {
    method: "GET",
    ...(options || {}),
  });
}

/** 获取指定部门的教师列表 GET /api/teachers/departments/${param0} */
export async function getTeachersByDepartment(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getTeachersByDepartmentParams,
  options?: { [key: string]: any }
) {
  const { department: param0, ...queryParams } = params;
  return request<API.ResultListTeacher>(`/api/teachers/departments/${param0}`, {
    method: "GET",
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 查询指定日期入职的教师 GET /api/teachers/hire-date */
export async function findByHireDate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findByHireDateParams,
  options?: { [key: string]: any }
) {
  return request<API.ResultListTeacher>("/api/teachers/hire-date", {
    method: "GET",
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询指定日期之后入职的教师 GET /api/teachers/hire-date/after */
export async function findByHireDateAfter(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findByHireDateAfterParams,
  options?: { [key: string]: any }
) {
  return request<API.ResultListTeacher>("/api/teachers/hire-date/after", {
    method: "GET",
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询指定日期之前入职的教师 GET /api/teachers/hire-date/before */
export async function findByHireDateBefore(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findByHireDateBeforeParams,
  options?: { [key: string]: any }
) {
  return request<API.ResultListTeacher>("/api/teachers/hire-date/before", {
    method: "GET",
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 按日期范围查询教师 GET /api/teachers/hire-date/range */
export async function findByHireDateRange(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findByHireDateRangeParams,
  options?: { [key: string]: any }
) {
  return request<API.ResultListTeacher>("/api/teachers/hire-date/range", {
    method: "GET",
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 搜索教师 GET /api/teachers/search */
export async function searchTeachers(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.searchTeachersParams,
  options?: { [key: string]: any }
) {
  return request<API.ResultListTeacher>("/api/teachers/search", {
    method: "GET",
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
