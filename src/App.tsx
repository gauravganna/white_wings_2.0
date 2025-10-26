import { Placard } from '@/components/common/Placard';
import { ShowcasePlacard } from '@/components/common/ShowcasePlacard';
import { Footer } from '@/components/footer';
import { Header } from '@/components/layout';
import { ProjectsMarquee } from '@/components/projects/ProjectsMarquee';
import { PropertiesSection } from '@/components/properties/PropertiesSection';
import { SocialMediaSection } from '@/components/social/SocialMediaSection';
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
        <ShowcasePlacard />
        <ProjectsMarquee />
        <Placard />
        <PropertiesSection type="commercial" title="Commercial" />
        <PropertiesSection type="residential" title="Residential" />
        <SocialMediaSection />
        <Testimonials />
      </main>
      <Footer data={footerData} onNewsletterSubscribe={handleNewsletterSubscribe} />
    </div>
  );
}

export default App;
