import { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

function Breadcrumbs({ crumbs, active }) {
    const buildCrumbs = () => {
        const list = []
        for (let c of crumbs) {
            list.push(<li key={c.id}><a href={c.href || '#'}>{c.name}</a></li>)
        }
        return list
    }

    return (
        <div
            className={`c-breadcrumbs`}
            role='navigation'
            aria-label='Breadcrumbs'
        >
            <div className='c-breadcrumbs__main'>
                <ul>{buildCrumbs()}</ul>
            </div>
        </div>
    )
}

Breadcrumbs.defaultProps = {}

Breadcrumbs.propTypes = {
    crumbs: PropTypes.array,
    active: PropTypes.object
}

export default Breadcrumbs
