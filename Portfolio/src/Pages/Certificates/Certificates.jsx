import { useState } from "react";
import "./Certificates.css";

const certificates = [
  { id: 1, title: "Certificate 1", imageUrl: "certificate1.jpg" },
  { id: 2, title: "Certificate 2", imageUrl: "certificate2.jpg" },
  { id: 3, title: "Certificate 3", imageUrl: "certificate3.jpg" },
  { id: 4, title: "Certificate 4", imageUrl: "certificate4.jpg" },
  { id: 5, title: "Certificate 5", imageUrl: "certificate5.jpg" },
  { id: 6, title: "Certificate 6", imageUrl: "certificate6.jpg" },
  { id: 7, title: "Certificate 7", imageUrl: "certificate7.jpg" },
  { id: 8, title: "Certificate 8", imageUrl: "certificate8.jpg" },
  { id: 9, title: "Certificate 9", imageUrl: "certificate9.jpg" },
  { id: 9, title: "Certificate 10", imageUrl: "certificate10.jpg" },
];

const Certificates = () => {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (imageUrl) => {
    setModalImage(imageUrl);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div>
      <h1>My Certificates</h1>

      <section className="certificate-gallery">
        {certificates.map((certificate) => (
          <div
            className="certificate"
            key={certificate.id}
            onClick={() => openModal(certificate.imageUrl)}
          >
            <img src={certificate.imageUrl} alt={certificate.title} />
          </div>
        ))}
      </section>

      {modalImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <img src={modalImage} alt="Certificate Full" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificates;
