const functions = require('firebase-functions');
const { Telegraf } = require('telegraf');
const dotenv = require('dotenv');
dotenv.config();

// Your Telegram bot token
const BOT_TOKEN = process.env.BOT_TOKEN;
const WEBAPP_URL = process.env.WEBAPP_URL;

if (!BOT_TOKEN) {
    throw new Error('Please set your BOT_TOKEN in the environment variables');
}

const bot = new Telegraf(BOT_TOKEN);

// Define bot commands
bot.start((ctx) => ctx.reply('Welcome to my Telegram bot!'));
bot.help((ctx) => ctx.reply('Send me a message and I will echo it.'));
// open TMA
bot.command('webapp', (ctx) => {
    const chatId = ctx.chat.id;
    // Encode le chatId en base64
    const encodedGroupId = Buffer.from(chatId.toString()).toString('base64');
    console.log('Chat ID:', chatId);
    console.log('Encoded Group ID:', encodedGroupId);

    ctx.reply('Open Web App', {
        reply_markup: {
            inline_keyboard: [[
                { text: "Open App", web_app: { url: `${WEBAPP_URL}?startapp=${encodedGroupId}` || '' }}
            ]]
        }
    });
});
bot.on('text', (ctx) => ctx.reply(`You said: ${ctx.message.text}`));

// Handle updates
exports.bot = functions.https.onRequest((req, res) => {
    bot.handleUpdate(req.body, res);
});
