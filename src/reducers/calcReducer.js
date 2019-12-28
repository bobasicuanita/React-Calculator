import {
    GET_NUMBERS,
    GET_SECOND_NUMBERS,
    RETURN_STATE,
    ADD,
    REMOVE,
    MULTIPLY,
    DIVIDE,
    RESULT,
    CLEAR,
    BACKSPACE_FIRST,
    BACKSPACE_SECOND
} from '../actions/types';

const INITIAL_STATE = {
    firstNumber: [],
    secondNumber: [],
    operation: '',
    result: null,
    firstNumberActive: true,
    secondNumberActive: true,
    resultActive: true,
    view: []
};


export default(state = INITIAL_STATE, action) => {
        switch(action.type) {
            case GET_NUMBERS:
                return { ...state, firstNumber: [...state.firstNumber, action.payload], firstNumberActive: true, secondNumberActive: false, resultActive:false, view: [...state.firstNumber, action.payload] };
            case GET_SECOND_NUMBERS:
                return { ...state, secondNumber: [...state.secondNumber, action.payload], firstNumberActive: false, secondNumberActive: true, resultActive:false, view: [...state.secondNumber, action.payload]  };
            case RETURN_STATE:
                return state;
            case ADD:
                return { ...state, operation: action.payload };
            case REMOVE:
                return { ...state, operation: action.payload };
            case MULTIPLY:
                return { ...state, operation: action.payload };
            case DIVIDE:
                return { ...state, operation: action.payload };
            case RESULT:
                return { ...state, result: action.payload, firstNumber: [action.payload.toString()], secondNumber: [], operation: '', view: [action.payload], firstNumberActive: false, secondNumberActive:false };
            case CLEAR:
                return { ...state, firstNumber: [], secondNumber: [], result: null, operation: '', view: []};
            case BACKSPACE_FIRST:
                return { ...state, firstNumber: state.firstNumber.slice(0, state.secondNumber.length -1), view: state.view.slice(0, state.firstNumber.length - 1) };
            case BACKSPACE_SECOND:
                return { ...state, secondNumber: state.secondNumber.slice(0, state.secondNumber.length -1), view: state.view.slice(0, state.secondNumber.length - 1) };
            default:
                return state;
        }
    };