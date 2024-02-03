import "./sponsors.css";

const Sponsors = () => {
  return (
    <div className="wrap-sponsors" id="sponsors">
      <div>
        <div className="domainHeading">SPONSORS</div>
      </div>
      <div className="titleSponsors">
        <img className="logo aptos" src="assets/aptoslogo.jpg" alt="" />
        <img className="logo actualone" src="assets/actualone1.jpg" alt="" />
        <img className="logo" src="assets/gfg.png" alt="" />
        <img className="logo" src="assets/plutope.jpeg" alt="" />
        {/* <img className="logo polygon" src="assets/polygonlogo.png" alt="" /> */}
        <img className="logo polygon" src="assets/acampusai.png" alt="" />
        {/* <img className="logo polygon" src="assets/campustimes.png" alt="" />
        <img className="logo polygon" src="assets/punekarnews.png" alt="" /> */}
      </div>
    </div>
  );
};

export default Sponsors;
