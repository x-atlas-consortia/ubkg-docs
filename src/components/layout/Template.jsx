import { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import AppContext from '../../context/AppContext'
import Title from "./Title";

function Template({ title, children }) {
    const { _t } = useContext(AppContext)
    useEffect(() => {}, [])

    return (
        <>
            <Title title={title} />
            <Header />
            <div className='c-container' role='main'>
                {children}
            </div>
            <footer className='c-footer'>
                <div className='c-footer__main'>{_t('SenNet Docs')}</div>
            </footer>
        </>
    )
}

Template.defaultProps = {}

Template.propTypes = {
    children: PropTypes.node
}

export default Template
