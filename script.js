const languageToggle = document.getElementById("languageToggle");
const translations = {
  "Expertise": "Expertise",
  "Catalogue": "Catalogue",
  "Services": "Services",
  "Livraison": "Delivery",
  "Demande partenariat": "Partnership request",
  "Voir le catalogue": "View the catalogue",
  "Demander un devis": "Request a quote",
  "FOURNISSEUR BOULANGER — ÎLE-DE-FRANCE": "BAKERY SUPPLIER — ÎLE-DE-FRANCE",
  "ANS D'EXPÉRIENCE": "YEARS OF EXPERIENCE",
  "RESTAURANTS PARTENAIRES": "PARTNER RESTAURANTS",
  "LIVRAISON ÎLE-DE-FRANCE": "ÎLE-DE-FRANCE DELIVERY",
  "COMMANDE MINIMUM": "MINIMUM ORDER",
  "CATALOGUE": "CATALOGUE",
  "Produit": "Product",
  "Format": "Size",
  "Conditionnement": "Packaging",
  "Disponibilité": "Availability",
  "NOUVEAU": "NEW",
  "ALLERGIE": "ALLERGY",
  "ÉVÉNEMENT": "EVENT",
  "CONTACT": "CONTACT",
  "Demande de partenariat": "Partnership request",
  "Prénom": "First name",
  "Nom": "Last name",
  "Envoyer la demande": "Send request",
  "Le goût commence par la matière.": "Great taste starts with great ingredients.",
  "Livraison fiable": "Reliable delivery",
  "Avant votre service, 5 jours sur 7": "Before service, 5 days a week",
  "Formats professionnels": "Professional formats",
  "Conditionnements adaptés à vos volumes": "Packaging adapted to your volumes",
  "Qualité constante": "Consistent quality",
  "Les mêmes recettes à chaque livraison": "The same recipes at every delivery",
  "Un interlocuteur dédié": "A dedicated contact",
  "Une réponse rapide, sans plateforme": "A fast response, without a platform",
  "Pains du quotidien": "Everyday breads",
  "Pains signature": "Signature breads",
  "Formats restauration": "Catering formats",
  "Sur commande": "Made to order",
  "Formats sur mesure": "Custom formats"
};

const frenchByEnglish = Object.fromEntries(
  Object.entries(translations).map(([french, english]) => [english, french])
);

function setLanguage(language) {
  const isEnglish = language === "en";
  const dictionary = isEnglish ? translations : frenchByEnglish;
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes = [];
  let node;
  while ((node = walker.nextNode())) nodes.push(node);
  nodes.forEach((textNode) => {
    const key = textNode.nodeValue.trim();
    if (dictionary[key]) textNode.nodeValue = textNode.nodeValue.replace(key, dictionary[key]);
  });
  document.documentElement.lang = isEnglish ? "en" : "fr";
  document.title = isEnglish
    ? "Maison du Cèdre | Artisan bread for professional catering"
    : "Maison du Cèdre | Pain artisanal pour la restauration professionnelle";
  languageToggle.textContent = isEnglish ? "FR" : "EN";
  languageToggle.setAttribute("aria-label", isEnglish ? "Passer le site en français" : "Passer le site en anglais");
  languageToggle.dataset.language = language;
}

languageToggle.addEventListener("click", () => {
  setLanguage(languageToggle.dataset.language === "en" ? "fr" : "en");
});

setLanguage("fr");
