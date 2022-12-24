import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://www.tourmyindia.com/blog//wp-content/uploads/2018/06/Hotels-in-India.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Mumbai</h1>
          <h2>23 properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://media.easemytrip.com/media/Blog/India/637073414728587272/637073414728587272JmzX5d.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Hyderabad</h1>
          <h2>33 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://i.pinimg.com/564x/7a/d8/62/7ad862cbeaf1b91d38af88220e7733ad.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Delhi</h1>
          <h2>23 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
