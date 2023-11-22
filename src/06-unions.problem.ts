// type Role = 'admin' | 'user' | 'super-admin';
enum Role {
  ADMIN = "admin",
  USER = "user",
  SUPER_ADMIN = "super-admin",
}

interface User {
  id: number;
  firstName: string;
  lastName: string;
  /**
   * How do we ensure that role is only one of:
   * - 'admin'
   * - 'user'
   * - 'super-admin'
   */
  role: Role;
}

export const defaultUser: User = {
  id: 1,
  firstName: "John",
  lastName: "Doe",
  role: Role.USER,
};
