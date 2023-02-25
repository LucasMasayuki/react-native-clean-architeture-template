/* eslint-disable @typescript-eslint/no-explicit-any */

export type HttpRequest = {
  url: string
  method: HttpMethod
  body?: any
  headers?: any
  params?: any
}

export interface HttpClient<R = any> {
  request: (data: HttpRequest) => Promise<HttpResponse<R>>
}

// eslint-disable-next-line no-shadow
export enum HttpMethod {
  POST = 'post',
  GET = 'get',
  PUT = 'put',
  DELETE = 'delete',
}

// eslint-disable-next-line no-shadow
export enum HttpStatusCode {
  ok = 200,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  forbidden = 403,
  notFound = 404,
  unprocessableEntity = 420,
  serverError = 500,
}

export type HttpResponse<T = any> = {
  statusCode: HttpStatusCode
  body?: T & { error?: string }
}
