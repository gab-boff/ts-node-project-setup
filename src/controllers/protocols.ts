export interface HttpRespose<T> {
  statusCode: number;
  body: T | Error;
}
