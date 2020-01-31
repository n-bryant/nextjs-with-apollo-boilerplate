import React from "react";
import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson, { createSerializer } from "enzyme-to-json";

// Set the default serializer for Jest to be the from enzyme-to-json
// This produces an easier to read (for humans) serialized format.
expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

// Make Enzyme functions available in all test files without importing
global.React = React;
global.toJson = toJson;
global.shallow = shallow;
global.render = render;
global.mount = mount;
