const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "true" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_05_05_11_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxODIsXG4gICAgICAgIDkzLFxuICAgICAgICA2MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTY5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDExMSxcbiAgICAgICAgNDksXG4gICAgICAgIDQ4LFxuICAgICAgICA5MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDcyLFxuICAgICAgICA4NixcbiAgICAgICAgMTg4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgODAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDc1LFxuICAgICAgICA3NixcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDU2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDQ1LFxuICAgICAgICA3MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjExLFxuICAgICAgICA5OSxcbiAgICAgICAgMTksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgODQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjE1LFxuICAgICAgICA3LFxuICAgICAgICAxODAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQyLFxuICAgICAgICAzNyxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTksXG4gICAgICAgIDgzLFxuICAgICAgICA2MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTYwLFxuICAgICAgICAzOSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDI5LFxuICAgICAgICA3NSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTkzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDMzLFxuICAgICAgICAxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDY4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDU0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDQ1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDY4LFxuICAgICAgICAxMzksXG4gICAgICAgIDg3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTkxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTE2LFxuICAgICAgICA3MixcbiAgICAgICAgMjI1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDQwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDgwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTExLFxuICAgICAgICAxODcsXG4gICAgICAgIDUwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDc4LFxuICAgICAgICAxMjksXG4gICAgICAgIDY5LFxuICAgICAgICA5MCxcbiAgICAgICAgODksXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTkxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNixcbiAgICAgICAgMTQxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTkwLFxuICAgICAgICA0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjAsXG4gICAgICAgIDQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgOTFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAzMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ5LFxuICAgICAgICA2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjksXG4gICAgICAgIDIwNixcbiAgICAgICAgNTEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDMyLFxuICAgICAgICAyMixcbiAgICAgICAgMTUyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNCxcbiAgICAgICAgNDgsXG4gICAgICAgIDExMyxcbiAgICAgICAgNixcbiAgICAgICAgMTc1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDkyLFxuICAgICAgICAxNTksXG4gICAgICAgIDUyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTY0LFxuICAgICAgICA3MixcbiAgICAgICAgMjYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDc1LFxuICAgICAgICAzNSxcbiAgICAgICAgODMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyLFxuICAgICAgICA1NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIwMixcbiAgICAgICAgNzMsXG4gICAgICAgIDI1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjAzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTc5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlNjTHpCNVZIVTlubjlXZk1rcDlKMVArRHlIelg3M3Y1RG9uWjB5K3pVSGs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInNoV1NOZlY1U3BxZjF2dWZBS1FiY3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiMTVmOTIzZGUtMDhjNC00ODVmLWI1N2UtYmI5OWEwMzU2MzQ5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg3LFxuICAgICAgMTgzLFxuICAgICAgNTEsXG4gICAgICAxMjEsXG4gICAgICAxODksXG4gICAgICAyMTksXG4gICAgICA0MCxcbiAgICAgIDIwOCxcbiAgICAgIDk5LFxuICAgICAgODQsXG4gICAgICA2MyxcbiAgICAgIDE1MixcbiAgICAgIDEwOCxcbiAgICAgIDQxLFxuICAgICAgMTI2LFxuICAgICAgMTkzLFxuICAgICAgODgsXG4gICAgICAxNDEsXG4gICAgICAxODgsXG4gICAgICA3OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTIsXG4gICAgICAxMTYsXG4gICAgICA3NixcbiAgICAgIDU3LFxuICAgICAgMTQ3LFxuICAgICAgMTE4LFxuICAgICAgMjA0LFxuICAgICAgODQsXG4gICAgICA5MCxcbiAgICAgIDIzMixcbiAgICAgIDExLFxuICAgICAgMTUwLFxuICAgICAgNixcbiAgICAgIDIxMyxcbiAgICAgIDE5MixcbiAgICAgIDE3NCxcbiAgICAgIDEwMyxcbiAgICAgIDQ5LFxuICAgICAgMTMyLFxuICAgICAgMTQxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlNESlM4WFBHXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwMjQ4MDY2MTQ6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjU3MzgxMjk5OTc4NDU4OjExQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0kydnRyY0RFSmJ5cTdrR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwic2lMN0wwWTBqaWE2NW1NbUNYV250MmVOcnVNVWlQcXhzQXdzY3BIWFdtOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJtV0huRjhOT0RycTJzNU5VVjgrdTd0ZnBsRTZaVmQ2NHBsMlp2cnA5TUtsVm5NdTExbnMvYjBaTnJtdjgrTDFZNWhUaDNCVWJJdXJUbDJsTExaTTFEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ5czQzaVFGdDFsNXlCbSswclFyTzVkdE1EbjNwMDM0YXcreDBPb0w2emFycXdSZGdsbm1ONEYxOWF0R1ltRVF0V0NLdnVjQ1hKY1Z0Z3ZGZHh4M2xqQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwMjQ4MDY2MTQ6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMDg2OTUyOSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUVxalwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRXFqLmpzb24iOiAie1wia2V5RGF0YVwiOlwiN2JKNlpPWDMwZHU3Y3FlSFdlK2EyTVBtUWdmUWdTK3hZd2ZuVi9lZndlST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5MjE1NDA0OTMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMDg1OTE1NjI1NVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "true",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
