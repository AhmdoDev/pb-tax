class pbtax {
    static tax(amount, wasit) {
        if(!amount) throw new Error(`Please specify a valid number.`)
        var wasitn = 0
        if(!wasit) var wasitn = 1.05
        if(wasit) {
            var wasitn = 1 + parseInt(wasit)
        }
        if(amount <= 0) throw new Error(`${amount} is not a valid number which has to be greater than 0!`)
        if(wasit <= 0)  throw new Error(`${amount} is not a valid number which has to be greater than 0!`)

        var tax = Math.floor(amount * 0.95)
        var all = Math.floor((amount * 20/19) + 1)
        var wasitx = Math.floor(all * wasitn)

        var exportings = {
            "tax": tax,
            "all": all,
            "wasit": wasitx
        }

        return exportings
    }
}

module.exports = pbtax