import Swal from 'sweetalert2';

import { app, googleAuthProvider } from '../firebase/firebase-config';
import { types } from "../types/types"
import { notesLogout } from './notes';
import { finishLoading, startLoading } from './ui';

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {

        dispatch(startLoading());

        app.auth().signInWithEmailAndPassword(email, password)
            .then(({user}) => {
                dispatch(finishLoading());
                dispatch(login(user.uid, user.displayName))
            })
            .catch(e => {
                dispatch(finishLoading());
                Swal.fire('Error', e.message, 'error')
                console.log(e);
            })

    }
}

export const startRegisterWithEmailPasswordName = (email, password, name) => {
    return (dispatch) => {

        app.auth().createUserWithEmailAndPassword(email, password)
            .then( async ({user}) => {
                await user.updateProfile({ displayName: name });
                console.log(user);
                dispatch( 
                    login(user.uid, user.displayName)
                )
            })
            .catch( e => {
                console.log(e);
                Swal.fire('Error', e.message, 'error')
            })
    }
}

export const startGoogleLogin = () => {
    return (dispatch) => {
        app.auth().signInWithPopup( googleAuthProvider )
            .then( ({user}) => {
                dispatch( 
                    login(user.uid, user.displayName)
                )
            })
    }
}

export const login = (uid, displayName) =>( {    
    type: types.login,
    payload: {
        uid,
        displayName
    }   
})

export const startLogout = () => {
    return async (dispatch) => {
        await app.auth().signOut();

        dispatch( logout() );
        dispatch(notesLogout());
    }
}

export const logout = () => ({
    type: types.logout
})