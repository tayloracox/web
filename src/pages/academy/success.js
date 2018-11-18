import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import AcademyNavigation from '../../components/AcademyNavigation'
import PageHeading from '../../components/PageHeading'
import Img from 'gatsby-image'

const Card = ({ id, name, title, children, sizes }) => (
  <div className="card" id={`${id}`}>
    <Img
      sizes={sizes}
      alt={`A portrait of ${name}`}
      title={`A portrait of ${name}`}
    />
    <div className="tab">
      <input id={`tab-${id}`} type="checkbox" name="tabs" />
      <label htmlFor={`tab-${id}`}>
        <h4>{name}</h4>
        <h6>{title}</h6>
        <p className="read-more">
          <a>Read More</a>
        </p>
      </label>
      <p className="tab-content">{children}</p>
    </div>
  </div>
)

const SuccessStoriesPage = props => (
  <div className="AcademyPage Success">
    <AcademyNavigation />
    <div className="wrap">
      <PageHeading>Success Stories</PageHeading>
      <div className="bios">
        <Card id="dat" name="Dat Tran" sizes={props.data.dat.sizes}>
          After having worked in corporate America for a couple years as a
          middle-manager, Dat went through a quarter life crisis. If this is how
          he is to spend 8-12 hours of his day, he needed to see what else was
          out there. After listening to the song Motto by Drake, he decided to
          leave his job and enroll with SDG. After 3 fantastic months of
          education, and 2 months of unemployment, he was hired at Operation PAR
          as an application developer. After a successful year there, he
          recently started working at Protect My Car as a Software Engineer II.
        </Card>
        <Card
          id="brandyn"
          name="Brandyn Sullins"
          sizes={props.data.brandyn.sizes}
        >
          After college, Brandyn bounced between legal jobs while entertaining
          the idea of law school. After a large amount of soul searching, he
          decided a change needed to be made and performed a hard pivot; taking
          a leap of faith to attend SDG. Brandyn is a conscientious developer
          that cares about making programming enjoyable for everyone and solving
          challenges in pragmatic ways. In his spare time, he's a swim
          instructor and enjoys writing.
        </Card>
        <Card
          id="julius"
          name="Julius Bzozowski"
          sizes={props.data.julius.sizes}
        >
          While searching for opportunities to expand on his background in
          graphic design & photography, Julius, explored the idea of learning to
          code. It seemed like the perfect complement to his existing technology
          toolbox; an in demand skill; and a challenge that would prove to be
          both formidable and mentally stimulating.
          <br />
          <br />
          After a month of researching information on various bootcamps and
          completing a few coding tutorials online, he interviewed, was
          accepted, quit his full-time job, moved closer to St. Pete, worked
          tirelessly, and became a graduate of Cohort 8, affectionately dubbed
          “The Ocho” by a fellow classmate.
          <br />
          <br />
          Despite the risks and challenges, Julius, now works for a premier, web
          design services company in Tampa. Having accomplished the personal
          goals he set for himself one year ago, he looks forward to the
          continued growth and development of his coding skills and to one day
          be combined with his love of golf.
        </Card>
        <Card id="venel" name="Venel Rene" sizes={props.data.venel.sizes}>
          From youth development to software development...
          <br />
          <br />
          Meet Venel, a Juvenile Supervision Counselor studying human
          development turned Software Developer. Venel spent countless hours
          attempting to figure out ways to maximize his gaming experience to
          level the playing field against the youth he was supervising. While
          doing so, he found himself falling in love with everything he was
          learning about software so much that he decided to switch careers.
          <br />
          <br />
          After graduating and several months of dedicated job hunting, he
          landed his first tech job at a local startup, Net Synergy Virtual
          Solutions, where he was able to gain knowledge, experience, and
          additional skills in data aggregation. In an effort to grow and expand
          his skillset even more, Venel recently took on an exciting new role as
          an Engineer at Salesforce.
        </Card>
        <Card
          id="crystal"
          name="Crystal McGowan"
          sizes={props.data.crystal.sizes}
        >
          After years of being a customer service and marketing guru, Crystal
          found herself to be a textbook example of someone that needed a life
          and career pivot. While she had taken an interest in coding, she made
          every excuse in the book to not invest in it professionally.
          <br />
          <br />
          Thankfully, the SDG team and her stellar support system echoed every
          day: “You can’t afford NOT to invest in yourself, and you’re going to
          be great!” Crystal never looked back. The hours were studious and the
          caffeine ran rampant, but it’s one of the decisions she’s most proud
          of making.
          <br />
          <br />
          After embracing the opportunity to work for a killer start-up company,
          she moved onto Raymond James Financial where she is an Associate
          Interactive Specialist. When she’s not dabbling in a CMS for Financial
          Advisors, you can catch her assisting with SDG Jr's kids coding
          classes and geeking out at development conferences.
        </Card>
        <Card id="taylor" name="Taylor Cox" sizes={props.data.taylor.sizes}>
          Hailing from Indiana, Taylor is a digital designer turned front-end
          developer by way of The Iron Yard and stealing her parents' ThinkPad
          as a child to write CSS for her Neopets profile page. <br />
          <br />
          As a student in the final cohort of The Iron Yard in Tampa Bay, Taylor
          became ingrained in the community through the staff/'s encouragement
          to participate in local hackathons, meetups, and conferences. <br />
          <br />
          Now, she serves as a co-organizer for SDG Jr. to promote the
          importance of learning technology and problem solving skills to a
          younger generation. Taylor is a coordinator and in for the SDG Jr's
          kids coding classes and has spoken at development conferences.
        </Card>
        <Card
          id="kristen"
          name="Kristen Swan-Grashel"
          sizes={props.data.kristen.sizes}
        >
          "When I first thought about going to a code school to change I knew it
          I knew it would be hard, especially with three young children to care
          for. I also knew it would be worth it in the end. The Iron Yard
          experience turned out to be just as hard as I ever imagined, but also
          just as worth it. I accomplished what I set out to do. And really,
          there are few things better in life than that. Achieving a goal you've
          worked hard for."
        </Card>
        <Card
          id="brandyn"
          name="Brandyn Sullins"
          sizes={props.data.brandyn.sizes}
        >
          "This was one of the most intimidating, exhausting, and stressful
          challenges I have ever taken on and I would not change my decision to
          attend for anything. This gave me a home away from home, it became a
          sanctuary where people of similar mind would share ideas and learn
          from each other."
        </Card>
        <Card
          id="valeria"
          name="Valeria Benetti"
          sizes={props.data.valeria.sizes}
        >
          "Of all the choices I have ever made, coming to this has to be one of
          the greatest choices that my brain came up with. Not one day goes by
          since graduating have I been extremely grateful to the school for
          teaching me the valuable skill sets that I now know."
        </Card>
        <Card id="shaun" name="Shaun Hailey" sizes={props.data.shaun.sizes}>
          "I came to into this with zero programming background whatsoever.
          After over a decade in finance, a layoff put me into a position where
          I could explore a new career. This finally allowed me to do what I had
          wanted to do for many years--learn how to code."
        </Card>
        <Card
          id="markl"
          name="Mark Lombardi-Nelson"
          sizes={props.data.markl.sizes}
        >
          "I can't begin to express the gratitude and impact learning to code
          has made on our business, as well as my life. We built Shoot To Thrill
          Media, and I made the conscious decision to dive deep and learn to
          code soon after. This skillset has empowered me to provide for my
          family, impact my community, and grow my business in a way that would
          have not been possible without you. Thank you for empowering me to
          have the confidence and ability to follow my dreams."
        </Card>
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

export const pageQuery = graphql`
  query SuccessPageQuery {
    julius: imageSharp(id: { regex: "/people/julius/" }) {
      sizes(maxWidth: 416) {
        ...GatsbyImageSharpSizes
      }
    }
    kristen: imageSharp(id: { regex: "/people/kristen/" }) {
      sizes(maxWidth: 416) {
        ...GatsbyImageSharpSizes
      }
    }
    brandyn: imageSharp(id: { regex: "/people/brandyn/" }) {
      sizes(maxWidth: 416) {
        ...GatsbyImageSharpSizes
      }
    }
    valeria: imageSharp(id: { regex: "/people/valeria/" }) {
      sizes(maxWidth: 416) {
        ...GatsbyImageSharpSizes
      }
    }
    shaun: imageSharp(id: { regex: "/people/shaun/" }) {
      sizes(maxWidth: 416) {
        ...GatsbyImageSharpSizes
      }
    }
    markl: imageSharp(id: { regex: "/people/mark-/" }) {
      sizes(maxWidth: 416) {
        ...GatsbyImageSharpSizes
      }
    }
    venel: imageSharp(id: { regex: "/people/venel/" }) {
      sizes(maxWidth: 416) {
        ...GatsbyImageSharpSizes
      }
    }
    crystal: imageSharp(id: { regex: "/people/crystal/" }) {
      sizes(maxWidth: 416) {
        ...GatsbyImageSharpSizes
      }
    }
    taylor: imageSharp(id: { regex: "/people/taylor/" }) {
      sizes(maxWidth: 416) {
        ...GatsbyImageSharpSizes
      }
    }
    brandyn: imageSharp(id: { regex: "/people/brandyn/" }) {
      sizes(maxWidth: 416) {
        ...GatsbyImageSharpSizes
      }
    }
    dat: imageSharp(id: { regex: "/people/dat/" }) {
      sizes(maxWidth: 416) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`

export default SuccessStoriesPage
