import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Swal from 'sweetalert2'

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);


  const location = useLocation();
  console.log("state : " + location.state.hotelId)
  const hotelToShow = location.state.hotelId;
  const hotelNameToShow = location.state.hotelname;
  const hotelAddress = location.state.hotelAddress;
  const hotelDesc = location.state.hotelDesc;
  const hotelPrice = location.state.hotelPrice;
  // console.log("location.state new here")
  // console.log(location.state)
  // console.log(location)
  // useEffect(() => {
  //   console.log(location.pathname)
  // })

  const handleAlert = () => {
    Swal.fire({
      icon: 'success',
      title: 'Hurray!!!!',
      text: `Your Booking for ${hotelNameToShow} is Confirmed`,
      confirmButtonText: 'Yay!!',
      footer:"A conformation mail has been send to your email"
    })
  }


  const photos = [];
  if (hotelToShow >= 1 && hotelToShow <= 5) {
    for (let i = 1; i <= 6; i++) {
      photos.push({
        src: `https://rizwanrockzz.github.io/i/react-final-review/hotel-${hotelToShow}-${i}.jpg`
      })
    }
  }
  else if (hotelToShow >= 6 && hotelToShow <= 10) {
    const newHotelId = hotelToShow - 5;
    for (let i = 1; i <= 6; i++) {
      photos.push({
        src: `https://rizwanrockzz.github.io/i/react-final-review/hotel-${newHotelId}-${i}.jpg`
      })

    }
  }


  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button onClick={handleAlert} className="bookNow">Book Now!</button>
          <h1 className="hotelTitle">{hotelNameToShow}</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>{hotelAddress}</span>
          </div>
          <span className="hotelPriceHighlight">
            Enjoy the great luxary with a buget.
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of City</h1>
              <p className="hotelDesc">
                {hotelDesc}
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Enjoy the great luxary with a buget.located in {hotelAddress}
              </span>
              <h3>
                <b>{hotelPrice}</b> (per night)
              </h3>
              <button onClick={handleAlert}>Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
