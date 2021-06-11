const BASE_URL = 'https://api.teztracker.com/v2/data/tezos/mainnet'

export const fetchTezosBlocks = (pageNum) => fetch(BASE_URL + `/blocks?limit=15&offset=${pageNum}`).then(response => response.json())
