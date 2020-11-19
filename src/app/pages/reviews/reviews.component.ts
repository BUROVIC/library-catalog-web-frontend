import {Component} from '@angular/core';
import {ReviewsService} from '../../api/services/reviews.service';
import {ReviewDto} from '../../api/models/review-dto';
import {PublicationsService} from '../../api/services/publications.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent {
  $reviews = this.reviewsService.reviewsGet$Json();
  $publications = this.publicationsService.publicationsGet$Json();

  selectedReview: ReviewDto | undefined;
  selectedReviewId: number | undefined = undefined;

  constructor(private reviewsService: ReviewsService, private publicationsService: PublicationsService) {
  }

  reinitializeReviews(): void {
    this.selectedReviewId = undefined;
    this.selectedReview = undefined;
    this.$reviews = this.reviewsService.reviewsGet$Json();
  }

  saveSelectedReview(): void {
    (this.selectedReviewId === undefined
        ? this.reviewsService.reviewsPost({body: this.selectedReview})
        : this.reviewsService.reviewsIdPut({id: this.selectedReviewId, body: this.selectedReview})
    ).toPromise().then(() => this.reinitializeReviews());
  }

  selectBlankReview(): void {
    this.selectedReviewId = undefined;
    this.selectedReview = {};
  }

  selectReview(id: number): void {
    this.selectedReviewId = id;
    this.reviewsService.reviewsIdGet$Json({id}).toPromise().then(review => this.selectedReview = review);
  }

  deleteSelectedReview(): void {
    // tslint:disable-next-line:no-non-null-assertion
    this.reviewsService.reviewsIdDelete({id: this.selectedReviewId!}).toPromise().finally(() => this.reinitializeReviews());
  }
}
