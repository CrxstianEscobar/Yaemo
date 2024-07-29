var handler = async (m, { conn, command }) => {

if (command == 'cuentas' || command == 'cuentasoficiales' || command == 'cuentasof') {
let str = `𝖡𝗂𝖾𝗇𝗏𝖾𝗇ido/a 𝖠 𝖫𝖺𝗌 𝖢𝗎𝖾𝗇𝗍𝖺𝗌 𝖮𝖿𝗂𝖼𝗂𝖺𝗅𝖾𝗌 🌸
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
💙 *Github De La Bot* 🌟
*${md}*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*Canal Dedicado Para Yaemori* 🌻
 *${channel}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*Grupo Oficial De Yaemori* 😍💙
 *${group}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*Youtube* 🥷
${yt}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*Instagram* 🌩📸
${ig}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈`

await conn.sendMessage(m.chat, { text: str, contextInfo: { externalAdReply: { title: '', body: wm, thumbnail: imagen2, sourceUrl: '', mediaType: 1, renderLargerThumbnail: true }}})
}

if (command == 'grupos') {
let text = `🔗 *Grupo oficial*

> *YaemoriBot-MD*
${group}

👑 *Canales Oficiales*

> *YaemoriBot*
${channel}

> *SpaceNight Team*
https://whatsapp.com/channel/0029VaefZxt1t90Tn4rCv50X`

conn.reply(m.chat, text, m, fake, )
}

}
handler.help = ['cuentasoficiales', 'cuentasofc', 'cuentas', 'grupos']
handler.tags = ['info']
handler.command = /^cuentasoficiales|cuentasofc|cuentas|grupos$/i

handler.register = true

export default handler
