import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps {
  className?: string;
  Svg: React.ReactElement;
}

export const Icon: React.FC<IconProps> = ({ className, Svg }) => (
    React.cloneElement(Svg, { className: classNames(cls.Icon, {}, [className]) })
);
