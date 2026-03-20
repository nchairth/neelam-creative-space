import { motion } from "framer-motion";
import heroPortrait from "@/assets/hero-portrait.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-end md:items-center overflow-hidden pt-20">
      {/* Background portrait */}
      <div className="absolute right-0 top-0 w-full md:w-[55%] h-full">
        <motion.img
          src={heroPortrait}
          alt="Neelam Charitha - UI/UX Designer"
          className="w-full h-full object-cover object-top"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pb-20 md:pb-0">
        <div className="max-w-2xl">
          {/* Stats */}
          <motion.div
            className="flex gap-12 mb-12"
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

          {/* Main heading */}
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
        className="absolute bottom-8 left-6 md:left-12 flex items-center gap-2 text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll down</span>
        <span>↓</span>
      </motion.div>
    </section>
  );
};

export default HeroSection;
