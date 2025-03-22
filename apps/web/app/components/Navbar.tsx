'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FileText, MessageSquare, Upload, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-400 shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <FileText className="h-8 w-8 text-blue-600" />
            <span className={`font-bold text-xl  ${isScrolled ?"text-slate-900":"text-white"}`}>ChatPDFX</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/documentmanager" 
              className={`flex items-center space-x-1 text-gray-900 hover:text-blue-600 transition-colors ${isScrolled ?"text-slate-900":"text-white"}`}
            >
              <FileText className="h-5 w-5" />
              <span>Browse</span>
            </Link>
            <Link 
              href="/chatstream" 
              className={`flex items-center space-x-1 text-gray-900 hover:text-blue-600 transition-colors ${isScrolled ?"text-slate-900":"text-white"}`}
            >
              <MessageSquare className="h-5 w-5" />
              <span>Chat</span>
            </Link>
            <Link 
              href="/pdfupload" 
              className="flex items-center space-x-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              <Upload className="h-5 w-5" />
              <span>Upload</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu} 
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isMobileMenuOpen ? 
                <X className="h-6 w-6" /> : 
                <Menu className="h-6 w-6" />
              }
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-400 py-4 shadow-lg w-[50%] ml-auto rounded-xl mr-2 relative">
          <div className="flex flex-col space-y-4 px-4">
            <Link 
              href="/documentmanager" 
              className="flex items-center space-x-2 py-2 text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FileText className="h-5 w-5" />
              <span>Browse</span>
            </Link>
            <Link 
              href="/chatstream" 
              className="flex items-center space-x-2 py-2 text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <MessageSquare className="h-5 w-5" />
              <span>Chat</span>
            </Link>
            <Link 
              href="/pdfupload" 
              className="flex items-center space-x-2 py-2 text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Upload className="h-5 w-5" />
              <span>Upload</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;