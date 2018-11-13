import LoginView from "../../views/authViews/login";
import { shallow } from "enzyme";
import React from "react";
import { Login } from "../../components/auth/login";
import { LOGIN_URL } from "../../appUrls/index";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import configureMockStore from "redux-mock-store";
import LoginAction from "../../actions/authActions/loginAction";

it("should contain a button", () => {
  let login = shallow(<LoginView />);
  expect(
    login.contains("Log in below with your email address and password")
  ).toEqual(true);
});

it("Login component has no div", () => {
  let login = shallow(<Login />);
  expect(login.contains(<div>Hello</div>)).toEqual(false);
});

it("Login component gets input on submit", () => {
  const LoginAction = jest.fn();
  const push=jest.fn();
  let login = shallow(<Login />);
  login.setProps({ LoginAction,user:{user:"user"},history:{push} });
  login.instance().handleSubmit();
});
it("unsuccesfull input", () => {
  const LoginAction = jest.fn();
  let login = shallow(<Login />);
  login.setProps({ LoginAction,user:{user:false}});
  login.instance().handleSubmit();
});

const response_data = {};

describe("login action", () => {
  let store;
  let mock;
  beforeEach(() => {
    ({ mock, store } = configureMock(mock, store));
  });
  const helperMethod = (status,action) => {
    mock.onPost(LOGIN_URL).reply(status, response_data);
    action(response_data)(store.dispatch);
    expect(store.getActions()).toEqual([]);
  };

  it("should be sent an email", async () => {
    helperMethod(200,LoginAction);
  });
  it("error action is dispatched", async () => {
    helperMethod(400,LoginAction);
  });
});

export function configureMock(mock, store) {
  mock = new MockAdapter(axios);
  const mockStore = configureMockStore();
  store = mockStore({});
  return { mock, store };
}

