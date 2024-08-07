import Navbar from "../navbar";
import Header from "../header";
import Footer from "../footer";
import React from "react";
import "./faq.css";

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={toggleAccordion}>
        {question}
        <span className={`arrow ${isOpen ? "open" : ""}`}>&#9660;</span>
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
      question: "What is I-Hack?",
      answer:
        "I-Hack is a 24-hour hackathon competition that will take place on October 20th and 21st, 2023, hosted by the BYU-Idaho CSEE/CIT Departments and department societies leadership. The event is free to attend and open to students from other universities in Idaho and Utah.",
    },
    {
      question: "What is the theme of I-Hack?",
      answer:
        "The theme for I-Hack 2023 is 'Computing in the Community.' The event is an opportunity for participants to work on software prototypes that solve real-world problems, with the help of industry and academic mentors.",
    },

    {
      question: "What are the outcomes of I-Hack?",
      answer:
        "I-Hack aims to provide participants with an opportunity to have fun, learn, network, and be challenged. The event will feature four challenge categories: Learning and Academic, Innovation and Creativity, Media and Communication, and Collaboration and Leadership.",
    },

    {
      question: "How many teams can participate in I-Hack?",
      answer:
        "There is a limit of 76 teams for I-Hack, with a team size limitation of 2-4 members. To participate, students must pre-register and submit a proposal detailing who in the community they have contacted, what problem they are solving, and how they plan to do it. The proposal review process will determine if they are selected to participate. This process is intended to help participants anticipate problems that might occur and ensure that they are ready to compete. Due to space, logistics, and building code, we only allow 76 teams, 19 per category.",
    },

    {
      question: "What is the agenda for I-Hack?",
      answer:
        "The event will begin on Friday, October 20th, with check-in and an opening social at 4:30 PM. Coding will begin at 5:30 PM and continue for 24 hours. Throughout the evening, morning, and afternoon, there will be workshops, activities, interviewing, networking, and mentoring activities. On Saturday, October 21st, all teams must stop coding at 5:30 PM. Teams will then have 30 minutes to prepare a 5-minute presentation and turn it in by 6:00 PM. Dinner will be served at 6:00 PM, followed by judging and an awards ceremony at 7:00 PM. The event will end at 8:00 PM.",
    },

    {
      question: "What else will be included in I-Hack?",
      answer:
        "In addition to the hacking competition, I-Hack will feature games and other activities. Sponsors will provide meals, snacks, workshops, and guest speakers. It is a great opportunity for companies to be represented and find top students in the programs.",
    },

    {
      question: "How can participants get involved in I-Hack?",
      answer:
        "To participate in I-Hack, students must pre-register and submit a proposal. The event is free to attend, and participants will have the opportunity to compete, learn, network, and be challenged.",
    },

    {
      question: "Where will this event take place?",
      answer:
        "The hackathon will be held at the Science & Technology Center (STC), 510 S Center St, Rexburg, ID 83460. Parking information will be provided through an informational email received after registration",
    },

    {
      question: "Any additional questions?",
      answer:
        "Contact us through hackbyui-csee-cit@webmailbyui.onmicrosoft.com",
    },
    {
      question: "What is the MLH Code of Conduct",
      answer: (
        <p style={{ fontSize: "16px" }}>
          Be respectful. Harassment and abuse are never tolerated. If you are in
          a situation that makes you uncomfortable at an MLH Member Event, if
          the event itself is creating an unsafe or inappropriate environment,
          or if interacting with a MLH representative or event organizer makes
          you uncomfortable, please report it using the procedures included in
          this document. For more details view the{" "}
          <a
            href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
            className="mlh_coc"
            style={{
              fontWeight: "bold",

              color: "#082437",
            }}
          >
            MLH Code of Conduct
          </a>
        </p>
      ),
    },
  ];

  return (
    <div>
      <Navbar />
      <Header />
      <div className="faq-accordion">
        <h1>Frequently Asked Questions</h1>
        {faqData.map((faq, index) => (
          <FaqItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            style={{ fontSize: "1rem" }}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default FAQ;
