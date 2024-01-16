// components/LanguageSwitcher.jsx
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const changeLanguage = (locale: any) => {
    i18n.changeLanguage(locale);
  };

  return (
    <div>
      <label htmlFor="language-select">{t("app.menu.language")}</label>
      <select
        id="language-select"
        value={i18n.language}
        onChange={(e) => changeLanguage(e.target.value)}
      >
        <option value="en">
          {isClient && (
            <img
              src="https://restcountries.com/v2/alpha/us"
              alt="US Flag"
              style={{ width: "20px", marginRight: "5px" }}
            />
          )}
          English
        </option>
        <option value="es">
          {isClient && (
            <img
              src="https://restcountries.com/v2/alpha/es"
              alt="ES Flag"
              style={{ width: "20px", marginRight: "5px" }}
            />
          )}
          Español
        </option>
        {/* Add more languages as needed */}
      </select>
    </div>
  );
};

export default LanguageSwitcher;
