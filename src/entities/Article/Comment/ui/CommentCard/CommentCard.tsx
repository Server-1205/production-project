import { classNames } from 'shared/lib/classNames/classNames';
import { Comments } from 'entities/Article/Comment/model/types/comments';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
    className?: string;
    comment?: Comments;
    isLoading?: boolean;
}

export const CommentCard = (props: CommentCardProps) => {
    const { className, comment, isLoading } = props;

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentCard, {})}>
                <div className={cls.header}>
                    <Skeleton height={30} width={30} border='50%' />
                    <Skeleton
                        className={cls.username}
                        width={100}
                        height={20}
                    />
                </div>
                <Skeleton width={100} height={20} />
            </div>
        );
    }

    if (!comment) {
        return null;
    }

    return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
            <AppLink
                to={`${RoutePath.profile}${comment.user.id}`}
                className={cls.header}
            >
                {comment.user.avatar && (
                    <Avatar size={30} src={comment.user?.avatar} />
                )}
                <Text title={comment.user.username} />
            </AppLink>
            <Text text={comment.text} />
        </div>
    );
};
