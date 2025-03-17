import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import ListIcon from 'shared/assets/icons/list-24-24.svg';
import TiledIcon from 'shared/assets/icons/tiled-24-24.svg';
import { ArticleView } from '../../model/types/article';
import cls from './ArticleViewSeloctor.module.scss';

interface ArticleViewSeloctorProps {
    className?: string;
    view: ArticleView;
    onViewClick: (view: ArticleView) => void;
}

const viweTypes = [
    {
        view: ArticleView.SMALL,
        icon: TiledIcon,
    },
    {
        view: ArticleView.BIG,
        icon: ListIcon,
    },
];

export const ArticleViewSeloctor = (props: ArticleViewSeloctorProps) => {
    const { className, view, onViewClick } = props;

    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <div className={classNames(cls.ArticleViewSeloctor, {}, [className])}>
            {viweTypes.map((viweType) => (
                <Button
                    key={viweType.view}
                    onClick={onClick(viweType.view)}
                    theme={ButtonTheme.CLEAR}
                >
                    <Icon Svg={viweType.icon} />
                </Button>
            ))}
        </div>
    );
};
