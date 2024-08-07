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

      <div className={categoriess.container}>
        <Agendaleft
          purpose="Categories"
          body=" The main theme of the Hackathon is Tech and Lifestyles: Bridging the Gap. The hackathon will feature four challenge categories that focus on different aspects of computing in the community. These categories are Integrity and Might, Intelligence and Mind, Social and Heart, as well as Innovation and Strength. Here are some examples of what can be created in each category:"
          imageurl={Learnimage}
        />
        <div className={categoriess.purposeContainer}>
          <Purpose
            heading="Integrity and Might"
            goal="Our goal is to ensure integrity in our business's reputation, culture, and products. We strive to bridge the gap between ethics, quality, production, and advertising to build customer value and loyalty."
            purpose="The purpose of this category is to emphasize that integrity is crucial to a business’s reputation, culture, and products. The effort needed, spanning from ethics to quality, production, and advertising, is fundamental to creating customer value and loyalty, which is a significant challenge that must be overcome."
          />
          <Purpose
            heading="Intelligence and Mind"
            goal="Our goal is to convert data into accurate information and effectively communicate it through various mediums, overcoming noise and misinformation."
            purpose="The purpose of this category is to inspire participants to think creatively and address challenges in innovative and impactful ways. By developing solutions like carbon footprint reduction apps, assistive devices for people with disabilities, or volunteer matching websites, participants can tackle issues related to health, sustainability, and social equity. Through their efforts, participants can contribute to building a more resilient and vibrant community, making a positive difference in the lives of those around them."
          />
          <Purpose
            heading="Social and Heart"
            goal="Our goal is to foster communication, relationships, and service to better our lives, communities, and the world."
            purpose="The purpose of this category is to highlight that as social beings, we thrive on communication, building relationships with family and friends, and serving others (both loved ones and strangers). Our aim is to improve our lives, communities, the world, and the future."
          />
          <Purpose
            heading="Innovation and Strength"
            goal="Our goal is to harness creativity, technology, and resources to construct and innovate extraordinary solutions."
            purpose="The purpose of this category is to emphasize that our creativity and curiosity propel us to take action and engage with innovative ideas, advanced technology, and global resources. This drive enables us to build, improve, and create remarkable solutions."
          />
        </div>
        <div className={categoriess.box}>
          <b>Categories Rubric</b>
          <p>
            <ul>
              <li>
                Working Product/Prototype: Is the solution functional and
                solving the intended problem? (30 points)
              </li>
              <li>
                Customer Communication: How well does the team understand the
                needs and wants of their target audience? (20 points)
              </li>
              <li>
                Creative Problem-Solving: Is the solution innovative and
                tackling the problem in a unique way? (15 points)
              </li>
              <li>
                User Aesthetics: Does the product have an appealing design and
                user interface? (15 points)
              </li>
              <li>
                Presentation/Documentation: How well did the team present their
                solution and explain their thought process? (20 points)
              </li>
            </ul>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default categories
              