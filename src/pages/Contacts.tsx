import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Instagram, Facebook, LayoutGrid, Clock } from 'lucide-react';

export default function Contacts() {
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
            <span className="text-orange-500 font-bold uppercase tracking-[0.3em] text-xs">Обратная связь</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-16">НАШИ <span className="text-orange-500 italic">КОНТАКТЫ</span></h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="space-y-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-gray-500 text-[10px] font-black uppercase tracking-widest mb-6 flex items-center gap-2">
                    <MapPin size={14} className="text-orange-500" />
                    ОФИС В СПБ
                  </h3>
                  <p className="text-xl font-bold leading-relaxed mb-4">
                    195067, Санкт-Петербург, <br />
                    проспект Маршала Блюхера, д. 2026
                  </p>
                  <p className="text-gray-400 text-sm italic">Бизнес-центр "Строитель", 4 этаж</p>
                </div>
                <div>
                  <h3 className="text-gray-500 text-[10px] font-black uppercase tracking-widest mb-6 flex items-center gap-2">
                    <Clock size={14} className="text-orange-500" />
                    ОТДЕЛ ПРОДАЖ
                  </h3>
                  <p className="text-xl font-bold mb-2">Пн—Пт: 09:00 — 19:00</p>
                  <p className="text-xl font-bold">Сб: 10:00 — 16:00</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-gray-500 text-[10px] font-black uppercase tracking-widest mb-6 flex items-center gap-2">
                    <Phone size={14} className="text-orange-500" />
                    ТЕЛЕФОНЫ
                  </h3>
                  <div className="space-y-3">
                    <a href="tel:+78120000000" className="block text-2xl font-bold hover:text-orange-500 transition-colors">+7 (812) 000-00-00</a>
                    <a href="tel:+79110000000" className="block text-xl font-bold text-gray-400 hover:text-orange-500 transition-colors">+7 (911) 000-00-00</a>
                  </div>
                </div>
                <div>
                  <h3 className="text-gray-500 text-[10px] font-black uppercase tracking-widest mb-6 flex items-center gap-2">
                    <Mail size={14} className="text-orange-500" />
                    ЭЛ. ПОЧТА
                  </h3>
                  <div className="space-y-3">
                    <a href="mailto:info@severstroy.ru" className="block text-2xl font-bold hover:text-orange-500 transition-colors">info@severstroy.ru</a>
                    <a href="mailto:sale@severstroy.ru" className="block text-xl font-bold text-gray-400 hover:text-orange-500 transition-colors">sale@severstroy.ru</a>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-gray-500 text-[10px] font-black uppercase tracking-widest mb-8">МЫ В СОЦСЕТЯХ</h3>
                <div className="flex gap-6">
                  {[
                    { icon: <Instagram size={24} />, label: 'Instagram' },
                    { icon: <Facebook size={24} />, label: 'Facebook' },
                    { icon: <LayoutGrid size={24} />, label: 'WhatsApp' }
                  ].map((social, i) => (
                    <a
                      key={i}
                      href="#"
                      className="group flex flex-col items-center gap-3"
                    >
                      <div className="w-16 h-16 border border-gray-800 flex items-center justify-center rounded-sm text-gray-500 group-hover:text-orange-500 group-hover:border-orange-500 group-hover:scale-110 transition-all duration-300">
                        {social.icon}
                      </div>
                      <span className="text-[10px] font-bold text-gray-600 group-hover:text-white uppercase tracking-widest">{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="h-[600px] bg-[#1c1c1c] border border-gray-800 relative group overflow-hidden">
                {/* Simulated Map */}
                <div className="absolute inset-0 opacity-40 grayscale group-hover:grayscale-0 transition-all duration-1000 grayscale-filter">
                   <img
                     src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=2066"
                     alt="Map placeholder"
                     className="w-full h-full object-cover"
                   />
                </div>
                <div className="absolute inset-0 bg-[#1c1c1c]/40" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center">
                    <div className="w-12 h-12 bg-orange-500 rounded-full animate-ping absolute top-0 left-0" />
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center relative z-20 shadow-[0_0_40px_rgba(249,115,22,0.5)]">
                       <MapPin className="text-black" />
                    </div>
                    <div className="mt-6 bg-[#141414] border border-orange-500/50 p-4 shadow-2xl">
                       <p className="text-xs font-bold text-white uppercase tracking-widest whitespace-nowrap">СеверСтрой Инжиниринг</p>
                    </div>
                </div>
                <div className="absolute bottom-8 left-8 right-8 bg-[#141414]/90 backdrop-blur-md p-6 border border-gray-800">
                   <p className="text-gray-400 text-xs leading-relaxed">
                     <span className="text-orange-500 font-bold">Как добраться:</span> 10 минут пешком от станции метро "Лесная". Вход со стороны проспекта через центральную проходную БЦ "Строитель".
                   </p>
                </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
