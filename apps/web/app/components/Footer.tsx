import Link from 'next/link';
import { FileText, MessageSquare, Upload, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <FileText className="h-8 w-8 text-blue-400" />
              <span className="font-bold text-xl">ChatPDFX</span>
            </div>
            <p className="text-gray-400 mb-4">
              Intelligent document analysis and conversation platform. Upload PDFs and chat with their content.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-6 w-6" />
              </a>
              {/* Add other social icons as needed */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/documentmanager" className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2">
                  <FileText className="h-4 w-4" />
                  <span>Browse Documents</span>
                </Link>
              </li>
              <li>
                <Link href="/chatstream" className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2">
                  <MessageSquare className="h-4 w-4" />
                  <span>Chat Interface</span>
                </Link>
              </li>
              <li>
                <Link href="/pdfupload" className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2">
                  <Upload className="h-4 w-4" />
                  <span>Upload PDF</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>support@chatpdfx.com</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {currentYear} ChatPDFX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;