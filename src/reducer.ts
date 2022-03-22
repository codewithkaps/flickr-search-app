import {
	GET_DATA_INIT,
	GET_DATA_SUCCESS,
	GET_DATA_FAILURE,
	RESET_DATA,
	INCREMENT_PAGE,
	ADD_NEW_IMAGES,
	RESET_PAGE
} from './actions';

export const reducer = (state: any, action: any)  => {
	const { type, payload } = action;
	switch (type) {
		case GET_DATA_INIT:
			return { ...state, showLoader: true, showError: false };
		case GET_DATA_SUCCESS:
			return { ...state, showLoader: false, showError: false, data: payload };
		case GET_DATA_FAILURE:
			return { ...state, showLoader: false, showError: true};
		case RESET_DATA:
			return { ...state, showLoader: false, showError: false, data: [] };
		case INCREMENT_PAGE:
			return { ...state, page: (state.page + 1) }
		case RESET_PAGE:
			return { ...state, page: 1 }
		case ADD_NEW_IMAGES:
			const allImages = !!Array.isArray(state.data) ? state.data.concat(payload) : payload;
			return { ...state, showLoader: false, showError: false, data: allImages }
		default:
		return state;
	}
}

