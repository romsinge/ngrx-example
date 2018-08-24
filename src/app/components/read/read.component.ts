import { Component, OnInit } from '@angular/core';
import { AppState } from '../../app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Link } from '../../interfaces/link';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  links$: Observable<Link[]>

  ngOnInit() {
    this.links$ = this.store.select('link')
  }

}
