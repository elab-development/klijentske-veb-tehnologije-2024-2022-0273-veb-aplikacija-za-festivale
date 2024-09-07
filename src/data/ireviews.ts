export interface IReviews {
    addReview(festivalId: number, review: string, rating: number): void;
    averageRating(festivalId: number): number;
}