let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let vn = './media/Invocar.mp3'
let pesan = args.join` `
let oi = `*@𝚅𝙴𝙽𝚃𝙰.𝙱𝙾𝚃𝚂.𝙶𝙴𝚁𝙸𝚇𝚁𝚈𝚄* ${pesan}`
let teks = `*💢𝘼𝙉𝙊𝙏𝘼𝙏𝙀‼️𝙣𝙤 𝙦𝙪𝙚𝙧𝙚𝙢𝙤𝙨 𝙖𝙙𝙤𝙧𝙣𝙤𝙨💢*\n\n ${oi}\n\n🫶🏻 ➢ 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰𝚂\n`
for (let mem of participants) {
teks += `🔆❖≽ @${mem.id.split('@')[0]}\n`}
teks += `*🐾𝙶𝙴𝚁𝙸𝙿𝙸𝚄𝙼*\n\n*<3*`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
conn.sendFile(m.chat, vn, 'Invocar.mp3', null, m, true, { type: 'audioMessage', ptt: true, sendEphemeral: true })
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|todas|todos|todes|fantasmas|adornos|plantas)$/i
handler.admin = true
handler.group = true
export default handler
