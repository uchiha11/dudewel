import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: "Visit Our Atelier",
      value: "No:5/4, Sir Thyagaraya road, Opp. to GRT Grand Hotel, T.Nagar, Chennai - 600017",
    },
    {
      icon: Phone,
      label: "Call Us",
      value: "+91 81900 03336",
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@dudduel.co",
    },
    {
      icon: Clock,
      label: "Hours",
      value: "Mon-Sun: 10:00AM - 9:30PM",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-32 lg:py-48 px-6 lg:px-12"
      data-testid="section-contact"
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
            Get in Touch
          </p>
          <h2 className="font-display text-4xl lg:text-6xl font-light">
            Begin Your Journey
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-display text-2xl mb-8">Contact Information</h3>
            
            <div className="space-y-8 mb-12">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex gap-4" data-testid={`contact-info-${index}`}>
                  <div className="w-12 h-12 border border-ivory/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-1">
                      {item.label}
                    </p>
                    <p className="text-ivory">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-4">
                Follow DUDDUEL Co.
              </p>
              <div className="flex gap-4">
                {["Instagram", "Youtube", "Facebook", "Pinterest"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-sm text-ivory/60 hover:text-gold transition-colors duration-300"
                    data-testid={`link-social-${social.toLowerCase()}`}
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-display text-2xl mb-8">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6" data-testid="form-contact">
              <div>
                <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-3">
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-transparent border border-ivory/20 px-4 py-4 text-ivory placeholder:text-muted-foreground focus:border-gold focus:outline-none transition-colors duration-300"
                  placeholder="Your name"
                  data-testid="input-name"
                />
              </div>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent border border-ivory/20 px-4 py-4 text-ivory placeholder:text-muted-foreground focus:border-gold focus:outline-none transition-colors duration-300"
                    placeholder="your@email.com"
                    data-testid="input-email"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-3">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-transparent border border-ivory/20 px-4 py-4 text-ivory placeholder:text-muted-foreground focus:border-gold focus:outline-none transition-colors duration-300"
                    placeholder="+91 XXXXX XXXXX"
                    data-testid="input-phone"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-3">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full bg-transparent border border-ivory/20 px-4 py-4 text-ivory placeholder:text-muted-foreground focus:border-gold focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell us about your requirements..."
                  data-testid="input-message"
                />
              </div>
              
              <button
                type="submit"
                className="w-full py-5 bg-ivory text-background text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:bg-gold"
                data-testid="button-submit-contact"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
