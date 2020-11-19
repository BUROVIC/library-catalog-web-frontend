import {Component, OnInit} from '@angular/core';
import {PublicationsService} from '../../api/services/publications.service';
import {PublicationDto} from '../../api/models/publication-dto';
import {AuthorsService} from '../../api/services/authors.service';
import {PublishersService} from '../../api/services/publishers.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent {
  $publications = this.publicationsService.publicationsGet$Json();
  $authors = this.authorsService.authorsGet$Json();
  $publishers = this.publishersService.publishersGet$Json();

  selectedPublication: PublicationDto | undefined;
  selectedPublicationId: number | undefined = undefined;

  constructor(
    private publicationsService: PublicationsService,
    private authorsService: AuthorsService,
    private publishersService: PublishersService) {
  }

  reinitializePublications(): void {
    this.selectedPublicationId = undefined;
    this.selectedPublication = undefined;
    this.$publications = this.publicationsService.publicationsGet$Json();
  }

  saveSelectedPublication(): void {
    (this.selectedPublicationId === undefined
        ? this.publicationsService.publicationsPost({body: this.selectedPublication})
        : this.publicationsService.publicationsIdPut({id: this.selectedPublicationId, body: this.selectedPublication})
    ).toPromise().then(() => this.reinitializePublications());
  }

  selectBlankPublication(): void {
    this.selectedPublicationId = undefined;
    this.selectedPublication = {authorsIds: [], reviewsIds: []};
  }

  selectPublication(id: number): void {
    this.selectedPublicationId = id;
    this.publicationsService.publicationsIdGet$Json({id}).toPromise().then(publication => this.selectedPublication = publication);
  }

  deleteSelectedPublication(): void {
    // tslint:disable-next-line:no-non-null-assertion
    this.publicationsService.publicationsIdDelete({id: this.selectedPublicationId!}).toPromise().finally(() =>
      this.reinitializePublications()
    );
  }
}
