class App {
    constructor(el, args) {
        this.el = $(el)
        this.app = args.app
        this.data = args.data
        this.keycodes = {
            enter: 'Enter',
            esc: 'Escape'
        }
        this.classNames = {
            active: 'is-active'
        }
        this.log(this.app, null, {color: 'orange'})
    }

    toId(val) {
        return val.toLowerCase().replace(/[\W_]+/g, " ").trim().replaceAll(' ', '-')
    }

    toUpperCaseFirst(val) {
        return val.charAt(0).toUpperCase() + val.slice(1)
    }

    handleKeydown(e, trigger) {
        this.currentTarget(e).trigger(trigger)
        this.currentTarget(e).focus()
    }

    onKeydownEnter(sel, cb, trigger = 'click') {
        this.el.on('keydown', `${sel}`, ((e) => {
            if (this.isEnter(e)) {
                cb ? cb(e) : this.handleKeydown(e, trigger)
            }
        }).bind(this))
    }

    currentTarget(e) {
        return $(e.currentTarget)
    }
    /**
     * Prevents bubbling of javascript event to parent
     * @param {*} e Javascript event
     */
    stop(e) {
        e.stopPropagation()
    }

    /**
     * Determines whether a keydown/keypress operation is of Enter/13
     * @param {object} e Event
     * @returns {boolean}
     */
    isEnter(e) {
        return e.code === this.keycodes.enter
    }

    isEsc(e) {
        return e.code === this.keycodes.esc
    }

    static isLocal() {
        return (window.location.host.indexOf('localhost') !== -1)
    }

    static log(title, msg, ops = {}) {
        const fn = ops.fn || (ops.error ? 'error' : 'log')
        const color = ops.color || (ops.error ? 'red' : '#bada55')
        if (App.isLocal()) {
            console[fn](`%c ${title}`, `background: #222; color: ${color}`)
            if (msg) {
                console[fn](msg)
            }

        }
    }

    log(title, msg, ops = {}) {
        App.log(title, msg, ops)
    }
}

