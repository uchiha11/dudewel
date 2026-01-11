import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import craftImage from "@assets/generated_images/bespoke_tailoring_craftsmanship.png";

const pillars = [
  {
    number: "01",
    title: "Precision Cut",
    description: "Every pattern is drafted by hand, ensuring your garment fits like a second skin.",
  },
  {
    number: "02",
    title: "Finest Materials",
    description: "We source exclusively from heritage mills—Italian wools, Indian silks, rare cottons.",
  },
  {
    number: "03",
    title: "Artisan Finish",
    description: "Hand-stitched buttonholes, hand-rolled lapels, invisible finishing—details that define.",
  },
  {
    number: "04",
    title: "Timeless Design",
    description: "Silhouettes that transcend seasons, designed to be worn for decades, not trends.",
  },
];

export default function Craftsmanship() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="craftsmanship"
      className="relative py-32 lg:py-48 overflow-hidden"
      data-testid="section-craftsmanship"
    >
      <div className="absolute inset-0">
        <img
          src={craftImage}
          alt="Master craftsmanship"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm tracking-[0.3em] uppercase text-gold mb-6">
              The Atelier
            </p>
            
            <h2 className="font-display text-4xl lg:text-6xl font-light leading-tight mb-8">
              Mastery in
              <span className="block italic">Every Stitch</span>
            </h2>
            
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg">
              At Dudduel Co. craftsmanship is not a marketing term—it is our religion. 
              Each garment passes through the hands of master artisans who have 
              dedicated their lives to the pursuit of sartorial perfection.
            </p>

            <blockquote className="border-l-2 border-gold pl-6 italic font-display text-xl text-ivory/80">
              "The difference between ordinary and extraordinary is in the details 
              that remain unseen."
            </blockquote>
          </motion.div>

          <div className="space-y-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                className="group flex gap-6 p-6 border border-transparent hover:border-ivory/10 transition-colors duration-300"
                data-testid={`item-pillar-${pillar.number}`}
              >
                <span className="font-display text-3xl text-gold/50 group-hover:text-gold transition-colors duration-300">
                  {pillar.number}
                </span>
                <div>
                  <h3 className="font-display text-xl mb-2">{pillar.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
