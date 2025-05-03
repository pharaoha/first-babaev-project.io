import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'

const HeroSection = styled.section`
  text-align: center;
  padding: var(--space-6) 0;
  margin-bottom: var(--space-5);
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: var(--space-3);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  color: var(--color-text-secondary);
  max-width: 700px;
  margin: 0 auto var(--space-4);
`;

const SectionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-3);
  margin-top: var(--space-4);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SectionCard = styled(Link)`
  background-color: var(--color-surface);
  border-radius: 12px;
  padding: var(--space-3);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  color: var(--color-text-primary);
  border-top: 4px solid ${({ color }) => color};
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.07);
    color: var(--color-text-primary);
  }
`;

const SectionTitle = styled.h2`
  margin-bottom: var(--space-2);
  color: ${({ color }) => color};
`;

const SectionDescription = styled.p`
  color: var(--color-text-secondary);
`;

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

function Home() {
  const sections = [
    {
      id: 'mechanics',
      title: 'Механика',
      description: 'Изучение движения и взаимодействия физических тел',
      color: 'var(--color-mechanics)'
    },
    {
      id: 'electrodynamics',
      title: 'Электродинамика',
      description: 'Изучение электромагнитных явлений и их взаимодействия',
      color: 'var(--color-electrodynamics)'
    },
    {
      id: 'optics',
      title: 'Оптика',
      description: 'Изучение света, его свойств и взаимодействия с веществом',
      color: 'var(--color-optics)'
    }
  ];

  return (
    <PageTransition>
      <HeroSection>
        <HeroTitle>Добро пожаловать в мир физики</HeroTitle>
        <HeroSubtitle>
          Погрузитесь в увлекательный мир фундаментальных разделов физики: механики, электродинамики и оптики. 
          Узнайте о законах, управляющих нашей Вселенной.
        </HeroSubtitle>
      </HeroSection>
      
      <section>
        <h2>Основные разделы физики</h2>
        <SectionsGrid>
          {sections.map((section, i) => (
            <motion.div
              key={section.id}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
            >
              <SectionCard to={`/${section.id}`} color={section.color}>
                <SectionTitle color={section.color}>{section.title}</SectionTitle>
                <SectionDescription>{section.description}</SectionDescription>
              </SectionCard>
            </motion.div>
          ))}
        </SectionsGrid>
      </section>
    </PageTransition>
  );
}

export default Home;