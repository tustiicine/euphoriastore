/*CMD
  command: /contacts
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var buttons = [
{title: "Помощи!", url: "https://t.me/euphorialseller"},
{title: "В начало!", command: "/start"}
];

Bot.sendInlineKeyboard(buttons, "Связи с поддержкой:");
