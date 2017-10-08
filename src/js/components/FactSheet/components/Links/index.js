import React from 'react';
import { css } from 'aphrodite';

import { styles } from './styles';

export const Links = ({ links }) => (
    <div className={css(styles.factsContainer)}>
        {links.map(({ key, value }) => (
            <div key={key} className={css(styles.fact)}>
                <p className={css(styles.label)}>{key}</p>
                <p className={css(styles.value)}>
                    <a
                        href={value}
                        target="_blank"
                    >
                        {value}
                    </a>
                </p>
            </div>
        ))}
    </div>
);