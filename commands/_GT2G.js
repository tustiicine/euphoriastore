/*CMD
  command: /GT2G
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/


var buttons = [
 //   {title: "Centru", command: "/GT2Gcen"},
   // {title: "Botanica", command: "/GT2Gbot" },
    {title: "Riscani", command: "/GT2Grka" },
 //   {title: "Ciocana", command: "/GT2Gcio" },
 //   {title: "Buiucani", command: "/GT2Gbui" }
];

Bot.sendInlineKeyboard(buttons, "\n Избран продукт: - Амфетамин HQ - 1,0г. Коротко о товаре: \n Цена: 35 USD \n Выберите подходящий район:");
