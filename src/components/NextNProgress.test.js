import NextNProgress from "./NextNProgress";
import NProgress from "nprogress";

describe("NextNProgress", () => {
  let props = {
    color: "#fff",
    startPosition: 0.3,
    stopDelayMs: 200,
    height: 3
  };

  jest.spyOn(NProgress, "configure");
  jest.spyOn(NProgress, "set");
  jest.spyOn(NProgress, "start");
  jest.spyOn(NProgress, "done");

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NextNProgress {...props} />);
  });

  it("should render successfully", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should not set additional configurations when the component mounts if options are not passed through props", () => {
    mount(<NextNProgress {...props} />);
    expect(NProgress.configure).not.toHaveBeenCalled();
  });

  it("should set additional configurations when the component mounts if options are passed through props", () => {
    props.options = {
      foo: "bar"
    };
    mount(<NextNProgress {...props} />);
    expect(NProgress.configure).toHaveBeenCalled();
  });

  it("should set the start position of the progress bar to the startPosition prop value when the routeChangeStart method is called", () => {
    wrapper.instance().routeChangeStart();
    expect(NProgress.set).toHaveBeenCalledWith(props.startPosition);
  });

  it("should start the progress bar when the routeChangeStart method is called", () => {
    wrapper.instance().routeChangeStart();
    expect(NProgress.start).toHaveBeenCalled();
  });

  it("should set the progress bar's done state when the routeChangeEnd method is called after the set delay", () => {
    jest.useFakeTimers();
    wrapper.instance().routeChangeEnd();
    expect(clearTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(
      expect.any(Function),
      props.stopDelayMs
    );
    expect(NProgress.done).not.toBeCalled();
    jest.runAllTimers();
    expect(NProgress.done).toHaveBeenCalledWith(true);
  });
});
