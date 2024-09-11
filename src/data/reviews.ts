import { IReviews } from './ireviews';


interface Review {
  id: number;
  festivalId: number;
  review: string;
  rating: number;
}

class Reviews implements IReviews {
  public reviews: Review[] = [];
  public id: number = 0;

  public addReview(festivalId: number, review: string, rating: number) {
    const id: number = this.id;
    const newReview: Review = {
      id,
      festivalId,
      review,
      rating,
    };
    this.reviews.push(newReview);
    console.log(this.reviews);
    this.id = id + 1;
  }

  public averageRating(festivalId: number): number {
    const festivalReviews = this.reviews.filter(review => review.festivalId === festivalId);
  
    if (festivalReviews.length === 0) {
      return 0;
    }

    const totalRating = festivalReviews.reduce((sum, review) => sum + review.rating, 0);
    const average = totalRating / festivalReviews.length;
  
    return average;
  }

}
  
export default Reviews;
  