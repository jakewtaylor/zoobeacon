import React from 'react';
import { css, StyleSheet } from 'aphrodite';

import { Facts } from '../Facts';

import { styles, sheetStyles } from './styles';

export const Sheet = ({
    secondary,
    status,
    title,
    visible,
    facts,
    toggle,
}) => {
    return (
        <div
            className={css(
                styles.sheet,
                secondary ? styles.sheet_secondary : null,
                secondary ? styles[`sheet_${status}`] : null,
            )}
            style={sheetStyles(visible, secondary)}
        >
            <h2
                className={css(
                    styles.sheetTitle,
                    secondary ? styles.sheetTitle_secondary : null,
                )}
                onClick={toggle}
            >
                {title}
            </h2>

            <Facts facts={facts} />
        </div>
    );
};

Sheet.defaultProps = {
    secondary: false,
};
