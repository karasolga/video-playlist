import React from "react";
import FormRow from "./form-row";

describe("FormRow", () => {
  it("renders correctly", () => {
    expect(FormRow).toMatchSnapshot();
  });
});
