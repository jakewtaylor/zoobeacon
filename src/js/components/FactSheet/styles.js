import { StyleSheet } from 'aphrodite';

import { colors } from '../../colors';

export const styles = StyleSheet.create({
    container: {
        background: `radial-gradient(
            circle at center,
            ${colors.primary_light} 0,
            ${colors.primary} 100%
        )`,
        height: '100%',
        overflow: 'hidden',
    },

    header: {
        padding: '3vh 5vh',
        color: colors.white,
        textAlign: 'center',
        textShadow: '0 2px 15px rgba(0, 0, 0, 0.6)',
    },

    subtitle: {
        fontStyle: 'italic',
        lineHeight: 3,
    },

    threat: {
        textTransform: 'uppercase',
        padding: '0 2vh',
        margin: '0 8vh',
        lineHeight: '8vh',
        borderRadius: '5px 5px 0 0',
        boxShadow: '0 3px 15px rgba(54, 52, 57, 0.4)',
        position: 'absolute',
        bottom: '9vh',
        left: 0,
        right: 0,
    },

    threat_endangered: {
        backgroundColor: '#CF0B0B',
    },

});