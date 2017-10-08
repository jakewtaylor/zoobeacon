export const status = s => ({
    leastConcern: 'Least Concern',
    nearThreatened: 'Near Threatened',
    vulnerable: 'Vulnerable',
    endangered: 'Endangered',
    criticallyEndangered: 'Critically Endangered',
    extinctInTheWild: 'Extinct In The Wild',
    extinct: 'Extinct',
})[s];

export const sheetStyles = visible => ({
    bottom: visible ? 0 : '-76vh',
    margin: visible ? '0 3vh' : '0 5vh',
});
