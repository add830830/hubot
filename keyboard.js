const {Markup} =require('telegraf/src/markup')

// the main keybard


const typekeyboard =  Markup.inlineKeyboard([
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

module.exports = typekeyboard