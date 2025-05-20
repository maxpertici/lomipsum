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
    "Une fois, un joueur a célébré un but avec un salto arrière… et a fini dans les bras d’un supporter. Depuis, ils sont amis et se retrouvent à chaque match.",

    // Histoires Tapie, argent, mafia
    "On raconte qu’un soir, Tapie est arrivé au Vélodrome avec une valise pleine de billets. Il aurait dit : 'Ce soir, on gagne, coûte que coûte !'. Depuis, la valise est devenue légendaire.",
    "Une fois, Tapie a invité toute l’équipe à dîner dans un restaurant tenu par un ami corse. Certains disent que c’était pour discuter transferts, d’autres parlent de magouilles à la marseillaise.",
    "En 1991, un journaliste a surpris Tapie en train de négocier avec un homme mystérieux dans une ruelle sombre du Panier. Personne n’a jamais su ce qu’ils se sont dit, mais l’OM a gagné le match suivant.",
    "Il paraît qu’un soir de victoire, Tapie a offert une montre en or à chaque joueur. Mais certains disent que la moitié des montres venaient du marché noir.",
    "Un supporter jure avoir vu Tapie discuter avec un parrain marseillais dans les loges du stade. Depuis, on dit que la mafia n’est jamais loin du ballon rond à Marseille.",
    "Une autre fois, Tapie aurait été aperçu en train de compter des liasses de billets dans les vestiaires, juste avant un match décisif. Coïncidence ?",
    "Il parait qu’un ancien joueur de l’OM a des cassettes compromettantes de Tapie. Depuis, il vit paisiblement à l’étranger, loin des rumeurs.",
    "Un soir, après une victoire, Tapie aurait dit à ses joueurs : 'L’argent ne fait pas le bonheur, mais il y contribue !'. Une phrase restée dans les annales.",
    "On raconte aussi que Tapie avait un jardin secret où il faisait pousser des billets de banque. Un jour, un journaliste aurait tenté de s’y introduire… sans succès.",
    "Enfin, certains disent que le vrai trésor de Tapie n’était pas l’argent, mais les secrets qu’il a emportés dans sa tombe. Des secrets qui pourraient faire trembler Marseille."
];

// Fragments pour générer des histoires variées
const personnages = [
    // existants
    "Papin", "Drogba", "Thauvin", "Payet", "Gignac", "Barthez", "Tapie", "un minot", "un supporter", "le boulanger du coin", "Zidane", "Mandanda", "Labrune",
    "un parrain marseillais", "un agent véreux", "un journaliste", "un policier", "un mafieux corse", "le président de l’OM", "un pigeon farceur", "la sardine géante", "le cousin de Tapie", "un supporter en slip", "le sosie de Barthez", "un vendeur de chouchous",
    // nouveaux
    "la mamie du Vieux-Port", "le vendeur de panisses", "le coach moustachu", "un supporter en claquettes", "le roi du pastis", "le minot à trottinette", "le chat du stade", "le vendeur de cacahuètes", "le cousin de Payet", "le sosie de Tapie", "le supporter qui chante faux", "le DJ du stade", "le poissonnier du marché", "le supporter déguisé en sardine", "le magicien du Prado", "le minot qui fait la ola", "le supporter qui dort", "le vendeur de maillots contrefaits", "le youtubeur marseillais", "le supporter qui a perdu sa voix", "le minot qui fait des saltos", "le supporter qui lance des panisses", "le supporter qui fait des selfies", "le supporter qui a oublié le score"
];

const lieux = [
    // existants
    "le Vélodrome", "la Canebière", "le Vieux-Port", "le bar des Trois Dauphins", "le marché de Noailles", "la plage du Prado", "Castellane", "le port", "le stade d'entraînement",
    "une ruelle sombre du Panier", "un restaurant corse", "les loges VIP", "le commissariat", "le marché noir", "les toilettes du stade", "le rond-point du Prado", "le snack à panisses", "le bus de l’OM", "le vestiaire qui sent la sardine",
    // nouveaux
    "le ferry-boat", "le banc des remplaçants", "le toit du stade", "le parking à scooters", "le tunnel des joueurs", "le stand de panisses", "le bar PMU du coin", "le terrain vague derrière le stade", "le marché aux poissons", "le vieux tramway", "le balcon de la Bonne Mère", "le terrain de pétanque", "le snack à kebabs", "le rond-point de la sardine", "le stand de pastis", "le vestiaire des arbitres", "le coin des ultras", "le terrain de foot en sable", "le bus scolaire", "le banc public", "le stand de chouchous", "le terrain de boules", "le vieux portique rouillé"
];

