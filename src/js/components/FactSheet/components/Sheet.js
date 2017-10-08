import React from 'react';
import { css, StyleSheet } from 'aphrodite';

import { sheetStyles } from '../funcs';

import { Facts } from './Facts';

export const Sheet = ({ visible, facts }) => (
    <div
        className={css(styles.sheet)}
        style={sheetStyles(visible)}
    >
        <h2
            className={css(styles.sheetTitle)}
            onClick={this.toggleSheet}
        >
            Facts
        </h2>

        <Facts facts={facts} />
    </div>
);

const styles = StyleSheet.create({
    sheet: {
        background: colors.white,
        borderRadius: '5px 5px 0 0',
        height: '86vh',
        position: 'absolute',
        left: 0,
        right: 0,
        transition: 'all .2s',
        boxShadow: '0 3px 15px rgba(54, 52, 57, 0.4)',
    },

    sheetTitle: {
        textAlign: 'center',
        color: colors.black,
        lineHeight: '10vh',
        cursor: 'pointer',
    },
})
