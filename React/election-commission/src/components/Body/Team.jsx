import React from "react";
import Teamcard from "./Teamcard";
import "./Team.css";

const Team = () => {
  return (
    <>
      <h2>Meet Our Team</h2>
      <div id="team" style={{ display: "flex" }}>
        <div className="blockQuote">
          <blockquote>
            <div id="mathi">
              <h3> Message From Chief Election Commissioner.</h3>
              <p>
                "On behalf of the Electoral Commission, I am pleased to welcome
                you to the website of the Election Commission of Nepal."
              </p>
            </div>
            <div className="CEOImage">
              <img
                src="https://election.gov.np/admin/public//storage/Commissioner/Dinesh%20Kumar%20Thapaliya%20%20_Web.jpg"
                alt=""
                style={{ height: "80%", width: "500px", marginTop: "70px" }}
              />
            </div>
          </blockquote>
        </div>

        <div className="members">
          <div id="CEC">
            <Teamcard
              name="Dinesh Thapaliya"
              image="https://election.gov.np/admin/public//storage/Commissioner/Dinesh%20Kumar%20Thapaliya%20%20_Web.jpg"
              position="Chief Election Commissioner"
            />
          </div>
          <div id="EC">
            <Teamcard
              name="Ram Prasad Bhandari"
              image=" https://election.gov.np/admin/public//storage/Commissioner/Com_RPB_New_Web.jpg"
              position="Election Commissioner"
            />
            <Teamcard
              name="Janaki Kumari Tuladhar"
              image="https://election.gov.np/admin/public//storage/Commissioner/Janaki%20Tudladhar_web.jpg"
              position="Election Commissioner"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
