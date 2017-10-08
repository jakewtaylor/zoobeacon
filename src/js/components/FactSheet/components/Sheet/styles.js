import { StyleSheet } from 'aphrodite';

import { colors } from '../../../../colors';

export const styles = StyleSheet.create({
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
    
    sheet_secondary: {
        borderRadius: '5px',
        height: '76vh',
        color: colors.white,
    },

    sheet_endangered: {
        background: '#D40202',
    },

    sheet_vulnerable: {
        background: '#E4BB03',
    },

    sheetTitle: {
        textAlign: 'center',
        color: colors.black,
        lineHeight: '10vh',
        cursor: 'pointer',
        '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)',
    },

    sheetTitle_secondary: {
        color: colors.white,
    },

    sheetTitle_secondary_inactive: {
        fontSize: '2.4vh',
        lineHeight: '8vh',
    },
});

export const sheetStyles = (visible, secondary) => secondary ? {
    bottom: visible ? '10vh' : '-60vh',
    margin: visible ? '0 3vh' : '0 10vh',
} : {
    bottom: visible ? 0 : '-77vh',
    margin: visible ? '0 3vh' : '0 5vh',
};
