/* eslint-disable react/prop-types */
import React from 'react'
import {Highlight, Snippet} from 'react-instantsearch-hooks-web'

function Hit({hit}) {
    // console.log(JSON.stringify(hit))
    // console.log(hit.breadcrumbs)
    const lastItem = Object.values(hit.breadcrumbs).pop()
    return (
        <div>
            {/* <h1>{hit.type}</h1> */}
            <article>
                <a href={hit.url}>
                    <h2>
                        <Highlight attribute="name" hit={hit} classNames={{}} />
                    </h2>
                <Snippet hit={hit} attribute="description" />
                {hit.type == 'Docs' ? (
                    <p>
                        {'📑 ' + hit.type} {lastItem}
                    </p>
                ) : (
                    <p>
                        {'🧰 ' + hit.type} {lastItem}
                    </p>
                )}
                </a>
            </article>
        </div>
    )
}

export default Hit
