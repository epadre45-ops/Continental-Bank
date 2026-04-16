import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      key={service.title}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="card-premium overflow-hidden group"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={service.image} 
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-80`}></div>
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
          <p className="text-white/90">{service.description}</p>
        </div>
      </div>
      <div className="p-6">
        <ul className="space-y-2 mb-6">
          {(service?.features || []).map((item, idx) => (
            <li key={idx} className="flex items-center text-text-gray">
              <CheckCircle className="w-4 h-4 mr-2 text-primary-orange flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <Link href={service.link} className="inline-flex items-center text-primary-orange hover:text-secondary-orange transition-colors font-medium">
          En savoir plus
          <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
