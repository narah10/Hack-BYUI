import React from 'react';
import Agendaleft from './agendaleft';
import rule from './rule.module.css';
import teamimge from '../assets/teamimage.svg';
function Rule() {
  return (
    <div className={rule.container}>
        <Agendaleft
        purpose="Teams"
        body="Students need to register in a team, with a size limitation of 2-4. Programming is done as a team, so no solo programmers. Due to space, logistics, and building code, we are only allowed 40 teams, 10 per category. Your team needs to come with a community sponsor and plan"
        imageurl={teamimge}
        />
        <div className={rule.prizes}>
            <h2>
                Prizes
            </h2>
            <p>
                Each category will have 3 prize categories, 1st – 3rd. Awards will be based on the working product/prototype, customer communication, creative problem-solving, user aesthetics, and presentation.
                Apart from the main hackathon competition, participants can also indulge in fun-filled mini-games that offer exciting prizes. These mini-games provide a break from the intense competition and offer a chance to unwind while still enjoying the thrill of competition and winning prizes.

            </p>
        </div>

    </div>
  )
}

export default Rule