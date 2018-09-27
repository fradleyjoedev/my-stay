import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers/index';

export default function configureStore () {
	return createStore(
		rootReducer,
		composeWithDevTools(
			applyMiddleware(
				thunkMiddleware
			)
		)
	)
}