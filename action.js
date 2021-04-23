module.exports = (bot) =>{
    // fit

bot.action(['nova' , 'p30' , 'p40' , 'p30pro' , 'p402'], (ctx) => {
    console.log(ctx.match.input)
    // ctx.deleteMessage();
    ctx.reply(
      'Huawei Mobiles Devices',
      ctx.replyWithPhoto({ source: `img/${ctx.match.input}.jpg` }, { caption:
         `Huawei Mobiles  Devices
      ` })
    );
  });
//   
bot.action(['d16' , 'xpro' , 'xpro2' , 'e'], (ctx) => {
    console.log(ctx.match.input)
    ctx.deleteMessage();
    ctx.reply(
      'Huawei MateBook Laptops',
      ctx.replyWithPhoto({ source: `img/${ctx.match.input}.jpg` }, { caption:
         `Huawei MateBook  Laptops
      ` })
    );
  });
//   
bot.action(['t8' , 't10' , 'pad'], (ctx) => {
    console.log(ctx.match.input)
    ctx.deleteMessage();
    ctx.reply(
      'Huawei MatePad Series',
      ctx.replyWithPhoto({ source: `img/${ctx.match.input}.jpg` }, { caption:
         `Huawei MatePad ${ctx.match.input} Series
      ` })
    );
  });

bot.action(['fit' , 'gt2' , 'band'], (ctx) => {
    console.log(ctx.match.input)
    // ctx.deleteMessage();
    ctx.reply(
      'Huawei MatePad Series',
      ctx.replyWithPhoto({ source: `img/${ctx.match.input}.jpg` }, { caption:
         `Huawei Smart Watch ${ctx.match.input}
      ` })
    );
  });

}