import { motion } from 'framer-motion';
import { MessageCircle, UserPlus, FileText } from 'lucide-react';
import Link from 'next/link';

const FloatingWidgets = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/33780933872"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
        title="WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.a>

      {/* Open Account Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link
          href="/register"
          className="bg-[#0C3B66] text-white p-4 rounded-full shadow-lg hover:bg-[#0E3A5D] transition-colors flex items-center justify-center"
          title="Ouvrir un compte"
        >
          <UserPlus className="w-6 h-6" />
        </Link>
      </motion.div>

      {/* Loan Request Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link
          href="/request"
          className="bg-[#F26A21] text-white p-4 rounded-full shadow-lg hover:bg-[#E7661C] transition-colors flex items-center justify-center"
          title="Demander un prêt"
        >
          <FileText className="w-6 h-6" />
        </Link>
      </motion.div>
    </div>
  );
};

export default FloatingWidgets;
