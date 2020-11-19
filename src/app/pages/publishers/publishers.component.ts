import {Component} from '@angular/core';
import {PublishersService} from '../../api/services/publishers.service';
import {PublisherDto} from '../../api/models/publisher-dto';
import {PublicationsService} from '../../api/services/publications.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './publishers.component.html',
  styleUrls: ['./publishers.component.css']
})
export class PublishersComponent {
  $publishers = this.publishersService.publishersGet$Json();
  $publications = this.publicationsService.publicationsGet$Json();

  selectedPublisher: PublisherDto | undefined;
  selectedPublisherId: number | undefined = undefined;

  constructor(private publishersService: PublishersService, private publicationsService: PublicationsService) {
  }

  reinitializePublishers(): void {
    this.selectedPublisherId = undefined;
    this.selectedPublisher = undefined;
    this.$publishers = this.publishersService.publishersGet$Json();
  }

  saveSelectedPublisher(): void {
    (this.selectedPublisherId === undefined
        ? this.publishersService.publishersPost({body: this.selectedPublisher})
        : this.publishersService.publishersIdPut({id: this.selectedPublisherId, body: this.selectedPublisher})
    ).toPromise().then(() => this.reinitializePublishers());
  }

  selectBlankPublisher(): void {
    this.selectedPublisherId = undefined;
    this.selectedPublisher = {publicationsIds: []};
  }

  selectPublisher(id: number): void {
    this.selectedPublisherId = id;
    this.publishersService.publishersIdGet$Json({id}).toPromise().then(publisher => this.selectedPublisher = publisher);
  }

  deleteSelectedPublisher(): void {
    // tslint:disable-next-line:no-non-null-assertion
    this.publishersService.publishersIdDelete({id: this.selectedPublisherId!}).toPromise().finally(() => this.reinitializePublishers());
  }
}
