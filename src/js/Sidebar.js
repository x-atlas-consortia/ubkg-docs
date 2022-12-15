class Sidebar extends App {

    constructor(el, args) {
        super(el, args)
        this.$ = {
            main: this.el.find('.js-sidebar__main'),
            list: this.el.find('.js-sidebar__list'),
            hs: $('.c-documentation').find('h1, h2, h3, h4, h5, h6')
        }
        this.$.main.css('max-width', this.el.width() - 100)
        this.classNames.root = 'is-root'
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
        let root = { tag: 'h0', c: rootChildren, p: {}, className: this.classNames.root }
        let stack = [root]

        const traverse = (node, el, idx) => {
            if (!stack.length) return

            let top = stack[stack.length - 1]
            let n1 = Number(node[1])
            let n2 = Number(top.tag[1])
            const label = $(el).text()
            let id = $(el).attr('id') || this.toId(label)
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

        this.$.hs.each((i, el)=> {
            const node = el.nodeName.toLowerCase()
            traverse(node, el, i)
        })

        App.log('The generated Table of Contents:', root)
        if (root.c.length) {
            let html = `<ul>`
            let end = []
            html = this.getList(root, html, end)
            html += `</ul>`
            this.$.list.html(html)

            // Remove with the root.
            const $main = '<ul>' + this.$.list.find(`.${this.classNames.root} ul`).html() + '</ul>'
            this.$.list.html($main)
        }
    }


    getList(root, html, end = []) {

        let n = root

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

