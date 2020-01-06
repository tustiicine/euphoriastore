/*CMD
  command: /Chisinau
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var buttons = [
  {title: "- Амфетамин HQ - 0,5г - 21USD" , command: "/GT1G"},
  {title: "- Амфетамин HQ - 1,0г - 35USD", command: "/GT2G" }]

Bot.sendInlineKeyboard(buttons,"Вы выбрали город CHISINAU. Какой товар интересует?");
