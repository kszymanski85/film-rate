import React from "react";
import Adapter from 'enzyme-adapter-react-16';
import FilmBox from './components/FilmBox';
import FilmRow from './components/FilmRow';
import RateStars from './components/RateStars';
import configureMockStore from "redux-mock-store";
import { expect } from 'chai';
import { shallow, mount, render, configure } from 'enzyme';

const mockStore = configureMockStore();
const store = mockStore({});
configure({ adapter: new Adapter() });


describe("FilmBox component test", () => {
    it('renders without crashing', () => {
        shallow(<FilmBox store={store}/>);
    });
});


describe("FilmRow component test", () => {
    it('renders without crashing', () => {
        shallow(<FilmRow store={store}/>);
    });
});


describe("RateStars component test", () => {
    it('renders without crashing', () => {
        shallow(<RateStars store={store}/>);
    });

    it('render 10 rate stars', () => {
        const wrapper = mount(<RateStars store={store}/>);
        expect(wrapper.find('span')).to.have.length(10);
    });

    it('all stars should be unselected', () => {
        const wrapper = mount(<RateStars store={store}/>);
        expect(wrapper.find('.star-unselected')).to.have.lengthOf(10);
    });

    it('select 5th star', () => {
        const fixedStore =  mockStore({rate: 5});
        const wrapper = mount(<RateStars store={fixedStore}/>);
        expect(wrapper.find('.star-unselected')).to.have.lengthOf(5);
        expect(wrapper.find('.star-selected')).to.have.lengthOf(5);
    });

});



