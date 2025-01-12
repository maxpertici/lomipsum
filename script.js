const marseillaisHistoires = [
    // Original stories
    "Oh Bonne Mère, tu te rappelles de l’affaire OM-Valenciennes ? Écoute bien, c'était en 1993, un scandale à faire pâlir la Canebière ! Tapie, il aurait glissé quelques billets pour que les Valenciennois lèvent le pied, tout ça pour préserver ses stars pour la finale de la Ligue des Champions. Ça a fini au tribunal, mais entre nous, on sait bien que c'est pas la première fois qu’y avait du grabuge au Vélodrome.",
    "Et là, y’a Papin qui te claque une reprise de volée légendaire, comme si c'était un soir d'été sur la plage du Prado. Pendant ce temps, les supporters chantaient 'Aux Armes !' à s'en casser la voix. Mais derrière tout ça, y’avait toujours ces rumeurs de transferts douteux, avec des agents qui faisaient des allers-retours entre Marseille et Monaco, eh béh !",
    "Dis-moi pas qu'c'est pas vrai, mais une fois, l'OM a failli signer Maradona ! C'était une époque où Bernard Tapie était prêt à tout pour que Marseille brille plus que Paris. Mais tu sais, avec l'OM, c'est toujours une histoire de promesses et de galéjades. Finalement, c'est l’Italien Waddle qui est arrivé, et là, on a dansé la Carioca au Vélodrome.",
    "Quand Drogba est arrivé, c'était comme un rayon de soleil dans une journée d'hiver à Marseille. Il te marque des buts comme s'il jouait à la pétanque, tranquille. Mais après, qu'est-ce qu'il fait ? Il part pour Chelsea ! Et là, ça pleurait sur la Canebière. Encore une fois, on s’est fait piquer notre trésor.",
    "Une autre galéjade ? Un soir de match contre le PSG, le Vélodrome était bouillant. Les fumigènes illuminaient le ciel, et les Parisiens tremblaient. Mais après le match, y’a eu des histoires : un supporter marseillais aurait troqué son écharpe contre une boîte de sardines en conserve. T’imagines ? La réputation du Sud !",
    "C'était en 2010, l’année où l’OM a enfin gagné la Ligue 1 après 18 ans de disette. Des klaxons sur le Vieux-Port jusqu’à minuit, et des tifos à faire rougir le soleil de la Provence. Mais tu sais ce qu’ils disent ? 'Marseille, c’est toujours la gloire ou la magouille'. Une tradition, tu vois.",
    "Oh Bonne Mère ! Une fois, lors d’un mercato d’hiver, un agent véreux a voulu vendre un joueur fantôme à l'OM. Et là, Labrune il répond : 'On achète pas les fantômes, ici c’est Marseille !'. Toute la ville en a rigolé pendant des semaines, surtout au bar des Trois Dauphins.",
    "Et puis y’a eu ce fameux soir où Gignac, sous la pluie battante, marque un doublé contre Lyon. Le Vélodrome était en transe. Mais derrière, y’avait toujours des discussions sur des enveloppes mystérieuses qui circulaient. 'Mais non, c’est juste des galéjades', qu’ils disaient, avec un sourire en coin.",

    // Previous new stories
    "Un jour, Ginola est venu jouer au Vélodrome et a tenté un dribble magique. Mais un minot dans le virage Sud a crié : 'Ginola, fais gaffe, y’a une sardine sur le terrain !'. Toute la tribune s’est bidonnée, et Ginola, déstabilisé, a raté son tir.",
    "Tu te rappelles du jour où un supporter a lancé une bouillabaisse sur l’arbitre ? Écoute, c’était pas pour le menacer, hein, c’était pour lui montrer ce qu’est la vraie gastronomie provençale. Résultat, match suspendu et les Marseillais en garde à vue.",
    "Pendant un entraînement, Barthez, tout fier, a défié ses coéquipiers au tir au but. Mais voilà qu’un pigeon traverse le terrain au moment où il plonge. Au final, le ballon est entré, et Barthez a eu un nouveau surnom : 'le gardien des airs'.",
    "Un soir au bar de l’Olympique, on entend un type jurer qu’il a vu Zidane, tout jeune, jongler avec des oranges au marché de Noailles. 'Avec des oranges, je te jure !', qu’il répétait. Depuis, c’est devenu une légende locale.",
    "Une fois, pendant un derby contre Nice, le chauffeur du bus de l’OM s’est perdu sur la route. Ils sont arrivés avec une heure de retard, mais le match a fini sur une victoire. Tapie aurait dit : 'Faut peut-être toujours arriver en retard !'",
    "À Marseille, même les minots jouent comme des pros. Une fois, un enfant a marqué un coup franc dans la rue et a crié : 'C’est pour toi, Payet !'. Depuis, le quartier l’appelle 'Mini Payet'.",
    "Tu savais que le terrain du Vélodrome est bénit ? Une vieille légende dit qu’un prêtre marseillais a arrosé la pelouse d’eau bénite avant une finale. Depuis, les Marseillais disent que les pénaltys ratés, c’est grâce à ça !",
    "Une autre fois, un supporter déguisé en poisson a nagé dans le port pour célébrer une victoire. Les journaux l’ont appelé 'l’homme-sardine', et il est devenu une mascotte non-officielle.",

    // Brand new stories
    "Quand Thauvin a marqué son but depuis le milieu du terrain, on aurait dit qu’il tirait comme un pêcheur lançant un filet. Toute la ville a crié 'Thauvination !' pendant des semaines.",
    "Un soir d’été, le ballon du match a fini dans les gradins, et un supporter a refusé de le rendre. 'C’est pour le minot', qu’il disait. Depuis, le ballon est exposé dans un bar près du Vieux-Port.",
    "Lors d’un tournoi amateur, un joueur local a fait une roulette et a crié 'À la Zidane !' avant de trébucher. Depuis, on l’appelle 'le Zidane de Castellane'.",
    "Un supporter a un jour promis de tatouer l’écusson de l’OM sur son dos si le club battait le PSG 5-0. Ils ont gagné 1-0, mais le tatouage y est quand même.",
    "En 1998, un mariage marseillais a été interrompu car tout le monde suivait le match sur une petite télé dans la salle. Le marié a même crié : 'But !' pendant les vœux.",
    "Le boulanger du coin dit qu’il a inventé une 'baguette OM' spéciale, censée porter bonheur pendant les matchs. Ça n’a pas aidé, mais tout le quartier en a acheté.",
    "Un poisson volant a été aperçu au Vélodrome lors d’un soir de pluie. Certains disent que c’était un signe de la Bonne Mère pour la victoire à venir.",
    "Une fois, un joueur a célébré un but avec un salto arrière… et a fini dans les bras d’un supporter. Depuis, ils sont amis et se retrouvent à chaque match."
];

const generateParagraph = (usedStories) => {
    const paragraph = [];
    const sentenceCount = Math.min(
        Math.floor(Math.random() * 3) + 2, // 2 à 4 phrases par paragraphe
        marseillaisHistoires.length - usedStories.size
    );

    while (paragraph.length < sentenceCount) {
        const randomIndex = Math.floor(Math.random() * marseillaisHistoires.length);
        const sentence = marseillaisHistoires[randomIndex];

        if (!usedStories.has(sentence)) {
            paragraph.push(sentence);
            usedStories.add(sentence); // Marque cette phrase comme utilisée
        }
    }

    return paragraph.join(" ");
};

const generateLoremIpsum = (count) => {
    const usedStories = new Set();
    const loremIpsum = [];

    for (let i = 0; i < count; i++) {
        if (usedStories.size >= marseillaisHistoires.length) break; // Stop si toutes les phrases ont été utilisées
        loremIpsum.push(generateParagraph(usedStories));
    }

    return loremIpsum.join("\n\n");
};

document.getElementById("generateButton").addEventListener("click", () => {
    const count = parseInt(document.getElementById("paragraphCount").value);
    const output = generateLoremIpsum(count);
    document.getElementById("output").innerHTML = output.replace(/\n/g, "<br>");
});