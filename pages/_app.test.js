import { BoilerplateApp } from "./_app";

describe("BoilerplateApp", () => {
  it("should render successfully", () => {
    const props = {
      Component: () => <div></div>,
      apollo: jest.fn(),
      pageProps: {}
    };

    const wrapper = shallow(<BoilerplateApp {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
