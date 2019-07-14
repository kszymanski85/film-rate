import React from "react";
import { connect } from 'react-redux';
import './FilmBox.css';
import FilmRow from './FilmRow';
import { listeners } from '../Listeners'

class FilmBox extends React.Component {
    getData() {
        fetch('/films')
            .then(res => res.json())
            .then(
                (response) => {
                    this.props.dispatch({type: 'SET_DATA', data: response});
                },
                (error) => {
                    console.error('Error occurred during getting data');
                    console.error(error);
                }
            )
    }

    sendRate(rate) {
        fetch('/rate', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({id: this.props.opened, rate: rate})
        }).then(
            (response) => {
                this.getData();
            },
            (error) => {
                console.error('Error occurred during saving rate');
                console.error(error);
            });
    }

    componentDidMount() {
        this.getData();
        listeners.rateListener = (rate) => this.sendRate(rate);
    }

    setOpened(index) {
        if(index === this.props.opened) {
            this.props.dispatch({type: 'SET_OPENED', opened: 0});
        } else {
            this.props.dispatch({type: 'SET_OPENED', opened: index});
        }
    }

    render() {
        const mapRows = this.props.data.map((item, index) => {
            return (
                <div key={index} onClick={() => this.setOpened(item._id)}>
                    <FilmRow row={item} opened={this.props.opened}/>
                </div>
            );
        });
        return (
            <div>
                <div className="grid-box box-header">
                    <div className="grid-item">Title</div>
                    <div className="grid-item">Release Date</div>
                    <div className="grid-item">Type</div>
                    <div className="grid-item">Rating</div>
                </div>
                {mapRows}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        opened: state.opened,
        data: state.data
    };
}

export default connect(mapStateToProps)(FilmBox);