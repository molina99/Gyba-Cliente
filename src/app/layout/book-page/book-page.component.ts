import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book.model';

@Component({
    selector: 'app-book-page',
    templateUrl: './book-page.component.html',
    styleUrls: ['./book-page.component.scss']
})
export class BookPageComponent implements OnInit {
    
    books:Array<Book>
    constructor() {}

    ngOnInit() {
    }
}