import { About } from '@/components/shared/About';
import { Footer } from '@/components/shared/Footer';
import { Portfolio } from '@/components/shared/Portfolio';
import { Preview } from '@/components/shared/Preview';
import { Skills } from '@/components/shared/Skills';

export default function Home() {
  return (
    <div>
      <Preview />
      <About />
      <Skills />
      <Portfolio />
      <Footer />
    </div>
  );
}
