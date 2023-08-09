import { User } from "@/models/user";
import { HttpRespose } from "../protocols";

export interface IGetUsersController {
  handle(): Promise<HttpRespose<User[]>>;
}

export interface IGetUsersRepository {
  getUsers(): Promise<User[]>;
}
