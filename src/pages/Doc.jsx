import {useContext, useEffect, useState} from 'react'
import Template from '../components/layout/Template'
import AppContext from '../context/AppContext'
import InnerHTML from 'dangerously-set-html-content'
import { useParams } from 'react-router-dom'
import Rest from "../models/Rest";
import $ from 'jquery'

export default function Doc() {
    const { _t } = useContext(AppContext)
    const [html, setHtml] = useState('')
    const [loading, setLoading] = useState(true)
    const params = useParams()

    useEffect(()=> {
        const updateAttrs = () => {
            $('section').each((i, el)=> {
                const label = $(el).find('h2').text()
                $(el).attr('aria-label', label).attr('id', label.toLowerCase().replaceAll(' ', '-'))
            })
        }

        const getPage = (path) => {
            setLoading(true)
            const response = Rest.get(`${window.location.origin}/docs/${path}.md`, 'text/plain')

            response.then((res) =>{
                const md = res.text()
                md.then((value) => {
                    let htm = window.markdown.default(value)
                    htm = htm.replaceAll('<h2>', '</section><section><h2>')
                    htm = htm.replace('</section>', '')
                    htm =  htm + '</section>'
                    setHtml(htm)
                    setLoading(false)

                    setTimeout(()=>{
                        updateAttrs()
                    }, 1000)
                })
            })
        }

        getPage('index')
    }, [])


    return (
        <Template title={params['*'] || ''}>
            {!loading && <InnerHTML html={html} /> }
        </Template>
    )
}
