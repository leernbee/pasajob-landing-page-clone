import { ReactNode } from 'react';

import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="antialiased">
    {props.meta}

    <div className="font-serif">
      <Navigation />

      <div className="relative">{props.children}</div>

      <Footer />
    </div>
  </div>
);

export { Main };
