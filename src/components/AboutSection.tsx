import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const textReveal = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section id="about" className="py-24 md:py-40 relative overflow-hidden" ref={sectionRef}>
      {/* Parallax background element */}
      <motion.div
        className="absolute -right-32 top-0 w-[500px] h-[500px] rounded-full border border-border/10"
        style={{ y: bgY }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-subtitle text-muted-foreground mb-6">About Me</p>
          <motion.div
            className="section-divider mb-16"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            style={{ transformOrigin: "left" }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 80, rotateX: 10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <h2 className="text-section-title text-foreground leading-tight">
              Crafting experiences that are <em className="italic">felt</em>, not just seen.
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              "I'm a CSE student with a deep passion for design and creativity across multiple mediums. From UI/UX to social media and branding, I enjoy crafting thoughtful, user-centered experiences and visually striking content.",
              "With a strong foundation in both digital design and hands-on creative work, I thrive in dynamic environments—whether it's collaborating with startups, leading design efforts in student clubs, or growing my own business.",
              "My work reflects a blend of strategic thinking and artistic expression, always aiming to make design not just seen, but felt.",
            ].map((text, i) => (
              <motion.p
                key={i}
                className="text-body"
                initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              >
                {text}
              </motion.p>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { title: "UI/UX Design", desc: "Figma, Prototyping, Wireframing" },
            { title: "Branding", desc: "Logo Design, Visual Identity" },
            { title: "Social Media", desc: "Content Design, Marketing" },
            { title: "Product Design", desc: "Web & Mobile Applications" },
          ].map((skill, i) => (
            <motion.div
              key={i}
              className="border-t border-border pt-6"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <h4 className="text-sm font-semibold tracking-wide uppercase text-foreground mb-2">
                {skill.title}
              </h4>
              <p className="text-sm text-muted-foreground">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
