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

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Tanzania/Dodoma";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "255678925070" // Developer Contact
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
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "unavailable|available|composing|recording|paused" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_12_07_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDk3LFxuICAgICAgICAxNDksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDYsXG4gICAgICAgIDg1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjksXG4gICAgICAgIDk0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDY3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA2MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDY0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTk1LFxuICAgICAgICA3MCxcbiAgICAgICAgNDksXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzMsXG4gICAgICAgIDMwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDM4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTc5LFxuICAgICAgICA5NixcbiAgICAgICAgNzksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTA4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMzksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMDksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDQyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTc5LFxuICAgICAgICA3MixcbiAgICAgICAgMjgsXG4gICAgICAgIDkzLFxuICAgICAgICAzMyxcbiAgICAgICAgNTEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTczLFxuICAgICAgICAyMTcsXG4gICAgICAgIDMyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTAxLFxuICAgICAgICA5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDU5LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNixcbiAgICAgICAgNTYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDEwLFxuICAgICAgICAzMixcbiAgICAgICAgMjgsXG4gICAgICAgIDIzMixcbiAgICAgICAgNTMsXG4gICAgICAgIDIwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTYxLFxuICAgICAgICAxODcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDExMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDkyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTA5LFxuICAgICAgICAzMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDQ5LFxuICAgICAgICAzNyxcbiAgICAgICAgMjE5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTksXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDYyLFxuICAgICAgICA3OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNTksXG4gICAgICAgIDU3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTMwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDI3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDc0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTExLFxuICAgICAgICA2MixcbiAgICAgICAgMTE3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDQyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDcxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDk4LFxuICAgICAgICA2OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDc5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQsXG4gICAgICAgIDgxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjM4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDYxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDUwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDI5LFxuICAgICAgICA4OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTY3LFxuICAgICAgICA3NixcbiAgICAgICAgMjA0LFxuICAgICAgICA1NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA1MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzLFxuICAgICAgICA0OCxcbiAgICAgICAgOTksXG4gICAgICAgIDc4LFxuICAgICAgICA1OSxcbiAgICAgICAgODQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDExMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDg0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDc3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTM1LFxuICAgICAgICA1MixcbiAgICAgICAgNDIsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI3VnB5L1kxUjdEYVR4L1hIeWNkd1YyMjhHMXFMYnloMzlCdUpsRE5ZbWpvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NTY3ODkyNTA3MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMDEzMkNGNjA5MUE4RjFCODA5NUVDODdCMTgwQjcyMkNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxOTUyNzYxXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkxaT1RuRTZvVGJtX3RSUDNQcEVKX1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiMzNkNDkzNmItZTQxOS00NzcxLWJkYjMtNzRjMDZlNDIxMzU2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU0LFxuICAgICAgMTc3LFxuICAgICAgOTEsXG4gICAgICAyMjksXG4gICAgICAxOCxcbiAgICAgIDQ2LFxuICAgICAgNTMsXG4gICAgICA4MSxcbiAgICAgIDIxMSxcbiAgICAgIDE1NyxcbiAgICAgIDE0NixcbiAgICAgIDIxMixcbiAgICAgIDE3MCxcbiAgICAgIDEzNSxcbiAgICAgIDExLFxuICAgICAgMjQ4LFxuICAgICAgMTU4LFxuICAgICAgMjAzLFxuICAgICAgNTgsXG4gICAgICAyMjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMsXG4gICAgICAyMTIsXG4gICAgICA1NyxcbiAgICAgIDExNixcbiAgICAgIDQ4LFxuICAgICAgMjA2LFxuICAgICAgMTY2LFxuICAgICAgMzYsXG4gICAgICA0NCxcbiAgICAgIDExLFxuICAgICAgMjA5LFxuICAgICAgNzEsXG4gICAgICAxOTEsXG4gICAgICA4MCxcbiAgICAgIDI0MixcbiAgICAgIDIxNCxcbiAgICAgIDUsXG4gICAgICAxNTQsXG4gICAgICAxNjksXG4gICAgICAxNjFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSDRQTEROR1NcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NTY3ODkyNTA3MDoxM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTc0ODY1ODE4NjMyMjIyOjEzQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIvCfppxVybTJqnggIPCfjb9cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMamp2cmdHRU8vVGk3VUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjc0eWZvL0hBZ1BRUytRR3E4UEFyOG5XcllwUGFhTjN2bEd1N1hhZWZjREk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNUx2L0ttV2lZUENEbkN1d3A1TUlrbDY5U0RNTWM4MURGeDN2MS85bUQ5NVNtT2oyUGxRWkwwOThibE0xWWROZitxNUM2K3lpYUJMd2VJWnVZNmVWQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwia29uNG4yaC9VQkppNTltMm93UGJsR3RsUnJCL2s2QTFWUXJVeThYaGV5eWVaUUhqUW54Zk5CSEdMSXNGNjYyOGZ0dWdRMHF0MVFoemN5UFRGdDV4Qmc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU1Njc4OTI1MDcwOjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDUwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE5NTI3NTUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQdUZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVB1Ri5qc29uIjogIntcImtleURhdGFcIjpcIlNMZStDS2JXbyszenIzMXZQdk03Y3E5QjNRZzJsZGVZSDVscVZJRmpYaHM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTcyOTA4MTc4MixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Unix robot",
  ownername:process.env.OWNER_NAME|| "Kelvin Unix",


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
