import { useContext } from 'react';
import { ImagesContext } from '../ImagesContext';
import Image from 'react-bootstrap/Image';
import { useState } from 'react';
import ImageDetailsModal from '../image-details-modal/ImageDetailsModal';

function ImageThumbnail() {
  const { state } = useContext(ImagesContext);
  const [modalImage, setModalImage] = useState(null);
  const [modalShow, setModalShow] = useState(false);

  const getImgUrl = (image: any, size: string): string => {
    return `https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}_${size}.jpg`;
  }

  const handleImageClick = (image) => {
    setModalImage(getImgUrl(image, 'b'));
    setModalShow(true);
  }

  const displayImages = (state) => {
    const data = state.data;
    if (!!state.showError) {
      return (<></>);
    } else if (!data || !data.length) {
      return (<label>Type something in the search bar above</label>);
    }
    return data.map((image, index) => {
      return (
        <Image key={index} src={getImgUrl(image, 'q')} fluid className="p-2" onClick={() => handleImageClick(image)}></Image>
      );
    });
  }
  return (
    <>
      {displayImages(state)}
      <ImageDetailsModal show={modalShow} onHide={() => setModalShow(false)} image={modalImage} />
    </>
  )
}

export default ImageThumbnail;