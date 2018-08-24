import * as LinkActions from './../actions/link.actions';
import { Link } from '../interfaces/link';

const INITIAL_STATE: Link[] = [
  {
    name: 'Google',
    url: 'http://google.com'
  }
]

export function reducer(state: Link[] = INITIAL_STATE, action: LinkActions.Actions) {

  switch(action.type) {
    case LinkActions.ADD_LINK:
      return [...state, action.payload]
    default:
      return state
  }

}