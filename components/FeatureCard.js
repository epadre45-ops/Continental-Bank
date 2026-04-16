import { motion } from 'framer-motion';

const FeatureCard = ({ feature, index }) => {
  return (
    <motion.div
      key={feature.title}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="card-premium group overflow-hidden"
    >
      <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
        <img 
          src={feature.image} 
          alt={feature.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className={`absolute top-4 right-4 w-12 h-12 bg-white/90 rounded-lg flex items-center justify-center ${feature.color}`}>
          {feature.icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
      <p className="text-text-gray">{feature.description}</p>
    </motion.div>
  );
};

export default FeatureCard;
