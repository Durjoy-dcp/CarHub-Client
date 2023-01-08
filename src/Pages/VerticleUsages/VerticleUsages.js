import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { HiMagnifyingGlass } from "react-icons/hi2";
import book from "../../assets/book.gif";
import checCar from "../../assets/checkCar.gif";
import pay from "../../assets/pay.gif";
import congratulations from "../../assets/congratulations.gif";
import addproduct from "../../assets/Addproduct5.gif";
import status from "../../assets/status.gif";
const VerticleUsages = () => {
  return (
    <div className="container mx-auto  my-8">
      <h3 className="text-center text-3xl  bebus ">Steps to buy a Car</h3>
      <hr />
      <VerticalTimeline lineColor="#5FBFF8">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Create a Buyer Account
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Add On WishList | Book Now
          </h3>

          <img className="drop-shadow-2xl p-2" src={book} alt="" />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--ho"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Go and check the car on the spot{" "}
          </h3>
          <img className="" src={checCar} alt="" />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Go to dashboard & Complete the payment
          </h3>

          <img src={pay} className="drop-shadow-2xl p-2" alt="" />
        </VerticalTimelineElement>
      </VerticalTimeline>
      <h4 className="text-center">Congratulations! We are done</h4>
      <img className="mx-auto mb-9" src={congratulations} alt="" />

      {/* sell a car  */}

      <h3 className="text-center text-3xl  bebus ">Steps to Sell a Car</h3>
      <hr />
      <VerticalTimeline lineColor="#5FBFF8">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Create a Seller Account
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Add car to sell on dashboard
          </h3>

          <img className="drop-shadow-2xl p-2" src={addproduct} alt="" />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--ho"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Done, Now you can promote or change status
          </h3>
          <img className="" src={status} alt="" />
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default VerticleUsages;
