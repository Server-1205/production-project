import { ArticleDetailsCommentsShema } from './ArticleDetailsComentShema';
import { ArticleDetailsRecommendationShema } from './ArticleDetailsRecommendationShema';

export interface ArticleDetailsPageShema {
    comments: ArticleDetailsCommentsShema;
    recommendations: ArticleDetailsRecommendationShema;
}
