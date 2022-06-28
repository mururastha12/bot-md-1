/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://hardianto.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://hardianto.xyz': 'hardianto',
}

// Other
global.owner = ['94772724220']
global.premium = ['94772724220']
global.packname = 'Rᷢaⷶsᷤtͭhͪaⷶ mͫuͧrͬuͧ'
global.author = 'WhatsApp Bot'
global.sessionName = 'rwdm'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ හරි',
    admin: 'එම අංගය ඇඩ්මින්ල!' හට පමණි!!,
    erro: 'Maaf Fitur ini sedang gangguan', 
    link: 'Link Salah Gunakan Dengan Benar', 
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Scraping metadata......',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = { url : 'https://telegra.ph/file/52b4c3c1c631254af23b8.jpg'}
global.visoka = { url: 'https://a.uguu.se/RuiGTslJ.mp4' }
global.resta = { url : 'https://a.uguu.se/kUFEHNf.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
