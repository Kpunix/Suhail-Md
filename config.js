const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255678925070";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_14_06_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxNixcbiAgICAgICAgNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNSxcbiAgICAgICAgMjE5LFxuICAgICAgICAzNCxcbiAgICAgICAgMjQwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTkwLFxuICAgICAgICA1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjAsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjksXG4gICAgICAgIDc0LFxuICAgICAgICAxLFxuICAgICAgICAzMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDMyLFxuICAgICAgICA0NixcbiAgICAgICAgMjIxLFxuICAgICAgICA2NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjM1LFxuICAgICAgICA4NixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDY3LFxuICAgICAgICA4NixcbiAgICAgICAgMjMzLFxuICAgICAgICAxMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTUxLFxuICAgICAgICA4NixcbiAgICAgICAgMTAyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDExMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDg3LFxuICAgICAgICAxODksXG4gICAgICAgIDExOSxcbiAgICAgICAgMTMyLFxuICAgICAgICA2MixcbiAgICAgICAgMjA4LFxuICAgICAgICAxODgsXG4gICAgICAgIDM1LFxuICAgICAgICAxNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTAyLFxuICAgICAgICA5NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTksXG4gICAgICAgIDI4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQzLFxuICAgICAgICA3NyxcbiAgICAgICAgNTksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzAsXG4gICAgICAgIDE2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA5NixcbiAgICAgICAgNjgsXG4gICAgICAgIDkyLFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjUsXG4gICAgICAgIDc1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDExNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4LFxuICAgICAgICA1NyxcbiAgICAgICAgMzksXG4gICAgICAgIDIyMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjUwLFxuICAgICAgICA2MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDU1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMTkwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDUyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDgyLFxuICAgICAgICA2LFxuICAgICAgICAyNyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxLFxuICAgICAgICA3OCxcbiAgICAgICAgMTQyLFxuICAgICAgICA1NCxcbiAgICAgICAgODAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTMwLFxuICAgICAgICA3NSxcbiAgICAgICAgNTksXG4gICAgICAgIDExOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDg0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTYzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTYyLFxuICAgICAgICA3MixcbiAgICAgICAgMjYsXG4gICAgICAgIDI3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTk0LFxuICAgICAgICA3MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDg0LFxuICAgICAgICAzNixcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjM5LFxuICAgICAgICA0MyxcbiAgICAgICAgMSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMSxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEyN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDMxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkxLFxuICAgICAgICA2NixcbiAgICAgICAgNzEsXG4gICAgICAgIDY1LFxuICAgICAgICA3NCxcbiAgICAgICAgMTY4LFxuICAgICAgICA0NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDg0LFxuICAgICAgICAzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTAyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODIsXG4gICAgICAgIDYxLFxuICAgICAgICAyMSxcbiAgICAgICAgMjExLFxuICAgICAgICA4OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDMwLFxuICAgICAgICAxODQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDkwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDk1LFxuICAgICAgICA1OCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxODMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjksXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDkwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDg3LFxuICAgICAgICAxNCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTUsXG4gICAgICAgIDgyLFxuICAgICAgICA0MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDExMyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxOTksXG4gICAgICAgIDEzMixcbiAgICAgICAgMjI3LFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUUtYRDIxTE5xdnAyRWJGeHFXNENYMkRWTVdxamErekNVZzNVaWRLUExKQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidl85M3NKeVpTeVN1QjdITG9yVjBKUVwiLFxuICBcInBob25lSWRcIjogXCI3MmU2Y2Q0Mi0zZWQ2LTQ1ZTItYjA3YS0wNGU0NzEzYjZjYWVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU4LFxuICAgICAgMjUsXG4gICAgICAyMjEsXG4gICAgICAxODMsXG4gICAgICAyMDgsXG4gICAgICA5OSxcbiAgICAgIDIxMSxcbiAgICAgIDM5LFxuICAgICAgNjYsXG4gICAgICAxNjAsXG4gICAgICAyMzMsXG4gICAgICAyNixcbiAgICAgIDEwNixcbiAgICAgIDcyLFxuICAgICAgMjQwLFxuICAgICAgODYsXG4gICAgICAzNixcbiAgICAgIDE2MSxcbiAgICAgIDE0MCxcbiAgICAgIDEzM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDcsXG4gICAgICAxOTksXG4gICAgICAyMzAsXG4gICAgICAyMzksXG4gICAgICAxNjksXG4gICAgICA2NixcbiAgICAgIDExOSxcbiAgICAgIDE3MixcbiAgICAgIDI0OSxcbiAgICAgIDIwMixcbiAgICAgIDIxMCxcbiAgICAgIDIyNyxcbiAgICAgIDE2NixcbiAgICAgIDEyOCxcbiAgICAgIDMxLFxuICAgICAgMTEwLFxuICAgICAgODQsXG4gICAgICAzMCxcbiAgICAgIDExLFxuICAgICAgMjFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTUJIRjZGNDhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NTY3ODkyNTA3MDo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNzQ4NjU4MTg2MzIyMjI6OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMWGp2cmdHRU5HVHNMTUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjc0eWZvL0hBZ1BRUytRR3E4UEFyOG5XcllwUGFhTjN2bEd1N1hhZWZjREk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiaVNnTVU4djV6S3QwS1dacEdtd1VBdVF0Ujc2bkVuUHJFVU9KTXAwNFNVTWEwZmJseWpta1VvajBsTEpaL3dzVWFQaGViQnFYc1ZuWWFvdEFVaVhqREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwieVFoVyt4TDhBaEdDUU5teUtSblBVR2tNaW9VdU5lVnYrejk3bXlLUlRjb3EwNEpKbDBkK3d1NDNVL3N6SHhmWlRNYTlBaDQzUldOK0x2NW14a3RwRHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU1Njc4OTI1MDcwOjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODM1NjQzNyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUVhcVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRWFxLmpzb24iOiAie1wia2V5RGF0YVwiOlwiWXM1V3NITXdoSngyd09jaGkwVGtHNzBCYUZpbm1mV082Nk1LS01qTTRsaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzI5MDgxNzgxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTMxMTYxOTA3NDFcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
