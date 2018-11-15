import ProtectedRoute, { Authenticate } from "../routes/protectedRoutes";
import { shallow } from "enzyme";
import React from "react";

it("test invalid token at login", () => {
  Authenticate("dfdjfdj");
});

it("test valid token at login but expired", () => {
  Authenticate(
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImtpbWJzaW1vbjJAZ21haWwuY29tIiwiZXhwIjoxNTQyMDYxMjQ3LCJ1c2VybmFtZSI6ImtpbWJ1Z3AifQ.yz9jMoPBnKy9Tko_hhCwakNwZkeRLD4nc13A3LzyJbw"
  );
});

it("protected route renders correctly", () => {
  let component = shallow(<ProtectedRoute />);
  component.instance();
});
