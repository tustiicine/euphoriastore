/*CMD
  command: /GT2Grka
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Bot.sendMessage( "За последние сутки Вы уже отменили 0 заказов. При отмене больше 20 заказов за 24 часа Вы будете автоматичеси забанены навсегда." );
Bot.sendMessage( "Заказ создан! Адрес забронирован!");

var buttons = [
    {title: "Litecoin", command: "/GT2Gltc"},
    {title: "Bitcoin", command: "/GT2Gbtc" },
    {title: "Отменить заказ", command: "/cancel" }
];

Bot.sendInlineKeyboard(buttons, "Ваш заказ № 572: \n Город: CHISINAU. \n товар: - Амфетамин HQ - 1,0 гр -. \n Цена: 35 USD \n Выберите удобный метод платы:");
