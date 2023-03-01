import request from "./request";

export const GetUserNum=()=>request.get<number>('/api/Account/GetUserCount')

export const GetPostNum=()=>request.get<number>('/api/Post/GetPostCount')

export const GetReplyNum=()=>request.get<number>('/api/Reply/GetReplyCount')