import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import * as LinkActions from '../../actions/link.actions'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  handleSubmit(event, name: string, url: string) {
    event.preventDefault()
    let link = {name: name, url: url}
    this.store.dispatch(new LinkActions.AddLink(link))
  }

}
