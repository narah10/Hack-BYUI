import React from "react";
import agenda from "./agenda.module.css"
function Agenda() {
  return (
    <div className={agenda.container}>
      <h3>Agenda</h3>
      <p>
        We will be updating this schedule as it is not finalized yet. Stay tuned
        for future announcements.
      </p>
      <div class={agenda.bothContainer}>
        <div className={agenda.day1}>
          <div className={agenda.title}>
            {/* Friday */}
            <h4>Day 1</h4>
            <p>Friday, October 19th (MST)</p>
          </div>
          <div className={agenda.schedule}>
            <div class={agenda.split}>
              <p>4:00 PM - 5:00 PM</p>
              <p>Check-in & Open Social @ The Atrium</p>
            </div>
            <div class={agenda.split}>
              <p>5:00 PM - 6:00 PM</p>
              <p>
                Opening Social and Dinner @ The Quad <br />
              </p>
            </div>

            <div class={agenda.split}>
              <p>6:00 PM - 6:55 PM</p>
              <p>Room Assignments </p>
            </div>

            <div class={agenda.split}>
              <p>7:00 PM - 8:00 PM</p>
              <p>Workshop & Game Series 1 </p>
            </div>

            <div class={agenda.split}>
              <p>8:00 PM - 9:00 PM</p>
              <p>Workshop & Game Series 2 </p>
            </div>

            <div class={agenda.split}>
              <p>9:00 PM - 10:00 PM</p>
              <p>Workshop & Game Series 3</p>
            </div>

            <div class={agenda.split}>
              <p>10:00 PM - 1:00 AM</p>
              <p>Overnight Hacking</p>
            </div>

            <div class={agenda.split}>
              <p>01:00 AM - 02:00 AM</p>
              <p>Midnight Snacks</p>
            </div>

            {/* Saturday, Day2 */}
          </div>
        </div>
        <div className={agenda.day2}>
          <div className={agenda.title}>
            <h4>Day 2</h4>
            <p>Saturday, October 20th (MST)</p>
          </div>
          <div className={agenda.schedule}>
            <div class={agenda.split}>
              <p>07:00 AM - 08:00 AM</p>
              <p>Breakfast @ The Quad</p>
            </div>
            <div class={agenda.split}>
              <p>09:00 AM - 10:00 AM</p>
              <p>Workshop and Game Series 4</p>
            </div>
            <div class={agenda.split}>
              <p>10:00 AM - 11:00 AM</p>
              <p>Workshop and Game Series 5</p>
            </div>
            <div class={agenda.split}>
              <p>12:00 PM - 1:00 PM</p>
              <p>Workshop and Game Series 6</p>
            </div>
            <div class={agenda.split}>
              <p>01:00 PM - 2:00 PM</p>
              <p>Lunch</p>
            </div>
            <div class={agenda.split}>
              <p>2:00 PM - 3:00 PM</p>
              <p>Workshop and Game Series 7</p>
            </div>
            <div class={agenda.split}>
              <p>3:00 PM - 4:00 PM</p>
              <p>Workshop and Game Series 8 </p>
            </div>
            <div class={agenda.split}>
              <p>4:00 PM - 5:00 PM</p>
              <p>Workshop and Game Series 9</p>
            </div>
            <div class={agenda.split}>
              <p>5:00 PM - 5:30 PM</p>
              <p>Submissions Deadline</p>
            </div>
            <div class={agenda.split}>
              <p>5:30 PM - 6:30 PM</p>
              <p>Closing Dinner</p>
            </div>

            <div class={agenda.split}>
              <p>6:30 PM - 6:40 PM</p>
              <p>Judging and Presentation</p>
            </div>

            <div class={agenda.split}>
              <p>6:45 PM - 7:40 PM</p>
              <p>Closing Social & Award Ceremony</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Agenda;