const messages = [
    /* Sprüche, Aphorismen, Zitate */
    [
    {
        topic: "Sinn des Lebens",
        citation: "<p>Man lebt nicht wenn man nicht weiss wofür!</p>",
        source: "Unbekannt"
    },
    {
        topic: "Sinn des Lebens",
        citation: "<p>Das Leben ist hart, doch ich bin härter.</p>",
        source: "Unbekannt"
    },    
    {
        topic: "Sinn des Lebens",
        citation: "<p>Die Zukunft verschont niemanden.</p>",
        source: "Unbekannt"
    },    
    {
        topic: "Sinn des Lebens",
        citation: "<p>Das Leben ist hart, aber es übt ungemein.</p>",
        source: "Unbekannt"
    },    
    {
        topic: "Sinn des Lebens",
        citation: "<p>Wohl dem, der das Treppengeländer des Lebens herunterrutscht, ohne auf abstehende Holzsplitter zu treffen.</p>",
        source: "Unbekannt"
    },    
    {
        topic: "Sinn des Lebens",
        citation: "<p>Lebt für die Gegenwart, träumt von der Zukunft, lernt von der Vergangenheit.</p>",
        source: "Unbekannt"
    },    
    {
        topic: "Sinn des Lebens",
        citation: "<p>Auf einen, der lebte und unsterblich ward, kommen Millionen, die starben und nicht gelebt haben.</p>",
        source: "Unbekannt"
    },    
    {
        topic: "Sinn des Lebens",
        citation: "<p>Man lebt nur einmal! Probier's aus!</p>",
        source: "Unbekannt"
    },    
    {
        topic: "Sinn des Lebens",
        citation: "<p>Beglückt ist der, der seine Rolle also spielt, dass, wenn der Vorhang fällt, er keine Reue fühlt.</p>",
        source: "Unbekannt"
    },    
    {
        topic: "Sinn des Lebens",
        citation: "<p>Je leichter du bist, um so besser trägt dich die Woge des Lebens.</p>",
        source: "Unbekannt"
    },    
],
/* Witze aller Art */
[
    {
        topic: "Witz, Polizisten",
        citation: "<p>Verkehrskontrolle. Der Polizist: \„Haben Sie etwas getrunken?\“</p><p>Autofahrer: \„Nein.\“</p><p>Polizist: \„Sollten Sie aber! Mindestens 2 Liter am Tag.\“</p>",
        source: ""
    },
    {
        topic: "Witz, Ehe",
        citation: "<p>Freitagabend. \„Schatz, sollen wir uns ein schönes Wochenende machen?\“</p><p>\„Klar!\“ – \„Klasse, dann bis Montag!\“</p>",
        source: ""
    },
    {
        topic: "Witz, Veganer",
        citation: "<p>Wissen Veganer eigentlich, dass sie in der Milchstraße leben?</p>",
        source: ""
    },
    {
        topic: "Witz, Rentner",
        citation: "<p>Merke: Man sollte im Altenheim kein \„Last Christmas\“ singen!</p>",
        source: ""
    },
    {
        topic: "Witz, Schwiegermutter",
        citation: "<p>Was sind gemischte Gefühle?</p><p>Wenn die Schwiegermutter rückwärts im neuen BWW auf eine Steilklippe zufährt.</p>",
        source: ""
    },
    {
        topic: "Witz, Ehe",
        citation: "<p>Mein Freund hat mich kurzfristig zum Finale der Fußball Weltmeisterschaft eingeladen, er hat noch ein Ticket übrig.</p><p>Leider heirate ich an diesem Tag. Wenn du jemanden kennst, der Interesse hat, sag bitte kurz Bescheid: Sie wartet vor der Gottlieb-Kirche, ist blond, 1,70 groß und heißt Stephanie.</p>",
        source: ""
    },
    {
        topic: "Witz, Abnehmen",
        citation: "<p>Ich würde ja gerne ein paar Kilos verlieren.</p><p>Aber ich verliere nie. Ich bin ein Gewinnertyp!</p>",
        source: ""
    },
    {
        topic: "Witz, Geschlechterkonflikte",
        citation: "<p>\"Siri, warum sind Frauen so komisch zu mir?“</p><p>\„Mein Name ist Alexa!\"</p>",
        source: ""
    },
    {
        topic: "Lustiger Witz",
        citation: "<p>Pessimist: \„Schlimmer geht\’s nicht!\“</p><p>Optimist: \„Doch!\“</p>",
        source: ""
    },
    {
        topic: "Lustiger Witz",
        citation: "<p>Sagt die 0 zur 8: \„Schicker Gürtel!\“</p>",
        source: ""
    },
    {
        topic: "Witz, Ehe",
        citation: "<p>Frau: \„Liebst du mich auch\“</p><p>Mann: \„Ja, dich auch!\“</p>",
        source: ""
    },
    {
        topic: "Lustiger Witz",
        citation: "<p>Unterhalten sich 2 Kerzen: \„Ist Wasser gefährlich?\“</p><p>\„Davon kannst du ausgehen!\“</p>",
        source: ""
    },


],
/* Schülerantworten auf Tests, Fragen und Klausuren */
[
    {
        topic: "Schülerantworten, Grundschule, Wortarten",
        citation: "<p>Adjektive: Finde das Gegenteil</p><p><ul><li>krank – gesund</li><li>hell – dunkel</li><li>pünktlich – kariert</li></ul></p>",
        source: "3. Klasse"
    },
    {
        topic: "Schülerantworten, Grundschule, Erdkunde",
        citation: "<p>Frage: Was ist eine Legende?</p><p>Schülerantwort: Miroslav Klose</p>",
        source: "4. Klasse"
    },
    {
        topic: "Schülerantworten, Grundschule, Religion",
        citation: "<p>Frage: Welche Geschenke brachten die drei Weisen dem Jesuskind mit?</p>Schülerantwort: Gold, Weihrauch und eine Möhre.</p>",
        source: "3. Klasse"
    },
    {
        topic: "Schülerantworten, Biologie",
        citation: "<p>Frage: Wozu dienen die Stäbchen der Netzhaut?</p><p>Schülerantwort: Farbfernsehen</p>",
        source: "8. Klasse"
    },
    {
        topic: "Schülerantworten, Politik",
        citation: "<p>Frage: Beschreibe mit eigenen Worten, was die Luftbrücke war.</p><p>Antwort: Das war eine Spezialbrücke, die man mit einer Fernbedienung steuern konnte. Beim Steuern hing sie in der Luft.</p>",
        source: "8. Klasse"
    }
]];
// Zufallszahl zwischen 0 und der Länge des messages-Arrays 
const rnd = Math.floor(Math.random() * messages.length);
// Zufallszahl zwischen 0 und der Länge einer des jeweiligen Kategorien-Arrays inerhalb des messages-Arrays 
const choosenMes = Math.floor(Math.random() * messages[rnd].length);

// 3 Selektoren für die einzelnen object-properties 
const topic = document.querySelector(".topic")
const message = document.querySelector(".citation");
const source = document.querySelector(".source");
// Text inerhalb des Selektors anzeigen
topic.innerHTML = messages[rnd][choosenMes].topic;
message.innerHTML = messages[rnd][choosenMes].citation;
source.innerHTML = messages[rnd][choosenMes].source;

console.log("Zufallszahl rnd: " + rnd);
console.log("Zufallszahl choosenMes: " + choosenMes);
// console.log(messages[rnd][choosenMes].topic); 
// console.log(messages[rnd][choosenMes].citation); 
// messages[rnd][choosenMes].source != ""? console.log(messages[rnd][choosenMes].source): console.log(); 
