
class FileMeta extends App {
    constructor(el, args) {
        super(el, args)
        this.$ = {
            date: this.el.find('.js-fileMeta__date'),
            label: this.el.find('.js-fileMeta__label')
        }
        this.addDate()
    }

    addDate() {
        let lastMod = null;
        try {
            const path = window.location.pathname
            if (!path) return
            let paths = [path + '.md']
            if (path.indexOf('.htm') === -1) {
                paths.push(path + '.html')
                paths.push(path + '.htm')
            }

            for (let p of paths) {
                if (this.$.date.html() && this.$.date.html().length ) return
                fetch(p).then((r => {
                    if (r.ok) {
                        lastMod = r.headers.get('last-modified')
                        this.$.date.html(lastMod)
                        this.$.label.addClass(this.classNames.active)
                    } else {
                        this.$.label.removeClass(this.classNames.active)
                        App.log(`Error: ${r.status}`, r.statusText, {error: true})
                    }
                    return r.text()
                }).bind(this))
            }
        } catch (e) {
            App.log(this.app, e, {error: true})
        }


    }
}