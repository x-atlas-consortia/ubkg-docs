import { useContext, useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import AppContext from '../context/AppContext'
import { CLASS_NAMES } from '../lib/constants'
import $ from 'jquery'
import { toId } from '../lib/util'

function Sidebar({ active }) {
    const { _t, loading } = useContext(AppContext)
    const $el = {}
    const [list, setList] = useState([])
    const initialized = useRef(false)

    const events = () => {
        $(document).on('scroll', (e) => {
            const st = $(document).scrollTop()
            const headerHeight = 90
            if (st > headerHeight) {
                $el.sidebar.addClass(CLASS_NAMES.active)
            } else {
                $el.sidebar.removeClass(CLASS_NAMES.active)
            }
        })
    }

    // const buildToC = () => {
    //     if (initialized.current) return
    //     console.log('All side')
    //     let root = []
    //     let stack = [{ tag: 'h0', c: root }]
    //
    //     const traverse = (node, el, idx) => {
    //         if (!stack.length) return
    //
    //         let top = stack[stack.length - 1]
    //         let n1 = Number(node[1])
    //         let n2 = Number(top.tag[1])
    //         const label = $(el).text()
    //         let id = $(el).attr('id') || toId(label)
    //         let pack = {tag: node, id, label, c: [], idx }
    //         if (n1 > n2) {
    //             pack.p = top
    //             top.c.push(pack)
    //             stack.push(pack)
    //         }
    //         else if (n1 === n2) {
    //             pack.p = top.p
    //             top.p.c.push(pack)
    //             stack.push(pack)
    //         } else {
    //             while (n1 < n2) {
    //                 stack.pop()
    //                 top = stack[stack.length - 1]
    //                 n2 = Number(top.tag[1])
    //             }
    //             traverse(node, el, idx)
    //         }
    //     }
    //     const $hs = $('.c-documentation').find('h1, h2, h3, h4, h5, h6')
    //     let tot = $hs.length - 1
    //     $hs.each((i, el)=> {
    //         const node = el.nodeName.toLowerCase()
    //         traverse(node, el, i)
    //         if (i === tot) {
    //             initialized.current = true
    //         }
    //
    //     })
    //     console.log(root)
    //     getList(root)
    //     return <></>
    // }



    useEffect(() => {
        $el.sidebar = $('.js-sidebar')
        events()

    }, [])

    return (
        <div
            className='c-sidebar js-sidebar'
            role='navigation'
            aria-label='Table of Contents'
        >
            <div className='c-sidebar__wrap'>
                <div className='c-sidebar__main'>
                    <h2>{_t('Table of Contents')}</h2>
                    <div className='c-sidebar__list js-sidebar__list'></div>

                </div>
            </div>
        </div>
    )
}

Sidebar.defaultProps = {}

Sidebar.propTypes = {
    active: PropTypes.object
}

export default Sidebar
