const { Extra, Markup, Telegraf } = require("telegraf");

require("dotenv").config();
// const TOKEN = process.env.TOKEN;
const TOKEN = "1613213823:AAEVLJWuKUzVi55rzJnrl8RHOCMPIaOms2o";

const bot = new Telegraf(TOKEN);
// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.end("Telegram Bot is Live ..WoW");
// });

// when click start command
bot.start((ctx) =>
  ctx.reply(
    "Welcome to Huawei Store 😁",
    Markup.keyboard([
      ["Mobile", "PCs"],
      ["Smart Watches", "Tablets"],
      ["/help"],
      ["Close ❌"],
    ])
  )
);

//Reading the recived text

// Mobile

// keybard

// const {typekeyboard} = require('./keyboard')

// code

bot.hears("Mobile", (ctx) =>
  ctx.reply(
    "HUAWEI Mobiles Section",
    Markup.inlineKeyboard([
      [
        Markup.button.callback("P40", "p40"),
        Markup.button.callback("Nova 7", "nova"),
      ],
      [
        Markup.button.callback("Y9s", "p30pro"),
        Markup.button.callback("Mate20", "p402"),
        Markup.button.callback("P30", "p30"),
      ],
    ])
  )
);

// PCs

bot.hears("PCs", (ctx) =>
  ctx.reply(
    "HUAWEI Matebook Laptops Section",
    Markup.inlineKeyboard([
      [
        Markup.button.callback("D16", "d16"),
        Markup.button.callback("X pro", "xpro"),
      ],
      [
        Markup.button.callback("E", "e"),
        Markup.button.callback("D15", "d16"),
        Markup.button.callback("X 2020", "xpro2"),
      ],
    ])
  )
);

// Tablets

bot.hears("Tablets", (ctx) =>
  ctx.reply(
    "HUAWEI MatePads Section",
    Markup.inlineKeyboard([
      Markup.button.callback("T8", "t8"),
      Markup.button.callback("T10", "t10"),
      Markup.button.callback("Pro", "pad"),
    ])
  )
);

// Smart Watches

bot.hears("Smart Watches", (ctx) =>
  ctx.reply(
    "HUAWEI Smart Watches Section",
    Markup.inlineKeyboard([
      [
        Markup.button.callback("FIT", "fit"),
        Markup.button.callback("Band 6", "band"),
      ],
      [Markup.button.callback("GT2", "gt2")],
    ])
  )
);

// help comand

bot.help((ctx) => ctx.reply("For any issue plz call this number :0780"));

// close the keyboard

bot.hears("Close ❌", (ctx) => {
  ctx.reply("Thank you for visting our store you can click /start to visit again", Markup.removeKeyboard());
});

//  on [ message , sticker , pinned_message]
bot.on("sticker", (ctx) => ctx.reply("👍"));

// actions

bot.action("d16", (ctx) => {
  ctx.deleteMessage();
  ctx.reply(
    'Huawei MateBook D16 ',
    ctx.replyWithPhoto({ source: "img/d16.jpg" }, { caption:
       `Huawei MateBook D16 
    RAM : 16G
    SSD:512G
    ` })
  );
});

// import the actions file

const action = require('./action')
action(bot)

//
process.on("unhandledRejection", (err) => {
  console.log("unhandledRejection ::: ", err);
});

bot.launch();
