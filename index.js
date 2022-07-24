    module.exports = function tax(amount) {
        var amountt = `${amount}`
        var amount1 = parseFloat(amountt)
        if(!amount1) throw new Error(`Please specify a valid number.`)
        if(amount1 <= 0) throw new Error(`${amount} is not a valid number which has to be greater than 0!`)

        var protax = Math.floor(amount1 * 0.95)
        var tax = Math.floor(amount1 / 20)
        var all = Math.floor((amount1 * 20/19) + 1)
        var wasitx = Math.round((all * (20 / 19)) + 1)

        var exportings = {
            "protax": protax,
            "tax": tax,
            "all": all,
            "wasit": wasitx
        }

        return exportings
    }
    