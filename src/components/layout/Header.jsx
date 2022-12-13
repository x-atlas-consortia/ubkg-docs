import { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import AppContext from "../../context/AppContext";

function Header({ children }) {
    const { _t } = useContext(AppContext)
    useEffect(() => {}, [])

    const getList = () => {
        const list = []
        let i = 0
        for (let m of _t('menu')) {
            list.push(<li key={i} className={m.className}><a href={m.href}>{m.name}</a></li>)
            i++
        }
        return list
    }
    return (
        <header className={`c-header`} role='navigation'>
            <div className='c-header__main'>
                <div className='c-header__menu'>
                    <ul>{getList()}</ul>
                </div>
            </div>

        </header>
    )
}

Header.defaultProps = {}

Header.propTypes = {
    children: PropTypes.node
}

export default Header
