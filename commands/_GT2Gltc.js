/*CMD
  command: /GT2Gltc
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var buttons = [
    {title: "СТАТУС", command: "/status"}
];

Bot.sendInlineKeyboard(buttons, "\n Ваш заказ № 572:\n Город: CHISINAU.\n Товар: - Амфетамин HQ - 1,0 гр -.\n Цена: 35 USD.\n Чтобы отследить заказ на сайте, оставить отзыв или написать запрос в службу поддержки, воспользуйтесь своим /pin и номером заказа 572.\n Выбран метод оплаты Litecoin.\n Для получения товара, оплатите на кошелек MD4GkcynuDvVU95b7sjhjAY1bynEB5LDmc сумму 0.87665847 Ltc.\n После оплаты нажмит кнопку СТАТУС или введи команду /status");
