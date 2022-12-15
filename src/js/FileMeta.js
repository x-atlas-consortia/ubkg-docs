
class FileMeta extends App {
    constructor(el, args) {
        super(el, args)
        this.$span = this.el.find('span')
        this.addDate()
    }

    addDate() {
        let lastMod = null;
        try {
            const path = window.location.pathname
            let paths = [path + '.md']
            if (path.indexOf('.htm') === -1) {
                paths.push(path + '.html')
                paths.push(path + '.htm')
            }
            const _t = this
            for (let p of paths) {
                if (this.$span.html().length) return
                fetch(p).then(r => {
                    lastMod = r.headers.get('last-modified')
                    _t.$span.html(lastMod)
                    return r.text()
                })
            }
        } catch (e) {
            App.log(this.app, e, {fn: 'error'})
        }


    }
}