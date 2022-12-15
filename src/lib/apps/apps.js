/**
 * JS functionality which enhance site functionality, not necessarily part of the core.
 * @param {string} source
 * @param {object} args
 * @returns
 */
import App from './App'
import Sidebar from './Sidebar'

function apps(source, args= null) {
    App.log('Apps started ...')
    window.apps = window.apps || {}
    if (window.apps[source] !== undefined) {
        return
    }
    window.apps[source] = args

    let apps = {
        sidebar: Sidebar
    }

    setTimeout(() => {
        args = args || window.apps.init
        try {
            for (let app in apps) {
                document
                    .querySelectorAll(`[class*='js-${app}'], [data-js-${app}]`)
                    .forEach((el) => {
                        new apps[app](el, {app, ...args })
                    })
            }


        } catch (e) {
            console.error(e)
        }
    }, 1000)

}

export default apps