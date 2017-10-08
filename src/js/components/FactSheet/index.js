import React, { Component } from 'react';
import { css } from 'aphrodite';

import ThreeD from '../ThreeD';

import * as funcs from './funcs';

import { styles } from './styles';

class FactSheet extends Component {
    state = { visible: false }

    toggleSheet = () => this.setState(
        prev => ({
            visible: !prev.visible,
        }),
    );

    render () {
        const {
            name,
            latinName,
            status,
            facts,
        } = this.props;

        const {
            visible,
        } = this.state;

        const endangeredStyles = css(
            styles.threat,
            styles[`threat_${status}`],
        );

        return (
            <div className={css(styles.container)}>
                <div className={css(styles.header)}>
                    <h1>{name}</h1>
                    <p className={css(styles.subtitle)}>{latinName}</p>

                    <ThreeD />

                    <div className={endangeredStyles}>
                        <h2>{funcs.status(status)}</h2>
                    </div>
                </div>

                <Sheet
                    visible={visible}
                    facts={facts}
                />
                {/*
                <div
                    className={css(styles.sheet)}
                    style={funcs.sheetStyles(visible)}
                >
                    <h2
                        className={css(styles.sheetTitle)}
                        onClick={this.toggleSheet}
                    >
                        Facts
                    </h2>

                    <div>
                    </div>
                </div>
                */}
            </div>
        );
    }
}

export default FactSheet;
