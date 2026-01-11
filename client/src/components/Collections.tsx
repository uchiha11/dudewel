import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import suitHero from "@assets/generated_images/luxury_tailored_suit.png";
import sherwani from "@assets/generated_images/luxury_indian_sherwani.png";
import craftsmanship from "@assets/generated_images/bespoke_tailoring_craftsmanship.png";

const collections = [
  {
    id: 1,
    title: "Classic Suiting",
    subtitle: "The Foundation of Power",
    description: "Impeccably tailored suits for the modern executive. Each piece cut from the finest European wools.",
    image: suitHero,
    category: "Suits & Blazers",
  },
  {
    id: 2,
    title: "Royal Heritage",
    subtitle: "Indian Couture Redefined",
    description: "Sherwanis and bandhgalas that honor tradition while commanding contemporary spaces.",
    image: sherwani,
    category: "Indian Wear",
  },
  {
    id: 3,
    title: "Essential Layers",
    subtitle: "Refined Foundations",
    description: "Premium shirts, trousers, and accessories that complete the Dudduel Co. aesthetic.",
    image: craftsmanship,
    category: "Essentials",
  },
];

function CollectionCard({ collection, index }: { collection: typeof collections[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative"
      data-testid={`card-collection-${collection.id}`}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-charcoal">
        <img
          src={collection.image}
          alt={collection.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
        
        <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
          <p className="text-xs tracking-[0.25em] uppercase text-gold mb-3">
            {collection.category}
          </p>
          <h3 className="font-display text-2xl lg:text-3xl mb-2">
            {collection.title}
          </h3>
          <p className="font-display text-lg italic text-ivory/70 mb-4">
            {collection.subtitle}
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {collection.description}
          </p>
          
          <div className="flex items-center gap-2 text-ivory group-hover:text-gold transition-colors duration-300">
            <span className="text-sm tracking-[0.15em] uppercase">View Collection</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" strokeWidth={1.5} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Collections() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="collections"
      className="relative py-32 lg:py-48 px-6 lg:px-12 bg-card"
      data-testid="section-collections"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-24"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-gold mb-4">
            The Collections
          </p>
          <h2 className="font-display text-4xl lg:text-6xl font-light">
            Curated Excellence
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {collections.map((collection, index) => (
            <CollectionCard key={collection.id} collection={collection} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
