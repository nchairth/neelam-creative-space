import { motion } from "framer-motion";

const tools = [
  { name: "Figma", icon: "🎨" },
  { name: "Adobe XD", icon: "✨" },
  { name: "Photoshop", icon: "🖼️" },
  { name: "Illustrator", icon: "✏️" },
  { name: "After Effects", icon: "🎬" },
  { name: "Canva", icon: "🔲" },
  { name: "VS Code", icon: "🧊" },
  { name: "Notion", icon: "📝" },
];

const ToolsSection = () => {
  return (
    <section className="py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-subtitle text-muted-foreground mb-6">My Toolkit</p>
          <h2 className="text-section-title text-foreground">Tools & Technologies</h2>
        </motion.div>
      </div>

      {/* Infinite marquee */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        <motion.div
          className="flex gap-6 py-4"
          animate={{ x: [0, -1200] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          {[...tools, ...tools, ...tools].map((tool, i) => (
            <div
              key={i}
              className="flex items-center gap-4 px-8 py-5 bg-secondary rounded-xl border border-border/50 shrink-0 hover:border-foreground/30 transition-colors cursor-default"
            >
              <span className="text-3xl">{tool.icon}</span>
              <span className="text-sm font-medium tracking-wide text-foreground whitespace-nowrap">
                {tool.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ToolsSection;
