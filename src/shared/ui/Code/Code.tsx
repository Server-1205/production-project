import { classNames } from 'shared/lib/classNames/classNames';
import { ReactNode } from 'react';
import cls from './Code.module.scss';
import { Button } from '../Button/Button';
import second from 'first'
import { Icon } from '../Icon/Icon';

interface CodeProps {
  className?: string;
  children: ReactNode;
}

export const Code = (props: CodeProps) => {
    const { className, children } = props;

    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button className={cls.copyBtn}>
                <Icon  Svg={}/>
            </Button>
            <code>
                {children}
            </code>
        </pre>
    );
};
