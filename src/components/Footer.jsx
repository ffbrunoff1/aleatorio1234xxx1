import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const navLinks = [
    { name: 'Sobre Nós', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Contato', href: '#contact' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    document.querySelector(href).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <motion.footer
      className="bg-brand-gray-dark text-brand-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <a href="#hero" onClick={e => scrollToSection(e, '#hero')}>
              <img
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1753745330560_0.png"
                alt="NTC Brasil Logo"
                className="h-14 w-auto mb-4 bg-white p-2 rounded-md"
              />
            </a>
            <p className="max-w-xs text-gray-400">
              Construindo o futuro, um tijolo de cada vez.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Navegação</h3>
            <ul className="space-y-3">
              {navLinks.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={e => scrollToSection(e, link.href)}
                    className="text-gray-400 hover:text-brand-blue-light transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Fale Conosco
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="mailto:ffbrunoff@yahoo.com.br"
                  className="hover:text-brand-blue-light transition-colors duration-300"
                >
                  ffbrunoff@yahoo.com.br
                </a>
              </li>
              <li>padre lebret 801 g05 bloco 03</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} NTC Brasil. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
