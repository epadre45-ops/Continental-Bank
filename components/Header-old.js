import { useState } from 'react';
import { 
  Shield, 
  Phone, 
  Mail, 
  MapPin, 
  Flag, 
  ChevronDown, 
  User,
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const [currentLanguage, setCurrentLanguage] = useState('français');
  const router = useRouter();

  const languages = [
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'es', name: 'español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'it', name: 'italiano', flag: '🇮🇹' },
    { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
    { code: 'pt', name: 'português', flag: '🇵🇹' }
  ];

  const handleLanguageChange = (language) => {
    setCurrentLanguage(language);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#F26A21] text-white py-2 px-6">
        <div className="container mx-auto flex items-center justify-between text-sm">
          {/* Left - Address */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>1 RUE LA VRILLIERE 75001 PARIS</span>
            </div>
          </div>

          {/* Center - Contact Info */}
          <div className="flex items-center space-x-6">
            <div className="hidden lg:flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+33 7 80 93 38 72</span>
            </div>
            <div className="hidden lg:flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>contact@continentalbk.de</span>
            </div>
          </div>

          {/* Right - Language & Contact */}
          <div className="flex items-center space-x-6">
            <Link href="/contact" className="hover:text-orange-100 transition-colors">
              Contactez-nous
            </Link>
            
            {/* Language Selector */}
            <div className="relative group">
              <button className="flex items-center space-x-2 hover:text-orange-100 transition-colors">
                <span>{currentLanguage === 'Français' ? '🇫🇷' : ''}</span>
                <span>{currentLanguage}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full right-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                {(languages || []).map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.name)}
                    className="flex items-center space-x-2 w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-blue-900 text-white">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <Shield className="w-7 h-7 text-blue-900" />
              </div>
              <div className="text-white">
                <div className="text-xl font-bold uppercase tracking-wide">EUROPA</div>
                <div className="text-xl font-bold uppercase tracking-wide">KREDIT</div>
                <div className="text-xl font-bold uppercase tracking-wide">BANK</div>
              </div>
            </Link>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {/* Entreprises Dropdown + Lien Direct */}
              <div className="relative group">
                <Link href="/entreprises" className="text-white hover:text-orange-400 transition-colors font-medium flex items-center space-x-1">
                  Entreprises
                  <ChevronDown className="w-4 h-4" />
                </Link>
                <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                  <Link href="/comptes-pro" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Comptes Professionnels</Link>
                  <Link href="/financement-pro" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Financement Pro</Link>
                  <Link href="/services-entreprises" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Services Entreprises</Link>
                </div>
              </div>

              {/* Personnel Dropdown + Lien Direct */}
              <div className="relative group">
                <Link href="/personnel" className="text-white hover:text-orange-400 transition-colors font-medium flex items-center space-x-1">
                  Personnel
                  <ChevronDown className="w-4 h-4" />
                </Link>
                <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                  <Link href="/epargne-perso" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Épargne</Link>
                  <Link href="/compte-courant-perso" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Compte Courant</Link>
                  <Link href="/assurance-perso" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Assurance</Link>
                  <Link href="/pret-perso" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Prêt Personnel</Link>
                </div>
              </div>

              {/* Carte Bancaire Dropdown + Lien Direct */}
              <div className="relative group">
                <Link href="/carte-bancaire" className="text-white hover:text-orange-400 transition-colors font-medium flex items-center space-x-1">
                  Carte Bancaire
                  <ChevronDown className="w-4 h-4" />
                </Link>
                <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                  <Link href="/carte-classic" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Carte Classic</Link>
                  <Link href="/carte-gold" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Carte Gold</Link>
                  <Link href="/carte-platinum" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Carte Platinum</Link>
                  <Link href="/carte-virtuelle" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Carte Virtuelle</Link>
                </div>
              </div>

              {/* Mobilité Bancaire Dropdown + Lien Direct */}
              <div className="relative group">
                <Link href="/mobilite-bancaire" className="text-white hover:text-orange-400 transition-colors font-medium flex items-center space-x-1">
                  Mobilité Bancaire
                  <ChevronDown className="w-4 h-4" />
                </Link>
                <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                  <Link href="/application-mobile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Application Mobile</Link>
                  <Link href="/paiement-mobile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Paiement Mobile</Link>
                  <Link href="/securite-mobile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Sécurité Mobile</Link>
                </div>
              </div>

              {/* Crédits Dropdown + Lien Direct */}
              <div className="relative group">
                <Link href="/credits" className="text-white hover:text-orange-400 transition-colors font-medium flex items-center space-x-1">
                  Crédits
                  <ChevronDown className="w-4 h-4" />
                </Link>
                <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                  <Link href="/pret-personnel" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Prêt Personnel</Link>
                  <Link href="/pret-auto" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Prêt Auto</Link>
                  <Link href="/pret-immobilier" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Prêt Immobilier</Link>
                  <Link href="/pret-travaux" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Prêt Travaux</Link>
                  <Link href="/rachat-credit" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Rachat Crédit</Link>
                </div>
              </div>

              <Link href="/request" className="text-white hover:text-orange-400 transition-colors font-medium">
                Demander un prêt
              </Link>

              <Link href="/login" className="bg-gray-100 text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>CONNEXION</span>
              </Link>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
