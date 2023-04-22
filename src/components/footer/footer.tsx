import React from "react";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import FacebookIcon from "@material-ui/icons/Facebook";
import { Instagram, Twitter } from "@material-ui/icons";

interface ScheduleProps {
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
}

const SocialMediaLinks = () => {
  return (
    <div className="social-media">
      <a href="https://www.facebook.com/your_facebook_page"><FacebookIcon /></a>
      <a href="https://www.twitter.com/your_twitter_page"><Instagram /></a>
      <a href="https://www.instagram.com/your_instagram_page"><Twitter /></a>
    </div>
  );
};

const Schedule = (props: ScheduleProps) => {
  const { monday, tuesday, wednesday, thursday, friday, saturday, sunday } = props;
  return (
    <div className="schedule">
      <table>
        <tr>
          <td>Monday</td>
          <td>{monday}</td>
        </tr>
        <tr>
          <td>Tuesday</td>
          <td>{tuesday}</td>
        </tr>
        <tr>
          <td>Wednesday</td>
          <td>{wednesday}</td>
        </tr>
        <tr>
          <td>Thursday</td>
          <td>{thursday}</td>
        </tr>
        <tr>
          <td>Friday</td>
          <td>{friday}</td>
        </tr>
        <tr>
          <td>Saturday</td>
          <td>{saturday}</td>
        </tr>
        <tr>
          <td>Sunday</td>
          <td>{sunday}</td>
        </tr>
      </table>
    </div>
  );
};

const CoffeeShop = () => {
  return (
    <div className="coffee-shop">
      <SocialMediaLinks />
      <Schedule
        monday="8am-4pm"
        tuesday="8am-4pm"
        wednesday="8am-4pm"
        thursday="8am-4pm"
        friday="8am-4pm"
        saturday="10am-4pm"
        sunday="Closed"
      />
    </div>
  );
};

export default CoffeeShop;