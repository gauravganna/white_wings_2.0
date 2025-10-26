import { Footer } from '@/components/footer';
import { Header } from '@/components/layout';
import { Testimonials } from '@/components/testimonials/Testimonials';
import footerData from '@/data/footer.json';
import headerData from '@/data/header.json';
import '@/styles/globals.css';

function App() {
  const handleNewsletterSubscribe = async (email: string) => {
    console.log('Newsletter subscription:', email);
  };

  return (
    <div className="min-h-screen bg-ww-gray-50 flex flex-col">
      <Header data={headerData} />
      <main className="flex-1">
        <Testimonials />
      </main>
      <Footer data={footerData} onNewsletterSubscribe={handleNewsletterSubscribe} />
    </div>
  );
}

export default App;
