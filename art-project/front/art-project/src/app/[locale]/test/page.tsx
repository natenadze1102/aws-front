import { useTranslations } from 'next-intl';

import { HelloComponent } from './HelloComponent';

export default function TestPage() {
  const t = useTranslations();

  return <HelloComponent text={t('hello')} />;
}
