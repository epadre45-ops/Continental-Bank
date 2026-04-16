import { 
  MessageCircle, 
  FileText, 
  User
} from 'lucide-react';
import Link from 'next/link';

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-8 right-8 flex flex-col space-y-3">
      <Link href="https://api.whatsapp.com/send?phone=+33 7 80 93 38 72&text=Hello!" target="_blank" className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors">
        <MessageCircle className="w-6 h-6" />
      </Link>
      <Link href="/request" className="bg-orange-600 text-white p-4 rounded-full shadow-lg hover:bg-orange-700 transition-colors">
        <FileText className="w-6 h-6" />
      </Link>
      <Link href="/register" className="bg-blue-900 text-white p-4 rounded-full shadow-lg hover:bg-blue-800 transition-colors">
        <User className="w-6 h-6" />
      </Link>
    </div>
  );
}
