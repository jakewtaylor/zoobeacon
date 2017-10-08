import React from 'react';
import { css } from 'aphrodite';

import { styles } from './styles';

export const Facts = ({ facts }) => (
    <div className={css(styles.factsContainer)}>
        {facts.map(({ key, value }) => (
            <div key={key} className={css(styles.fact)}>
                <p className={css(styles.label)}>{key}</p>
                <p className={css(styles.value)}>{
                    Array.isArray(value)
                        ? value.join(', ')
                        : value
                }</p>
            </div>
        ))}
    </div>
);