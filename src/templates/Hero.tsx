import Link from 'next/link';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import Carousel from './Carousel';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href={''}>Home</Link>
        </li>
        <li>
          <Link href={''}>Services</Link>
        </li>
        <li>
          <Link href={''}>About Us</Link>
        </li>
        <li>
          <Link href={''}>Resources</Link>
        </li>
        <li>
          <Link href={''}>Contact us</Link>
        </li>
      </NavbarTwoColumns>
    </Section>
    {/* 
    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'The modern landing page for\n'}
            <span className="text-primary-500">React developers</span>
          </>
        }
        description="The easiest way to build a React landing page in seconds."
        button={
          <Link href="https://creativedesignsguru.com/category/nextjs/">
            <Button xl>Download Your Free Theme</Button>
          </Link>
        }
      />
    </Section> */}
    <Section yPadding="pt-2 pb-6">
      <Carousel />
    </Section>
  </Background>
);

export { Hero };
