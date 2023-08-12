import { EnumUserRole } from "../enum/user-role.enum";

export interface UserModel {
  id: string,
  login: string,
  cpfCnpj: string,
  email: string,
  telefone: string,
  password: string,
  role: EnumUserRole
}
