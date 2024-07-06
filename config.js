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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




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
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_38_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDI0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDY2LFxuICAgICAgICA0OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTk2LFxuICAgICAgICA0NixcbiAgICAgICAgMjQwLFxuICAgICAgICA0OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxODEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTc4LFxuICAgICAgICAxOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDg1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDkwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzksXG4gICAgICAgIDIzOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDgwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDExNixcbiAgICAgICAgMjIwLFxuICAgICAgICAxNzksXG4gICAgICAgIDksXG4gICAgICAgIDE5NixcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDcwLFxuICAgICAgICA3MixcbiAgICAgICAgNTcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDUzLFxuICAgICAgICAyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDYxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDkxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDcxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTYwLFxuICAgICAgICA1NCxcbiAgICAgICAgMjUyLFxuICAgICAgICA1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDc4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNyxcbiAgICAgICAgMjAzLFxuICAgICAgICA0NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA3OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDQwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTMyLFxuICAgICAgICA1NixcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTA3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjUzLFxuICAgICAgICA4NCxcbiAgICAgICAgMjI2LFxuICAgICAgICA5NSxcbiAgICAgICAgOCxcbiAgICAgICAgODMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDk3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTUzLFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjI2LFxuICAgICAgICAyNDksXG4gICAgICAgIDE0NixcbiAgICAgICAgNTQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTUzLFxuICAgICAgICA0MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDkxLFxuICAgICAgICA5MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTA4LFxuICAgICAgICA3OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDc5LFxuICAgICAgICAyNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM1LFxuICAgICAgICAzNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTc5LFxuICAgICAgICA0MyxcbiAgICAgICAgMTk3LFxuICAgICAgICAzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDM5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDM4LFxuICAgICAgICAxODQsXG4gICAgICAgIDMyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA4NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMzRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjEzLFxuICAgICAgICAyMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE3NixcbiAgICAgICAgOTksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTg3LFxuICAgICAgICA0MixcbiAgICAgICAgMTk5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTIwLFxuICAgICAgICA4NCxcbiAgICAgICAgODgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTkwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNyxcbiAgICAgICAgMTYzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTExLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjM4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDUzLFxuICAgICAgICAxLFxuICAgICAgICA4NyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDY1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTcyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDc1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ0R1BGZzN4OWFnS0RwUk9maVo1ZVBROEc5QVV0SFJ4elhacjZmb0R6Sk9JPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkxNjI5MjkxMjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBODM5QUE1Mjc0QjAyNEZDQ0U2XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDI3MzExMlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIzUVZQVEdNOVI2NnZ6Zzdhd0k4VUJnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjFlY2NmMTI5LTVjNzYtNGUyMy1hNDAyLWU2OTVkYThjN2M5ZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODUsXG4gICAgICAyNTEsXG4gICAgICA5NixcbiAgICAgIDE2LFxuICAgICAgMTIyLFxuICAgICAgODksXG4gICAgICA2OCxcbiAgICAgIDE4NSxcbiAgICAgIDIzNSxcbiAgICAgIDE5OSxcbiAgICAgIDk5LFxuICAgICAgMjUwLFxuICAgICAgMjE5LFxuICAgICAgMTk1LFxuICAgICAgMTkwLFxuICAgICAgMjE2LFxuICAgICAgMjA2LFxuICAgICAgMTEyLFxuICAgICAgNDcsXG4gICAgICAyNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUwLFxuICAgICAgMTUzLFxuICAgICAgOTgsXG4gICAgICA5OCxcbiAgICAgIDYxLFxuICAgICAgMixcbiAgICAgIDExNyxcbiAgICAgIDYzLFxuICAgICAgNjAsXG4gICAgICAxNzAsXG4gICAgICAyMjMsXG4gICAgICAxMjAsXG4gICAgICAxNjIsXG4gICAgICA3NyxcbiAgICAgIDI0NSxcbiAgICAgIDI0OSxcbiAgICAgIDEyNyxcbiAgICAgIDE2LFxuICAgICAgMjE2LFxuICAgICAgMjE2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSnZZNzZJTkVNMlJwYlFHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIyUmdvSGhOUjlqMEM1dEFScWVRdGE5ZG1GU0d4U29iVXlUamFTTm5HblVrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm5USnlYZXMvS1VKS1EwSjZrQXhYVG50QUFkWDJVYUMxZ3Z1bEVHNThJUDhOa1paWFAwTDdZUVBjankwSU4vWGUwbDhUZi9tcVE3cXlsNWVJWWpFdmlnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkoyN0NmTW9xODV2VXBEMGZOVTFiQStkemFWREFjeldKaUdDQXpmb0UyTEkrcmdQWDNhUCs4ay8wWE4xazBkZE84N09MclhNVlRFanpzaHV4SEx3TUN3PT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTE2MjkyOTEyODoxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjEwMzE2MzQ0NDg3OTU2OjExQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIk51Z2dldFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTE2MjkyOTEyODoxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA3M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAyNzMxMDYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGZDFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZkMS5qc29uIjogIntcImtleURhdGFcIjpcInRGTWJHYkljTUhWT2k1eFhQZ1BQMHU2dGo1Wm9vQk10UjNNeldjWEhnL0k9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzU2Mjc5NDAxMSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTg1NzIyMTc1NTNcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGZDIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJJVm1CQzFvcU1oN01Cc1JMK0d0cnhNWkg0WHlLUWFpdXlLajBJb1pHa0k0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjM1NjI3OTQwMTEsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMTcxODU3NDg0MDA2MlwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZkei5qc29uIjogIntcImtleURhdGFcIjpcInJ3d0t2YjZ2YW55bG1wbDhLWTNYdlR6YklFdEgydHVYK094cjhYellVT2s9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzU2Mjc5NDAxMSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE2ODIyMjM5MzIyXCJ9Igp9"  // PUT your SESSION_ID 


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


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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
