import { classNames } from 'shared/lib/classNames/classNames';
import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { ArticleView } from 'entities/Article/model/types/article';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemSkeletonProps {
  className?: string;
  view?: ArticleView;
}

export const ArticleListItemSkeleton = (props: ArticleListItemSkeletonProps) => {
    const { className, view } = props;

    if (view === ArticleView.BIG) {
        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Card>
                    <div className={cls.header}>
                        <Skeleton width={50} height={50} border="50%" className={cls.avatar} />
                    </div>
                    <Skeleton height={200} className={cls.title} />

                    <div className={cls.footer}>
                        <Skeleton height={200} />
                    </div>

                </Card>
            </div>
        );
    }

    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <div className={classNames(cls.ArticleListItem, {}, [className, cls[view!]])}>
            <Card>
                <Skeleton width={200} height={200} />

                <div className={cls.infoWrapper}>
                    <Skeleton width={130} height={16} />
                </div>
                <Skeleton width={200} height={20} className={cls.title} />
            </Card>
        </div>
    );
};
