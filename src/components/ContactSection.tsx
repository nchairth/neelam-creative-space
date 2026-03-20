import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, Linkedin, Phone } from "lucide-react";
import { useRef } from "react";

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.4], [0.85, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section id="contact" className="py-24 md:py-40 bg-foreground text-primary-foreground" ref={sectionRef}>
      <motion.div className="max-w-7xl mx-auto px-6 md:px-12" style={{ scale, opacity }}>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-subtitle opacity-60 mb-6">Get In Touch</p>
          <h2
            className="text-5xl md:text-8xl font-bold tracking-tight mb-16 leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {"Let's create".split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.03, ease: [0.16, 1, 0.3, 1] }}
              >
                {char}
              </motion.span>
            ))}
            <br />
            {"something ".split("").map((char, i) => (
              <motion.span
                key={`b-${i}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.03, ease: [0.16, 1, 0.3, 1] }}
              >
                {char}
              </motion.span>
            ))}
            <em className="italic">
              {"great".split("").map((char, i) => (
                <motion.span
                  key={`c-${i}`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.75 + i * 0.03, ease: [0.16, 1, 0.3, 1] }}
                >
                  {char}
                </motion.span>
              ))}
            </em>
            <br />
            {"together.".split("").map((char, i) => (
              <motion.span
                key={`d-${i}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.9 + i * 0.03, ease: [0.16, 1, 0.3, 1] }}
              >
                {char}
              </motion.span>
            ))}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-16">
          {[
            { href: "mailto:neelamcharitha2004@gmail.com", icon: Mail, label: "Email", value: "neelamcharitha2004@gmail.com" },
            { href: "https://linkedin.com/in/charitha-neelam", icon: Linkedin, label: "LinkedIn", value: "charitha_neelam", external: true },
            { href: "tel:+918008740770", icon: Phone, label: "Phone", value: " +91 733 891 8731" },
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="group flex items-start gap-4 border-t border-primary-foreground/20 pt-6 hover:opacity-70 transition-opacity"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ x: 5, transition: { duration: 0.2 } }}
            >
              <item.icon size={20} className="mt-1 shrink-0" />
              <div>
                <p className="text-xs tracking-widest uppercase opacity-60 mb-2">{item.label}</p>
                <p className="text-sm md:text-base">{item.value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-24 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs opacity-40">© 2025 Neelam Charitha. All rights reserved.</p>
          <p className="text-xs opacity-40">Designed with passion.</p>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
