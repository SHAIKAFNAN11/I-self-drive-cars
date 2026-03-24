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
              href={getWhatsAppLink('Hi, I would like to see your self drive car rental service in Chennai.')}
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
                <p className="text-lg font-semibold text-foreground">12/17 PV kovil, 3rd St, behind THE MUSIC ACADEMY, Royapettah, Chennai, Tamil Nadu 600004</p>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="rounded-xl overflow-hidden border border-border h-[400px]">
            <iframe
              title="I Self Drive Cars Chennai Location"
              src="https://www.google.com/maps?q=12%2F17%20PV%20kovil%2C%203rd%20St%2C%20behind%20THE%20MUSIC%20ACADEMY%2C%20Royapettah%2C%20Chennai%2C%20Tamil%20Nadu%20600004&output=embed"
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
