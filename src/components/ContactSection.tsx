import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react';
import { PHONE_PRIMARY, PHONE_SECONDARY, getWhatsAppLink } from '@/data/vehicles';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-gold font-medium tracking-[0.15em] uppercase text-sm mb-3">Get In Touch</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Contact Us
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Contact info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 p-5 rounded-xl border border-border bg-background">
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                <Phone size={20} className="text-gold" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Call Us</p>
                <a href={`tel:+91${PHONE_PRIMARY}`} className="text-lg font-semibold text-foreground hover:text-gold transition-colors">
                  {PHONE_PRIMARY}
                </a>
                <br />
                <a href={`tel:+91${PHONE_SECONDARY}`} className="text-lg font-semibold text-foreground hover:text-gold transition-colors">
                  {PHONE_SECONDARY}
                </a>
              </div>
            </div>

            <a
              href={getWhatsAppLink('Hi, I have a question about your self drive car rental service in Chennai.')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-xl border border-border bg-background hover:border-gold/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                <MessageCircle size={20} className="text-gold" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">WhatsApp</p>
                <p className="text-lg font-semibold text-foreground">{PHONE_PRIMARY}</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-5 rounded-xl border border-border bg-background">
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                <Mail size={20} className="text-gold" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Email</p>
                <p className="text-lg font-semibold text-foreground">i.selfdrivecar@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-5 rounded-xl border border-border bg-background">
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                <MapPin size={20} className="text-gold" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Location</p>
                <p className="text-lg font-semibold text-foreground">Chai Sutta Bar, Padmavathi Rd, Gopalapuram, Chennai, Tamil Nadu 600086</p>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="rounded-xl overflow-hidden border border-border h-[400px]">
            <iframe
              title="I Self Drive Cars Chennai Location"
              src="https://www.google.com/maps?q=Chai%20Sutta%20Bar%2C%20Padmavathi%20Rd%2C%20Gopalapuram%2C%20Chennai%2C%20Tamil%20Nadu%20600086&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
