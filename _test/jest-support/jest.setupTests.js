import "babel-polyfill";
import "jest-enzyme";
import fetchMock from "jest-fetch-mock";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-15.4";

Enzyme.configure({ adapter: new Adapter() });

global.fetch = fetchMock;
