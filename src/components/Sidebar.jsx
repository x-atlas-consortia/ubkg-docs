import {useContext, useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import AppContext from "../context/AppContext";

function Sidebar({ active }) {
    const { _t } = useContext(AppContext)
    useEffect(() => {
    }, [])

    return (
        <div className={`c-sidebar`} role='navigation' aria-label='Table of Contents'>
            <h2>{_t('Table of Contents')}</h2>
        </div>
    )
}

Sidebar.defaultProps = {}

Sidebar.propTypes = {
    active: PropTypes.object
}

export default Sidebar