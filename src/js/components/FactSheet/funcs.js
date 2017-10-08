export const status = s => ({
    leastConcern: 'Least Concern',
    nearThreatened: 'Near Threatened',
    vulnerable: 'Vulnerable',
    endangered: 'Endangered',
    criticallyEndangered: 'Critically Endangered',
    extinctInTheWild: 'Extinct In The Wild',
    extinct: 'Extinct',
})[s];
