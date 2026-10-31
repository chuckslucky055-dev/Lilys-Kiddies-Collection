import SiteHeader from '../components/SiteHeader';
import Footer from '../components/Footer';

export default function School() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero"><span className="eyebrow">🎒 School days</span><h1>Ready for the school run</h1><p>Practical bags, kits and everyday accessories for children up to 10 years.</p></section>
        <section className="section">
          <div className="content-grid">
            <div className="feature-image"><img src="https://images.pexels.com/photos/13198523/pexels-photo-13198523.jpeg?auto=compress&cs=tinysrgb&w=1000" alt="Child with a school backpack" /></div>
            <div><span className="eyebrow">School & travel</span><h2>Bags and essentials for busy little days.</h2><p className="lead">Choose from useful bags and children's accessories that make school mornings, outings and family trips a little easier.</p><a className="btn btn-primary" href="https://wa.me/23481358366432?text=Hi%20Lilys%20Kiddies%20Collection%20I%27d%20like%20to%20see%20school%20kits">💬 Ask about school kits →</a></div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}