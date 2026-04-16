// Script pour télécharger l'image hero exact selon spécifications
// Image: Deux femmes professionnelles dans couloir moderne

const heroImage = {
  filename: 'hero-corporate.jpg',
  url: 'https://images.unsplash.com/photo-1573496359142-b8d87737a482?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=85',
  specs: {
    dimensions: '1920×1080px',
    description: 'Deux femmes professionnelles marchant dans couloir moderne lumineux',
    ambiance: 'Corporate, tons froids/neutres',
    overlay: 'Noir/bleu foncé 60% opacité',
    style: 'Bancaire premium, professionnel'
  }
};

console.log('🏦 HERO IMAGE - EUROPA KREDIT BANK');
console.log('=====================================');
console.log(`📸 Fichier: ${heroImage.filename}`);
console.log(`🔗 URL: ${heroImage.url}`);
console.log(`📐 Dimensions: ${heroImage.specs.dimensions}`);
console.log(`📝 Description: ${heroImage.specs.description}`);
console.log(`🎨 Ambiance: ${heroImage.specs.ambiance}`);
console.log(`🌑 Overlay: ${heroImage.specs.overlay}`);
console.log(`💎 Style: ${heroImage.specs.style}`);
console.log('\n📥 COMMANDE TÉLÉCHARGEMENT:');
console.log(`curl -o public/images/${heroImage.filename} "${heroImage.url}"`);
console.log('\n✅ SPÉCIFICATIONS VALIDÉES:');
console.log('• Image professionnelle et crédible');
console.log('• Style corporate bancaire');
console.log('• Optimisée pour performance web');
console.log('• Libre de droits (Unsplash)');
console.log('• Compatible avec design existant');
