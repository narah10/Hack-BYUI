import React from "react";
import agenda from "./agenda.module.css";
import Agendaleft from "./agendaleft";
import Agendaright from "./agendaright";
import Funimage from "../assets/Funimage.svg";
import Learnimage from "../assets/Learnimage.svg";
import Networkimage from "../assets/networkimage.svg";
import Challengimage from "../assets/challengimage.svg";

function Agenda() {
  return (
    <div className={agenda.bodycontainer}>
      <div className={agenda.title}>
        <h2>Why BYU-I Hackathon? </h2>
      </div>
      <Agendaleft
        purpose="1. To have Fun"
        body=" If you're looking to participate in a hackathon, you're in for a fun and creative experience! Programming is an essential component of hackathons, and it can be a lot of fun to work on exciting projects with other participants who share similar interests. You'll get to geek out with others and come up with innovative solutions to real-world problems. So, if you enjoy programming and being creative, why not join in and have some fun at the next hackathon?"
        imageurl={Funimage}
      />
      <Agendaright
        purpose="2. To Learn"
        body="At the hackathon, there will be plenty of opportunities to learn from our guest speakers, workshops, and other participants. It's a great chance to expand your knowledge and learn new skills in a fun and engaging environment. So, come join us and learn from some of the best minds in the industry and from each other!"
        imageurl={Learnimage}
      />
      <Agendaleft
        purpose="3. To Network"
        body="Networking is an essential aspect of hackathons. It's a great opportunity to meet professionals, companies, classmates, and other students who share your interests. You'll get to exchange ideas, collaborate on projects, and even find potential career opportunities. So, come join us and network with a diverse group of people while having fun and learning new things at the hackathon!"
        imageurl={Networkimage}
      />
      <Agendaright
        purpose="4. To Be Challenged"
        body="If you're looking for a challenge, participating in a hackathon is the perfect opportunity! You'll get to work with other like-minded individuals to competitively hack together a prototype that solves a real-world problem. At the end of the event, you'll have the satisfaction of knowing that you're a problem solver and that your hard work and creativity have contributed to a meaningful solution. So, take up the challenge and come join us at the hackathon!"
        imageurl={Challengimage}
      />
    </div>
  );
}

export default Agenda;
