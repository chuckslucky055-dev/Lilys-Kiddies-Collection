import SiteHeader from '../components/SiteHeader';
import Footer from '../components/Footer';

const images = [
  'https://images.pexels.com/photos/37904241/pexels-photo-37904241.jpeg?auto=compress&cs=tinysrgb&w=900',
  'https://images.pexels.com/photos/19163668/pexels-photo-19163668.jpeg?auto=compress&cs=tinysrgb&w=900',
  'https://images.pexels.com/photos/28259746/pexels-photo-28259746.jpeg?auto=compress&cs=tinysrgb&w=900',
  'https://images.pexels.com/photos/37904241/pexels-photo-37904241.jpeg?auto=compress&cs=tinysrgb&w=900',
  'https://images.pexels.com/photos/19163668/pexels-photo-19163668.jpeg?auto=compress&cs=tinysrgb&w=900',
  'https://images.pexels.com/photos/4887256/pexels-photo-4887256.jpeg?auto=compress&cs=tinysrgb&w=900',
  'https://images.pexels.com/photos/28259746/pexels-photo-28259746.jpeg?auto=compress&cs=tinysrgb&w=900',
  'https://images.pexels.com/photos/37904241/pexels-photo-37904241.jpeg?auto=compress&cs=tinysrgb&w=900',
];

const items = ['Baby Care Set', 'Foldable Bath Tub', 'Support Pillow', 'Newborn Set', 'Baby Blanket', 'Baby Carrier', 'Electric Breast Pump', '3-in-1 Bassinet'];

export default function Baby() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero"><span className="eyebrow">👶 For babies</span><h1>Baby essentials, 0–5</h1><p>From newborn comfort to everyday care, discover practical little essentials for the earliest years.</p></section>
        <section className="section">
          <div className="product-grid">
            {items.map((x, i) => (
              <article className="product-card" key={x}>
                <div className="product-image"><img src={images[i]} alt={x} /></div>
                <div className="product-info"><p>Baby essentials</p><h3>{x}</h3><a className="mini-link" href={'https://wa.me/23481358366432?text=Hi%20Lilys%20Kiddies%20Collection%20about%20' + encodeURIComponent(x)}>💬 Enquire →</a></div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}