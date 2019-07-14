import React from "react";
import {connect} from "react-redux";
import './FilmBox.css';
import RateStars from './RateStars';

class FilmRow extends React.Component {
    calculateRange() {
        let rating = this.props.row.rating;
        if (!rating || rating === 0) {
            return 'Brak oceny';
        }
        return Math.round(rating * 100) / 100;
    }

    shouldHide() {
        return this.props.row._id === this.props.opened;
    }

    calculateImage() {
        switch(this.props.row.type) {
            case 'A':
                return(<span>&#9762;</span>);
            case 'B':
                return(<span>&#9763;</span>);
            case 'C':
                return(<span>&#9770;</span>);
            default:
                return(<span>&#63;</span>);
        }
    }

    render() {
        return (
            <div className="film-row">
                <div className="grid-box">
                    <div className="grid-item">{this.props.row.title}</div>
                    <div className="grid-item">{this.props.row.releaseDate}</div>
                    <div className="grid-item grid-image">{this.calculateImage()}</div>
                    <div className="grid-item">{this.calculateRange()}</div>
                </div>
                <div className={this.shouldHide() ? '' : 'hide'}>
                    <RateStars/>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        opened: state.opened
    };
}

export default connect(mapStateToProps)(FilmRow);