import { motion } from "framer-motion";
import { Mail, Linkedin, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-40 bg-foreground text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-subtitle opacity-60 mb-6">Get In Touch</p>
          <h2
            className="text-5xl md:text-8xl font-bold tracking-tight mb-16 leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Let's create<br />
            something <em className="italic">great</em><br />
            together.
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 md:gap-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <a
            href="mailto:neelamcharitha2004@gmail.com"
            className="group flex items-start gap-4 border-t border-primary-foreground/20 pt-6 hover:opacity-70 transition-opacity"
          >
            <Mail size={20} className="mt-1 shrink-0" />
            <div>
              <p className="text-xs tracking-widest uppercase opacity-60 mb-2">Email</p>
              <p className="text-sm md:text-base">neelamcharitha2004@gmail.com</p>
            </div>
          </a>

          <a
            href="https://linkedin.com/in/charitha-neelam"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-4 border-t border-primary-foreground/20 pt-6 hover:opacity-70 transition-opacity"
          >
            <Linkedin size={20} className="mt-1 shrink-0" />
            <div>
              <p className="text-xs tracking-widest uppercase opacity-60 mb-2">LinkedIn</p>
              <p className="text-sm md:text-base">charitha_neelam</p>
            </div>
          </a>

          <a
            href="tel:+918008740770"
            className="group flex items-start gap-4 border-t border-primary-foreground/20 pt-6 hover:opacity-70 transition-opacity"
          >
            <Phone size={20} className="mt-1 shrink-0" />
            <div>
              <p className="text-xs tracking-widest uppercase opacity-60 mb-2">Phone</p>
              <p className="text-sm md:text-base">+91 800 874 0770</p>
            </div>
          </a>
        </motion.div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs opacity-40">© 2025 Neelam Charitha. All rights reserved.</p>
          <p className="text-xs opacity-40">Designed with passion.</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
