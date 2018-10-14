import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import PageHeading from '../components/PageHeading'
import logoJunior from '../images/junior.svg'
import SDGJrGrad from '../images/jr/sdgjr-grad.jpg'
import SDGJr1 from '../images/jr/sdgjr1.jpg'
import SDGJr2 from '../images/jr/sdgjr2.jpg'
import SDGJr3 from '../images/jr/sdgjr3.jpg'

const ScratchLink = (
  <OutboundLink href="https://scratch.mit.edu/" target="_blank">
    Scratch
  </OutboundLink>
)

const KidsEmail = (
  <OutboundLink
    href="mailto:kids@suncoast.io?Subject=Host%20a%20Kids%20Class"
    target="_top"
  >
    contact us
  </OutboundLink>
)

const OutsideHost = (
  <OutboundLink href="https://gooee.com/" target="_blank">
    Gooee
  </OutboundLink>
)

const MeetupLink = (
  <OutboundLink href="https://www.meetup.com/suncoast-developers-guild/">
    MeetUp.com
  </OutboundLink>
)

const SignUpForm = (
  <OutboundLink href="https://goo.gl/forms/h3RNx591XCPO4ZMy1">
    our mailing list.
  </OutboundLink>
)

const JuniorPage = () => (
  <div className="JuniorPage">
    <section className="flex-wrapper">
      <img
        className="logo"
        src={logoJunior}
        alt="Suncoast Developers Guild Jr Logo"
      />
      <div className="intro">
        <PageHeading>Suncoast Developers Guild Jr</PageHeading>
        <p>
          Suncoast Developers Guild Jr is a volunteer-run program that provides
          free kids classes that gives an introduction to coding to children and
          young adults. Our goal is for students to have a great time learning
          and playing with new tools and ideas. There are no tests, grades or
          homework.
        </p>
      </div>
    </section>
    <section className="flex-wrapper">
      <img
        className="classImages"
        src={SDGJr1}
        alt="Picture of the students from our October 2018 scratch class."
      />
      <img
        className="classImages"
        src={SDGJr2}
        alt="Picture of the students from our October 2018 scratch class."
      />
      <img
        className="classImages"
        src={SDGJr3}
        alt="Picture of the students from our October 2018 scratch class."
      />
    </section>

    <section className="faq">
      <div>
        <h3>Why do we host free kids classes?</h3>
        <p>
          We believe in investing in the local tech economy for the long-run,
          and that means impacting the next generation. Plus it is just super
          fun!!
        </p>
      </div>
      <div>
        <h3>How often do we host kids classes?</h3>
        <p>
          We host classes at our campus three to four times a year. We will also
          hold classes at other locations for special events such as Hour of
          Code and Tampa Bay Startup Week.
        </p>
      </div>
      <div>
        <h3>What ages can attend?</h3>
        <p>
          Our classes are designed for two age groups, 8-12 and 13-17. We strive
          to make learning fun and teach our students new skills, and these age
          groups allow us to adjust the curriculum so that each attendee can
          complete a small project by the end of the class.
        </p>
      </div>
      <div className="flex-wrapper" />
      <div>
        <h3>What type of classes do you carry?</h3>
        <p>
          We are continously looking for new classes to rotate into our program.
          Here are a few that we have carried in the past.
        </p>
        <div className="class-group">
          <div className="class">
            <h3>Scratch</h3>
            <p>
              {ScratchLink} is a visual program language provided by Lifelong
              Kindergarten Group at the MIT Media Lab. We like to use Scratch to
              break down many barriers that prevent students from learning to
              code, while still teaching the basics and logic behind
              programming.
            </p>
            <p>
              Scratch is a drag and drop method for learning to code so it feels
              more like a game to students and allows them to add characters,
              animations, and even sounds to their projects without needing
              typing skills.
            </p>
          </div>
          <div className="class">
            <h3>HTML & CSS</h3>
            <p>
              HTML and CSS are the building blocks of web development--every
              website has HTML and CSS in it! In this class, we teach the basics
              of web programming and CSS animations, allowing the students
              plenty of time to experiment and personalize their pages.
            </p>
          </div>
          <div className="class">
            <h3>Javascript</h3>
            <p>
              Javascript is a powerful programming language that is used in
              every web browser. We utilize fun activities and animations to
              teach kids about functions, strings, arrays and more. We offer
              both introductory and intermediate javascript classes. Come
              prepared to look for every last quote, period and semi-colon!
            </p>
          </div>
        </div>
      </div>
      <div>
        <h3>What do we need to bring if we attend?</h3>
        <p>
          Students are required to bring their own computer. If you do not have
          a laptop and would like to attend please {KidsEmail}.
        </p>
        <p>
          Both Mac and PCs are welcome, we do recommend that is is fully charged
          or that you bring a charger with you. All software used is free
          online! We also recommend having access to a web browser such as
          Chrome or Firefox prior to class. If you need to download something
          for a class we will let you know before you arrive.
        </p>
      </div>
      <div>
        <h3>Do we need to have prior experience before attending?</h3>
        <p>
          Imagination and a love for fun are the only requirements for our
          classes. Basic typing skills are helpful, but we will go at a slow
          enough pace for students that are not as familiar with typing.
        </p>
        <p>
          Our introductory classes are for beginners with no prerequisites. We
          do recommend attending an intro class before any of our intermediate
          classes for the 13-17 age group.
        </p>
      </div>
      <div>
        <h3>Do I need to be present while my child is in the class?</h3>
        <p>
          We do require a parent or a guardian to remain with the student for
          the entirety of the course for students under the age of 16. Parents
          can learn something new and have a great time with their child as they
          learn to code.
        </p>
      </div>
      <div>
        <h3>How do we sign up to learn about upcoming classes?</h3>
        <p>
          You can find our next class on {MeetupLink}. In the mean time, you can
          join {SignUpForm}
        </p>
      </div>
    </section>

    <section className="flex-wrapper">
      <img
        className="classImages image-large"
        src={SDGJrGrad}
        alt="Picture of the students from our October 2018 scratch class holding certificates."
      />
    </section>
  </div>
)
export default JuniorPage
