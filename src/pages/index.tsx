import Cta from '@/components/Cta';
import Download from '@/components/Download';
import Form from '@/components/Form';
import Hero from '@/components/Hero';
import How from '@/components/How';
import Quote from '@/components/Quote';
import Recent from '@/components/Recent';
import Trusted from '@/components/Trusted';
import Why from '@/components/Why';
import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main
      meta={
        <>
        <Meta
          title="For educational purpose only"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
        <meta name="robots" content="noindex" />
        </>
      }
    >
      <>
        <Hero />
        <Recent />
        <How />
        <Why />
        <Quote />
        <Trusted />
        <Download />
        <Form />
        <Cta />
      </>
    </Main>
  );
};

export default Index;
