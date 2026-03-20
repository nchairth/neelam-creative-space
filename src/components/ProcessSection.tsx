import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "Understanding your brand, goals, target audience, and project scope through detailed research and consultation.",
  },
  {
    number: "02",
    title: "Strategy",
    description: "Defining the design direction, user flows, information architecture, and creating wireframes that align with your vision.",
  },
  {
    number: "03",
    title: "Design",
    description: "Crafting high-fidelity designs with meticulous attention to typography, color, spacing, and visual hierarchy.",
  },
  {
    number: "04",
    title: "Deliver",
    description: "Polished prototypes, design systems, and developer-ready assets with thorough documentation and handoff.",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-24 md:py-40 bg-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <p className="text-subtitle text-muted-foreground mb-6">How I Work</p>
          <h2 className="text-section-title text-foreground">My Process</h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8 md:gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="group relative"
              initial={{ opacity: 0, y: 80, rotateZ: -3 }}
              whileInView={{ opacity: 1, y: 0, rotateZ: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(50%+40px)] right-[-calc(50%-40px)] w-full h-px bg-border" />
              )}

              <motion.div
                className="relative bg-background rounded-2xl p-8 border border-border/50 hover:border-foreground/20 transition-all duration-500 hover:shadow-lg"
                whileHover={{ y: -12, scale: 1.03, transition: { duration: 0.3 } }}
              >
                <span
                  className="text-5xl font-bold text-border group-hover:text-foreground/15 transition-colors duration-500"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {step.number}
                </span>
                <h3
                  className="text-xl font-semibold text-foreground mt-4 mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
