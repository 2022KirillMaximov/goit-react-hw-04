import Modal from "react-modal";


const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function ImageModal({ imageUrl, isOpen, onClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Image Modal"
      appElement={document.getElementById("root")}
    >
      <div>
        <img  src={imageUrl} alt="Image" />
      </div>
    </Modal>
  );
}