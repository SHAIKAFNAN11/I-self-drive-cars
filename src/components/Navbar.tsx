import { useState, useEffect } from 'react';

const navItems = [
  { label: 'Cars', href: '#cars' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Policy', href: '#policy' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md shadow-sm border-b border-border transition-all duration-300">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Nav links visible on all sizes */}
        <ul className="flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="text-sm font-medium tracking-wide text-foreground hover:text-gold">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#cars"
          className="inline-flex bg-gold text-gold-foreground px-7 py-2.5 rounded-full text-sm font-semibold tracking-wide hover:bg-gold/90 transition-all gold-glow"
        >
          Book Now
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