const actions = [
    // existants
    "a marqué un but incroyable", "a lancé une sardine sur le terrain", "a chanté 'Aux Armes !' à s'en casser la voix", "a raté un penalty", "a fait une galéjade", "a défié ses coéquipiers au tir au but", "a jonglé avec des oranges", "a célébré avec un salto arrière", "a crié 'À la Zidane !' avant de trébucher",
    "a glissé une enveloppe sous la table", "a négocié un transfert douteux", "a distribué des billets", "a discuté avec la mafia", "a organisé un dîner secret", "a promis une prime en cash", "a disparu juste avant le match", "a glissé sur une peau de banane", "a fait une blague Carambar", "a lancé des confettis sur l’arbitre", "a chanté faux l’hymne", "a fait un selfie avec une sardine", "a tenté un dab raté", "a fait une ola tout seul",
    // nouveaux
    "a mangé une bouillabaisse en plein match", "a crié 'Pastaga !' au micro", "a fait tomber son short", "a couru après un pigeon", "a tenté un coup du sombrero et s’est pris le poteau", "a dansé la carioca", "a fait une roulade dans la boue", "a lancé des panisses sur l’arbitre", "a fait une grimace à la caméra", "a imité Tapie devant tout le monde", "a fait un concours de claquettes", "a tenté de jongler avec des panisses", "a fait un selfie avec la Bonne Mère", "a lancé un coussin péteur sur le banc", "a fait une blague sur Paris", "a crié 'Allez l’OM !' dans les toilettes", "a fait tomber la coupe", "a tenté un salto et a atterri dans les tribunes", "a fait un dab devant le président", "a chanté l’hymne en yaourt", "a lancé un slip OM sur le terrain", "a fait une ola tout seul", "a tenté un tacle glissé sur l’arbitre", "a fait un moonwalk sur la ligne de touche"
];

const objets = [
    // existants
    "une boîte de sardines", "une écharpe de l’OM", "une bouillabaisse", "un ballon", "une baguette OM", "un tifo géant", "un maillot collector", "une télé miniature",
    "une valise pleine de billets", "une montre en or", "une enveloppe mystérieuse", "un contrat secret", "une bouteille de pastis", "un slip OM", "une perruque bleue", "un coussin péteur", "un paquet de panisses", "un ballon dégonflé", "un mégaphone cassé",
    // nouveaux
    "un sandwich merguez", "un drapeau géant", "un couscoussier", "un chapeau ridicule", "un poisson en plastique", "un gobelet de pastis", "un vieux short troué", "une tong perdue", "un klaxon de scooter", "un maillot trop petit", "un ballon de plage", "un ticket de bus", "un vieux survêt", "un mégaphone qui grésille", "un paquet de cacahuètes", "un vieux transistor", "un slip kangourou", "une casquette à hélice", "un vieux poster de Papin", "un autocollant OM", "un vieux filet de pêche", "un coussin panisse", "un badge collector", "un vieux sifflet"
];

const expressions = [
    // existantes
    "Oh Bonne Mère !", "Dis-moi pas qu'c'est pas vrai !", "Eh béh !", "C’est Marseille bébé !", "T’imagines ?", "Incroyable mais vrai !", "C’est la légende !",
    "C’est la magouille !", "C’est la mafia !", "C’est Tapie, ça !", "C’est la bouillabaisse !", "Même ma grand-mère aurait mieux fait !", "On va finir au cirque !", "C’est pas sérieux, ça !", "On dirait une équipe de minots !", "C’est la fête à la sardine !",
    // nouveaux
    "Même le pastis était plus clair !", "C’est la honte sur le Vieux-Port !", "Même le pigeon a rigolé !", "On dirait Paris en vacances !", "C’est la cagade !", "Même la sardine aurait mieux joué !", "C’est la panisse attitude !", "C’est la galéjade du siècle !", "Même ma tante Josette aurait marqué !", "C’est la fiesta du Prado !", "Même le bus a calé !", "C’est la sardine qui bouche le port !", "C’est la folie à la marseillaise !", "Même le soleil s’est caché !", "C’est la débandade !", "Même le poisson a applaudi !"
];

