import { call, put, takeEvery, takeLatest, all, select } from 'redux-saga/effects'
import { START_STOP, togglePlayButton, HANDEL_BPM_CHANGE, handelRangeSliderInput } from '../Action';
import click1 from '../sounds/click1.wav'
import click2 from '../sounds/click2.wav'

function playClick(beatsPerMeasure, count) {
    let click1Obj = new Audio(click1);
    let click2Obj = new Audio(click2);

    console.log("in play click", count % beatsPerMeasure)
    if (count % beatsPerMeasure === 0) {
        click2Obj.play();
    } else {
        click1Obj.play();
    }
}

function* onStartStop(action) {
    yield put(togglePlayButton())
    let { metronome } = yield select();
    if (metronome.playing) {
        console.log("starts playing ")
        let count = 0;
        metronome.timer = setInterval(
            () => { playClick(metronome.beatsPerMeasure, count); count++ },
            (60 / metronome.bpm) * 1000
        );
    }
    else {
        console.log("stops playing ")
        clearInterval(metronome.timer);
    }
}

function* onBpmChange(action) {
    yield put(handelRangeSliderInput(action.payload))
    let { metronome } = yield select();
    if (metronome.playing) {
        clearInterval(metronome.timer); console.log("stops for resetting timer")
        let count=0;
        metronome.timer = setInterval(
            () => { playClick(metronome.beatsPerMeasure, count); count++ },
            (60 / metronome.bpm) * 1000
        );
    }

}

function* metronomeWatcher() {
    yield takeEvery(START_STOP, onStartStop),
        yield takeEvery(HANDEL_BPM_CHANGE, onBpmChange)
}

export default metronomeWatcher