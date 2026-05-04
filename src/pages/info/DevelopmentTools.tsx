import { motion } from 'motion/react';
import { Code2, Layout, Database, Boxes } from 'lucide-react';

export default function DevelopmentTools() {
  const tools = [
    {
      category: "Frontend",
      icon: <Layout className="text-orange-500" />,
      items: ["React 18", "Vite", "Tailwind CSS", "Framer Motion"]
    },
    {
      category: "3D Visualization",
      icon: <Boxes className="text-orange-500" />,
      items: ["Three.js", "@react-three/fiber", "@react-three/drei"]
    },
    {
      category: "Infrastructure",
      icon: <Database className="text-orange-500" />,
      items: ["TypeScript", "Firebase (Firestore/Auth)", "Cloud Run"]
    },
    {
      category: "Development Utils",
      icon: <Code2 className="text-orange-500" />,
      items: ["Lucide Icons", "ESLint", "PostCSS"]
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto px-4 py-20"
    >
      <h1 className="text-4xl md:text-6xl font-black mb-16 uppercase text-center">ИНСТРУМЕНТАЛЬНЫЕ СИСТЕМЫ <br/><span className="text-orange-500 italic">РАЗРАБОТКИ</span></h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {tools.map((tool, i) => (
          <div key={i} className="bg-bg-secondary p-10 border border-border-theme hover:border-orange-500 transition-all group">
            <div className="w-16 h-16 border border-border-theme flex items-center justify-center mb-8 group-hover:bg-orange-500 group-hover:text-black transition-all">
              {tool.icon}
            </div>
            <h3 className="text-xl font-black mb-6 uppercase tracking-tight">{tool.category}</h3>
            <ul className="space-y-4">
              {tool.items.map((item, j) => (
                <li key={j} className="text-text-secondary text-sm flex items-center gap-2">
                  <div className="w-1 h-1 bg-orange-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
