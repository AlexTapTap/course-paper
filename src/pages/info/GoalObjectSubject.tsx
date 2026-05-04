import { motion } from 'motion/react';

export default function GoalObjectSubject() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto px-4 py-20"
    >
      <h1 className="text-4xl md:text-6xl font-black mb-12 uppercase leading-none">Цель, объект <br/><span className="text-orange-500 italic">и предмет</span></h1>
      
      <div className="grid gap-12">
        <section className="border-l-4 border-orange-500 pl-8">
          <h2 className="text-2xl font-black mb-4 uppercase tracking-tighter">Цель проекта</h2>
          <p className="text-text-secondary text-lg">
            Разработка и внедрение высокоэффективной системы управления инженерно-строительными процессами, обеспечивающей максимальную точность и контроль на всех этапах жизненного цикла объекта.
          </p>
        </section>

        <section className="border-l-4 border-border-theme pl-8">
          <h2 className="text-2xl font-black mb-4 uppercase tracking-tighter">Объект исследования</h2>
          <p className="text-text-secondary text-lg">
            Жизненный цикл управления строительными проектами в сфере промышленного и гражданского строительства.
          </p>
        </section>

        <section className="border-l-4 border-border-theme pl-8">
          <h2 className="text-2xl font-black mb-4 uppercase tracking-tighter">Предмет исследования</h2>
          <p className="text-text-secondary text-lg">
            Методы и инструментальные средства оптимизации проектирования, визуализации и контроля качества строительных работ.
          </p>
        </section>
      </div>
    </motion.div>
  );
}
