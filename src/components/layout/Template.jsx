import { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import AppContext from '../../context/AppContext'
import Sidebar from '../Sidebar'
import Title from "./Title";

function Template({ title, children, sidebar = true }) {
    const { _t, loading } = useContext(AppContext)
    useEffect(() => {}, [])

    return (
        <>
            <Title title={title} />
            <Header />
            {sidebar && !loading && <Sidebar />}
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
