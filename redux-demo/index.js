const redux = require('redux')
const reduxLogger = require('redux-logger')

const createStore = redux.createStore //create store
const combineReducers = redux.combineReducers //to combine more than two reducers
const logger = reduxLogger.createLogger() //create logger
const applyMidddleware = redux.applyMiddleware

// actions
const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

// function to return actions or action creators
function buycake() { //action creator - returns action
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

function buyIceCream() {
    return {
        type: BUY_ICECREAM,
        info: 'Second redux action'
    }
}

// initial states
const initialCakeState = {
    numOfCakes: 10
}

const initialIceCreamState = {
    numOfIceCreams: 20
}

// reducer functions // (previousState, action) => newState
const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }

        default: return state
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        }

        default: return state
    }
}

// combineReducers
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

// store
const store = createStore(rootReducer, applyMidddleware(logger)); //holds application state
console.log('initial state', store.getState()); //allow access to state via getState()
const unsubscribe = store.subscribe(() => {}) //registers listeners via subscribe(listener)
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()