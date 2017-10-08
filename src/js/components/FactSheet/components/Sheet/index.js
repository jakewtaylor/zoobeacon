import React from 'react';
import { css, StyleSheet } from 'aphrodite';

import { Facts } from '../Facts';
import { Links } from '../Links';

import { styles, sheetStyles } from './styles';

export const Sheet = ({
    secondary,
    status,
    title,
    visible,
    facts,
    links,
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
                    secondary && !visible ? styles.sheetTitle_secondary_inactive : null,
                )}
                onClick={toggle}
            >
                {title}
            </h2>

            <Facts facts={facts} />
            {links ? (
                <Links links={links} />
            ) : null}
        </div>
    );
};

Sheet.defaultProps = {
    secondary: false,
};
