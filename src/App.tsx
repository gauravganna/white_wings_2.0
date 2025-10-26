import { Footer } from '@/components/footer';
import { Header } from '@/components/layout';
import footerData from '@/data/footer.json';
import headerData from '@/data/header.json';
import '@/styles/globals.css';

function App() {
  const handleNewsletterSubscribe = async (email: string) => {
    console.log('Newsletter subscription:', email);
    // Hook up with your email provider here
  };

  return (
    <div className="min-h-screen bg-ww-gray-50 flex flex-col">
      <Header data={headerData} />
      <main className="flex-1" />
      <Footer data={footerData} onNewsletterSubscribe={handleNewsletterSubscribe} />
    </div>
  );
}

export default App;
