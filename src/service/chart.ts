import { IDateNum } from "../types/type";
import request from "./request";

export const GetUserNum = () =>
  request.get<number>("/api/Account/GetUserCount");

export const GetPostNum = () => request.get<number>("/api/Post/GetPostCount");

export const GetReplyNum = () =>
  request.get<number>("/api/Reply/GetReplyCount");

export const GetUserDateNum = () =>
  request.get<IDateNum[]>("api/Account/GetUserDateNum");

export const GetPostDateNum = () =>
  request.get<IDateNum[]>("/api/Post/GetPostDateNum");

export const GetReplyDateNum = () =>
  request.get<IDateNum[]>("/api/Reply/GetReplyDateNum");
