import fetch from 'node-fetch'

var handler = async (m, { conn, usedPrefix, text, args, command }) => {

let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => '')
let name = await conn.getName(who)
let biografia = await conn.fetchStatus('51906662557' +'@s.whatsapp.net').catch(_ => 'Sin Biografía')
let biografiaBot = await conn.fetchStatus('51948705559' +'@s.whatsapp.net').catch(_ => 'Sin Biografía')
let bio = biografia.status?.toString() || 'Sin Biografía'
let biobot = biografiaBot.status?.toString() || 'Sin Biografía'

await conn.sendContactArray(m.chat, [
[devnum, `${await conn.getName('51906662557'+'@s.whatsapp.net')}`, `🥷 Creador`, dev, email, `🇵🇪 Perú`, `https://www.youtube.com/@KatashiFukushima`, bio],
[`${conn.user.jid.split('@')[0]}`, `${await conn.getName(conn.user.jid)}`, `💙 YaemoriBot-MD 🌸`, `📵 No Hacer Spam`, email, `🇵🇪 Perú`, `https://github.com/KatashiFukushima/YaemoriBot-MD`, biobot]
], m)
  
}
handler.help = ['owner', 'contacto', 'creador', 'contactos']
handler.tags = ['info']
handler.command = /^(owner|contacto|creador|contactos)/i

handler.register = true

export default handler
