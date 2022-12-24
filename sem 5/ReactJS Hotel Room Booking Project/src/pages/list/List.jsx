import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);

  const hotel1 = {
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/f7/4e/93/facade.jpg?w=1400&h=-1&s=1",
    name: "Lemon Tree Premier",
    benefits: "Free Wifi ,Free parking",
    tagline: "Ideal destination for both business and leisure travellers",
    features: "33 sq. mtr.",
    grade: "Excellent",
    rating: "8.6",
    cost: "₹5,542",
    hotelid: 1,
    address: "MG Road Opp. Sub Collector Office, Vijayawada 520002 India",
    desc: "Lemon Tree Premier, Vijayawada is an ideal destination for both business and leisure travellers. The hotel features a vibrant atrium lobby, a multi-cuisine coffee shop – Citrus Café, an award winning pan-Asian restaurant – Republic of Noodles and a hip recreation bar – Slounge. The hotel also features expansive banquet spaces and conference facilities, including large conference and banquet halls."
  }
  const hotel2 = {
    img: "https://www.ahstatic.com/photos/a0l1_ho_00_p_1024x768.jpg",
    name: "Novotel Varun",
    benefits: "Free Wifi ,Free parking",
    tagline: "Designed for natural living.",
    features: "From 30 m² / 322 sq ft",
    grade: "Excellent",
    rating: "8.1",
    cost: "₹5,034",
    hotelid: 2,
    address: "MG Road Opp. Sub Collector Office, Vijayawada 520002 India",
    desc: "Lemon Tree Premier, Vijayawada is an ideal destination for both business and leisure travellers. The hotel features a vibrant atrium lobby, a multi-cuisine coffee shop – Citrus Café, an award winning pan-Asian restaurant – Republic of Noodles and a hip recreation bar – Slounge. The hotel also features expansive banquet spaces and conference facilities, including large conference and banquet halls."
  }

  const hotel3 = {
    img: "https://d2whcypojkzby.cloudfront.net/imageRepo/6/0/95/654/218/The_Gateway_Hotel_M_G_Road_Vijayawada_75746_S.jpg",
    name: "The Gateway Hotel",
    benefits: "Free Wifi ,Free parking",
    tagline: "Home away from home.",
    features: "40 sq. mtr.",
    grade: "Very Good",
    rating: "7.9",
    cost: "₹6,832",
    hotelid: 3,
    address: "39-1-63, M G Road, Vijayawada 520010 India",
    desc: "Welcome to The Gateway Hotel MG Road Vijayawada, your Vijayawada “home away from home.” The Gateway Hotel MG Road Vijayawada aims to make your visit as relaxing and enjoyable as possible, which is why so many guests continue to come back year after year."
  }

  const hotel4 = {
    img: "https://lh5.googleusercontent.com/p/AF1QipMt0BCp5hMziTlvwza0l05dtnOnz7MF-c_1CTHp=w253-h168-k-no",
    name: "Hotel Aira",
    benefits: "Free Wifi ,Allergy-free room",
    tagline: "Feel the luxary",
    features: "35 sq. mtr.",
    grade: "Good",
    rating: "7.8",
    cost: "₹2,667",
    hotelid: 4,
    address: "40-13-4, Benz Circle Chandra Mouli Puram, Sriram Nagar, Vijayawada 520010 India",
    desc: "Set in Vijayawada, Hotel Aira provides a restaurant, a 24-hour front desk and room service, along with free WiFi throughout the property. Free private parking is available and the hotel also offers car hire for guests who want to explore the surrounding area. The units come with air conditioning, a flat-screen TV with satellite channels, a fridge, a kettle, a bidet, a hairdryer and a desk. Featuring a private bathroom with a shower and free toiletries, rooms at the hotel also provide guests with a city view."
  }

  const hotel5 = {
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/af/e4/3c/hotel-exterior.jpg?w=1100&h=-1&s=1",
    name: "Quality Hotel DV Manor",
    benefits: "Free Wifi ,Free parking",
    tagline: "Winner of Award Of Excellence in 4 Star Hotel category",
    features: "36 sq. mtr.",
    grade: "Good",
    rating: "7.6",
    cost: "₹5,594",
    hotelid: 5,
    address: "M G Road, Vijayawada 520010 India",
    desc: "Winner of Award Of Excellence in 4 Star Hotel category"
  }

  const hotel6 = {
    img: "https://lh5.googleusercontent.com/p/AF1QipPWFxZQbaRgA2impaH6QT6NnsbmgG7mvJR9AyP_=w253-h188-k-no",
    name: "Hotel Kosala",
    benefits: "Free Wifi ,Free parking, Soundproof rooms",
    tagline: "Making a name for itself within a very short span",
    features: "34 sq. mtr.",
    grade: "Good",
    rating: "7.6",
    cost: "₹1,115",
    hotelid: 6,
    address: "Door No.27 1 58, Sathya Estate, Eluru Road, Beside South India Shopping Mall Governorpet, Vijayawada 520002 India",
    desc: "Hotel Kosala in Governerpet has been enthralling its visitors with top of the line amenities and services ever since its inception. Making a name for itself within a very short span of time, the hotel has been attracting a great deal of business travellers and holiday makers to its doorstep on a regular basis. Designed in a splendid manner, the hotel showcases beautiful interiors under its thriving infrastructure"
  }

  const hotel7 = {
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/ea/d3/c5/hotel-m5.jpg?w=1600&h=-1&s=1",
    name: "Hotel M5",
    benefits: "Free Wifi ,Free parking",
    tagline: "Budget-luxury hotel in the city",
    features: "36 sq. mtr.",
    grade: "Good",
    rating: "7.7",
    cost: "₹2,243",
    hotelid: 7,
    address: "#54 - 14 - 6 Gayatri Nagar Ring Road, Vijayawada 520008 India",
    desc: "Situated in the heart of Vijayawada, Hotel M5 is a leading budget-luxury hotel in the city. Known for its excellent personalized services, the hotel offers comfortable accommodation and dining facilities at a very reasonable cost. The hotel also offers easy access to major shopping malls, multiplex and major corporate destinations, making it an ideal choice for both the leisure and business traveler."
  }

  const hotel8 = {
    img: "https://lh5.googleusercontent.com/p/AF1QipMS1RTMv9WmKpZo-gUbV9JggaGNzAc5n3BHjcBm=w253-h189-k-no",
    name: "Minerva Grand",
    benefits: "Free Wifi ,Soundproof rooms, Desks",
    tagline: "Family-friendly small hotel ",
    features: "35 sq. mtr.",
    grade: "Good",
    rating: "7.4",
    cost: "₹3,370",
    hotelid: 8,
    address: "Mahatma Gandhi Rd Behind Kalanikethan, Vijayawada 520010 India",
    desc: "If you’re looking for a family-friendly small hotel in Vijayawada, look no further than Minerva Grand Vijayawada.Given the close proximity of popular landmarks, such as Paritala Anjaneya Swami Temple (1.8 mi) and Kanaka Durga Temple (1.8 mi), guests of Minerva Grand Vijayawada can easily experience some of Vijayawada's most well known attractions."
  }

  const hotel9 = {
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/99/d2/4f/outside-view-of-hotel.jpg?w=1100&h=-1&s=1",
    name: "Hotel Southern Grand",
    benefits: "Free Wifi , Free parking",
    tagline: "Family-friendly small hotel ",
    features: "36 sq. mtr.",
    grade: "Very Good",
    rating: "7.5",
    cost: "₹2,240",
    hotelid: 9,
    address: "26 - 6 - 8 Patcha Papaiah Street, Vijayawada 520003 India",
    desc: "Strategically located in Gandhi Nagar - the heart of Vijayawada, Southern Grand offers you comfortable stay, genuine hospitality, personalized guest service, quality food and a plethora of other amenities at an affordable price.After elevating the hospitality standards in Delhi, we are ready to set another example in Andhra Pradesh with splendid opening of Southern Grand."
  }

  const hotel10 = {
    img: "https://ak-d.tripcdn.com/images/0225i120008kw2wfl48A7_Z_1100_824_R5_Q70_D.jpg",
    name: "Manorama Hotel",
    benefits: "Free Wifi , Free parking",
    tagline: "A nice option for travellers like you.",
    features: "34 sq. mtr.",
    grade: "Average",
    rating: "7.0",
    cost: "₹3,191",
    hotelid: 10,
    address: "M.G. Road, near Old Bus Stand Governorpet, Vijayawada 520002 India",
    desc: "Finding an ideal hotel in Vijayawada does not have to be difficult. Welcome to Manorama Hotel, a nice option for travellers like you.Nearby landmarks such as Undavalli Caves (1.6 mi) and Sri Nagarala Sri Maha Lakshmi Ammavaru Temple (2.0 mi) make Manorama Hotel a great place to stay when visiting Vijayawada.Free wifi is offered to guests, and rooms at Manorama Hotel offer air conditioning, a minibar, and a refrigerator."
  }

  return (

    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>
                {`${format(
                  date[0].startDate,
                  "MM/dd/yyyy"
                )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}
              </span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.children}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button className="searchbtnbro">Search</button>
          </div>
          <div className="listResult">
            <SearchItem hotel={hotel1} />
            <SearchItem hotel={hotel2} />
            <SearchItem hotel={hotel3} />
            <SearchItem hotel={hotel4} />
            <SearchItem hotel={hotel5} />
            <SearchItem hotel={hotel6} />
            <SearchItem hotel={hotel7} />
            <SearchItem hotel={hotel8} />
            <SearchItem hotel={hotel9} />
            <SearchItem hotel={hotel10} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
