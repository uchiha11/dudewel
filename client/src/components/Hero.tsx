import { motion } from "framer-motion";
import heroImage from "@assets/generated_images/luxury_tailored_suit_hero.png";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden" data-testid="section-hero">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Dudduel Co. luxury tailored suit"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-end pb-24 lg:pb-32 px-6 lg:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="text-sm lg:text-base tracking-[0.3em] uppercase text-ivory/70 mb-4 lg:mb-6">
            Bespoke Tailoring
          </p>
          
          <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl xl:text-9xl font-light leading-[0.9] mb-6 lg:mb-8">
            <span className="block">Crafted for</span>
            <span className="block italic text-gold">Power.</span>
          </h1>
          
          <p className="font-display text-xl lg:text-2xl italic text-ivory/80 mb-10 lg:mb-12 max-w-xl">
            Worn with Purpose.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <a
              href="#collections"
              className="group inline-flex items-center justify-center px-8 py-4 bg-ivory text-background text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:bg-gold"
              data-testid="button-explore-collection"
            >
              Explore Collection
            </a>
            <a
              href="#about"
              className="group inline-flex items-center justify-center px-8 py-4 border border-ivory/30 text-ivory text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:border-ivory hover:bg-ivory/5"
              data-testid="button-our-philosophy"
            >
              Our Philosophy
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs tracking-[0.2em] uppercase text-ivory/50">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-ivory/50 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
