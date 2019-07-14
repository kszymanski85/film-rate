import React from "react";
import {connect} from "react-redux";
import './FilmBox.css';
import { listeners } from '../Listeners'

class RateStars extends React.Component {
    markSelected(index) {
        this.props.dispatch({type: 'SET_RATE', rate: index});
    }

    sendRate() {
        listeners.rateListener(this.props.rate);
    }

    render() {
        let stars = Array.from(Array(10).keys()).map((star, index) => {
            return(
                <span key={index}
                      onClick={() => this.sendRate()}
                      onMouseOver={() => this.markSelected(index+1)}
                      className={this.props.rate > index ? 'star-selected' : 'star-unselected'}>&#9733;</span>
            );
        });
        return (
            <div className="stars" onMouseOut={() => this.markSelected(0)}>
                {stars}
                <div className="star-description">click the star to save rate</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        rate: state.rate
    };
}


export default connect(mapStateToProps)(RateStars);