import { StyleSheet } from 'aphrodite';

import { colors } from '../../colors';

export const styles = StyleSheet.create({
    container: {
        background: colors.primary,
        height: '100%',
        overflow: 'hidden',
    },

    header: {
        padding: '3vh 5vh',
        color: colors.white,
        textAlign: 'center',
    },

    subtitle: {
        fontStyle: 'italic',
        lineHeight: 3,
    },

    threat: {
        textTransform: 'uppercase',
        padding: '2vh',
        borderRadius: '5px',
        boxShadow: '0 3px 15px rgba(54, 52, 57, 0.4)',
    },

    threat_endangered: {
        backgroundColor: '#CF0B0B',
    },

});