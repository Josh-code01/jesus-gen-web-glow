import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Programs from '@/components/Programs';
import Mission from '@/components/Mission';
import News from '@/components/News';
import Admissions from '@/components/Admissions';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Programs />
        <Mission />
        <News />
        <Admissions />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
