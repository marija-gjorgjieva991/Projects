import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Certificates.css";

const certificates = [
  { id: 1, title: "HTML", imageUrl: "html.jpg" },
  { id: 2, title: "CSS", imageUrl: "css.jpg" },
  { id: 3, title: "SASS", imageUrl: "sass.jpg" },
  { id: 4, title: "BOOTSTRAP", imageUrl: "bootstrap.jpg" },
  { id: 5, title: "GIT", imageUrl: "git.jpg" },
  { id: 6, title: "UX", imageUrl: "ux.jpg" },
  { id: 7, title: "TYPESCRIPT", imageUrl: "typescript.jpg" },
  { id: 7, title: "JAVASCRIPT", imageUrl: "javascript.jpg" },
  { id: 8, title: "ASYNC JS", imageUrl: "asynchronous-javascript.jpg" },
  { id: 9, title: "REACT", imageUrl: "react.jpg" },
  { id: 10, title: "NEXT", imageUrl: "next.jpg" },
  { id: 10, title: "LIVE HACKATHON", imageUrl: "LiveHackathon.jpg" },
  { id: 10, title: "ONLINE HACKATHON", imageUrl: "OnlineHackathon.jpg" },
];

const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      <div className="certificates-grid">
        {certificates.map((certificate) => (
          <div
            key={certificate.id}
            className="certificate-item"
            onClick={() => setSelectedImage(certificate.imageUrl)}
          >
            <img src={certificate.imageUrl} alt={certificate.title} />
            <p>{certificate.title}</p>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <span className="close">&times;</span>
          <img src={selectedImage} className="modal-content" alt="Full-size" />
        </div>
      )}
    </div>
  );
};

export default Certificates;
