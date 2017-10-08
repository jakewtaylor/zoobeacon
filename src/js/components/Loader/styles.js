import { StyleSheet } from 'aphrodite';

import { colors } from '../../colors';

const spinner = {
    to: {
        transform: 'rotate(360deg)',
    },
};

export const styles = StyleSheet.create({
    container: {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,
    },

    loader: {
        width: '10vw',
        height: '10vw',
        border: `1vw solid ${colors.white}`,
        borderRight: '1vw solid transparent',
        borderRadius: '50%',

        animationName: [spinner],
        animationDuration: '1.5s',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'linear',
    },
});
