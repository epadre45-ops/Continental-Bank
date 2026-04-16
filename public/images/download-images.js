// Script pour télécharger les images premium libres de droit
// URLs Unsplash optimisées pour le site bancaire

const images = [
  {
    name: 'hero-corporate.jpg',
    url: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    description: 'Bureau moderne avec vue sur la ville - Hero section'
  },
  {
    name: 'bank-building.jpg',
    url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Bâtiment bancaire moderne - Section value propositions'
  },
  {
    name: 'tech-devices.jpg',
    url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Appareils technologiques - Section features'
  },
  {
    name: 'team-meeting.jpg',
    url: 'https://images.unsplash.com/photo-1573496359142-b8d87737a482?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Réunion d\'équipe professionnelle - Section testimonials'
  }
];

// Instructions pour téléchargement manuel
console.log('=== IMAGES PREMIUM POUR EUROPA KREDIT BANK ===\n');

images.forEach((img, index) => {
  console.log(`${index + 1}. ${img.name}`);
  console.log(`   URL: ${img.url}`);
  console.log(`   Description: ${img.description}\n`);
});

console.log('=== INSTRUCTIONS ===');
console.log('1. Copiez chaque URL dans votre navigateur');
console.log('2. Téléchargez l\'image');
console.log('3. Placez-la dans /public/images/');
console.log('4. Les images remplaceront automatiquement les placeholders\n');

console.log('=== SPÉCIFICATIONS ===');
console.log('- Source: Unsplash (libres de droits)');
console.log('- Style: Corporate, bancaire, professionnel');
console.log('- Optimisation: Web quality (80% compression)');
console.log('- Dimensions: Optimisées pour chaque section');
console.log('- Cohérence: Palette bleue/grise professionnelle');
