import { motion } from "framer-motion";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";
import portfolio7 from "@/assets/portfolio-7.jpg";

const projects = [
  { image: portfolio1, title: "Product Design", category: "Branding & Packaging", span: "md:col-span-2" },
  { image: portfolio7, title: "Marketing Design", category: "Social Media & Product", span: "" },
  { image: portfolio3, title: "Dashboard UI", category: "UI/UX Design", span: "" },
  { image: portfolio4, title: "Mobile App Design", category: "UI/UX Design", span: "md:col-span-2" },
  { image: portfolio5, title: "Thestethos Platform", category: "UI/UX Design", span: "" },
  { image: portfolio6, title: "Aczen OS", category: "UI/UX Design", span: "" },
  { image: portfolio2, title: "Social Media Posts", category: "Client Work", span: "md:col-span-2" },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 md:py-40 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-subtitle text-muted-foreground mb-6">Selected Work</p>
          <h2 className="text-section-title text-foreground mb-16">Portfolio</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className={`portfolio-card rounded-lg overflow-hidden ${project.span}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/60 transition-all duration-500 flex items-end p-6">
                  <div className="translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-xs tracking-widest uppercase text-primary-foreground/70 mb-1">
                      {project.category}
                    </p>
                    <h3 className="text-xl font-semibold text-primary-foreground" style={{ fontFamily: "var(--font-display)" }}>
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
