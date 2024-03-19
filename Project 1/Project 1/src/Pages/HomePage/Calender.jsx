import "./Calender.css";
// import styles from "./Searchbox.module.css";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useState } from "react";
import { DateRange } from "react-date-range";
import { CiMap } from "react-icons/ci";
import { BiCategory } from "react-icons/bi";
import { GoPeople } from "react-icons/go";
import { CiCalendar } from "react-icons/ci";
const Calender = () => {
  const [showCalender, setShowCalender] = useState(false);

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  //calender show or not show handler

  const handleShowCalender = () => {
    setShowCalender((prevstate) => !prevstate);
  };

  return (
    <div>
      <div className={styles.searchbox_wrapper}>
        <label className={styles.left_border}>
          <CiMap />
          <input
            type="text"
            name="destination"
            placeholder="Your destination"
          />
        </label>

        <label>
          <BiCategory />
          <input
            type="text"
            name="travel_category"
            placeholder="Travel category"
          />
        </label>

        <label>
          <GoPeople />
          <input type="number" name="guest" placeholder="How many Guest" />
        </label>

        <button onClick={handleShowCalender} className={styles.calender_btn}>
          <span className={styles.calender_flex}>
            <span className={styles.calender_icon}>
              <CiCalendar />
            </span>{" "}
            When to start
          </span>
        </button>

        <button className={styles.find_now_btn}>Find Now</button>
        {showCalender && (
          <span className={styles.date_calender}>
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setState([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={state}
            />
          </span>
        )}
      </div>
    </div>
  );
};

export default Calender;
