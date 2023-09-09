import { SE, GB } from 'country-flag-icons/react/3x2'
import { useEffect, useState } from 'react';
import { setLocale, getLocale } from 'react-i18nify';
import { useSearchParams } from 'react-router-dom';
import { Link } from '../components/Util';

const LocaleSelector = () => {
  const [localeSelected, setLocaleSelected] = useState(getLocale());
  const [reloadRequired, setReloadRequired] = useState(false);
  let [searchParams, setSearchParams] = useSearchParams();
  const localeSearchParam = searchParams.get('locale');

  const switchLocale = (newLocale: string, reload = false) => {
    searchParams.set('locale', newLocale);
    if (reload) {
      setSearchParams(searchParams)
      setReloadRequired(true)
    } else {
      setLocaleSelected(newLocale);
      setLocale(newLocale);
      setSearchParams(searchParams)
    }
  };

  useEffect(() => {
    if (localeSearchParam && (localeSearchParam != localeSelected)) {
      console.log('locale search param is', localeSearchParam)
      switchLocale(localeSearchParam, false)
    }
  }, [localeSelected])

  useEffect(() => {
    if (searchParams.get('locale') !== localeSelected && reloadRequired) {
      alert(`${searchParams.toString()}, ${localeSelected}`)
      window.location.reload();
    }
  }, [searchParams, reloadRequired])

  return (
    <Link to="">
      {(localeSelected == 'se') ?
      <GB style={{ height: '20px', marginTop: '4px' }} onClick={ () => switchLocale('en', true) } /> :
      <SE style={{ height: '20px', marginTop: '4px' }} onClick={ () => switchLocale('se', true) } />
      }
    </Link>
  );
};

export default LocaleSelector