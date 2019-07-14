import React from "react";
import Adapter from 'enzyme-adapter-react-16';
import FilmBox from './components/FilmBox';
import FilmRow from './components/FilmRow';
import RateStars from './components/RateStars';
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import { expect } from 'chai';
import { shallow, configure, mount } from 'enzyme';
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'

const mockData = {_id:1, "title":"Title1", "releaseDate": "11-05-2005", "type": "A", "rating": 2.3456};
const mockStore = configureMockStore();
const store = mockStore({data: [mockData]});
configure({ adapter: new Adapter() });
chai.use(chaiEnzyme());

describe("FilmBox component test", () => {
    it('renders without crashing', () => {
        shallow(<FilmBox store={store}/>);
    });

    it('is data displayed correctly', () => {
        const wrapper = shallow(<FilmBox store={store}/>).dive().dive();

        expect(wrapper.find('.grid-box')).to.contain('Title');
        expect(wrapper.find('.grid-box')).to.contain('Release Date');
        expect(wrapper.find('.grid-box')).to.contain('Type');
        expect(wrapper.find('.grid-box')).to.contain('Rating');
    });

    it('has proper data rows', () => {
        const fixedData = [
            {_id:1, "title":"Title1", "releaseDate": "11-05-2005", "type": "A", "rating": 2.3456},
            {_id:2, "title":"Title2", "releaseDate": "11-05-2005", "type": "B", "rating": 4.3456},
            {_id:3, "title":"Title3", "releaseDate": "11-05-2005", "type": "C", "rating": 6.3456}
        ];
        const fixedStore = mockStore({opened: 0, data: fixedData});
        const wrapper = mount(<Provider store={fixedStore}><FilmBox /></Provider>);

        expect(wrapper.find(FilmRow)).to.have.lengthOf(3);
    });

});


describe("FilmRow component test", () => {
    it('renders without crashing', () => {
        shallow(<FilmRow store={store}/>);
    });

    it('is RateStars hidden', () => {
        const fixedStore = mockStore({opened: 3});
        const wrapper = shallow(<FilmRow store={fixedStore} row={mockData}/>).dive().dive();

        expect(wrapper.find('#RateStars')).to.have.className('hide');
    });

    it('is RateStars visible', () => {
        const fixedStore = mockStore({opened: 1});
        const wrapper = shallow(<FilmRow store={fixedStore} row={mockData}/>).dive().dive();

        expect(wrapper.find('#RateStars')).to.have.className('');
    });

    it('is data displayed correctly', () => {
        const wrapper = shallow(<FilmRow store={store} row={mockData}/>).dive().dive();

        expect(wrapper.find('.grid-box')).to.have.contain('Title1');
        expect(wrapper.find('.grid-box')).to.have.contain('11-05-2005');
        expect(wrapper.find('.grid-box')).to.have.contain(2.35);
    });

    it('calculateImage function execution', () => {
        const wrapper = shallow(<FilmRow store={store} row={mockData}/>).dive().dive();
        const result = wrapper.instance().calculateImage().props.children.charCodeAt(0);

        expect(result).equals(9762);
    });

    it('calculateRange function execution', () => {
        const wrapper = shallow(<FilmRow store={store} row={mockData}/>).dive().dive();
        const result = wrapper.instance().calculateRange();

        expect(result).equals(2.35);
    });

});

describe("RateStars component test", () => {
    it('renders without crashing', () => {
        shallow(<RateStars store={store}/>);
    });

    it('render 10 rate stars', () => {
        const wrapper = shallow(<RateStars store={store}/>).dive().dive();
        expect(wrapper.find('span')).to.have.length(10);
    });

    it('all stars should be unselected', () => {
        const wrapper = shallow(<RateStars store={store}/>).dive().dive();
        expect(wrapper.find('.star-unselected')).to.have.lengthOf(10);
    });

    it('select 5th star', () => {
        const fixedStore =  mockStore({rate: 5});
        const wrapper = shallow(<RateStars store={fixedStore}/>).dive().dive();

        expect(wrapper.find('.star-unselected')).to.have.lengthOf(5);
        expect(wrapper.find('.star-selected')).to.have.lengthOf(5);
    });

    it('sendRate function execution', () => {
        let functionResult = 'none';
        const mockFunction = jest.fn(() => functionResult = 'execute sendRate');
        const wrapper = shallow(<RateStars store={store}/>).dive().dive();

        wrapper.instance().sendRate = mockFunction;
        wrapper.find('span').at(3).simulate('click');

        expect(functionResult).to.equal('execute sendRate');
    });

    it('markSelected function execution', () => {
        let functionResult = 0;
        const mockFunction = jest.fn((index) => functionResult = index);
        const wrapper = shallow(<RateStars store={store}/>).dive().dive();

        wrapper.instance().markSelected = mockFunction;
        wrapper.find('span').at(3).simulate('mouseOver');

        expect(functionResult).to.equal(4);
    });

});
