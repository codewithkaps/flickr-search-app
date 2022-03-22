import { useContext } from 'react';
import { ImagesContext } from '../ImagesContext';
import { INCREMENT_PAGE } from '../actions';
import ImageThumbnail from '../image-thumbnail/ImageThumbnail';
import Container from 'react-bootstrap/Container';
import Spinner  from 'react-bootstrap/Spinner';
import './Home.css';

function Home() {
  const { state, dispatch } = useContext(ImagesContext);

	const handleScroll = (e) => {
		// Source: https://medium.com/fredwong-it/react-detect-scroll-to-bottom-event-7c18350c4ef6
    const reachedBottomOfPage = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
		if (reachedBottomOfPage) {
			dispatch({ type: INCREMENT_PAGE })
		}
	}

	return (
		<div onScroll={handleScroll} className="content">
      <Container className="mt-8">
        {state.showLoader && <Spinner animation="border" className="spinner"/>}
        {state.showError && <div className="p-2">
          <label>Error loading images. Please try again.</label>
        </div>}
        {<ImageThumbnail></ImageThumbnail>}
      </Container>
		</div>
	)
}

export default Home;