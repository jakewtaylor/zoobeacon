import React, { Component } from 'react';
import { css } from 'aphrodite';

import ThreeD from '../ThreeD';

import * as funcs from './funcs';

import { Sheet } from './components/Sheet';

import { styles } from './styles';

class FactSheet extends Component {
    state = {
        sheetOneVisible: false,
        sheetTwoVisible: false,
    }

    handleToggleSheet = name => this.setState(
        prev => ({
            [name]: !prev[name],
        }),
    )

    render () {
        const {
            name,
            latinName,
            status,
            facts,
            conservationFacts,
        } = this.props;

        const {
            sheetOneVisible,
            sheetTwoVisible,
        } = this.state;

        return (
            <div className={css(styles.container)}>
                <div className={css(styles.header)}>
                    <h1>{name}</h1>
                    <p className={css(styles.subtitle)}>{latinName}</p>

                    <ThreeD />
                </div>
                
                <Sheet
                    secondary
                    status={status}
                    title={funcs.status(status)}
                    toggle={() => this.handleToggleSheet('sheetTwoVisible')}
                    visible={sheetTwoVisible}
                    facts={conservationFacts}
                />

                <Sheet
                    title="Facts"
                    toggle={() => this.handleToggleSheet('sheetOneVisible')}
                    visible={sheetOneVisible}
                    facts={facts}
                />
            </div>
        );
    }
}

export default FactSheet;
