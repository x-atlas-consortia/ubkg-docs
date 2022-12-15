import { useContext } from 'react'
import PropTypes from 'prop-types'
import AppContext from '../context/AppContext'

function Sidebar({ active }) {
    const { _t } = useContext(AppContext)

    return (
        <div
            className='c-sidebar js-sidebar'
            role='navigation'
            aria-label='Table of Contents'
        >
            <div className='c-sidebar__wrap'>
                <div className='c-sidebar__main js-sidebar__main'>
                    <h2>{_t('Table of Contents')}</h2>
                    <div className='c-sidebar__list js-sidebar__list'></div>

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
