﻿import { Action, Reducer } from 'redux';
import { AppThunkAction } from './';

// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export interface RevendedorState {
    isLoading: boolean;
    revendedores: Revendedor[];
}

export interface Revendedor {
    nome: string;
}

// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.

interface RequestRevendedorAction {
    type: 'REQUEST_REVENDEDOR';
}

interface ReceiveRevendedorAction {
    type: 'RECEIVE_REVENDEDOR';
    revendedores: Revendedor[];
}

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
type KnownAction = RequestRevendedorAction | ReceiveRevendedorAction;

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
    requestRevendedors: (): AppThunkAction<KnownAction> => (dispatch, getState) => {
        // Only load data if it's something we don't already have (and are not already loading)
        debugger;
        const appState = getState();
        if (appState && appState.revendedores) {
            fetch(`api/revendedor`)
                .then(response => response.json() as Promise<Revendedor[]>)
                .then(data => {
                    dispatch({ type: 'RECEIVE_REVENDEDOR', revendedores: data });
                });

            dispatch({ type: 'REQUEST_REVENDEDOR' });
        }
    }
};

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

const unloadedState: RevendedorState = { revendedores: [], isLoading: false };

export const reducer: Reducer<RevendedorState> = (state: RevendedorState | undefined, incomingAction: Action): RevendedorState => {
    if (state === undefined) {
        return unloadedState;
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'REQUEST_REVENDEDOR':
            return {
                revendedores: state.revendedores,
                isLoading: true
            };
        case 'RECEIVE_REVENDEDOR':
            // Only accept the incoming data if it matches the most recent request. This ensures we correctly
            // handle out-of-order responses.
            return {
                revendedores: action.revendedores,
                isLoading: false
            };
        default:
            return state;
    }
};
