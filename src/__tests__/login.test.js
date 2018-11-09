import LoginView from "../views/login";
import { shallow} from "enzyme";
import React from "react";
import Login from "../components/login";

it("should contain a button", () => {
  let login = shallow(<LoginView />);
  expect(login.contains(<button  type ="submit">Login</button>)).toEqual(true);
});

it("Login component has no div", () => {
  let login = shallow(<Login />);
  expect(login.contains(<div>Hello</div>)).toEqual(false);
});
