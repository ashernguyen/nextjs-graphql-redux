import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { GlobalWithFetchMock } from 'jest-fetch-mock';

Enzyme.configure({ adapter: new Adapter() });

(global as GlobalWithFetchMock).fetch = require('jest-fetch-mock');
