import * as ChatActions from './actions';
import { INITIAL_APPLICATION_STATE, ApplicationState } from './application-state';
import * as _ from 'lodash';


export function reducer(state = INITIAL_APPLICATION_STATE, action: ChatActions.Actions): ApplicationState {
    switch (action.type) {
        case ChatActions.LOAD_USER_THREADS_ACTION: {
            return handleLoadUserThreadsAction(state, action);
        }

        default: {
            return state;
        }
    }
}

function handleLoadUserThreadsAction(state: ApplicationState, action: ChatActions.LoadUserThreadsAction): ApplicationState {
    const userData = action.payload;
    const newState: ApplicationState = Object.assign({}, state);
    newState.storeData = {
        participants: _.keyBy(action.payload.participants, 'id'),
        messages: _.keyBy(action.payload.messages, 'id'),
        threads: _.keyBy(action.payload.threads, 'id')
    };
    return newState;
}
