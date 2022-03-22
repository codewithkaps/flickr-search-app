
import ImageSearch from '../image-search/ImageSearch';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header(props: any) {

  return (
    <Navbar expand="lg" variant="dark" bg="dark" fixed="top">
      <Container>
        <Navbar.Brand href="#">Flickr Search</Navbar.Brand>
        <ImageSearch></ImageSearch>
      </Container>
    </Navbar>
  )
}

export default Header;