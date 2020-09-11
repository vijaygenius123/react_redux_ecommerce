import {combineReducers} from "redux";
import {connectRouter} from "connected-react-router";

// @ts-ignore
export default history => {
    return combineReducers({
        router: connectRouter(history)
    });
}
