var handler = async (m) => {

let tqto = `👑 *Desarrollador*
⬡ *KatashiFukushima*
https://github.com/KatashiFukushima

🎌 *Colaboradore*
⬡ *Alba070503* 

_Envie "colaboradores" para obtener el enlace del perfil de GitHub de los colaboradores_`

conn.reply(m.chat, tqto, m, fake, )

handler.before = async m => {

if (/^colaboradores|Colaboradores$/i.test(m.text) ) {
let texto = `🌟 *GitHub - Colaboradores*

⬡ https://github.com/Alba070503
⬡ https://github.com/KatashiFukushima

_Envie "cc" Para Obtener El Contacto De Los Colaboradores_`

conn.reply(m.chat, texto, m, fake, )
}

if (/^cc$/i.test(m.text) ) {
let contacto = `🌟 *Contacto - Colaboradores* 

⬡ *Alba070503*
@5214434703586

⬡ *KatashiFukushima*
@51906662557`

m.reply(contacto, m.chat, { mentions: conn.parseMention(contacto)})}
}
  
}
handler.help = ['tqto', 'creditos', 'credits', 'thanks', 'thanksto']
handler.tags = ['info']
handler.command = /^(credits|creditos|credit|thanks|thanksto|tqto)$/i

handler.register = true

export default handler
