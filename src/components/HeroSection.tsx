import { motion } from "framer-motion";
import heroPortrait from "@/assets/hero-portrait.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full border border-border/30"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <motion.div
          className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full border border-border/20"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid md:grid-cols-2 gap-12 md:gap-8 items-center">
          {/* Left content */}
          <div>
            <motion.div
              className="flex gap-12 mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div>
                <p className="stat-number">+20</p>
                <p className="text-subtitle mt-1">Projects completed</p>
              </div>
              <div>
                <p className="stat-number">+10</p>
                <p className="text-subtitle mt-1">Happy clients</p>
              </div>
            </motion.div>

            <motion.h1
              className="text-hero text-foreground"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1 }}
            >
              Hello
            </motion.h1>

            <motion.p
              className="text-body mt-6 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              — It's Neelam Charitha, a UI/UX Designer
            </motion.p>

            <motion.div
              className="mt-10 flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-foreground text-background text-sm font-medium tracking-wide uppercase hover:bg-foreground/85 transition-colors rounded-sm"
              >
                View Work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 border border-foreground text-foreground text-sm font-medium tracking-wide uppercase hover:bg-foreground hover:text-background transition-colors rounded-sm"
              >
                Contact
              </a>
            </motion.div>
          </div>

          {/* Right - Portrait */}
          <motion.div
            className="relative flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div className="relative">
              <div className="w-[320px] h-[420px] md:w-[400px] md:h-[520px] overflow-hidden rounded-2xl bg-secondary">
                <img
                  src={heroPortrait}
                  alt="Neelam Charitha - UI/UX Designer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-4 -left-4 md:-left-8 bg-background border border-border rounded-xl px-5 py-3 shadow-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                <p className="text-xs tracking-widest uppercase text-muted-foreground">Available for</p>
                <p className="text-sm font-semibold text-foreground mt-0.5" style={{ fontFamily: "var(--font-display)" }}>Freelance Work</p>
              </motion.div>
              {/* Decorative dot grid */}
              <motion.div
                className="absolute -top-6 -right-6 grid grid-cols-3 gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-foreground" />
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Side text */}
      <motion.p
        className="hidden lg:block absolute left-6 top-1/2 -translate-y-1/2 -rotate-90 origin-center text-subtitle tracking-[0.3em] text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        UI/UX Designer
      </motion.p>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          ↓
        </motion.span>
      </motion.div>
    </section>
  );
};

export default HeroSection;
