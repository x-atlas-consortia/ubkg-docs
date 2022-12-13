import {useContext, useEffect} from 'react'
import PropTypes from 'prop-types'
import AppContext from "../../context/AppContext";


function Title({ title }) {
    const { _t } = useContext(AppContext)

    useEffect(() => {
        document.title = _t('SenNet Docs') + (title.length ? ' | '+ title : '')
    })

    return (
        <></>
    )
}

Title.defaultProps = {}

Title.propTypes = {
    title: PropTypes.string
}

export default Title