import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';

function ImageDetailsModal(props: any) {
  return (
    <Modal
      {...props}
      fullscreen={true}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Image
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        <Image src={props.image} fluid className="p-2"></Image>
      </Modal.Body>
    </Modal>
  )
}

export default ImageDetailsModal;