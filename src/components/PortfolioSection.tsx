import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";
import portfolio7 from "@/assets/portfolio-7.jpg";

const categories = ["All", "UI/UX", "Branding", "Social Media"];

const projects = [
  { image: portfolio1, title: "Product Design", category: "Branding", description: "Complete branding and packaging design for a consumer product line.", span: "md:col-span-2 md:row-span-2" },
  { image: portfolio7, title: "Marketing Design", category: "Social Media", description: "Social media campaigns and product marketing visuals.", span: "" },
  { image: portfolio3, title: "Dashboard UI", category: "UI/UX", description: "Analytics dashboard with real-time data visualization.", span: "" },
  { image: portfolio4, title: "Mobile App Design", category: "UI/UX", description: "End-to-end mobile app experience from wireframe to prototype.", span: "md:col-span-2" },
  { image: portfolio5, title: "Thestethos Platform", category: "UI/UX", description: "Healthcare platform redesign for improved patient experience.", span: "" },
  { image: portfolio6, title: "Aczen OS", category: "UI/UX", description: "Operating system interface design with modern aesthetics.", span: "" },
  { image: portfolio2, title: "Social Media Posts", category: "Social Media", description: "Engaging social media content design for multiple brands.", span: "md:col-span-2" },
];

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const headerX = useTransform(scrollYProgress, [0, 0.3], [-60, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 md:py-40 bg-secondary overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          style={{ x: headerX, opacity: headerOpacity }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <p className="text-subtitle text-muted-foreground mb-6">Selected Work</p>
            <h2 className="text-section-title text-foreground">Portfolio</h2>
          </div>

          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 text-xs tracking-widest uppercase rounded-full border transition-all duration-300 ${
                  activeFilter === cat
                    ? "bg-foreground text-background border-foreground"
                    : "bg-transparent text-muted-foreground border-border hover:border-foreground hover:text-foreground"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid md:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                className={`group relative rounded-xl overflow-hidden cursor-pointer ${project.span}`}
                initial={{ opacity: 0, y: 100, rotateY: -5 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setSelectedProject(project)}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/70 transition-all duration-500 flex flex-col items-start justify-end p-6 md:p-8">
                    <div className="translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                      <span className="text-[10px] tracking-[0.2em] uppercase text-background/60 block mb-2">
                        {project.category}
                      </span>
                      <h3
                        className="text-xl md:text-2xl font-semibold text-background"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {project.title}
                      </h3>
                      <p className="text-sm text-background/70 mt-2 max-w-xs">{project.description}</p>
                    </div>
                    <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-background/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                      <ArrowUpRight size={18} className="text-background" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 bg-foreground/90 backdrop-blur-md flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full bg-background rounded-2xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.7, opacity: 0, rotateX: 15 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              exit={{ scale: 0.7, opacity: 0, rotateX: -15 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-accent transition-colors"
              >
                <X size={18} className="text-foreground" />
              </button>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full aspect-video object-cover"
              />
              <div className="p-8">
                <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground block mb-3">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground" style={{ fontFamily: "var(--font-display)" }}>
                  {selectedProject.title}
                </h3>
                <p className="text-body mt-3">{selectedProject.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioSection;
