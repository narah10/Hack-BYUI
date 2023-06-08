import React from 'react'
import Navbar from "../navbar";
import Header from "../header";
import Agendaleft from '../homepage/agendaleft';
import Learnimage from '../assets/computerboy.svg';
import Footer from '../footer';
import Purpose from './purpose';
import categoriess from './categories.module.css'

function categories() {
  return (
    <div>
      <Navbar />
      <Header />
      <Agendaleft
        purpose="Categories"
        body=" The hackathon will feature four challenge categories that focus on different aspects of computing in the community. These categories are Learning and Academic, Innovation and Creativity, Media and Communication, and Collaboration and Leadership. Here are some examples of what can be created in each category:"
        imageurl={Learnimage}
      />

      <div className={categoriess.purposeContainer}>
      <Purpose 
      heading = "Learning and Academic"
      goal="To develop innovative solutions that enhance the quality and accessibility of education and improve the learning experience for students of all ages and backgrounds." 
      purpose="The purpose of this category is to encourage participants to think critically and creatively about the challenges facing the education system."
      />
      <Purpose
      heading= "Innovation and Creativity"
      goal= "To foster the development of innovative and creative solutions that address pressing social and environmental issues and improve the quality of life for individuals and communities."
      purpose="This category aims to inspire participants to think outside the box and tackle challenges in unique and impactful ways. By developing solutions such as carbon footprint reduction apps, assistive devices for people with disabilities, or volunteer matching websites, participants can help to address issues related to health, sustainability, and social equity. Through their work, participants can contribute to building a more resilient and vibrant community and make a positive difference in the lives of people around them."
      />
      <Purpose
      heading = "Media and Communication"
      goal = "To create innovative solutions that enhance communication and connectivity among people, and foster collaboration and understanding across different communities and cultures."
      purpose = "The purpose of this category is to encourage participants to develop solutions that facilitate effective communication and connection in a world that is becoming increasingly interconnected. By creating solutions such as social media platforms for people with similar interests, messaging apps with advanced security features, or voice recognition programs that transcribe phone calls, participants can help to break down barriers to communication and build bridges between individuals and communities. Through their work, participants can contribute to promoting mutual understanding, respect, and collaboration in a globalized world."
      />
      <Purpose
      heading="Collaboration and Leadership"
      goal="To foster the development of solutions that encourage collaboration, teamwork, and leadership among individuals and groups, and promote the development of essential skills for success in the 21st century workplace."
      purpose="The purpose of this category is to encourage participants to think about the importance of collaboration and leadership in a world where teamwork and effective communication are essential for success. By creating solutions such as project management apps, mentorship websites, or leadership skills development platforms, participants can help to equip individuals and teams with the skills they need to succeed in their personal and professional lives. Through their work, participants can contribute to building a more collaborative and inclusive society, where everyone can reach their full potential."
      />
      </div>
      <div className={categoriess.box}>
        <b>Categories Rubric</b>
          <p>
            <ul>
              <li>Working Product/Prototype: Is the solution functional and solving the intended problem? (30 points)</li>
              <li>Customer Communication: How well does the team understand the needs and wants of their target audience? (20 points)</li>
              <li>Creative Problem-Solving: Is the solution innovative and tackling the problem in a unique way? (15 points)</li>
              <li>User Aesthetics: Does the product have an appealing design and user interface? (15 points)</li>
              <li>Presentation/Documentation: How well did the team present their solution and explain their thought process? (20 points)</li>
            </ul>
          </p>
      </div>
      <Footer />


    </div>
  )
}

export default categories
              