import { applyMiddleware,createStore } from "redux";
import logger from "redux-logger";
import reduxThunk from 'redux-thunk'
import RootReduser from './RootReduser'

const middlewar=[reduxThunk]

if(process.env.NODE_ENV==='development'){
    middlewar.push(logger)
}

const store=createStore(RootReduser,applyMiddleware(...middlewar))

export default store;  