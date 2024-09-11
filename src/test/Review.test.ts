import { describe, it, expect } from 'vitest';
import Reviews from '../data/reviews';

describe('Reviews', () => {
    it('Vraca prosecnu ocenu festivala sa zadatim ID-om', () => {
        
        const reviews = new Reviews();
        reviews.addReview(1, 'Lorem ipsum', 5);
        reviews.addReview(1, 'Lorem ipsum', 4);
        reviews.addReview(1, 'Lorem ipsum', 3);
  
        const average = reviews.averageRating(1);
  
        expect(average).toBe(4);
    });
});
