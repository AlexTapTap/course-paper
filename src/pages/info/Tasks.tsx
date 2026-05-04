import { motion } from 'motion/react';
import { Target, CheckCircle2 } from 'lucide-react';

export default function Tasks() {
  const tasks = [
    "Анализ текущих потребностей рынка в области высокоточного инженерного проектирования.",
    "Проектирование масштабируемой архитектуры информационных систем для управления строительством.",
    "Внедрение интерактивных 3D-моделей для наглядной визуализации архитектурных решений.",
    "Автоматизация систем контроля качества и мониторинга этапов выполнения работ.",
    "Оптимизация взаимодействия между заказчиком и исполнительной командой через веб-интерфейс."
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto px-4 py-20"
    >
      <h1 className="text-4xl md:text-6xl font-black mb-12 uppercase flex items-center gap-4">
        <Target size={48} className="text-orange-500" />
        ЗАДАЧИ
      </h1>
      
      <div className="space-y-6">
        {tasks.map((task, index) => (
          <motion.div 
            key={index}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-bg-secondary p-8 border border-border-theme flex gap-6 items-start hover:border-orange-500 transition-all group"
          >
            <div className="mt-1 shrink-0">
              <CheckCircle2 className="text-orange-500" size={24} />
            </div>
            <p className="text-lg text-text-primary group-hover:text-orange-500 transition-colors">
              {task}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
