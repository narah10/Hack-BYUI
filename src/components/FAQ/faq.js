 import Navbar from "../navbar";
 import Header from "../header";
 import Footer from "../footer";
 import React from 'react';
 import "./faq.css"



const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={toggleAccordion}>
        {question}
        <span className={`arrow ${isOpen ? 'open' : ''}`}>&#9660;</span>
      </div>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
};

function FAQ() {
  const faqData = [
    {
      question: "What is a hackathon?",
      answer:
        "A hackathon is a 24-hour competition where groups of students work together to create software prototypes that solve real-world problems. It is a chance for industry, academics, and the community to work together. Unlike hacking into something, the competition participants are asked to put together or hack together, working prototypes quickly while being mentored by industry and academics.",
    },
    {
      question: "What is HACK-BYU-I?",
      answer:
        "HACK-BYU-I is a 24-hour hackathon competition that will take place on October 20th and 21st, 2023, hosted by the BYU-Idaho CSEE/CIT Departments and department societies leadership. The event is free to attend and open to students from other universities in Idaho and Utah.",
    },
    {
      question: "What is the theme of HACK-BYU-I?",
      answer:
        "The theme for HACK-BYU-I 2023 is 'Computing in the Community.' The event is an opportunity for participants to work on software prototypes that solve real-world problems, with the help of industry and academic mentors.",
    },

    {
      question: "What are the outcomes of HACK-BYU-I?",
      answer:
        "HACK-BYU-I aims to provide participants with an opportunity to have fun, learn, network, and be challenged. The event will feature four challenge categories: Learning and Academic, Innovation and Creativity, Media and Communication, and Collaboration and Leadership.",
    },

    {
      question: "How many teams can participate in HACK-BYU-I?",
      answer:
        "There is a limit of 76 teams for HACK-BYU-I, with a team size limitation of 2-4 members. To participate, students must pre-register and submit a proposal detailing who in the community they have contacted, what problem they are solving, and how they plan to do it. The proposal review process will determine if they are selected to participate. This process is intended to help participants anticipate problems that might occur and ensure that they are ready to compete. Due to space, logistics, and building code, we only allow 76 teams, 19 per category.",
    },

    {
      question: "What is the agenda for HACK-BYU-I?",
      answer:
        "The event will begin on Friday, October 20th, with check-in and an opening social at 4:30 PM. Coding will begin at 5:30 PM and continue for 24 hours. Throughout the evening, morning, and afternoon, there will be workshops, activities, interviewing, networking, and mentoring activities. On Saturday, October 21st, all teams must stop coding at 5:30 PM. Teams will then have 30 minutes to prepare a 5-minute presentation and turn it in by 6:00 PM. Dinner will be served at 6:00 PM, followed by judging and an awards ceremony at 7:00 PM. The event will end at 8:00 PM.",
    },

    {
      question: "What else will be included in HACK-BYU-I?",
      answer:
        "In addition to the hacking competition, HACK-BYU-I will feature games and other activities. Sponsors will provide meals, snacks, workshops, and guest speakers. It is a great opportunity for companies to be represented and find top students in the programs.",
    },

    {
      question: "How can participants get involved in HACK-BYU-I?",
      answer:
        "To participate in HACK-BYU-I, students must pre-register and submit a proposal. The event is free to attend, and participants will have the opportunity to compete, learn, network, and be challenged.",
    }
  ];

  return (
    <div>
      <Navbar />
      <Header />
      <div className="faq-accordion">
        <h1>Frequently Asked Questions</h1>
        {faqData.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} style={{fontSize: "1rem"}}/>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default FAQ;


