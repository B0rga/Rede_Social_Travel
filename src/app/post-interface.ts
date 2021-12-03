export interface Post{
    author: object,
    id: string,
    publishedAt: string,
    locality: string,
    rote: string,
    business: string,
    title: string,
    content: string,
    images: Array<string>,
    complement: Post,
    evaluation: {
        totalRate: Number,
        evaluationsCount: Number,
        rates: Number
    },
    totalComments: Number,
    totalFiveStars: Number,
    totalFourStars: Number,
    totalThreeStars: Number,
    totalTwoStars: Number,
    totalOneStars: Number
  }