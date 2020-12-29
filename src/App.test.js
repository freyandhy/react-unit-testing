import App from "./App";

// configuration for enzyme
import { mount } from "enzyme";

describe("Counter Testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App />);
  });

  test("render the title of counter", () => {
    expect(wrapper.find("h1").text()).toContain("This is counter app");
  });

  test("render a button with text of `Plus`", () => {
    expect(wrapper.find("#btn-plus").text()).toBe("Plus");
  });

  test("render a button with text of `Minus`", () => {
    expect(wrapper.find("#btn-minus").text()).toBe("Minus");
  });

  test("render the initial value of `counter` state in a div", () => {
    expect(wrapper.find(".counter-value").text()).toBe("0");
  });

  test("simulate `Plus` button", () => {
    wrapper.find("#btn-plus").simulate("click");
    expect(wrapper.find(".counter-value").text()).toBe("1");
  });

  test("simulate `Minus` button", () => {
    wrapper.find("#btn-plus").simulate("click");
    expect(wrapper.find(".counter-value").text()).toBe("1");
    wrapper.find("#btn-plus").simulate("click");
    expect(wrapper.find(".counter-value").text()).toBe("2");
    wrapper.find("#btn-minus").simulate("click");
    expect(wrapper.find(".counter-value").text()).toBe("1");
    wrapper.find("#btn-minus").simulate("click");
    expect(wrapper.find(".counter-value").text()).toBe("0");
  });

  test("value can not less than 0", () => {
    wrapper.find("#btn-minus").simulate("click");
    expect(wrapper.find(".counter-value").text()).toBe("0");
  });
});
