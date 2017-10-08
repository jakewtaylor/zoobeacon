import { StyleSheet } from 'aphrodite';

export const styles = StyleSheet.create({
    factsContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },

    fact: {
        flexBasis: '40%',
        marginBottom: '3vh',
        fontSize: '3vh',
    },

    label: {
        fontWeight: 'bold',
    },

    value: {

    },
});
