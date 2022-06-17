import { SE, GB } from 'country-flag-icons/react/3x2'
import { useState } from 'react';
import { setLocale, getLocale } from 'react-i18nify';
import { useSearchParams } from 'react-router-dom';

const LocaleSelector = () => {
  const [localeSelected, setLocaleSelected] = useState(getLocale());
  let [searchParams, setSearchParams] = useSearchParams();
  const switchLocale = (newLocale: string) => {
    setLocaleSelected(newLocale);
    setLocale(newLocale);
    searchParams.set('locale', newLocale);
    setSearchParams(searchParams)
  };
  return (localeSelected == 'se') ? 
    <GB style={{ height: '20px', marginTop: '4px' }} onClick={() => switchLocale('en') }/> :
    <SE style={{ height: '20px', marginTop: '4px' }} onClick={() => switchLocale('se') }/>;
};

export default LocaleSelector