/* ⚙️ Credits to:
* AzamiJs
* Elrebelde21
* GataNina-Li */

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import fs from 'fs'
import moment from 'moment-timezone'
import path, { join } from 'path'
import { getRandomImageBoys } from 'module-katashi'
import { fileURLToPath, pathToFileURL } from 'url'
global.__filename = function filename(pathURL = import.meta.url, rmPrefix = platform !== 'win32') { return rmPrefix ? /file:\/\/\//.test(pathURL) ? fileURLToPath(pathURL) : pathURL : pathToFileURL(pathURL).toString() }; global.__dirname = function dirname(pathURL) { return path.dirname(global.__filename(pathURL, true)) }; global.__require = function require(dir = import.meta.url) { return createRequire(dir) }
const __dirname = global.__dirname(import.meta.url)

global.owner = [
['51979901365', '☆𝑲𝒂𝒕𝒂𝒔𝒉𝒊-𝑩𝒐𝒕☆', false],
['51906662557', '𝙊𝙬𝙣𝙚𝙧', true],  
['5217442363122', '𝑖𝑍𝑖', true],
['59175655964', 'Alba070503', false],
['56974513824']]

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumberCode = '' //Ejemplo: +59309090909
global.confirmCode = ''

global.suittag = []
global.mods = []
global.prems = []

//Solo desarrolladores aprobados
global.isdev = [['51906662557'], ['5217442363122'], ['59175655964'], ['56974513824']]

//Aqui encuentras los nombres del bot 
global.packname = '𝗬𝗮𝗲𝗺𝗼𝗿𝗶 𝗠𝗶𝗻𝗶 - 𝗠𝗗 🌸'
global.author = '𝑲𝒂𝒕𝒂𝒔𝒉𝒊 𝑭𝒖𝒌𝒖𝒔𝒉𝒊𝒎𝒂 🥷'
global.wm = '᭥𐨏𝒀𝒂𝒆𝒎𝒐𝒓𝒊 𝑴𝒊𝒏𝒊 - 𝑴𝑫᭢🌸'
global.wm2 = '᭥𐨏𝑌𝑎𝑒𝑚𝑜𝑟𝑖𝑀𝑖𝑛𝑖-𝑀𝐷᭢🌸\n*♡º°‘¨ 𝑂𝑡𝑎𝑘𝑢-𝐿𝑖𝑣𝑒 ¨‘°º♡*'
global.des = '𝗬𝗮𝗲𝗺𝗼𝗿𝗶 𝗠𝗶𝗻𝗶 - 𝗠𝗗 🌸.'


//Las Versiones Y Entre Otros
global.vs = 'V2'
global.library = 'Baileys'
global.baileys = '@whiskeysockets/baileys'
global.lenguaje = 'Español'
global.menudi = ['⛶','❏','⫹⫺']
global.dev = 'KatashiFukushima'
global.devnum = '+51 906 662 557'

// Diseños 
global.dis = ':⁖֟⊱┈֟፝❥ '
global.cen1 = '✧──⭒─⊹ '
global.cen2 = ' ⊹─⭒──✧'

// Random
global.random1 = fs.readFileSync('./storage/logos/yartex.jpeg')

//Imagenes
global.imagen1 = fs.readFileSync('./storage/logos/Menu1.jpg')
global.imagen2 = fs.readFileSync('./storage/logos/Menu2.jpg')
global.imagen3 = fs.readFileSync('./storage/logos/Menu3.jpg')
global.imagen4 = fs.readFileSync('./storage/logos/Menu4.jpg')

var img = 'https://telegra.ph/file/b35df88a0257e3c8a4338.jpg'; var img1 = 'https://telegra.ph/file/cf2c839b500e45504e904.jpg'; var img2 = 'https://telegra.ph/file/8f77c0ea684dc13c704aa.jpg'; var img3 = 'https://telegra.ph/file/6d7e76af95d04b5ab4a65.jpg'; var img4 = 'https://telegra.ph/file/67e7a505724bc3bfd545b.jpg'; var img5 = 'https://telegra.ph/file/b7c6726f411c561331fbe.jpg'
var img6 = 'https://telegra.ph/file/65f025f5c28fcbab970e2.jpg'; var img7 = 'https://telegra.ph/file/4562e944985f5efeef15c.jpg'; var img8 = 'https://telegra.ph/file/78f26ba598541e58cc2be.jpg'; var img9 = 'https://telegra.ph/file/f3e0355696042575fb404.jpg'; var img10 = 'https://telegra.ph/file/207160aa8cd04386c427e.jpg'
global.ImgAll = [img, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10]

let botImg1 = 'https://telegra.ph/file/7f9cbd5335d9f9a3e7860.jpg'
let botImg2 = 'https://telegra.ph/file/eb5d478881ec2d77c0700.jpg'
let botImg3 = 'https://telegra.ph/file/e58afaca790e45d72a3a6.jpg'
let botImg4 = 'https://telegra.ph/file/4c74970d527676285f090.jpg'
let botImg5 = 'https://telegra.ph/file/dda42e35d3e62ae7f8686.jpg'
global.yartexImg = [botImg1, botImg2, botImg3, botImg4, botImg5]

let botVid1 = 'https://qu.ax/Mmls.mp4'
let botVid2 = 'https://qu.ax/TXQS.mp4'
let botVid3 = 'https://qu.ax/EjxP.mp4'
let botVid4 = 'https://qu.ax/DcUF.mp4'
let botVid5 = 'https://qu.ax/JLmB.mp4'
let botVid6 = 'https://qu.ax/PLZh.mp4'
let botVid7 = 'https://qu.ax/Yydq.mp4' //bl
let botVid8 = 'https://qu.ax/AmKW.mp4' //bl
let botVid9 = 'https://qu.ax/uxEd.mp4' //bl
let botVid10 = 'https://qu.ax/oZeO.mp4' //bl
let botVid11 = 'https://qu.ax/wdFU.mp4' //bl
let botVid12 = 'https://qu.ax/JwDj.mp4' //bl
global.yartexVid = [botVid1, botVid2, botVid3, botVid4, botVid5, botVid6, botVid7, botVid8, botVid9, botVid10, botVid11, botVid12]
  
//Enlaces
global.yt = 'https://youtube.com/@katashifukushima'
global.ig = 'https://instagram.com/katashi_fukushima'
global.md = 'https://github.com/KatashiFukushima/YaemoriBot-MD'
global.paypal = 'https://paypal.me/KatashiF'
global.git = 'https://github.com/KatashiFukushima'
global.email = 'katashifukushima23@gmail.com'
global.group = 'https://chat.whatsapp.com/C7LzujTmWjQ6j5CUaBPaFI' //Grupo ofc
global.channel = 'https://whatsapp.com/channel/0029Va8GeVFAO7REOj3qnW37'
global.linkSity = [yt, ig, md, paypal, git, channel, email]

//Raíz
global.raiz = './'
global.aniD = 'sessions/'
global.dirP = raiz//+aniD
global.authFile = join(__dirname, `sessions/`)
global.authFileRespald = join(__dirname, `sesionRespaldo/`)
global.temp = join(__dirname, 'tmp')
global.media = raiz+'media/'
global.jadibts = join(__dirname, 'jadibts/')
global.raiz = './storage/logos/Menu1.jpg'

//Reacciones De Comandos.!
global.rwait = '⏰'
global.done = '✅'
global.error = '❌'

//Cargando
global.wait = '*■□□□□ 20%*'
global.waitt = '*■■■□□ 60%*'
global.waittt = '*■■■■□ 90%*'
global.waitttt = '*■■■■■ 100%*'

//fake
global.fsizedoc = '999999'
global.fpagedoc = '9999'

//Apis
global.keysZens = ['LuOlangNgentot', 'c2459db922', '37CC845916', '6fb0eff124', 'hdiiofficial', 'fiktod', 'BF39D349845E', '675e34de8a', '0b917b905e6f']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = 'GataDiosV2'
global.itsrose = ['4b146102c4d500809da9d1ff']

global.APIs = {
amel: 'https://melcanz.com',
bx: 'https://bx-hunter.herokuapp.com',
nrtm: 'https://nurutomo.herokuapp.com',
xteam: 'https://api.xteam.xyz',
nzcha: 'http://nzcha-apii.herokuapp.com',
bg: 'http://bochil.ddns.net',
fdci: 'https://api.fdci.se',
dzx: 'https://api.dhamzxploit.my.id',
bsbt: 'https://bsbt-api-rest.herokuapp.com',
zahir: 'https://zahirr-web.herokuapp.com',
zeks: 'https://api.zeks.me',
hardianto: 'https://hardianto-chan.herokuapp.com',
pencarikode: 'https://pencarikode.xyz',
LeysCoder: 'https://leyscoders-api.herokuapp.com',
adiisus: 'https://adiixyzapi.herokuapp.com',
lol: 'https://api.lolhuman.xyz',
fgmods: 'https://api-fgmods.ddns.net',
pencarikode: 'https://pencarikode.xyz',
Velgrynd: 'https://velgrynd.herokuapp.com',
rey: 'https://server-api-rey.herokuapp.com',
hardianto: 'http://hardianto-chan.herokuapp.com',
shadow: 'https://api.reysekha.xyz',
apialc: 'https://api-alc.herokuapp.com',
botstyle: 'https://botstyle-api.herokuapp.com',
neoxr: 'https://neoxr-api.herokuapp.com',
ana: 'https://anabotofc.herokuapp.com/',
kanx: 'https://kannxapi.herokuapp.com/',
dhnjing: 'https://dhnjing.xyz'
},

global.APIKeys = {
'https://api-alc.herokuapp.com': 'ConfuMods',
'https://api.reysekha.xyz': 'apirey',
'https://melcanz.com': 'F3bOrWzY',
'https://bx-hunter.herokuapp.com': 'Ikyy69',
'https://api.xteam.xyz': '5bd33b276d41d6b4',
'https://zahirr-web.herokuapp.com': 'zahirgans',
'https://bsbt-api-rest.herokuapp.com': 'benniismael',
'https://api.zeks.me': 'apivinz',
'https://hardianto-chan.herokuapp.com': 'hardianto',
'https://pencarikode.xyz': 'pais',
'https://api-fgmods.ddns.net': 'fg-dylux',
'https://leyscoders-api.herokuapp.com': 'MIMINGANZ',
'https://server-api-rey.herokuapp.com': 'apirey',
'https://api.lolhuman.xyz': 'GataDiosV2',
'https://botstyle-api.herokuapp.com': 'Eyar749L',
'https://neoxr-api.herokuapp.com': 'yntkts',
'https://anabotofc.herokuapp.com/': 'AnaBot'
}

//Rpg
global.multiplier = 200 // Cuanto más alto, más difícil subir de nivel

global.rpg = {
emoticon(string) {
string = string.toLowerCase()
let emot = {
level: '🏆', limit: '💎', exp: '✨',
health: '❤️',
money: '💵',
potion: '🥤',
pickaxe: '⛏️' 
}

let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
if (!results.length) return ''
else return emot[results[0][0]]
}}

global.d = new Date(new Date + 3600000)
global.locale = 'es'
global.dia = d.toLocaleDateString(locale, {weekday: 'long'})
global.fecha = d.toLocaleDateString('es', {day: 'numeric', month: 'numeric', year: 'numeric'})
global.mes = d.toLocaleDateString('es', {month: 'long'})
global.año = d.toLocaleDateString('es', {year: 'numeric'})
global.tiempo = d.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true})

var more = String.fromCharCode(8206)
global.readMore = more.repeat(850)

let file = fileURLToPath(import.meta.url)
watchFile(file, () => { unwatchFile(file)
console.log(chalk.yellow('Se actualizo el archivo config.js'))
import(`${file}?update=${Date.now()}`)
})
