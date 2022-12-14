import { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import AppContext from '../context/AppContext'
import { CLASS_NAMES } from '../lib/constants'
import $ from 'jquery'
import { toId } from '../lib/util'

function Sidebar({ active }) {
    const { _t, loading } = useContext(AppContext)
    const $el = {}

    const events = () => {
        $(document).on('scroll', (e) => {
            const st = $(document).scrollTop()
            const headerHeight = 90
            if (st > headerHeight) {
                $el.sidebar.addClass(CLASS_NAMES.active)
            } else {
                $el.sidebar.removeClass(CLASS_NAMES.active)
            }
        })
    }

    const buildToC = () => {
        return <></>
    }

    useEffect(() => {
        $el.sidebar = $('.js-sidebar')
        events()

    }, [])

    return (
        <div
            className='c-sidebar js-sidebar'
            role='navigation'
            aria-label='Table of Contents'
        >
            <div className='c-sidebar__wrap'>
                <div className='c-sidebar__main'>
                    <h2>{_t('Table of Contents')}</h2>
                    {!loading && buildToC()}
                </div>
            </div>
        </div>
    )
}

Sidebar.defaultProps = {}

Sidebar.propTypes = {
    active: PropTypes.object
}

export default Sidebar
