<a href="https://www.npmjs.com/package/pb-tax"><img src="https://img.shields.io/npm/v/pb-tax.svg?maxAge=3600" alt="npm version" /></a>
<a href="https://www.npmjs.com/package/pb-tax"><img src="https://img.shields.io/npm/dt/pb-tax.svg?maxAge=3600" alt="npm downloads" /></a>
<a href="https://github.com/AhmdoDev"><img src="https://img.shields.io/static/v1?label=Made%20By&message=AhmdoDev&maxAge=3600" alt="creator" /></a>
## **🇺🇸 En** :
 is an easy and simple package used efficiently to calculate discord's most advanced bot: **[ProBot](https://probot.io/en)**

## **🇸🇦 Ar** : 
عبارة عن بكج سهلة وبسيطة تُستخدم بكفاءة لحساب بوت الديسكورد الأكثر تقدمًا: **[بروبوت](https://probot.io/ar)**

## Installation

**Node.js 16.9.0 or newer is required.**

```sh-session
npm install pb-tax
```
## **Example** :
```import { Client, MessageEmbed} from "discord.js"
import pbtax from "pb-tax"

const client = new Client({
    intents: ["GUILDS", "GUILD_MESSAGES"]
})

client.once('ready', () => {
    console.log(`${client.user.tag} is ready!`)
})

client.on('messageCreate', async (message) => {
    const prefix = `+`
    if(message.content.includes(`${prefix}tax`)) {
        const args = message.content.split(" ")
        const number = parseFloat(args[1])
        const tax = pbtax(number)
        const embed = new MessageEmbed()
        .setAuthor({name: `${message.author.tag}`, iconURL: `${message.author.avatarURL()}`})
        .setTimestamp()
        .setColor("BLURPLE")
        .addFields([
            {
                name: `All:`,
                value: `${tax.all}`,
                inline: true
            },
            {
                name: `Protax:`,
                value: `${tax.protax}`,
                inline: true
            },
            {
                name: `tax`,
                value: `${tax.tax}`,
                inline: true
            },
            {
                name: `wasit`,
                value: `${tax.wasit}`,
                inline: true
            },
        ])
        message.reply({embeds: [embed]})
    }
})

client.login(`TOKEN HERE!`)
