import { motion } from 'motion/react';
import { useState } from 'react';
import { ExternalLink, Calendar, MapPin } from 'lucide-react';
import { cn } from '../lib/utils';

const categories = ['Все', 'Коттеджи', 'Коммерция', 'Реконструкция'];

const projects = [
  {
    id: '1',
    title: 'ЖК "Северный Ветер"',
    category: 'Коммерция',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070',
    location: 'Санкт-Петербург',
    year: '2025',
    desc: 'Проектирование и строительство фасадов бизнес-центра класса А.'
  },
  {
    id: '2',
    title: 'Резиденция на Заливе',
    category: 'Коттеджи',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2070',
    location: 'Сестрорецк',
    year: '2024',
    desc: 'Индивидуальный жилой дом площадью 450 м² с панорамным остеклением.'
  },
  {
    id: '3',
    title: 'Логистический хаб "Орион"',
    category: 'Коммерция',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2070',
    location: 'Шушары',
    year: '2025',
    desc: 'Строительство складского комплекса площадью 12 000 м².'
  },
  {
    id: '4',
    title: 'Дом у Озера',
    category: 'Коттеджи',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=2070',
    location: 'Ленинградская обл.',
    year: '2024',
    desc: 'Загородный дом из клееного бруса в современном стиле.'
  },
  {
    id: '5',
    title: 'БЦ "Гранит"',
    category: 'Реконструкция',
    image: 'https://images.unsplash.com/photo-1545670723-196ed0954986?auto=format&fit=crop&q=80&w=2073',
    location: 'Санкт-Петербург',
    year: '2023',
    desc: 'Капитальный ремонт и замена инженерных сетей исторического здания.'
  },
  {
    id: '6',
    title: 'Автосалон "Премиум"',
    category: 'Коммерция',
    image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=2070',
    location: 'Санкт-Петербург',
    year: '2023',
    desc: 'Строительство выставочного зала и ремонтной зоны.'
  },
];

export default function Projects() {
  const [filter, setFilter] = useState('Все');

  const filteredProjects = projects.filter(p => filter === 'Все' || p.category === filter);

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
            <span className="text-orange-500 font-bold uppercase tracking-[0.3em] text-xs">Портфолио объектов</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-12">НАШИ <span className="text-orange-500 italic">ОБЪЕКТЫ</span></h1>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-4 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "px-8 py-3 font-bold text-xs uppercase tracking-widest transition-all rounded-sm",
                  filter === cat
                    ? "bg-orange-500 text-black shadow-[0_0_20px_rgba(249,115,22,0.3)]"
                    : "bg-[#1c1c1c] text-gray-400 hover:text-white border border-gray-800"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="group relative bg-[#1c1c1c] overflow-hidden border border-gray-800 hover:border-orange-500/50"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                  <div className="absolute top-4 left-4 bg-orange-500 text-black px-3 py-1 text-[10px] font-black uppercase tracking-wider">
                    {project.category}
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex flex-col gap-4 mb-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold group-hover:text-orange-500 transition-colors uppercase tracking-tight">
                        {project.title}
                      </h3>
                      <ExternalLink size={18} className="text-gray-600 group-hover:text-orange-500" />
                    </div>
                    <div className="flex items-center gap-6">
                      <span className="flex items-center gap-2 text-xs text-gray-500">
                        <MapPin size={12} className="text-orange-500" />
                        {project.location}
                      </span>
                      <span className="flex items-center gap-2 text-xs text-gray-500">
                        <Calendar size={12} className="text-orange-500" />
                        {project.year}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-8 h-12 line-clamp-2">
                    {project.desc}
                  </p>
                  <div className="h-[1px] w-full bg-gray-800 group-hover:bg-orange-500/50 transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
