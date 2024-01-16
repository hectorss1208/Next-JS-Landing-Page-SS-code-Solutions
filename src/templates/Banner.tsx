import Link from "next/link";
import { useTranslation } from "next-i18next";

import { Button } from "../button/Button";
import { CTABanner } from "../cta/CTABanner";
import { Section } from "../layout/Section";

const Banner = () => {
  const { t } = useTranslation();
  return (
    <Section>
      <CTABanner
        title={t("app.section.getStarted.text")}
        subtitle={t("app.section.getStarted.subTittle")}
        button={
          <Link href="">
            <Button>{t("app.section.getStarted.button")}</Button>
          </Link>
        }
      />
    </Section>
  );
};

export { Banner };
