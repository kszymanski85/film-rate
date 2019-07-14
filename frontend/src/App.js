import React from 'react';
import { connect } from 'react-redux';
import FilmBox from './components/FilmBox';

function App() {
    return (
        <FilmBox/>
    );
}

export default connect()(App);