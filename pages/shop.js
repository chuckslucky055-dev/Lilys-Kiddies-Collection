import SiteHeader from '../components/SiteHeader';
import Footer from '../components/Footer';

const images = [
  'https://images.pexels.com/photos/37904241/pexels-photo-37904241.jpeg?auto=compress&cs=tinysrgb&w=900',
  'https://images.pexels.com/photos/19163668/pexels-photo-19163668.jpeg?auto=compress&cs=tinysrgb&w=900',
  'https://images.pexels.com/photos/4887256/pexels-photo-4887256.jpeg?auto=compress&cs=tinysrgb&w=900',
  'https://images.pexels.com/photos/28259746/pexels-photo-28259746.jpeg?auto=compress&cs=tinysrgb&w=900',
  'https://images.pexels.com/photos/37904241/pexels-photo-37904241.jpeg?auto=compress&cs=tinysrgb&w=900',
  'https://images.pexels.com/photos/19163668/pexels-photo-19163668.jpeg?auto=compress&cs=tinysrgb&w=900',
  'https://images.pexels.com/photos/4887256/pexels-photo-4887256.jpeg?auto=compress&cs=tinysrgb&w=900',
  'https://images.pexels.com/photos/28259746/pexels-photo-28259746.jpeg?auto=compress&cs=tinysrgb&w=900',
  'https://images.pexels.com/photos/37904241/pexels-photo-37904241.jpeg?auto=compress&cs=tinysrgb&w=900',
  'https://images.pexels.com/photos/19163668/pexels-photo-19163668.jpeg?auto=compress&cs=tinysrgb&w=900',
];

const items = ['Baby Care', 'Bath Time', 'Baby Comfort', 'Baby Bags', 'Newborn Set', 'Baby Blankets', 'Baby Carrier', 'Feeding', 'Bassinet', 'Mommy Bag'];

export default function Shop() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero"><span className="eyebrow">The collection</span><h1>Shop little favourites</h1><p>Browse baby and kids essentials. Message us for current stock, colours and prices.</p></section>
        <section className="section">
          <div className="product-grid">
            {items.map((x, i) => (
              <article className="product-card" key={x}>
                <div className="product-image"><img src={images[i]} alt={x} /></div>
                <div className="product-info"><p>Kids essentials</p><h3>{x}</h3><a className="mini-link" href={'https://wa.me/23481358366432?text=Hi%20Lilys%20Kiddies%20Collection%20about%20' + encodeURIComponent(x)}>💬 Ask about this item →</a></div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}