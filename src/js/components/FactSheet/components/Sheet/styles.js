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
        background: '#DCB403',
    },

    sheetTitle: {
        textAlign: 'center',
        color: colors.black,
        lineHeight: '10vh',
        cursor: 'pointer',
    },

    sheetTitle_secondary: {
        color: colors.white,
    },
});

export const sheetStyles = (visible, secondary) => secondary ? {
    bottom: visible ? '10vh' : '-59vh',
    margin: visible ? '0 3vh' : '0 6vh',
} : {
    bottom: visible ? 0 : '-77vh',
    margin: visible ? '0 3vh' : '0 5vh',
};
