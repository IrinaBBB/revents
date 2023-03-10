import testReducer from "../../features/sandbox/testReducer";
import {combineReducers} from "redux";
import eventReducer from "../../features/events/eventReducer";

const rootReducer = combineReducers({
    test: testReducer,
    event: eventReducer
});

export default rootReducer;
