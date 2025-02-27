import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ArticleDetailPage.module.scss';

interface ArticleDetailPageProps {
  className?: string;
}

const ArticleDetailPage = (props: ArticleDetailPageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.ArticleDetailPage, {}, [className])}>
            {t('ARTICLE DETAILS PAGE')}
        </div>
    );
};

export default memo(ArticleDetailPage);
