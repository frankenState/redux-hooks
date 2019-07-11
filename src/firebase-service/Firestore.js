import firebase from 'firebase';
import '@firebase/firestore';
import ReduxSagaFirebase from 'redux-saga-firebase';
import config from './config';

class Firestore {
    constructor() {
        if (!firebase.apps.length) {
            firebase.initializeApp(config);
        }

        this.firestore = firebase.firestore();
        this.rsf = new ReduxSagaFirebase(firebase);
    }

    get() {
        return this.firestore;
    }

    getCollection(name){
        return this.firestore.collection(name);
    }

    getRSF() {
        return this.rsf;
    }

    sanitizeSnapshot(snapshot, field) {
        const data = [];

        snapshot.forEach( value => {
            const model = {};

            model.uuid = value.id;
            fields.forEach( field => {
                model[field] = value.data()[field];
            });
            data.push(model);
        });
        return data;
    }
}

export default Firestore;