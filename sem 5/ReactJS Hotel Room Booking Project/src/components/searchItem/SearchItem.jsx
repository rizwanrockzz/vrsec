import "./searchItem.css";
// import fortune from '../../images/fortune.webp'
import { useNavigate } from "react-router-dom";

const SearchItem = (props) => {
  const navigate = useNavigate();
  const hotelIdToSend = props.hotel.hotelid;
  const hotelNameToSend = props.hotel.name;
  const hotelAddress = props.hotel.address;
  const hotelDesc = props.hotel.desc;
  const hotelPrice = props.hotel.cost;
  console.log("hotel")
  console.log(props)
  console.log(props.hotel)
  // const handleHotelSearch = () => {
  //   // navigate("/hotels", { state: { destination, date, options } });
  //   navigate("/hotels/3");
  // };
  return (
    <div className="searchItem">
      <img
        src={props.hotel.img}
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">{props.hotel.name}</h1>
        <span className="siTaxiOp">{props.hotel.benefits}</span>
        <span className="siSubtitle">
          {props.hotel.tagline}
        </span>
        <span className="siFeatures">
          {props.hotel.features}
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>{props.hotel.grade}</span>
          <button>{props.hotel.rating}</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">{props.hotel.cost}</span>
          <span className="siTaxOp">Per night</span>
          <span className="siTaxOp">Including taxes & fees</span>
          {/* <button className="siCheckButton" onClick={handleHotelSearch}>See availability</button> */}
          {console.log(hotelIdToSend)}
          <button className="siCheckButton" onClick={() => navigate(`/hotels/${props.hotel.hotelid}`, { state: { hotelId: hotelIdToSend, hotelname: hotelNameToSend,hotelAddress:hotelAddress,hotelDesc:hotelDesc,hotelPrice:hotelPrice } })}>See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
