import { createContext, useEffect, useState } from 'react'
import {LOCALE} from "../fixtures/constants";
import LocalStore from "../models/LocalStore";
import Rest from "../models/Rest";

const AppContext = createContext()

export const AppProvider = ({ children }) => {

    const [language, setLanguage] = useState(LOCALE.english)
    const [messages, setMessages] = useState({})

    useEffect(() => {
        try {
            const loadLanguage = async () => {
                setLanguage(LocalStore.getLanguage() || LOCALE.english)
                let response = await Rest.get(`${window.location.origin}/lang/${language}.json`)
                let data = await response.json()
                setMessages(data)
            }

            loadLanguage()
        } catch (e) {

        }

    }, [language])

    const _t = (msg) => {
        return messages ? messages[msg] || msg : msg
    }

    return (
        <AppContext.Provider
            value={{
                _t
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export default AppContext