import React from 'react'
import {useConnector} from 'react-instantsearch-hooks-web'
import connectStats from 'instantsearch.js/es/connectors/stats/connectStats'

export function useStats(props) {
    return useConnector(connectStats, props)
}

function Stats(props) {
    const {
        // hitsPerPage,
        nbHits,
        // areHitsSorted,
        // nbSortedHits,
        // nbPages,
        // page,
        // processingTimeMS,
        // query,
    } = useStats(props)

    return <p className="results">{nbHits} results found</p>
}

export default Stats
