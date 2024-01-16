import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import Carousel from './Carousel';
import LanguageSwitcher from './LanguageSwitcher';
import { Logo } from './Logo';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <Background color="bg-gray-100">
      <Section yPadding="py-6">
        <NavbarTwoColumns logo={<Logo xl />}>
          <li>
            <Link href={''}>{t('app.menu.home')}</Link>
          </li>
          <li>
            <Link href={''}>{t('app.menu.services')}</Link>
          </li>
          <li>
            <Link href={''}>{t('app.menu.about')}</Link>
          </li>
          <li>
            <Link href={''}>{t('app.menu.resources')}</Link>
          </li>
          <li>
            <Link href={''}>{t('app.menu.contactUs')}</Link>
          </li>
          <li>
            <LanguageSwitcher />
          </li>
        </NavbarTwoColumns>
      </Section>
      <Section yPadding="pt-2 pb-6">
        <Carousel />
      </Section>
    </Background>
  );
};

export { Hero };
