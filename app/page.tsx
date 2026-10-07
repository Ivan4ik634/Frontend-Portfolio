import { About } from '@/components/shared/About';
import { Container } from '@/components/shared/Container';
import { Footer } from '@/components/shared/Footer';
import { Header } from '@/components/shared/Header';
import { Portfolio } from '@/components/shared/Portfolio';
import { Preview } from '@/components/shared/Preview';
import { Skills } from '@/components/shared/Skills';

export default function Home() {
  return (
    <>
      <Container className="pt-[74px]">
        <Header />
        <div>
          <Preview />
          <About />
          <Portfolio />
          <Skills />
        </div>
      </Container>
      <Footer />
    </>
  );
}
