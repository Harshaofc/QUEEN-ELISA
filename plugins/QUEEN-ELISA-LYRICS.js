const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const { lyrics, lyricsv2 } = require('@bochilteam/scraper');

var tmsg =''
if(config.LANG === 'SI') tmsg = '*කරුණාකර මට ගීතයක නමක් දෙන්න. !*'
else tmsg = "*_Please give me a song name._!*"
var descg = ''
if(config.LANG === 'SI') descg = "එය ලබා දී ඇති සංගීතයේ lyrics දෙයි."
else descg = "_It gives lyrics of given song name._"
var cantscg = ''
if(config.LANG === 'SI') cantscg = "*මට මේ ගීතයේ lyrics සොයාගත නොහැක !*"
else cantscg = "*_I cant find lyrics of this song!_*"

cmd({
    pattern: "lyric",
    alias: ["lyric"],
    react: '🎙️',
    desc: descg,
    category: "search",
    use: '.lyric <song name>',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply(tmsg)
const result = await fetchJson(`https://some-random-api.com/lyrics?title=${text}`)
if(result.lyrics) reply(`
[🧚QUEEN ELISA🧚]

   *_LYRICS SEARCH_*
   
*${result.title}*
_${result.artist}_


${result.lyrics}

└───────────◉`)
else reply(cantscg)
} catch (e) {
reply(cantscg)
l(e)
}
})
