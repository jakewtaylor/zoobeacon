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
        //fetch(apiUrl)
        fetch('./sampledata.json')
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    loaded: true,
                    data,
                });
            })
            .catch(err => console.dir(err));
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
