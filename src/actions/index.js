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
} from './types';

export const getNumbers = symbol => {
    return {
        type: GET_NUMBERS,
        payload: symbol
    };
};

export const getSecondNumbers = symbol => {
    return {
        type: GET_SECOND_NUMBERS,
        payload: symbol
    };
};

export const returnState = () => {
    return {
        type: RETURN_STATE
    };
};

export const add = symbol => {
    return {
        type: ADD,
        payload: symbol
    };
};

export const remove = symbol => {
    return {
        type: REMOVE,
        payload: symbol
    };
};

export const multiply = symbol => {
    return {
        type: MULTIPLY,
        payload: symbol
    };
};

export const divide = symbol => {
    return {
        type: DIVIDE,
        payload: symbol
    };
};

export const result = result => {
    return {
        type: RESULT,
        payload: result
    };
};

export const clear = () => {
    return {
        type: CLEAR
    };
};

export const backspaceFirst = () => {
    return {
        type: BACKSPACE_FIRST
    };
};

export const backspaceSecond = () => {
    return {
        type: BACKSPACE_SECOND
    };
};