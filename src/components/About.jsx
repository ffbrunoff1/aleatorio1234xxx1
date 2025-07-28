import React from 'react';
import { motion } from 'framer-motion';
import { Building, Target, ShieldCheck } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const features = [
    {
      icon: <Target size={32} className="text-brand-blue" />,
      title: 'Nossa Missão',
      description:
        'Executar projetos de construção com a máxima qualidade, segurança e pontualidade, superando as expectativas de nossos clientes e contribuindo para o desenvolvimento sustentável da sociedade.',
    },
    {
      icon: <Building size={32} className="text-brand-blue" />,
      title: 'Nossa Visão',
      description:
        'Ser a empresa de construção de referência no mercado, reconhecida pela inovação, confiabilidade e pela criação de valor duradouro para clientes, colaboradores e parceiros.',
    },
    {
      icon: <ShieldCheck size={32} className="text-brand-blue" />,
      title: 'Nossos Valores',
      description:
        'Integridade, compromisso com a excelência, foco no cliente, inovação contínua e respeito pelas pessoas e pelo meio ambiente são os pilares que guiam todas as nossas ações.',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-brand-gray-light">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-dark mb-4">
              A Base Sólida do Seu Projeto
            </h2>
            <p className="text-lg text-brand-gray max-w-3xl mx-auto">
              Na NTC Brasil, combinamos experiência técnica com uma paixão por
              construir. Entendemos que cada projeto é único e dedicamos nossa
              expertise para entregar resultados que não apenas atendem, mas
              encantam.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-soft-glow hover:-translate-y-2 transition-all duration-300"
                variants={itemVariants}
              >
                <div className="flex items-center justify-center bg-brand-blue/10 w-16 h-16 rounded-full mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-gray-dark mb-3">
                  {feature.title}
                </h3>
                <p className="text-brand-gray leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
