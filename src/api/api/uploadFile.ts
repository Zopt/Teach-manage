// @ts-ignore
/* eslint-disable */
import request from "../http/http";

/** 上传文件 POST /api/upload */
export async function uploadFile(body: {}, options?: { [key: string]: any }) {
  return request<API.ResultString>("/api/upload", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}
