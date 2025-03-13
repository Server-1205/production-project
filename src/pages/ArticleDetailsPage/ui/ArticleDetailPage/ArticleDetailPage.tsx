import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Article/Comment';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchCommentsByArticleId }
    from 'pages/ArticleDetailsPage/model/services/fetchCommentByArticleId/fetchCommentByArticleId';
import { AddCommentForm } from 'features/AddCommentForm';
import { addCommentFormActions } from 'features/AddCommentForm/model/slice/addComentFormSlice';
import { sendCommentForArticle }
    from 'pages/ArticleDetailsPage/model/services/addCommentForArticle/addCommentForArticle';
import { text } from 'stream/consumers';
import {
    getArticleCommensError,
    getArticleCommentsIsLoading,
} from '../../model/selectors/comments';
import {
    articleDetailsCommentsReducer,
    getAricleComments,
} from '../../model/slice/arcticleCommentsSlice/arcticleDetailsCommentsSlice';
import cls from './ArticleDetailPage.module.scss';

interface ArticleDetailPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsComment: articleDetailsCommentsReducer,
};

const ArticleDetailPage = (props: ArticleDetailPageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();
    const comments = useSelector(getAricleComments.selectAll);
    const articleCommentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const articleCommentsError = useSelector(getArticleCommensError);
    const dispatch = useAppDispatch();

    const onSendComment = useCallback((text: string) => {
        dispatch(sendCommentForArticle(text));
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    if (!id) {
        return (
            <div className={classNames(cls.ArticleDetailPage, {}, [className])}>
                {t('Статья не найдена')}
            </div>
        );
    }
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ArticleDetailPage, {}, [className])}>
                <ArticleDetails id={id} />
                <Text className={cls.commentTitle} title={t('Комментарии')} />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList
                    isLoading={articleCommentsIsLoading}
                    comments={comments}
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailPage);
