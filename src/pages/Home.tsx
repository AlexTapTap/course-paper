import { motion } from 'motion/react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Building2, HardHat, Ruler } from 'lucide-react';
import HouseModel from '../components/HouseModel';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col"
    >
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=2070"
            alt="Construction background"
            className="w-full h-full object-cover opacity-10 grayscale"
          />
          <div className="absolute inset-0 bg-bg-primary opacity-95" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="h-[2px] w-12 bg-orange-500" />
                <span className="text-orange-500 font-black uppercase tracking-[0.4em] text-xs">Технический стандарт</span>
              </div>
              <h1 className="text-5xl md:text-8xl font-black text-text-primary mb-8 leading-[0.9] tracking-tighter">
                ТОЧНОСТЬ <br />
                <span className="text-orange-500 italic">ИНЖЕНЕРИИ</span> <br />
                В КАЖДОМ МЕТРЕ
              </h1>
              <p className="text-text-secondary text-xl mb-12 leading-relaxed max-w-md font-medium">
                Проектирование и капитальное строительство по государственным стандартам качества. 
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <NavLink
                  to="/apply"
                  className="bg-orange-500 text-black px-10 py-5 rounded-sm font-black flex items-center justify-center gap-3 hover:bg-orange-600 transition-all group uppercase tracking-widest text-sm shadow-[0_10px_30px_rgba(249,115,22,0.2)]"
                >
                  Начать проект
                  <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                </NavLink>
                <NavLink
                  to="/projects"
                  className="border-2 border-border-theme text-text-primary px-10 py-5 rounded-sm font-black flex items-center justify-center hover:bg-orange-500/5 transition-all text-xs uppercase tracking-[0.2em]"
                >
                  Объекты
                </NavLink>
              </div>
            </motion.div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-orange-500/10 blur-[120px] rounded-full" />
              {/* 3D Model Area */}
              <div className="relative z-10 bg-bg-secondary border border-border-theme rounded-sm p-4 overflow-hidden shadow-2xl">
                <div className="absolute top-4 left-4 z-20 flex gap-2">
                  <div className="bg-orange-500 text-black px-2 py-0.5 text-[8px] font-black uppercase tracking-widest">Live 3D Preview</div>
                  <div className="bg-bg-primary text-text-secondary px-2 py-0.5 text-[8px] font-black uppercase tracking-widest underline decoration-orange-500 underline-offset-2">Interactive Model</div>
                </div>
                <HouseModel />
                <div className="mt-4 flex justify-between items-center px-2">
                  <div className="text-[10px] text-text-secondary font-mono">X: 231.42 Y: 88.10 Z: -12.44</div>
                  <div className="text-[10px] text-orange-500/50 font-mono tracking-widest uppercase">Rotate to explore</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats - More Technical Look */}
      <section className="py-20 border-y border-border-theme bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { label: 'Год работы', value: '2026' },
              { label: 'Реализовано объектов', value: '150+' },
              { label: 'Точность расчетов', value: '99.9%' },
              { label: 'Гарантийный срок', value: '10 ЛЕТ' },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col border-l-2 border-border-theme pl-8">
                <div className="text-text-secondary uppercase tracking-[0.2em] text-[10px] font-black mb-1">{stat.label}</div>
                <div className="text-text-primary text-3xl font-black">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Features */}
      <section className="py-32 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1 relative group">
              <div className="absolute inset-0 bg-orange-500 mix-blend-color opacity-20 transition-opacity group-hover:opacity-0 z-20 pointer-events-none" />
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070"
                alt="Construction expertise"
                className="rounded-sm border border-border-theme relative z-10 w-full shadow-2xl"
              />
              <div className="absolute -bottom-8 -right-8 w-64 h-64 border-b-2 border-r-2 border-orange-500/30 z-0" />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-[2px] w-12 bg-orange-500" />
                <span className="text-orange-500 font-black uppercase tracking-[0.4em] text-xs">Наши стандарты</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-10 leading-tight">КОНТРОЛЬ КАЧЕСТВА <br /><span className="text-orange-500 italic">СЕВЕРСТРОЙ</span></h2>
              <div className="space-y-10">
                {[
                  { title: 'Технический регламент', desc: 'Строгое соблюдение ГОСТ и СНиП на всех этапах производства.' },
                  { title: 'Сквозное проектирование', desc: 'Единая цифровая модель объекта от наброска до ввода в эксплуатацию.' },
                  { title: 'Прозрачная отчетность', desc: 'Еженедельный фото и видео-мониторинг объекта для заказчика.' },
                ].map((adv, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="mt-1 shrink-0">
                      <div className="w-10 h-10 border border-border-theme flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-black transition-all">
                        <CheckCircle2 size={20} />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-black mb-3 tracking-tight group-hover:text-orange-500 transition-colors uppercase">{adv.title}</h4>
                      <p className="text-text-secondary font-medium leading-relaxed">{adv.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Implementation */}
      <section className="py-32 bg-bg-secondary border-t border-border-theme">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-[2px] w-12 bg-orange-500" />
                <span className="text-orange-500 font-black uppercase tracking-[0.4em] text-xs">Профильные работы</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black leading-none tracking-tighter">ПОСМОТРЕТЬ <br /><span className="text-orange-500 italic">ВСЕ УСЛУГИ</span></h2>
            </div>
            <NavLink to="/services" className="bg-bg-primary/10 border border-border-theme text-text-primary px-8 py-4 rounded-sm font-black flex items-center gap-3 hover:bg-orange-500 hover:text-black transition-all text-xs uppercase tracking-widest mb-2">
              Каталог услуг <ArrowRight size={18} />
            </NavLink>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Building2 size={32} />, title: 'Инжиниринг', desc: 'Сложные технологические расчеты и аудит конструкций.' },
              { icon: <HardHat size={32} />, title: 'Строительство', desc: 'Возведение монолитных и каркасных сооружений.' },
              { icon: <Ruler size={32} />, title: 'Проектирование', desc: 'Создание BIM-моделей зданий и коммуникаций.' },
            ].map((service, i) => (
              <div key={i} className="bg-bg-primary p-12 border border-border-theme hover:border-orange-500 transition-all group flex flex-col items-start relative overflow-hidden shadow-sm">
                <div className="absolute -right-8 -bottom-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  {service.icon}
                </div>
                <div className="text-orange-500 mb-8 w-12 h-12 border border-orange-500/20 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(249,115,22,0.3)] transition-all">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-black mb-6 uppercase tracking-tight">{service.title}</h3>
                <p className="text-text-secondary font-medium leading-relaxed mb-10 flex-grow">{service.desc}</p>
                <NavLink to="/services" className="text-text-primary text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-3 group-hover:text-orange-500 transition-colors">
                  Спецификация <ArrowRight size={14} className="text-orange-500" />
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
