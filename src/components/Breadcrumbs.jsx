import { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import $ from 'jquery'

function Breadcrumbs({ crumbs, active }) {

    const buildCrumbs = () => {
        const list = []
        const path = window.location.pathname

        list.push(<li key='0-home'><a href={`/`}>Home</a></li>)
        if (path === '/') {
            return
        }
        let parts = path.split('/')

        for (let i = 0; i < parts.length; i++) {
            if (parts[i].length) {
                list.push(<li key={`${i}-${parts[i]}`}><a href={`${parts.slice(0, i + 1).join('/')}`}>{parts[i]}</a></li>)
            }
        }

        return list
    }

    return (
        <div
            className='c-breadcrumbs js-breadcrumbs'
            role='navigation'
            aria-label='Breadcrumbs'
        >
            <div className='c-breadcrumbs__main js-breadcrumbs__main'>
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
