'use babel';

/* @flow*/

import { Observable } from 'rxjs';
import { UPDATE_OUTPUT, errorAction } from '../actions';

export default function updateOutput(action$: Observable) {
  return action$.ofType(UPDATE_OUTPUT)
    .map(action => console.log(action))
    .catch(err => Observable.of(errorAction(err)));
}