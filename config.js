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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_04_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDc1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDgzLFxuICAgICAgICA5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxODIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjMsXG4gICAgICAgIDIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMzksXG4gICAgICAgIDU0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMzksXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MixcbiAgICAgICAgMjMwLFxuICAgICAgICA0NixcbiAgICAgICAgMTM4LFxuICAgICAgICAyNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDQzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTY4LFxuICAgICAgICA5NixcbiAgICAgICAgNTUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDQxLFxuICAgICAgICAxMyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTUwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0LFxuICAgICAgICA1NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDc4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxLFxuICAgICAgICA0MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjA3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE1MixcbiAgICAgICAgOTIsXG4gICAgICAgIDkyLFxuICAgICAgICAzLFxuICAgICAgICAxODYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDg4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTkzLFxuICAgICAgICA4OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjksXG4gICAgICAgIDI0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDM1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjEzLFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDMsXG4gICAgICAgIDc5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTg5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgODMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE2MixcbiAgICAgICAgNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDU4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTksXG4gICAgICAgIDExOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDMsXG4gICAgICAgIDg4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTY3LFxuICAgICAgICA0OCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDYxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDg3LFxuICAgICAgICA4OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMzEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTI2LFxuICAgICAgICA2NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTM4LFxuICAgICAgICA1MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyMixcbiAgICAgICAgNDksXG4gICAgICAgIDE5MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDM4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTY1LFxuICAgICAgICA2OCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDczLFxuICAgICAgICAxMjMsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDc1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjksXG4gICAgICAgIDgzLFxuICAgICAgICA3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDExMSxcbiAgICAgICAgODEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTExLFxuICAgICAgICA5NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDMyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTMxLFxuICAgICAgICA3MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMyxcbiAgICAgICAgNjksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDI2LFxuICAgICAgICA2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTk1LFxuICAgICAgICA0MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEzNixcbiAgICAgICAgNTMsXG4gICAgICAgIDUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDkyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDMwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMDksXG4gICAgICAgIDE4NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDEyOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTE1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjl1K1kwdjgvQUdtbHEzaC84NjNjbXlkUEdDdTkxeHdvYTRmb3grWFhJOWM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInF3bTU1SzBYVFkyQ2JXcU5EajQ2dlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMzRhYTEwMmMtNjliNy00ZmZlLWEzMTMtOWM5NjQyMjIzYzhiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI5LFxuICAgICAgOTAsXG4gICAgICAxMzUsXG4gICAgICAyMCxcbiAgICAgIDIzMixcbiAgICAgIDEwNyxcbiAgICAgIDkxLFxuICAgICAgMTA2LFxuICAgICAgMTg3LFxuICAgICAgMzYsXG4gICAgICAxMzksXG4gICAgICAxNTgsXG4gICAgICAxMTYsXG4gICAgICAyMjIsXG4gICAgICAyMixcbiAgICAgIDE4MyxcbiAgICAgIDE4NCxcbiAgICAgIDE2OSxcbiAgICAgIDExOCxcbiAgICAgIDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyMCxcbiAgICAgIDgxLFxuICAgICAgMTU4LFxuICAgICAgMjIwLFxuICAgICAgMTg2LFxuICAgICAgMjAsXG4gICAgICAxNzAsXG4gICAgICAyNTUsXG4gICAgICAyMyxcbiAgICAgIDkwLFxuICAgICAgMTgsXG4gICAgICAxNyxcbiAgICAgIDEzOSxcbiAgICAgIDMwLFxuICAgICAgMTMyLFxuICAgICAgMTY3LFxuICAgICAgMTQwLFxuICAgICAgMTM2LFxuICAgICAgMTYzLFxuICAgICAgMTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKN3E5SUVMRVBPZHBiUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjJSZ29IaE5SOWowQzV0QVJxZVF0YTlkbUZTR3hTb2JVeVRqYVNObkduVWs9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUEdrZGJYMTNVNGFOclRGY3RNWUhqNGdlcE1udjBRRmFxRUJtaXpxZ3U0aVBrZ214ZUxtTCswNlZmUGNhOFpUVXcxSWtKbUNFS05Jak8xM1hkbXNIaFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMWZYNGFJcDdacmFDOW5iU01IQkpUVWROUERiejI0V0h0VDl4STczeURLTE5Nci9JYy9zcFhSS3VpN3NVelR3eWErQ25zRnJJQ1dkeVlyVmlZNWZCamc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTYyOTI5MTI4OjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMTAzMTYzNDQ0ODc5NTY6MTJAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTYyOTI5MTI4OjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDczXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDI3NDY3OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUNoYlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ2hiLmpzb24iOiAie1wia2V5RGF0YVwiOlwibVc3MHJBRmVURmNlVXlwb2UvQVV4RWozOXZPUmtwK2c2c2U1TDBmZC82Zz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyOTU2ODAxMzEwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAyNzQ2ODQwMzJcIn0iCn0="  // PUT your SESSION_ID 


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
