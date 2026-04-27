import { motion } from 'motion/react';
import { PencilRuler, HardHat, CheckCircle2, ClipboardCheck, Truck, ShieldCheck, Building2 } from 'lucide-react';

const steps = [
  {
    icon: <PencilRuler size={32} />,
    title: 'Проектирование',
    desc: 'Создаем эскизный и рабочий проекты, учитывая все пожелания заказчика и особенности местности.',
    details: ['Архитектурное решение', 'Конструктивный расчет', 'Дизайн интерьера']
  },
  {
    icon: <ClipboardCheck size={32} />,
    title: 'Согласование и смета',
    desc: 'Рассчитываем точную стоимость материалов и работ. Фиксируем бюджет в договоре.',
    details: ['Получение разрешений', 'Детальный расчет', 'Подбор материалов']
  },
  {
    icon: <HardHat size={32} />,
    title: 'Подготовка и фундамент',
    desc: 'Выход на объект, обустройство строительного городка и возведение фундамента.',
    details: ['Геодезия', 'Земляные работы', 'Заливка бетона']
  },
  {
    icon: <Building2 size={32} />,
    title: 'Возведение каркаса',
    desc: 'Строительство стен, перекрытий и кровельной системы объекта.',
    details: ['Стены и перегородки', 'Межэтажные перекрытия', 'Кровельные работы']
  },
  {
    icon: <Truck size={32} />,
    title: 'Коммуникации',
    desc: 'Монтаж внутренних и внешних инженерных систем и оборудования.',
    details: ['Электромонтаж', 'Отопление и ВК', 'Вентиляция']
  },
  {
    icon: <CheckCircle2 size={32} />,
    title: 'Сдача объекта',
    desc: 'Финальная отделка, уборка территории и торжественная передача ключей заказчику.',
    details: ['Финишная отделка', 'Благоустройство', 'Ввод в эксплуатацию']
  }
];


export default function Steps() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-24"
    >
      <section className="bg-[#141414] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-6">
            <div className="h-[1px] w-12 bg-orange-500" />
            <span className="text-orange-500 font-bold uppercase tracking-[0.3em] text-xs">Как мы работаем</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-12">ЭТАПЫ <span className="text-orange-500 italic">СТРОИТЕЛЬСТВА</span></h1>

          <div className="relative">
            {/* Connection Line */}
            <div className="absolute left-[39px] top-0 bottom-0 w-[1px] bg-gray-800 hidden lg:block" />

            <div className="space-y-12">
              {steps.map((step, index) => (
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  key={index}
                  className="relative pl-0 lg:pl-24"
                >
                  <div className="hidden lg:flex absolute left-0 top-0 w-20 h-20 bg-[#1c1c1c] border border-gray-800 items-center justify-center text-orange-500 z-10 group-hover:border-orange-500 transition-colors">
                    {step.customIcon || step.icon}
                    <div className="absolute -right-12 top-10 w-12 h-[1px] bg-gray-800" />
                  </div>

                  <div className="bg-[#1c1c1c] p-8 lg:p-12 border border-gray-800 hover:border-orange-500/30 transition-all flex flex-col md:flex-row gap-10">
                    <div className="flex-grow">
                      <div className="flex items-center gap-4 mb-4 lg:hidden text-orange-500">
                        {step.customIcon || step.icon}
                        <h3 className="text-2xl font-bold text-white">0{index + 1}. {step.title}</h3>
                      </div>
                      <h3 className="hidden lg:block text-3xl font-bold mb-6">0{index + 1}. {step.title}</h3>
                      <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-2xl">
                        {step.desc}
                      </p>
                      <div className="flex flex-wrap gap-4">
                        {step.details.map((detail, i) => (
                          <span key={i} className="px-4 py-2 bg-[#141414] text-gray-500 text-xs font-bold uppercase tracking-widest border border-gray-800">
                            {detail}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex md:flex-col justify-end md:justify-center">
                      <div className="text-[120px] font-black text-gray-800/10 leading-none select-none pointer-events-none italic">
                        0{index + 1}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
