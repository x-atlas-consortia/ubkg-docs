import App from './App'
import $ from 'jquery'
import { toId } from '../util'

class Sidebar extends App {

    constructor(el, args) {
        super(el, args)
        this.events()
        this.buildTableOfContents()
    }

    events() {
        $(document).on('scroll', ((e) => {
            const st = $(document).scrollTop()
            const headerHeight = 90
            if (st > headerHeight) {
                this.el.addClass(this.classNames.active)
            } else {
                this.el.removeClass(this.classNames.active)
            }
        }).bind(this))
    }

    buildTableOfContents() {

        let rootChildren = []
        let root = { tag: 'h0', c: rootChildren, p: {}, className: 'is-root' }
        let stack = [root]

        const traverse = (node, el, idx) => {
            if (!stack.length) return

            let top = stack[stack.length - 1]
            let n1 = Number(node[1])
            let n2 = Number(top.tag[1])
            const label = $(el).text()
            let id = $(el).attr('id') || toId(label)
            let pack = {tag: node, id, label, c: [], idx }
            if (n1 > n2) {
                pack.p = top
                top.c.push(pack)
                stack.push(pack)
            }
            else if (n1 === n2) {
                pack.p = top.p
                top.p.c.push(pack)
                stack.push(pack)
            } else {
                while (n1 < n2) {
                    stack.pop()
                    top = stack[stack.length - 1]
                    n2 = Number(top.tag[1])
                }
                traverse(node, el, idx)
            }
        }
        const $hs = $('.c-documentation').find('h1, h2, h3, h4, h5, h6')
        $hs.each((i, el)=> {
            const node = el.nodeName.toLowerCase()
            traverse(node, el, i)

        })

        App.log('The generated Table of Contents:', root)
        let html = `<ul>`
        let end = []
        html = this.getList(root, html, end)
        html += `</ul>`
        const $list = this.el.find('.js-sidebar__list')
        $list.html(html)

        // Remove with the root.
        const $main = '<ul>' + $list.find('.is-root ul').html() + '</ul>'
        $list.html($main)

    }


    getList(root, html, end = []) {

        let dfs = [root]

        let n = dfs[0].p.id !== dfs[dfs.length - 1].p.id ? dfs.pop() : dfs.shift()

        html += `<li ${n.className ? `class="${n.className}"` : ''}><a href="#${n.id}">${n.label}</a>`

        let children = n.c;
        if (children && children.length > 0) {
            html += `<ul>`
            for (let c of children) {
                html = this.getList(c, html, end)
            }
            html += `</ul>`
        }
        html += '</li>'
        return html

    }
}

export default Sidebar