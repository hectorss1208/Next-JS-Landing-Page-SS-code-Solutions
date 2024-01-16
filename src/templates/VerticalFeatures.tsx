import { useTranslation } from "next-i18next";

import { VerticalFeatureRow } from "../feature/VerticalFeatureRow";
import { Section } from "../layout/Section";

const VerticalFeatures = () => {
  const { t } = useTranslation();
  return (
    <Section
      title={t("app.section.second.title")}
      description={t("app.section.second.text")}
    >
      <VerticalFeatureRow
        title={t("app.section.third.title")}
        description={t("app.section.third.text")}
        image="/assets/images/undraw_usability_testing_re_uu1g.svg"
        imageAlt="First feature alt text"
      />
      <VerticalFeatureRow
        title={t("app.section.fourth.title")}
        description={t("app.section.fourth.text")}
        image="/assets/images/undraw_programming_re_kg9v.svg"
        imageAlt="Second feature alt text"
        reverse
      />
      <VerticalFeatureRow
        title={t("app.section.fifth.title")}
        description={t("app.section.fifth.text")}
        image="/assets/images/undraw_code_review_re_woeb.svg"
        imageAlt="Third feature alt text"
      />
      <VerticalFeatureRow
        title={t("app.section.sixth.title")}
        description={t("app.section.sixth.text")}
        image="/assets/images/undraw_all_the_data_re_hh4w.svg"
        imageAlt="Second feature alt text"
        reverse
      />
      <VerticalFeatureRow
        title={t("app.section.seventh.title")}
        description={t("app.section.seventh.text")}
        image="/assets/images/undraw_visionary_technology_re_jfp7.svg"
        imageAlt="Second feature alt text"
      />
      <VerticalFeatureRow
        title={t("app.section.eighth.title")}
        description={t("app.section.eighth.text")}
        image="/assets/images/undraw_cloud_hosting_7xb1.svg"
        imageAlt="Second feature alt text"
        reverse
      />
    </Section>
  );
};

export { VerticalFeatures };
