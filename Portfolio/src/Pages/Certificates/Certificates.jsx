import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
  { id: 10, title: "Certificate 10", imageUrl: "certificate10.jpg" },
];

const Certificates = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="certificates">
      <Slider {...settings}>
        {certificates.map((certificate) => (
          <div key={certificate.id}>
            <img src={certificate.imageUrl} alt={certificate.title} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Certificates;
