import { motion } from 'motion/react';

export default function DomainDescription() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto px-4 py-20"
    >
      <h1 className="text-4xl md:text-6xl font-black mb-8">ОПИСАНИЕ ПРЕДМЕТНОЙ ОБЛАСТИ</h1>
      
      <div className="space-y-12">
        <div className="prose prose-invert max-w-none text-text-secondary">
          <p className="text-xl text-text-primary leading-relaxed">
            Предметная область охватывает сферу промышленного и гражданского строительства (ПГС) с упором на высокотехнологичное проектирование и управление ресурсами.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-bg-secondary p-8 border border-border-theme">
            <h3 className="text-xl font-black mb-4 text-orange-500 uppercase">Основные сектора</h3>
            <ul className="space-y-3 text-text-secondary">
              <li>• Промышленное строительство</li>
              <li>• Малоэтажное жилое строительство</li>
              <li>• Проектирование инженерных сетей</li>
              <li>• BIM-моделирование (Building Information Modeling)</li>
            </ul>
          </div>
          
          <div className="bg-bg-secondary p-8 border border-border-theme">
            <h3 className="text-xl font-black mb-4 text-orange-500 uppercase">Ключевые функции</h3>
            <ul className="space-y-3 text-text-secondary">
              <li>• Архитектурная визуализация</li>
              <li>• Управление проектной документацией</li>
              <li>• Мониторинг этапов строительства</li>
              <li>• Взаимодействие со стейкхолдерами</li>
            </ul>
          </div>
        </div>

        <div className="bg-orange-500/5 p-8 border border-orange-500/20">
          <p className="italic text-text-primary">
            "Современная предметная область требует синергии между физическими процессами строительства и цифровыми системами контроля, что позволяет достигать стандартов качества СеверСтрой."
          </p>
        </div>
      </div>
    </motion.div>
  );
}
