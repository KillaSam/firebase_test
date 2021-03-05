import firebase from 'firebase/app';
import 'firebase/auth';

export default {
    state: {
        user: null  as null | string
    },
    actions:{
        async registerUser({commit}, { email, password, fullName }){
            try{
                const regUs = firebase.auth().createUserWithEmailAndPassword(email, password).then(user =>  {
                    const user1: any = firebase.auth().currentUser
                    const update = user1.updateProfile({ displayName: fullName});
                });                
            }catch(e){

            }
            
        },
        async loginUser(state, { email, password }){
            try{
                return await firebase.auth().signInWithEmailAndPassword(email, password)
            }catch(e){

            }
        }
    }
}