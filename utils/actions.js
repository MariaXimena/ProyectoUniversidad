import firebaseApp from '../firebase/fire'
import * as firebase from 'firebase'
import 'firebase/firestore'

const db = firebase.firestore(firebaseApp)

export const closeSession = () => {
    return firebase.auth().signOut()
}

export const addDocumentWithoutId = async (collection, data) => {
    const result = { statusResponse: true , error:null}
    try {
        await db.collection(collection).add(data)
        
    } catch (error) {
        result.statusResponse= false
        result.error = error
        
    }
    return result
}