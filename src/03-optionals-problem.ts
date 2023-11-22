import { expect, it } from "vitest";

type Params = {
  first: string;
  // last?: string | undefined | null;
  // last?: string | number;
  last: string | undefined;
};

export const getName = (params: Params) => {
  if (params.last) {
    return `${params.first} ${params.last}`;
  }
  return params.first;
};

it("Should work with just the first name", () => {
  const name = getName({
    first: "John",
  });

  expect(name).toEqual("John");
});

it("Should work with the first and last name", () => {
  const name = getName({
    first: "John",
    last: "Doe",
  });

  expect(name).toEqual("John Doe");
});
