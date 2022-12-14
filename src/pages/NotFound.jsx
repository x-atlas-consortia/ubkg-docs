import { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import AppContext from '../context/AppContext'
import Template from '../components/layout/Template'

function NotFound({ children }) {
    const { _t } = useContext(AppContext)
    useEffect(() => {
    }, [])

    return (
        <Template title={_t('Not Found')} sidebar={false}>
            <div className={`c-notFound`}>
                <h1>{_t('Not Found')}</h1>
                <p>{_t('The requested page could not be found.')}</p>
            </div>
        </Template>
    )
}

NotFound.defaultProps = {}

NotFound.propTypes = {
    children: PropTypes.node
}

export default NotFound