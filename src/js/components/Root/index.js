import React, { Component } from 'react';

import FactSheet from '../FactSheet';
import Loader from '../Loader';

class Root extends Component {
    state = {
        loaded: false,
        data: false,
    };

    componentDidMount () {
        const { apiUrl } = this.props;
        // fetch(apiUrl, { mode: 'no-cors' })
        fetch('./sampledata.json')
            .then(res => res.text())
            .then((data) => {
                this.setState({
                    loaded: true,
                    data,
                });
            })
            .catch(err => console.error(err));
    }

    render () {
        const { loaded, data } = this.state;
        return loaded ? (
            <FactSheet {...data} />
        ) : (
            <Loader />
        );
    }
}

export default Root;
