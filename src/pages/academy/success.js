import React from 'react'
import AcademyNavigation from '../../components/AcademyNavigation'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const SuccessStoriesPage = () => (
  <div className="AcademyPage Success">
    <AcademyNavigation />
    <div className="wrap">
      <h2>Success Stories</h2>
      <div className="quote-wrap">
        <div className="quote-box-full">
          <p>
            "When I first thought about going to a code school to change
            careers, I knew it would be hard, especially with three young
            children to care for. I also knew it would be worth it in the end.
            The Iron Yard experience turned out to be just as hard as I ever
            imagined, but also just as worth it. I accomplished what I set out
            to do. And really, there are few things better in life than that.
            Achieving a goal you've worked hard for."
          </p>
          <p className="author">-Kristen Swan-Grashel</p>
        </div>

        <div className="quote-box">
          <p>
            "This was one of the most intimidating, exhausting, and stressful
            challenges I have ever taken on and I would not change my decision
            to attend for anything. This gave me a home away from home, it
            became a sanctuary where people of similar mind would share ideas
            and learn from each other."
          </p>
          <p className="author">-Brandyn Sullins</p>
        </div>

        <div className="quote-box">
          <p>
            "Of all the choices I have ever made, coming to this has to be one
            of the greatest choices that my brain came up with. Not one day goes
            by since graduating have I been extremely grateful to the school for
            teaching me the valuable skill sets that I now know."
          </p>
          <p className="author">-Valeria Benetti</p>
        </div>

        <div className="quote-box">
          <p>
            "I came to into this with zero programming background whatsoever.
            After over a decade in finance, a layoff put me into a position
            where I could explore a new career. This finally allowed me to do
            what I had wanted to do for many years--learn how to code."
          </p>
          <p className="author">-Shaun Hailey</p>
        </div>
      </div>
      <p className="cta">
        <OutboundLink
          href="http://gallery-gift-card.caleb.surge.sh/"
          target="_blank"
        >
          Read More of our Success Stories
        </OutboundLink>
      </p>
    </div>
  </div>
)

export default SuccessStoriesPage
