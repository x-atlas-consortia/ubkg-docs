class Header extends App {
    constructor(el, args) {
        super(el, args)
        this.$ = {
            li: this.el.find('.js-header__menu ul li')
        }
        this.syncHeader()
    }

    async syncHeader() {
        let res = await Rest.get(`/lang/${LocalStore.getLanguage()}.json`)
        let lang = await res.json()

        let x = 1
        for (let li of lang.menu) {
            let $li = this.$.li.eq(x)

            if (li.name !== $li.text())  {
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