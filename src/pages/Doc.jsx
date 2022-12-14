import {useContext, useEffect, useState} from 'react'
import Template from '../components/layout/Template'
import Breadcrumbs from '../components/Breadcrumbs'
import AppContext from '../context/AppContext'
import InnerHTML from 'dangerously-set-html-content'
import { useParams } from 'react-router-dom'
import Rest from "../models/Rest";
import $ from 'jquery'
import { toId } from '../lib/util'

export default function Doc() {
    const { _t, loading, setLoading } = useContext(AppContext)
    const [html, setHtml] = useState('')
    const params = useParams()

    useEffect(()=> {

        const updateAttrs = () => {
            $('section').each((i, el)=> {
                const label = $(el).find('h2').text()
                $(el).attr('aria-label', label).attr('id', toId(label))
            })

            $('h1, h2, h3, h4, h5, h6').each((i, el)=> {
                const label = $(el).text()
                let id = $(el).attr('id') || toId(label)
                $(el).attr('id', id)
            })
        }

        const getPage = (path) => {
            setLoading(true)
            try {
                path = path.replace('.html', '')
                const response = Rest.get(`${window.location.origin}/md${path}.md`, 'text/markdown')

                response.then((res) =>{
                    const md = res.text()
                    md.then((value) => {
                        if (value.indexOf('<!DOCTYPE html>') !== -1) {
                            window.location = '/404'
                        } else {
                            let htm = window.markdown.default(value)
                            htm = htm.replaceAll('<h2>', '</section><section><h2>')
                            htm = htm.replace('</section>', '')
                            htm =  htm + '</section>'
                            setHtml(htm)
                            setTimeout(()=>{
                                updateAttrs()
                            }, 1000)
                            setLoading(false)
                        }

                    })
                })
            } catch (e){
                console.error(e)
            }
        }
        let path = window.location.pathname
        path = path.length && path !== '/' ? window.location.pathname : '/index'

        getPage(path)

    }, [])


    return (
        <Template title={params['*'] || ''}>
            {!loading && <>
                <Breadcrumbs />
                <InnerHTML className='c-documentation' html={html} />
            </>}
        </Template>
    )
}
