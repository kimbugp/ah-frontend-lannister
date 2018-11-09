import React from "react";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import { newPasswordRequest } from "../../actions/authActions.js/passswordResetAction";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../../reducers/rootReducer";
import { testRender } from "./resetPage.test";
import PasswordResetForm from "../../views/authViews/resetRequestForm";
import EmailSuccess from "../../views/authViews/EmailSuccess";
import Form from "../../views/authViews/newPasswordForm";
import NewPassword,{ResetPage} from "../../components/auth/passwordReset/newPassword";

it("passes reset form renders", () => {
  shallow(<PasswordResetForm />);
});

it("Success form renders without crash", () => {
  shallow(<EmailSuccess />);
});
it("Password reset form renders", () => {
  shallow(<Form />);
});
const store = createStore(rootReducer, applyMiddleware(thunk));

describe("new password set page test ", () => {
  let component;

  beforeEach(() => {
    component = mount(
      <Provider store={store}>
        <NewPassword
          match={{ params: { token: "hjkmnjh" } }}
          dispatch={newPasswordRequest({
            user: { password: "@reiuuitui87YU" }
          })}
        />
      </Provider>
    );
  });

  it("should reset to a new password", () => {
    component.find("form").simulate("submit", Event("!2dsfdghf##Wdsfwerg","!2dsfdghf##Wdsfwerg"));
  });
  it("will receive props on password reset", () => {
    component.setProps({ resetStatus: 200 });
  });
  it("password is of not of required strength", () => {
    component.find("form").simulate("submit",Event( "dsfdghf","df"));
  });
  it("test password input is of required strength", () => {
    const setCustomValidity=jest.fn();
    component.find({ id: "reset-form" }).simulate("change", {
      target: { password: { value: "#Jarc!9553" } ,setCustomValidity}
    });
  });
});

describe("new password set page test ", () => {
  let component;
  const push = jest.fn();
  const url = { history: { push } };
  const newProps = jest.fn();

  beforeEach(() => {
    component = mount(
      <ResetPage
        match={{ params: { token: "hjkmnjh" } }}
        {...url}
        componentWillReceiveProps={newProps}
      />
    );
  });
  it("test password success component is rendered", () => {
    component.setState({ success: true });
    component.contains(".EmailSuccess");
  });
  it("test password success component is rendered", () => {
    component.setState({ success: true });
    component.update();
    component.find("button").simulate("click", {});
    expect(component).toBeCalled;
  });
  it("test component will update with new props", () => {
    testRender(component,newProps,200);
  });
  it("test submission when passwords not the same", () => {
    component.setState({password:"123456789",confirmPassword:"1298237942742"});
    component.find("form").simulate("submit", Event("@incsiue4#wsbdS","@DKDKNduee@494" ));
    component.contains("@incsiue4#wsbdS");
  });
  it("test password not strong enough", () => {
    component.setProps({resetStatus:200});
    expect(component.instance).toHaveLength(0);
  });
});

function Event(psw1,psw2) {
  const setCustomValidity=jest.fn();
  return {
    target: {
      password: { value: psw1 },
      confirmPassword: { value: psw2,setCustomValidity}
    }
  };
}
