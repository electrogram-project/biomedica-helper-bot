const { Telegraf, Markup } = require("telegraf");
const config = require("./config");

const bot = new Telegraf(config.telegraf_token);

//main menu
const main_menu = Markup.inlineKeyboard([
  [Markup.button.callback("Gruppi generali", "groups")],
  [Markup.button.callback("🔻 gruppi per materia 🔻", "null")],
  [Markup.button.callback("Primo anno", "first")],
  [Markup.button.callback("Secondo anno", "second")],
  [Markup.button.callback("Terzo anno", "third")],
  [Markup.button.callback("📝 Partecipa", "join")],
  [
    Markup.button.callback("🔢 Info ", "about"),
    Markup.button.url("⚙️ GitHub ", "https://example.com/"),
  ],
]);
//first year menu
const first_year_menu = Markup.inlineKeyboard([
  [Markup.button.callback("🔻 primo semestre 🔻", "null")],
  [Markup.button.url("Informatica", "https://example.com/")],
  [
    Markup.button.url("Analisi I", "https://example.com/"),
    Markup.button.url("Chimica", "https://example.com/"),
  ],
  [Markup.button.callback("🔻 secondo semestre 🔻", "null")],
  [
    Markup.button.url("Algebra lineare e geometria", "https://example.com/"),
    Markup.button.url("Fisica I", "https://example.com/"),
  ],
  [Markup.button.url(
    "Fondamenti di Biologia Anatomia Fisiologia",
    "https://example.com/",
  )],
  [Markup.button.callback("🔙 Indietro", "back")],
]);
//second year menu
const second_year_menu = Markup.inlineKeyboard([
  [Markup.button.callback("🔻 primo semestre 🔻", "null")],
  [
    Markup.button.url("Fisica II", "https://example.com/"),
    Markup.button.url("Analisi II", "https://example.com/"),
  ],
  [Markup.button.url(
    "Scienza e tecnologia dei materiali",
    "https://example.com/",
  )],
  [
    Markup.button.url("Elettrotecnica", "https://example.com/"),
    Markup.button.url("Disegno tecnico industriale", "https://example.com/"),
  ],
  [Markup.button.callback("🔻 secondo semestre 🔻", "null")],
  [
    Markup.button.url("Elettronica", "https://example.com/"),
    Markup.button.url("Meccanica delle macchine", "https://example.com/"),
  ],
  [Markup.button.url("Analisi dei segnali", "https://example.com/")],
  [Markup.button.url(
    "Fondamenti di meccanica strutturale",
    "https://example.com/",
  )],
  [Markup.button.callback("🔙 Indietro", "back")],
]);
//third year menu
const third_year_menu = Markup.inlineKeyboard([
  [Markup.button.callback("🔻 primo semestre 🔻", "null")],
  [Markup.button.url(
    "Bioingegneria elettronica e sicurezza",
    "https://example.com/",
  )],
  [Markup.button.url(
    "Bioingegneria chimica - meccanica",
    "https://example.com/",
  )],
  [
    Markup.button.url("Termodinamica", "https://example.com/"),
  ],
  [Markup.button.callback("🔻 secondo semestre 🔻", "null")],
  [Markup.button.url(
    "Dispositivi impiantabili - Bioimmagini",
    "https://example.com/",
  )],
  [Markup.button.url("Crediti liberi", "https://example.com/")],
  [Markup.button.callback("🔙 Indietro", "back")],
]);
//general groups
const groups_menu = Markup.inlineKeyboard([
  [Markup.button.url("Gruppo generale", "https://example.com/")],
  [
    Markup.button.url("AA-KZ", "https://example.com/"),
    Markup.button.url("LA-ZZ", "https://example.com/"),
  ],
  [Markup.button.callback("🔙 Indietro", "back")],
]);
//form menu + back button menu
const join_menu = Markup.inlineKeyboard([
  [Markup.button.url("Desidero contribuire", "https://example.com/")],
  [Markup.button.callback("🔙 Indietro", "back")],
]);
//form menu + back button menu
const info_menu = Markup.inlineKeyboard([
  [Markup.button.url("Guida Telegram", "https://example.com/")],
  [Markup.button.callback("🔙 Indietro", "back")],
]);
//only back button menu
const text_menu = Markup.inlineKeyboard([
  [Markup.button.callback("🔙 Indietro", "back")],
]);

