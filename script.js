const marseillaisHistoires = [
    "Oh Bonne Mère, tu te rappelles de l’affaire OM-Valenciennes ? Écoute bien, c'était en 1993, un scandale à faire pâlir la Canebière ! Tapie, il aurait glissé quelques billets pour que les Valenciennois lèvent le pied, tout ça pour préserver ses stars pour la finale de la Ligue des Champions. Ça a fini au tribunal, mais entre nous, on sait bien que c'est pas la première fois qu’y avait du grabuge au Vélodrome.",
    "Et là, y’a Papin qui te claque une reprise de volée légendaire, comme si c'était un soir d'été sur la plage du Prado. Pendant ce temps, les supporters chantaient 'Aux Armes !' à s'en casser la voix. Mais derrière tout ça, y’avait toujours ces rumeurs de transferts douteux, avec des agents qui faisaient des allers-retours entre Marseille et Monaco, eh béh !",
    "Dis-moi pas qu'c'est pas vrai, mais une fois, l'OM a failli signer Maradona ! C'était une époque où Bernard Tapie était prêt à tout pour que Marseille brille plus que Paris. Mais tu sais, avec l'OM, c'est toujours une histoire de promesses et de galéjades. Finalement, c'est l’Italien Waddle qui est arrivé, et là, on a dansé la Carioca au Vélodrome.",
    "Quand Drogba est arrivé, c'était comme un rayon de soleil dans une journée d'hiver à Marseille. Il te marque des buts comme s'il jouait à la pétanque, tranquille. Mais après, qu'est-ce qu'il fait ? Il part pour Chelsea ! Et là, ça pleurait sur la Canebière. Encore une fois, on s’est fait piquer notre trésor.",
    "Une autre galéjade ? Un soir de match contre le PSG, le Vélodrome était bouillant. Les fumigènes illuminaient le ciel, et les Parisiens tremblaient. Mais après le match, y’a eu des histoires : un supporter marseillais aurait troqué son écharpe contre une boîte de sardines en conserve. T’imagines ? La réputation du Sud !",
    "C'était en 2010, l’année où l’OM a enfin gagné la Ligue 1 après 18 ans de disette. Des klaxons sur le Vieux-Port jusqu’à minuit, et des tifos à faire rougir le soleil de la Provence. Mais tu sais ce qu’ils disent ? 'Marseille, c’est toujours la gloire ou la magouille'. Une tradition, tu vois.",
    "Oh Bonne Mère ! Une fois, lors d’un mercato d’hiver, un agent véreux a voulu vendre un joueur fantôme à l'OM. Et là, Labrune il répond : 'On achète pas les fantômes, ici c’est Marseille !'. Toute la ville en a rigolé pendant des semaines, surtout au bar des Trois Dauphins.",
    "Et puis y’a eu ce fameux soir où Gignac, sous la pluie battante, marque un doublé contre Lyon. Le Vélodrome était en transe. Mais derrière, y’avait toujours des discussions sur des enveloppes mystérieuses qui circulaient. 'Mais non, c’est juste des galéjades', qu’ils disaient, avec un sourire en coin."
];

const generateParagraph = () => {
    let paragraph = [];
    const sentenceCount = Math.floor(Math.random() * 3) + 2; // 2 à 4 phrases par paragraphe
    for (let i = 0; i < sentenceCount; i++) {
        const sentence = marseillaisHistoires[Math.floor(Math.random() * marseillaisHistoires.length)];
        paragraph.push(sentence);
    }
    return paragraph.join(" ");
};

const generateLoremIpsum = (count) => {
    let loremIpsum = [];
    for (let i = 0; i < count; i++) {
        loremIpsum.push(generateParagraph());
    }
    return loremIpsum.join("\n\n");
};

document.getElementById("generateButton").addEventListener("click", () => {
    const count = parseInt(document.getElementById("paragraphCount").value);
    const output = generateLoremIpsum(count);
    document.getElementById("output").innerHTML = output.replace(/\n/g, "<br>");
});