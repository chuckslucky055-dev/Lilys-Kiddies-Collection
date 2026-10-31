import SiteHeader from '../components/SiteHeader';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero"><span className="eyebrow">✦ About Lilys</span><h1>A happy little shop for growing families.</h1><p>Lilys Kiddies Collection brings together useful baby and children's essentials in one convenient place in Port Harcourt.</p></section>
        <section className="section">
          <div className="content-grid">
            <div className="feature-image"><img src="https://images.pexels.com/photos/28259746/pexels-photo-28259746.jpeg?auto=compress&cs=tinysrgb&w=1000" alt="Baby clothes and children's accessories" /></div>
            <div><span className="eyebrow">Our collection</span><h2>From first days to school days.</h2><p className="lead">We stock children's accessories and essentials for ages 0–10, including baby-care products, bedding, comfort items, bags, feeding products and school-related accessories.</p><p className="lead">Stock changes, so message or call us for the latest colours, sizes, prices and availability.</p></div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}