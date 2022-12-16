class Header extends App {
    constructor(el, args) {
        super(el, args)
        this.$ = {
            li: this.el.find('.js-header__menu ul li')
        }
        this.syncHeader()
    }

    async syncHeader() {
        if (!this.msgs.menu) return
        let x = 1
        for (let li of this.msgs.menu) {
            this.log(`Menu ${x}`, li)
            let $li = this.$.li.eq(x)

            if (li.name !== $li.text()) {
                $li.text(li.name)
            }

            for (let attr of ['href', 'class']) {
                if (li[attr] !== $li.attr(attr)) {
                    $li.attr(attr, li[attr])
                }
            }

            x++
        }
    }
}
