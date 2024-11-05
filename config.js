const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_43_11_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjksXG4gICAgICAgIDIzMixcbiAgICAgICAgOTIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjA4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTksXG4gICAgICAgIDEwNixcbiAgICAgICAgOTMsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDkxLFxuICAgICAgICAxNCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTUsXG4gICAgICAgIDgyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI1LFxuICAgICAgICAzNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMzUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDUxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDY5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA3NixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDMyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDUwLFxuICAgICAgICA3LFxuICAgICAgICAxMDksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNCxcbiAgICAgICAgODQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTIwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjksXG4gICAgICAgIDcwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDI3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDg1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDI1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDUyLFxuICAgICAgICA1OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDcsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMjgsXG4gICAgICAgIDExMixcbiAgICAgICAgNDQsXG4gICAgICAgIDc2LFxuICAgICAgICAyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTM3LFxuICAgICAgICA2MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNCxcbiAgICAgICAgMTU5LFxuICAgICAgICA2NyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgODgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTkyLFxuICAgICAgICA3MSxcbiAgICAgICAgMjI0LFxuICAgICAgICA0NCxcbiAgICAgICAgMjQxLFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEzMixcbiAgICAgICAgNzYsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQzLFxuICAgICAgICAwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDU1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNjksXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTksXG4gICAgICAgIDE3MCxcbiAgICAgICAgNTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNzdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTAwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDg2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTk4LFxuICAgICAgICAzNixcbiAgICAgICAgMTU3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDU2LFxuICAgICAgICA3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjE1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDc3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMixcbiAgICAgICAgMTU3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTczLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTk4LFxuICAgICAgICA3OCxcbiAgICAgICAgMzksXG4gICAgICAgIDM3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDY2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTkzLFxuICAgICAgICA2MixcbiAgICAgICAgMTAsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJZdENGbnVmZEwvNGkxOEI4Rk9wTDhHbDlnNkpYd3Q4V3RqdmhvZXluWlIwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJxVGNHT3FKTlFLT1g0ZktEUTZzbmlRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjM4NjdmZmE3LWE0Y2MtNDc2Ni1hZWEzLWNjZTBlMGY2MmY1Y1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0MixcbiAgICAgIDc0LFxuICAgICAgMTIxLFxuICAgICAgMTUwLFxuICAgICAgMTkzLFxuICAgICAgMTgyLFxuICAgICAgMjgsXG4gICAgICAyMjgsXG4gICAgICAxNTMsXG4gICAgICAyMjgsXG4gICAgICAyNDUsXG4gICAgICAyOSxcbiAgICAgIDE0MSxcbiAgICAgIDE3NSxcbiAgICAgIDIxNSxcbiAgICAgIDIyMyxcbiAgICAgIDE3MSxcbiAgICAgIDE4NCxcbiAgICAgIDk4LFxuICAgICAgMTA2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyNixcbiAgICAgIDE4OSxcbiAgICAgIDI1NCxcbiAgICAgIDE0NixcbiAgICAgIDUyLFxuICAgICAgMTQzLFxuICAgICAgODIsXG4gICAgICAyMDYsXG4gICAgICAyOCxcbiAgICAgIDIzMyxcbiAgICAgIDE1MCxcbiAgICAgIDEzMyxcbiAgICAgIDIzOCxcbiAgICAgIDI5LFxuICAgICAgNjcsXG4gICAgICAxNDksXG4gICAgICAxMDEsXG4gICAgICAyMzMsXG4gICAgICA2NCxcbiAgICAgIDI3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlg2RzVKUjZHXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjM0MDQ4MTIwOTc6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjE2ODc5MjU1ODM4NzYyOjhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTzY4NkxFREVML3RwN2tHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJpM0Z0Zlp1TzdBL1gxS1Y2UmFIR2hZdHoyNi8wNXcwMHY4S2lQOEFvTFhVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImhTOVRjZXBSYXVIQzJ0dDRBMlpXdkhMZWJJclg0alZha1I0b25DZ0djU2xFcHFmejNZR04zWEFweWRueDFySGxkbUF3TW5PdGhJb2FwUjEvVmtpVERRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjdKRlMwdFpmbkcyWUIvU2Y5d1JFczV5bVIxRkNiSXJ3bnZBdkRnb1Z4aXI3SHV5S1VlcEY5TklOMk1rdUR4cERFY2JXTzZKYW1CdTFLck1KanF2cENBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzQwNDgxMjA5Nzo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTE3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzA4MDMzOTVcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
