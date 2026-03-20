import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Charitha transformed our brand identity completely. The attention to detail and creative vision exceeded all expectations.",
    name: "Startup Founder",
    role: "Brand Identity Project",
  },
  {
    quote: "Working with Charitha was effortless. The UI/UX designs were intuitive, clean, and exactly what our users needed.",
    name: "Product Manager",
    role: "Mobile App Design",
  },
  {
    quote: "The social media designs boosted our engagement by 3x. Truly understands how to create content that resonates.",
    name: "Marketing Lead",
    role: "Social Media Campaign",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 md:py-40">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-subtitle text-muted-foreground mb-6">Testimonials</p>
          <h2 className="text-section-title text-foreground">What Clients Say</h2>
        </motion.div>

        <div className="relative min-h-[280px] flex items-center justify-center">
          <Quote size={60} className="absolute top-0 left-1/2 -translate-x-1/2 text-border" />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="pt-12"
            >
              <p
                className="text-xl md:text-3xl font-light leading-relaxed text-foreground italic"
                style={{ fontFamily: "var(--font-display)" }}
              >
                "{testimonials[current].quote}"
              </p>
              <div className="mt-8">
                <p className="text-sm font-semibold text-foreground tracking-wide">
                  {testimonials[current].name}
                </p>
                <p className="text-xs text-muted-foreground mt-1 tracking-widest uppercase">
                  {testimonials[current].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === current ? "bg-foreground scale-125" : "bg-border hover:bg-muted-foreground"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
