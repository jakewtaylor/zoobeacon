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
        backgroundColor: colors.darkBlue,
    },

    loader: {
        width: '10vw',
        height: '10vw',
        border: `5px solid ${colors.white}`,
        borderRight: '5px solid transparent',
        borderRadius: '50%',

        animationName: [spinner],
        animationDuration: '1s',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'linear',
    },
});
