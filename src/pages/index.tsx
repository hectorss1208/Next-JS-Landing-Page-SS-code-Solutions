import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Base } from '../templates/Base';

const Index = () => <Base />;

export async function getStaticProps({ locale }: { locale: any }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'footer'])),
      // Will be passed to the page component as props
    },
  };
}

export default Index;
