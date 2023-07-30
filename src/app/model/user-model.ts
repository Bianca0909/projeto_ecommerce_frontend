import { EnumUserRole } from "../enum/user-role.enum";

export interface UserModel {
  id: string,
  login: string,
  password: string,
  role: EnumUserRole
}
