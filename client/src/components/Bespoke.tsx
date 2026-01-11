import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const services = [
  "Personal consultation with master tailor",
  "Over 1000 premium fabrics to choose from",
  "Multiple fitting sessions for perfect fit",
  "Custom linings, buttons, and monogramming",
  "Lifetime alterations and care",
  "Home or atelier appointments available",
];

const process = [
  { step: "01", title: "Consultation", description: "Discuss your vision, occasion, and style preferences" },
  { step: "02", title: "Measurement", description: "30+ precise measurements taken by our master tailors" },
  { step: "03", title: "Fabric Selection", description: "Choose from our curated collection of premium cloths" },
  { step: "04", title: "First Fitting", description: "Review the initial construction and make adjustments" },
  { step: "05", title: "Final Fitting", description: "Perfect every detail before the finishing touches" },
  { step: "06", title: "Delivery", description: "Your masterpiece, ready to command any room" },
];

export default function Bespoke() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="bespoke"
      className="relative py-32 lg:py-48 px-6 lg:px-12 bg-card grain"
      data-testid="section-bespoke"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-gold mb-4">
            Made to Measure
          </p>
          <h2 className="font-display text-4xl lg:text-6xl font-light mb-6">
            The Bespoke Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            True bespoke is an intimate journey. From the first handshake to the 
            final stitch, we craft not just a garment, but a relationship built 
            on trust, precision, and shared vision.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-display text-2xl mb-8">What We Offer</h3>
            <div className="space-y-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 border border-ivory/5 hover:border-ivory/15 transition-colors duration-300"
                  data-testid={`item-service-${index}`}
                >
                  <div className="w-6 h-6 rounded-full border border-gold/50 flex items-center justify-center">
                    <Check className="w-3 h-3 text-gold" strokeWidth={2} />
                  </div>
                  <span className="text-ivory/80">{service}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-display text-2xl mb-8">The Process</h3>
            <div className="space-y-6">
              {process.map((item, index) => (
                <div
                  key={item.step}
                  className="group flex gap-6"
                  data-testid={`item-process-${item.step}`}
                >
                  <div className="flex-shrink-0">
                    <span className="font-display text-2xl text-gold/30 group-hover:text-gold transition-colors duration-300">
                      {item.step}
                    </span>
                  </div>
                  <div className="border-l border-ivory/10 pl-6">
                    <h4 className="text-lg mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-12 py-5 bg-gold text-background text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:bg-ivory"
            data-testid="button-book-consultation"
          >
            Book Your Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
