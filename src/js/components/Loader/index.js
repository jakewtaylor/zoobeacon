import React from 'react';
import { css } from 'aphrodite';

import { styles } from './styles';

const Loader = () => (
    <div className={css(styles.container)}>
        <div className={css(styles.loader)} />
    </div>
);

export default Loader;
