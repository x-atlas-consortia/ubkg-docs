import { useContext, useEffect, useState } from 'react'
import { CLASS_NAMES } from '../lib/constants'
import { toUpperCaseFirst } from '../lib/util'
import AppContext from '../context/AppContext'

function Breadcrumbs() {
    const { _t } = useContext(AppContext)

    const buildCrumbs = () => {
        const list = []
        const path = window.location.pathname

        list.push(<li key='0-home'><a href={`/`}>{_t('Home')}</a></li>)
        if (path === '/') {
            return
        }
        let parts = path.split('/')
        let href
        let name
        for (let i = 0; i < parts.length; i++) {
            name = parts[i]
            if (name.length) {
                href = parts.slice(0, i + 1).join('/')
                list.push(<li key={`${i}-${name}`} className={i === parts.length - 1 ? CLASS_NAMES.active : ''}><a href={href}>{toUpperCaseFirst(name)}</a></li>)
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

export default Breadcrumbs
