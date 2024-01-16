import { useTranslation } from 'next-i18next';

import { Section } from '../layout/Section';

const CompanyDescription = () => {
  const { t } = useTranslation();
  return (
    <Section
      title={t('app.section.first.title')}
      description={t('app.section.first.text')}
    >
      <></>
    </Section>
  );
};

export { CompanyDescription };
