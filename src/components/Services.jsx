import React from 'react';
import { motion } from 'framer-motion';
import { HardHat, Ruler, Wrench, ClipboardCheck } from 'lucide-react';

export default function Services() {
  const servicesData = [
    {
      icon: <Ruler className="w-10 h-10 text-brand-blue" />,
      title: 'Planejamento e Projeto',
      description:
        'Desenvolvemos projetos arquitetônicos e de engenharia detalhados, otimizando recursos e garantindo a viabilidade da sua obra desde o início.',
    },
    {
      icon: <HardHat className="w-10 h-10 text-brand-blue" />,
      title: 'Construção Residencial e Comercial',
      description:
        'Executamos construções do zero, com equipes qualificadas e materiais de primeira linha para garantir uma estrutura sólida e acabamento impecável.',
    },
    {
      icon: <Wrench className="w-10 h-10 text-brand-blue" />,
      title: 'Reformas e Renovações',
      description:
        'Modernizamos e revitalizamos espaços, realizando desde pequenas reformas até grandes renovações com agilidade e atenção aos detalhes.',
    },
    {
      icon: <ClipboardCheck className="w-10 h-10 text-brand-blue" />,
      title: 'Gerenciamento de Obras',
      description:
        'Coordenamos todas as etapas do seu projeto, desde o planejamento até a entrega, assegurando o cumprimento de prazos e orçamentos.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="services" className="py-20 md:py-32 bg-brand-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-dark mb-4">
            Soluções Completas para{' '}
            <span className="gradient-text">Sua Construção</span>
          </h2>
          <p className="text-lg text-brand-gray max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços para atender todas as
            necessidades do seu projeto, com a garantia de qualidade e
            profissionalismo da NTC Brasil.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col bg-brand-gray-light p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              variants={cardVariants}
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-brand-gray-dark mb-3">
                {service.title}
              </h3>
              <p className="text-brand-gray leading-relaxed flex-grow">
                {service.description}
              </p>
              <div className="mt-auto pt-6">
                <a
                  href="#contact"
                  onClick={e => {
                    e.preventDefault();
                    document
                      .querySelector('#contact')
                      .scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="font-semibold text-brand-blue hover:text-brand-blue-dark transition-colors duration-300"
                >
                  Solicitar Orçamento &rarr;
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
