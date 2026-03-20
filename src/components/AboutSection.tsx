import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-subtitle text-muted-foreground mb-6">About Me</p>
          <div className="section-divider mb-16" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h2 className="text-section-title text-foreground leading-tight">
              Crafting experiences that are <em className="italic">felt</em>, not just seen.
            </h2>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-body">
              I'm a CSE student with a deep passion for design and creativity across multiple mediums. 
              From UI/UX to social media and branding, I enjoy crafting thoughtful, user-centered 
              experiences and visually striking content.
            </p>
            <p className="text-body">
              With a strong foundation in both digital design and hands-on creative work, I thrive 
              in dynamic environments—whether it's collaborating with startups, leading design efforts 
              in student clubs, or growing my own business.
            </p>
            <p className="text-body">
              My work reflects a blend of strategic thinking and artistic expression, always aiming 
              to make design not just seen, but felt.
            </p>
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {[
            { title: "UI/UX Design", desc: "Figma, Prototyping, Wireframing" },
            { title: "Branding", desc: "Logo Design, Visual Identity" },
            { title: "Social Media", desc: "Content Design, Marketing" },
            { title: "Product Design", desc: "Web & Mobile Applications" },
          ].map((skill, i) => (
            <div key={i} className="border-t border-border pt-6">
              <h4 className="text-sm font-semibold tracking-wide uppercase text-foreground mb-2">
                {skill.title}
              </h4>
              <p className="text-sm text-muted-foreground">{skill.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
