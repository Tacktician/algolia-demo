import React, {useRef} from 'react'
import algoliasearch from 'algoliasearch/lite'
import {
    Configure,
    Hits,
    InstantSearch,
    Pagination,
    SearchBox,
    RefinementList,
} from 'react-instantsearch-hooks-web'
import 'instantsearch.css/themes/reset.css'

import Hit from './components/hit.js'
import Modal from './components/modal.jsx'
import Stats from './components/stats.jsx'

const searchClient = algoliasearch(
    'RO95H65NEO',
    '8d249abc4671e5554fe8f451ffa5db50',
)

function App() {
    const modal = useRef(null)
    return (
        <InstantSearch
            searchClient={searchClient}
            indexName="crawler_help_center">
            <Modal ref={modal}>
                <Configure hitsPerPage={15} />
                <SearchBox
                    placeholder="🔎 Search"
                    onSubmit={() => modal.current.open()}
                />
                <Hits hitComponent={Hit} />
                <div className="refinement">
                    <Stats />
                    <RefinementList
                        className="toogle-refinement"
                        attribute="type"
                    />
                </div>
                <Pagination
                    className="pagination"
                    showFirst={false}
                    showLast={false}
                />
            </Modal>
        </InstantSearch>
    )
}

export default App
