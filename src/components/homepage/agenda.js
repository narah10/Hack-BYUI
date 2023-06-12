import React from "react";
import agenda from "./agenda.module.css"
function Agenda() {
  return (
    <div className={agenda.container}>
        <h3>Agenda</h3>
        <p>We will be updating this schedule as it is not 
            finalized yet. Stay tuned for future announcements.</p>
        <div class={agenda.bothContainer}>
            <div className={agenda.day1}>
                <div className={agenda.title}>
                    <h4>Day 1</h4>
                    <p>Friday, October 20th (MST)</p>
                </div>
                <div className={agenda.schedule}>
                    <div class={agenda.split}>
                        <p>4:30 PM - 5:30 PM</p>
                        <p>Check-in & Open Social
                        </p>
                    </div>
                    <div class={agenda.split}>
                        <p>5:30 PM - 6:00 PM</p>
                        <p>Hackathon Kickoff and Coding Begins <br/>
                        </p>
                    </div>
                    <div class={agenda.split}>
                        <p>7:00 PM - 8:00 PM</p>
                        <p>Workshop 1 </p>
                    </div>
                    <div class={agenda.split}>
                        <p>8:20 PM - 8:30 PM</p>
                        <p>Mini Game 1 </p>
                    </div>
                    <div class={agenda.split}>
                        <p>9:00 PM - 10:00 PM</p>
                        <p>Workshop 2</p>
                    </div>
                    <div class={agenda.split}>
                        <p>10:00 PM - 6:00 AM</p>
                        <p>Overnight Hacking</p>
                    </div>
                </div>
            </div>
            <div className={agenda.day2}>
                <div className={agenda.title}>
                    <h4>Day 2</h4>
                    <p>Saturday, October 21st (MST)</p>
                </div>
                <div className={agenda.schedule}>
                <div class={agenda.split}>
                    <p>12:00 AM - 12:15 AM</p>
                    <p>Mini Game 2
                    </p>
                </div>
                <div class={agenda.split}>
                    <p>4:00 AM - 4:15 AM</p>
                    <p>Mini Game 3
                    </p>
                </div>
                <div class={agenda.split}>
                    <p>7:00 AM - 8:00 AM</p>
                    <p>Breakfast 
                    </p>
                </div>
                <div class={agenda.split}>
                    <p>9:00 AM - 10:00 AM</p>
                    <p>Workshop 3 </p>
                </div>
                <div class={agenda.split}>
                    <p>12:00 PM - 1:00 PM</p>
                    <p>Lunch</p>
                </div>
                <div class={agenda.split}>
                    <p>5:00 PM - 5:30 AM</p>
                    <p>Reminder of the end of the competition</p>
                </div>
                <div class={agenda.split}>
                    <p>5:30 PM - 6:00 PM</p>
                    <p>End of Competition </p>
                </div>
                <div class={agenda.split}>
                    <p>6:00 PM - 7:00 PM</p>
                    <p>Judging and Dinner</p>
                </div>
                <div class={agenda.split}>
                    <p>7:00 PM - 8:00 PM</p>
                    <p>Award Ceremony</p>
                </div>
                <div class={agenda.split}>
                    <p>8:00 PM - 9:00 PM</p>
                    <p>Event Conclusion</p>
                </div>
            </div>
            </div>
        </div>
    </div>
    
  );
}

export default Agenda;