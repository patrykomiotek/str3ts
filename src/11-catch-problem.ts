import { expect, it } from "vitest";

class HttpError extends Error {}
class ValidationError extends Error {}

const tryCatchDemo = (state: "fail" | "succeed") => {
  try {
    if (state === "fail") {
      throw new Error("Failure!");
      // throw new Mieso("Failure!");
    }
  } catch (e) {
    if (e instanceof HttpError) {
    } else if (e instanceof Error) {
      return e.message;
    }
  }
};

it("Should return the message when it fails", () => {
  expect(tryCatchDemo("fail")).toEqual("Failure!");
});
