import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../../redux/Reducer/Language/Language';
import { useTranslation } from 'react-i18next';
import { languageImg } from '../../assets';

function Language() {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.language);
  const { i18n } = useTranslation();
  let lang = localStorage.getItem('lang');

  useEffect(() => {
    const storedLanguage = localStorage.getItem('lang');
    if (storedLanguage) {
      dispatch(setLanguage(storedLanguage));
    }
    i18n.changeLanguage(language);
    document.documentElement.lang = language;
  }, [language, i18n, dispatch]);

  const handleLanguageChange = (e) => {
    const newLanguage = e.target.checked ? 'ta' : 'en';
    dispatch(setLanguage(newLanguage));
    localStorage.setItem('lang', newLanguage);
  };

  return (
    <div>
      <form
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: '10px'
        }}
      >
        <img src={languageImg} className="lang-i" alt="lang-icon" />
        <label className="switch lag_select">
          <input
            type="checkbox"
            checked={language === 'ta'}
            onChange={handleLanguageChange}
            id="check"
            value={language}
            style={{ display: 'none' }}
            className="hidden-checkbox"
          />
          {lang === 'en' ? 'தமிழ்' : 'English'}
        </label>
      </form>
    </div>
  );
}

export default Language;
