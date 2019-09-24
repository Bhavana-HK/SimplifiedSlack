import { all, fork } from 'redux-saga/effects'
//import metronomeWatcher from './metronomeSaga'

export default function* mySaga() {
    yield all([
        //metronomeWatcher(),
    ])

};