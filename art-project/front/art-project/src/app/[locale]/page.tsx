import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function HomePage() {
  const t = useTranslations();
  return (
    <div>
      <Link href='/about'>{t('hello')}</Link>
    </div>
  );
}
