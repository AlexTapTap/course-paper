import { motion } from 'motion/react';
import { Building2, Home as HomeIcon, Hammer, Ruler, Briefcase, Zap } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const services = [
  {
    icon: <Building2 size={40} />,
    title: 'Коммерческое строительство',
    desc: 'Проектирование и возведение офисных зданий, торговых центров и гостиниц. Соблюдение всех технических регламентов и градостроительных норм.',
    features: ['Бизнес-центры', 'Торговые залы', 'Складские комплексы']
  },
  {
    icon: <HomeIcon size={40} />,
    title: 'Частное домостроение',
    desc: 'Строительство индивидуальных жилых домов и коттеджей из газобетона, кирпича и по каркасной технологии под ключ.',
    features: ['Коттеджи', 'Загородные дома', 'Ландшафт']
  },
  {
    icon: <Hammer size={40} />,
    title: 'Реконструкция и ремонт',
    desc: 'Восстановление эксплуатационных характеристик зданий, капитальный ремонт помещений и усиление конструкций.',
    features: ['Усиление фундаментов', 'Замена перекрытий', 'Фасадные работы']
  },
  {
    icon: <Ruler size={40} />,
    title: 'Проектирование',
    desc: 'Разработка полного пакета проектной документации для получения разрешения на строительство и эффективной реализации объекта.',
    features: ['Архитектурное решение', 'Конструктив', 'Инженерные сети']
  },
  {
    icon: <Briefcase size={40} />,
    title: 'Технический заказчик',
    desc: 'Комплексное управление инвестиционно-строительным процессом, контроль качества и бюджета на всех этапах.',
    features: ['Технадзор', 'Согласования', 'Управление бюджетом']
  },
  {
    icon: <Zap size={40} />,
    title: 'Инженерные системы',
    desc: 'Монтаж систем отопления, вентиляции, водоснабжения и электроснабжения с последующим сервисным обслуживанием.',
    features: ['Отопление', 'Вентиляция', 'Слаботочные системы']
  }
];

export default function Services() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-24"
    >
      <section className="bg-[#141414] py-24 relative overflow-hidden">
        <div className="absolute right-[-10%] top-0 opacity-5">
           <Building2 size={600} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 mb-6">
            <div className="h-[1px] w-12 bg-orange-500" />
            <span className="text-orange-500 font-bold uppercase tracking-[0.3em] text-xs">Полный спектр услуг</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-8">НАШИ <span className="text-orange-500 italic">ВОЗМОЖНОСТИ</span></h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            Мы предлагаем комплексные решения для реализации ваших строительных проектов, обеспечивая высокое качество и контроль на каждом этапе.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-[-80px] relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, index) => (
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              key={index}
              className="bg-[#1c1c1c] p-8 border border-gray-800 hover:border-orange-500 group transition-all"
            >
              <div className="text-orange-500 mb-8 inline-block p-4 border border-orange-500/10 bg-orange-500/5 group-hover:bg-orange-500 group-hover:text-black transition-all duration-500">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                {item.desc}
              </p>
              <ul className="mb-10 space-y-3">
                {item.features.map((feature, i) => (
                  <li key={i} className="text-xs text-gray-500 flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
              <NavLink
                to="/apply"
                className="text-orange-500 text-sm font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all"
              >
                Обсудить проект
                <Zap size={14} />
              </NavLink>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-orange-500 p-12 md:p-20 relative overflow-hidden group">
          <div className="absolute right-0 top-0 w-1/3 h-full overflow-hidden opacity-10">
            <Ruler size={400} className="rotate-45" />
          </div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-xl text-center md:text-left">
              <h2 className="text-black text-4xl font-black mb-6 leading-tight">НЕ ЗНАЕТЕ С ЧЕГО НАЧАТЬ?</h2>
              <p className="text-black/80 text-lg font-medium">
                Закажите бесплатную консультацию нашего ведущего инженера. Мы поможем определить этапы работ и составить предварительную смету.
              </p>
            </div>
            <NavLink
              to="/apply"
              className="bg-black text-white px-10 py-5 font-bold uppercase tracking-widest text-sm hover:translate-y-[-5px] transition-all shadow-xl whitespace-nowrap"
            >
              Получить консультацию
            </NavLink>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
