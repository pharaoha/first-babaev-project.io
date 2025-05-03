import { motion } from 'framer-motion'
import styled from 'styled-components'

const Card = styled.div`
  background-color: var(--color-surface);
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  padding: var(--space-3);
  margin-bottom: var(--space-4);
  border-top: 4px solid ${({ color }) => color || 'var(--color-primary)'};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.07);
  }
`;

const CardTitle = styled.h3`
  color: ${({ color }) => color || 'var(--color-text-primary)'};
  margin-bottom: var(--space-2);
`;

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

function SectionCard({ title, children, color, index = 0 }) {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      animate="visible"
      variants={cardVariants}
    >
      <Card color={color}>
        <CardTitle color={color}>{title}</CardTitle>
        {children}
      </Card>
    </motion.div>
  );
}

export default SectionCard;