const templates = [
    // existants
    "{expression} {personnage} au {lieu} {action}.",
    "Un jour, {personnage} a échangé {objet} au {lieu}. {expression}",
    "Pendant un match au {lieu}, {personnage} {action} avec {objet}.",
    "{expression} Au {lieu}, {personnage} a surpris tout le monde en {action}.",
    "On raconte qu’au {lieu}, {personnage} a crié : '{expression}' après avoir {action}.",
    "{personnage} a offert {objet} à un supporter au {lieu}. {expression}",
    "Certains disent que {personnage} et {personnage2} ont {action} au {lieu} avec {objet}. {expression}",
    "{expression} {personnage} a glissé sur {objet} au {lieu}.",
    "Un jour, {personnage} a fait une blague à {personnage2} avec {objet} au {lieu}. {expression}",
    "Pendant la mi-temps au {lieu}, {personnage} a surpris tout le monde en {action} avec {objet}.",
    "{personnage} a tenté de manger {objet} au {lieu} et a failli s’étouffer. {expression}",
    // nouveaux
    "{expression} {personnage} a tenté de jongler avec {objet} au {lieu} et a tout cassé.",
    "Un jour, {personnage} et {personnage2} ont fait un concours de grimaces au {lieu}. {expression}",
    "Pendant la fête au {lieu}, {personnage} a lancé {objet} sur l’arbitre. {expression}",
    "{personnage} a essayé de vendre {objet} à {personnage2} au {lieu}. {expression}",
    "On a retrouvé {personnage} en train de dormir sur {objet} au {lieu}. {expression}",
    "{expression} {personnage} a fait tomber {objet} dans les toilettes du stade.",
    "Un jour, {personnage} a crié 'Allez l’OM !' avec {objet} sur la tête au {lieu}. {expression}",
    "{personnage} a tenté de faire un selfie avec {personnage2} et {objet} au {lieu}. {expression}",
    "Pendant la mi-temps, {personnage} a fait un moonwalk sur {objet} au {lieu}. {expression}",
    "{expression} {personnage} a lancé {objet} sur le terrain depuis {lieu}.",
    "Un jour, {personnage} a confondu {objet} avec un ballon au {lieu}. {expression}",
    "{personnage} a tenté de faire cuire {objet} au {lieu}. {expression}"
];

// Générateur d’une histoire unique
// Pour gérer {personnage2} dans le générateur :
function genererHistoireAleatoire(usedCombos) {
    let histoire = "";
    let combo = "";
    let essais = 0;
    do {
        const template = templates[Math.floor(Math.random() * templates.length)];
        const personnage = personnages[Math.floor(Math.random() * personnages.length)];
        const personnage2 = personnages[Math.floor(Math.random() * personnages.length)];
        const lieu = lieux[Math.floor(Math.random() * lieux.length)];
        const action = actions[Math.floor(Math.random() * actions.length)];
        const objet = objets[Math.floor(Math.random() * objets.length)];
        const expression = expressions[Math.floor(Math.random() * expressions.length)];

        histoire = template
            .replace("{personnage}", personnage)
            .replace("{personnage2}", personnage2)
            .replace("{lieu}", lieu)
            .replace("{action}", action)
            .replace("{objet}", objet)
            .replace("{expression}", expression);

        combo = `${template}|${personnage}|${personnage2}|${lieu}|${action}|${objet}|${expression}`;
        essais++;
    } while (usedCombos.has(combo) && essais < 10);

    usedCombos.add(combo);
    return histoire;
}

// Nouvelle version du générateur de paragraphe
const generateParagraph = (usedStories, usedCombos) => {
    const paragraph = [];
    const sentenceCount = Math.floor(Math.random() * 3) + 2; // 2 à 4 phrases

    while (paragraph.length < sentenceCount) {
        // 50% de chance de prendre une histoire fixe ou générée
        if (Math.random() < 0.5 && usedStories.size < marseillaisHistoires.length) {
            const randomIndex = Math.floor(Math.random() * marseillaisHistoires.length);
            const sentence = marseillaisHistoires[randomIndex];
            if (!usedStories.has(sentence)) {
                paragraph.push(sentence);
                usedStories.add(sentence);
            }
        } else {
            paragraph.push(genererHistoireAleatoire(usedCombos));
        }
    }

    return paragraph.join(" ");
};

const generateLoremIpsum = (count) => {
    const usedStories = new Set();
    const usedCombos = new Set();
    const loremIpsum = [];

    for (let i = 0; i < count; i++) {
        loremIpsum.push(generateParagraph(usedStories, usedCombos));
    }

    return loremIpsum.join("\n\n");
};

document.getElementById("generateButton").addEventListener("click", () => {
    const count = parseInt(document.getElementById("paragraphCount").value);
    const output = generateLoremIpsum(count);
    document.getElementById("output").innerHTML = output.replace(/\n/g, "<br>");
});