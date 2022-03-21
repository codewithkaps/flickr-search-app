import { useEffect, useState, useRef } from 'react';
import {
	GET_DATA_INIT,
	GET_DATA_SUCCESS,
	GET_DATA_FAILURE,
	RESET_DATA,
	ADD_NEW_IMAGES,
	RESET_PAGE
} from '../actions';

function usePrevious(value) {
	const ref = useRef();
	useEffect(() => {
		ref.current = value;
	});
	return ref.current;
}

function ImageSearch(props: any) {
  const { state, dispatch } = props;
  const [search, setSearch] = useState('');
  const prevSearch = usePrevious(search);

	useEffect(() => {
		const fetchData = async () => {
			try {
				dispatch({ type: GET_DATA_INIT });
				const response = await fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=6343a66eb46c461c91934e8a7a981056&format=json&nojsoncallback=1&text=${search}&page=${state.page}`);
				const data = await response.json();

				const dispatchEvent = { payload: data.photos.photo };
				dispatchEvent['type'] = prevSearch !== search ? GET_DATA_SUCCESS : ADD_NEW_IMAGES;
        // console.log(dispatchEvent)
        dispatch(dispatchEvent);

			} catch (err) {
				dispatch({ type: GET_DATA_FAILURE });
			}
    }
  
		if (!!search) {
			// console.log(`prevSearch:${prevSearch}, search: ${search}, page: ${state.page}`)
			if (prevSearch !== search) {
				dispatch({ type: RESET_PAGE });
        dispatch({ type: RESET_DATA });
			}
			fetchData();
		} else {
			dispatch({ type: RESET_DATA });
		}
	}, [search, state.page]);

	return (
		<input type="text" value={search} onChange={($e) => setSearch($e.target.value)} className="p-2 w-25" placeholder="Search Image" />
	)
}

export default ImageSearch;