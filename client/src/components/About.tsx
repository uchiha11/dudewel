import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import fabricImage from "@assets/generated_images/luxury_fabric_texture_detail.png";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="relative py-32 lg:py-48 px-6 lg:px-12 grain"
      data-testid="section-about"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm tracking-[0.3em] uppercase text-gold mb-6">
              The House of Dudduel
            </p>
            
            <h2 className="font-display text-4xl lg:text-6xl font-light leading-tight mb-8">
              Armour for Men 
              <span className="block italic"></span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Dudduel Co. was born from a singular vision: to redefine menswear for 
                the modern gentleman who commands respect without demanding attention. 
                We believe true luxury lies not in ostentation, but in the perfect 
                harmony of cut, cloth, and character.
              </p>
              <p>
                Each garment is a testament to centuries of tailoring tradition, 
                reimagined through a contemporary lens. From the boardroom to the 
                celebration, our pieces speak the language of quiet confidence—
                where power is worn, never displayed.
              </p>
              <p>
                Our atelier bridges Eastern elegance with Western precision, 
                offering bespoke suits that define presence and Indian wear 
                that honors heritage while embracing the future.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square relative overflow-hidden">
              <img
                src={fabricImage}
                alt="Premium fabric texture"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border border-ivory/10" />
            </div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 border border-gold/30" />
            <div className="absolute -top-8 -right-8 w-24 h-24 border border-ivory/10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
