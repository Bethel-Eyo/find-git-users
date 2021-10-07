import * as React from "react";
import { Provider } from "react-redux";
import { act, render, getAllByTestId } from "@testing-library/react";
import store from "../../store";
import Home from "./Home";
import { gitUsers } from "../../config/mocks";
import { ActionType } from "../../store/types";

let container: any = null;

describe("<Home />", () => {
  beforeEach(async () => {
    store.dispatch({
      type: ActionType.SET_USERS,
      payload: gitUsers,
    });

    container = render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    await act(async () => {});
  });

  test("Home renders correctly", () => {
    expect(container.getByTestId("root")).toBeTruthy();
  });

  test("Should show input field", () => {
    expect(container.getByTestId("text-input")).toBeTruthy();
  });

  /** Irrespective of the fact that the data is mocked, the length of the users data in
   * the store will still be 0 because there is no searched item  */
  test("No data text should be displayed", () => {
    expect(container.getByTestId("no-data")).toBeTruthy();
  });
});