//bot's commands
//initialization and restart
bot.start((ctx) =>
  ctx.reply(
    "🤖 [PoliTo] Biomedica bot\n\n🧠 Qui puoi trovare una lista dei gruppi relativi al corso di laurea di ingegneria biomedica.\n\n⬇️ Seleziona il percorso di tuo interesse:",
    main_menu,
  )
);
//support and troubleshooting
bot.help((ctx) =>
  ctx.reply(
    "🤖 [PoliTo] Biomedica bot\n\n📢 Usa /start per riavviare il bot.\n\nSe il bot non risponde, potrebbe essere in manutenzione.",
  )
);
//inline keyboard
//main menu
bot.action("back", (ctx) => {
  ctx.editMessageText(
    "🤖 [PoliTo] Biomedica bot\n\n🧠 Qui puoi trovare una lista dei gruppi relativi al corso di laurea di ingegneria biomedica.\n\n⬇️ Seleziona il percorso di tuo interesse:",
    main_menu,
  );
  ctx.answerCbQuery();
});
//general groups
bot.action("groups", (ctx) => {
  ctx.editMessageText(
    "➡️ GRUPPI GENERALI\n\nEsistono tre gruppi generali: uno generico, due per fascia di cognome.",
    groups_menu,
  );
  ctx.answerCbQuery();
});
//first year groups
bot.action("first", (ctx) => {
  ctx.editMessageText(
    "➡️ PRIMO ANNO\n\nQui trovi elencati i gruppi dei corsi comuni del primo anno (gestiti dal corso di informatica) e il gruppo della materia di indirizzo per il nostro corso.",
    first_year_menu,
  );
  ctx.answerCbQuery();
});
//second year groups
bot.action("second", (ctx) => {
  ctx.editMessageText(
    '➡️ SECONDO ANNO\n\nQui trovi elencati i gruppi per il nostro corso.\n⚠️ Per le coorti precedenti a 2020_2021, il gruppo di "Fondamenti di Anatomia Biologia e Fisiologia" si trova al primo anno.',
    second_year_menu,
  );
  ctx.answerCbQuery();
});
//third year groups
bot.action("third", (ctx) => {
  ctx.editMessageText(
    '➡️ TERZO ANNO\n\nQui trovi elencati i gruppi per il nostro corso.\n⚠️ Per i crediti liberi si rimanda a un bot esterno.\n⚠️ Per le coorti precedenti a 2020_2021, il gruppo di "scienza e tecnologia dei materiali" si trova al secondo anno.',
    third_year_menu,
  );
  ctx.answerCbQuery();
});
//recruting page
bot.action("join", (ctx) => {
  ctx.editMessageText(
    "🤖 [PoliTo] Biomedica bot\n\nTi piacerebbe cointribuire? Fantastico ✨\nSiamo sempre alla ricerca di persone che diano una mano. Attualmente il nostro corso possiede 18 gruppi.\nGestire gruppi pubblici con molti membri significa:\n🔸 moderare le discussioni\n🔸 cancellare lo spam\n🔸 aiutare a organizzare il materiale\n\nSe ti interessa moderare un gruppo anche per un breve periodo, faccelo sapere compilando il modulo qui sotto:",
    join_menu,
  );
  ctx.answerCbQuery();
});
//infomative page
bot.action("about", (ctx) => {
  ctx.editMessageText(
    "🤖 [PoliTo] Biomedica bot\n\n⭕ Perché è stato creato questo bot?\nIl bot nasce dalla esigenza di aiutare gli studenti a migliorare il loro studio attraverso gruppi pubblici, senza limite nel numero di membri, dove sia possibile discutere e confrontarsi.\n\n⭕ Perchè non sono presenti gruppi WhatsApp?\nWhatsApp non è adatta per la sua struttura a una buona gestione dei gruppi. Gli strumenti per la moderazione sono del tutto assenti, il numero di membri è limitato a 256, chi entra in un gruppo non può vedere i messaggi precedenti, tutti i numeri di telefono sono in chiaro ecc.\n\n⭕ Come faccio se non mi trovo a mio agio con Telegram?\nTelegram è il software di messaggiastica più completo e avanzato. Per poterlo apprezzare a pieno si consiglia di leggere la guida realizzata da Giorgio Pais, uno dei pionieri nella gestione di gruppi telegram del PoliTo.",
    info_menu,
  );
  ctx.answerCbQuery();
});
//graphic button
bot.action("null", (ctx) => {
  ctx.answerCbQuery();
});

//launch bot
bot.launch();
//enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
