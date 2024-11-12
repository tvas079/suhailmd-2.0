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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_39_11_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA1MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDUxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTUyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjksXG4gICAgICAgIDIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDQzLFxuICAgICAgICA2OSxcbiAgICAgICAgMjksXG4gICAgICAgIDQ2LFxuICAgICAgICA4NSxcbiAgICAgICAgODcsXG4gICAgICAgIDUzLFxuICAgICAgICAyMDksXG4gICAgICAgIDI1MixcbiAgICAgICAgNTgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTU4LFxuICAgICAgICAzOCxcbiAgICAgICAgODMsXG4gICAgICAgIDcyLFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTMyLFxuICAgICAgICA4MixcbiAgICAgICAgMTksXG4gICAgICAgIDEzMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDQ0LFxuICAgICAgICAxODMsXG4gICAgICAgIDM3LFxuICAgICAgICA1LFxuICAgICAgICA0NyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxODIsXG4gICAgICAgIDc3LFxuICAgICAgICAyNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTY2LFxuICAgICAgICA2NSxcbiAgICAgICAgMTA1LFxuICAgICAgICA4NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDg3LFxuICAgICAgICAyOCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDk2LFxuICAgICAgICA1NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA0NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTM3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTg5LFxuICAgICAgICA4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEyNixcbiAgICAgICAgOTEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTksXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDExNyxcbiAgICAgICAgODEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyNixcbiAgICAgICAgNzgsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDk4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjExLFxuICAgICAgICA0NSxcbiAgICAgICAgMTIyLFxuICAgICAgICA3LFxuICAgICAgICAzOSxcbiAgICAgICAgMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMTY1LFxuICAgICAgICAzMixcbiAgICAgICAgMTAsXG4gICAgICAgIDY2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQwLFxuICAgICAgICA5NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAzMixcbiAgICAgICAgNjAsXG4gICAgICAgIDI1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxOCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjM2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjM0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTE5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTUwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxODQsXG4gICAgICAgIDE0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNDksXG4gICAgICAgIDE0OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDM1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDgxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDMxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEwM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNyxcbiAgICAgICAgOTEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDk3LFxuICAgICAgICA0MixcbiAgICAgICAgMTgzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDgyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDgwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgODIsXG4gICAgICAgIDMyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDc2LFxuICAgICAgICA5NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDc3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDc4LFxuICAgICAgICAxODYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjA1LFxuICAgICAgICA2NixcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDc1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTc0LFxuICAgICAgICAxODksXG4gICAgICAgIDY5LFxuICAgICAgICA0MixcbiAgICAgICAgMTIxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNixcbiAgICAgICAgMTU0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWVcvNFhmMkdCOWhoejkvNStIaWlHbWg2ODRyc0c2R1NCNWU3WUpzVExGMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiam5mRWFCVGtUaTJrOWIzOU9GM2xUQVwiLFxuICBcInBob25lSWRcIjogXCI2ZTdlYjcwZS00NjdhLTRkMzctOTRiNi0wMjQyM2RiYTdhYWZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg5LFxuICAgICAgMTEwLFxuICAgICAgNjgsXG4gICAgICAxOTgsXG4gICAgICAxNjYsXG4gICAgICAxODAsXG4gICAgICAxMzAsXG4gICAgICAxNjksXG4gICAgICA0NyxcbiAgICAgIDg4LFxuICAgICAgMjA4LFxuICAgICAgMTIwLFxuICAgICAgMjI4LFxuICAgICAgMjE4LFxuICAgICAgNSxcbiAgICAgIDEyNixcbiAgICAgIDEzNCxcbiAgICAgIDc4LFxuICAgICAgMjA5LFxuICAgICAgMjAwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk4LFxuICAgICAgMjgsXG4gICAgICAxODMsXG4gICAgICAxODUsXG4gICAgICA0MyxcbiAgICAgIDE0OSxcbiAgICAgIDIzMSxcbiAgICAgIDE4OCxcbiAgICAgIDI0NCxcbiAgICAgIDE2NyxcbiAgICAgIDIyNixcbiAgICAgIDI1LFxuICAgICAgMTUxLFxuICAgICAgNDYsXG4gICAgICA0NixcbiAgICAgIDE3MyxcbiAgICAgIDk4LFxuICAgICAgMjA5LFxuICAgICAgOTksXG4gICAgICAzMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJQWjVSQlgyRlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzNDA0ODEyMDk3OjIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMTY4NzkyNTU4Mzg3NjI6MjBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUE84NkxFREVMdWV5YmtHR0FZZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJpM0Z0Zlp1TzdBL1gxS1Y2UmFIR2hZdHoyNi8wNXcwMHY4S2lQOEFvTFhVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk9tYUdvS0Nna1hJckQyY1kwOVc1UGhjY1puZVEzcUZnVit3Sm9Sd2Y5YVlLQmJjZXFlNUVQUk9tVVpSWGozdkhQbllmbHc4MFcvZGxMU1UwSC94aER3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIllDQzNBVnFLaEpYbFFsaVd4S3pJQ25SN3NTMzZnekVqcWZZbWRmajJKdSt2MDh0OUJ2S1hhbWpyUk4vZFVBNFJ3d2xXaDlvVktaZ0lpb2ZUdXNncGp3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzQwNDgxMjA5NzoyMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDExN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxMzUwMzM1XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
