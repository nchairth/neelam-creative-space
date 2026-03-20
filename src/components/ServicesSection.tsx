import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    number: "01",
    title: "UI/UX Design",
    description: "End-to-end user experience design from research and wireframing to high-fidelity prototypes and developer handoff.",
  },
  {
    number: "02",
    title: "Brand Identity",
    description: "Complete visual identity systems including logo design, color palettes, typography, and brand guidelines.",
  },
  {
    number: "03",
    title: "Social Media Design",
    description: "Eye-catching social media content, stories, and campaign visuals that drive engagement and build brand presence.",
  },
  {
    number: "04",
    title: "Product Design",
    description: "Packaging, marketing collateral, and product presentation design that elevates your brand in the market.",
  },
];

const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const titleX = useTransform(scrollYProgress, [0, 0.3], [120, 0]);

  return (
    <section id="services" className="py-24 md:py-40" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-subtitle text-muted-foreground mb-6">What I Do</p>
          <motion.h2
            className="text-section-title text-foreground mb-16"
            style={{ x: titleX }}
          >
            Services
          </motion.h2>
        </motion.div>

        <div className="space-y-0">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="group border-t border-border py-10 md:py-14 flex flex-col md:flex-row md:items-center gap-4 md:gap-16 cursor-pointer hover:bg-secondary/50 transition-colors px-4 -mx-4 rounded-sm"
              initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.9, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ x: 10, transition: { duration: 0.3 } }}
            >
              <span className="text-sm text-muted-foreground font-mono w-12 shrink-0">
                {service.number}
              </span>
              <h3
                className="text-2xl md:text-4xl font-semibold text-foreground md:w-1/3 shrink-0 group-hover:tracking-wide transition-all duration-300"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {service.title}
              </h3>
              <p className="text-body flex-1">{service.description}</p>
              <motion.span
                className="text-2xl text-muted-foreground group-hover:text-foreground hidden md:block"
                whileHover={{ x: 8 }}
                transition={{ duration: 0.2 }}
              >
                →
              </motion.span>
            </motion.div>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
