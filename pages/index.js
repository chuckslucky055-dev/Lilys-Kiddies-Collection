import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';
import Footer from '../components/Footer';

const images = {
  baby: 'https://images.pexels.com/photos/37904241/pexels-photo-37904241.jpeg?auto=compress&cs=tinysrgb&w=900',
  clothes: 'https://images.pexels.com/photos/19163668/pexels-photo-19163668.jpeg?auto=compress&cs=tinysrgb&w=900',
  bag: 'https://images.pexels.com/photos/4887256/pexels-photo-4887256.jpeg?auto=compress&cs=tinysrgb&w=900',
  kids: 'https://images.pexels.com/photos/13198523/pexels-photo-13198523.jpeg?auto=compress&cs=tinysrgb&w=900',
};

const featured = [
  ['Baby Care', images.baby],
  ['Baby Clothes & Gifts', images.clothes],
  ['Kids Bags', images.bag],
  ['School & Travel', images.kids],
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero">
          <div>
            <span className="eyebrow">✦ Little things. Big smiles.</span>
            <h1>Everything little ones need, <em>all in one happy place.</em></h1>
            <p className="lead">Lilys Kiddies Collection is a cheerful children's store in Port Harcourt for babies and children from 0–10 years.</p>
            <div className="hero-actions">
              <Link href="/shop/" className="btn btn-primary">Explore the collection →</Link>
              <a href="https://wa.me/23481358366432" className="btn btn-light">💬 Chat on WhatsApp</a>
            </div>
            <div className="hero-points">✓ Everyday essentials · ♥ For growing families</div>
          </div>
          <div className="hero-art">
            <div className="blob blob-one"></div>
            <div className="hero-card hero-card-main">
              <img src={images.baby} alt="Baby clothing and accessories" />
              <span>♥ Cuddly & cute</span>
            </div>
            <div className="hero-card hero-card-small">
              <img src={images.bag} alt="Children's backpack and toy" />
              <span>For little adventures 🎒</span>
            </div>
          </div>
        </section>

        <section className="section section-soft">
          <div className="section-heading">
            <div><span className="eyebrow">Shop by need</span><h2>Little essentials, thoughtfully grouped</h2></div>
            <Link href="/shop/" className="text-link">View all →</Link>
          </div>
          <div className="category-grid">
            <Link href="/baby/" className="category-card cat-pink"><b>👶</b><h3>Baby Essentials</h3><p>Care, feeding & comfort</p></Link>
            <Link href="/shop/" className="category-card cat-blue"><b>🎒</b><h3>Bags & Travel</h3><p>Handy bags for busy days</p></Link>
            <Link href="/school/" className="category-card cat-yellow"><b>🎒</b><h3>School Kits</h3><p>Practical school-day picks</p></Link>
            <Link href="/shop/" className="category-card cat-mint"><b>🧸</b><h3>Comfort & Care</h3><p>Blankets, pillows & more</p></Link>
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <div><span className="eyebrow">From our collection</span><h2>Featured little favourites</h2></div>
            <Link href="/shop/" className="text-link">Browse shop →</Link>
          </div>
          <div className="product-grid">
            {featured.map(([name, image]) => (
              <article className="product-card" key={name}>
                <div className="product-image"><img src={image} alt={name} /></div>
                <div className="product-info">
                  <p>Kids essentials</p>
                  <h3>{name}</h3>
                  <a className="mini-link" href={'https://wa.me/23481358366432?text=Hi%20Lilys%20Kiddies%20Collection%20about%20' + encodeURIComponent(name)}>Ask on WhatsApp →</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="visit-banner">
          <div><span className="eyebrow">Come say hello</span><h2>Find us at Igwuruta Market Junction</h2><p>8 Igwuruta Market Junction, Port Harcourt, Rivers State.</p></div>
          <a className="btn btn-dark" href="https://wa.me/23481358366432">💬 WhatsApp us</a>
        </section>
      </main>
      <Footer />
    </>
  );
}