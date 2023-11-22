import { expect, it } from "vitest";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  isAdmin: boolean;
}

/**
 * How do we ensure that defaultUser is of type User
 * at THIS LINE - not further down in the code?
 */
const defaultUser = {
  id: 123,
  firstName: "Jan",
  lastName: "Kowalski",
  isAdmin: true,
};

type Kowalski = typeof defaultUser & { contactNumber: string };
type Keys = keyof typeof defaultUser; // 'id' | 'firstName' | 'lastName'

const getUserId = (user: User) => {
  return user.id;
};

it("Should get the user id", () => {
  expect(getUserId(defaultUser)).toEqual(1);
});
