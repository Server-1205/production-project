import { classNames } from 'shared/lib/classNames/classNames';
import { HTMLAttributes, ReactNode } from 'react';
import cls from './Card.module.scss';

export enum CardTheme {
    NORMAL = 'normal',
    OUTLINED = 'outlined',
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    theme?: CardTheme;
}

export const Card = (props: CardProps) => {
    const {
        className,
        children,
        theme = CardTheme.NORMAL,
        ...oherProps
    } = props;

    return (
        <div
            className={classNames(cls.Card, {}, [className])}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...oherProps}
        >
            {children}
        </div>
    );
};
