import { motion } from 'motion/react';

export default function Relevance() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto px-4 py-20"
    >
      <h1 className="text-4xl md:text-6xl font-black mb-8">АКТУАЛЬНОСТЬ</h1>
      <div className="prose prose-invert max-w-none text-text-secondary leading-relaxed space-y-6">
        <p className="text-xl text-text-primary font-medium">
          В современных условиях строительная отрасль требует радикального повышения эффективности и точности.
        </p>
        <p>
          Актуальность данного проекта обусловлена необходимостью внедрения цифровых технологий в процессы проектирования и строительства. Традиционные методы управления проектами часто приводят к задержкам и неэффективному использованию ресурсов.
        </p>
        <p>
          Использование современных инструментов визуализации (таких как Three.js) и систем управления позволяет минимизировать риски и повысить качество инженерных решений.
        </p>
      </div>
    </motion.div>
  );
}
