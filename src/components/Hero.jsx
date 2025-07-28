import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const scrollToContact = e => {
    e.preventDefault();
    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-brand-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 via-white to-white -z-1"></div>
      <div className="container mx-auto px-6 text-center md:text-left">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="z-10">
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-brand-gray-dark leading-tight mb-4"
              variants={itemVariants}
            >
              Construindo o futuro, <br />
              <span className="gradient-text">um tijolo de cada vez.</span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-brand-gray max-w-xl mx-auto md:mx-0 mb-8"
              variants={itemVariants}
            >
              Sonhe, construa, viva! Na NTC Brasil, transformamos seus projetos
              em realidade com excelência, inovação e compromisso.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              variants={itemVariants}
            >
              <a
                href="#contact"
                onClick={scrollToContact}
                className="btn btn-primary group"
              >
                Vamos construir juntos{' '}
                <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                onClick={e => {
                  e.preventDefault();
                  document
                    .querySelector('#services')
                    .scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn btn-secondary"
              >
                Nossos Serviços
              </a>
            </motion.div>
          </div>
          <motion.div
            className="relative hidden md:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/construction-concept-with-person-holding-blueprint.jpg"
              alt="Engenheiro analisando planta de construção"
              className="w-full h-auto rounded-2xl shadow-soft-glow object-cover"
            />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-brand-blue/20 rounded-full -z-10 blur-2xl"></div>
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-blue-400/20 rounded-full -z-10 blur-2xl"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
