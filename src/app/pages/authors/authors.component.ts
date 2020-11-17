import {Component} from '@angular/core';
import {AuthorsService} from '../../api/services/authors.service';
import {AuthorDto} from '../../api/models/author-dto';

@Component({
  selector: 'app-welcome',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent {
  $authors = this.authorsService.authorsGet$Json();

  selectedAuthor: AuthorDto | undefined;
  selectedAuthorId: number | undefined = undefined;

  constructor(private authorsService: AuthorsService) {
  }

  reinitializeAuthors(): void {
    this.selectedAuthorId = undefined;
    this.selectedAuthor = undefined;
    this.$authors = this.authorsService.authorsGet$Json();
  }

  saveSelectedAuthor(): void {
    (this.selectedAuthorId === undefined
        ? this.authorsService.authorsPost({body: this.selectedAuthor})
        : this.authorsService.authorsIdPut({id: this.selectedAuthorId, body: this.selectedAuthor})
    ).toPromise().then(() => this.reinitializeAuthors());
  }

  selectBlankAuthor(): void {
    this.selectedAuthorId = undefined;
    this.selectedAuthor = {};
  }

  selectAuthor(id: number): void {
    this.selectedAuthorId = id;
    this.authorsService.authorsIdGet$Json({id}).toPromise().then(author => this.selectedAuthor = author);
  }

  deleteSelectedAuthor(): void {
    // tslint:disable-next-line:no-non-null-assertion
    this.authorsService.authorsIdDelete({id: this.selectedAuthorId!}).toPromise().finally(() => this.reinitializeAuthors());
  }
}
