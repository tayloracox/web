import React from 'react'
import Img from 'gatsby-image'
import PageHeading from '../components/PageHeading'
import portraitJason from '../images/people/jason.jpg'
import portraitToni from '../images/people/toni.jpg'
import portraitGavin from '../images/people/gavin.jpg'
import portraitMark from '../images/people/mark.jpg'
import portraitJim from '../images/people/jim-james.jpg'
import portraitAdam from '../images/people/adam-recvlohe.jpg'

const Card = ({ id, name, title, children, imgData }) => (
  <div className="card" id={`${id}`}>
    <Img
      sizes={{ ...imgData, aspectRatio: 1.6 }}
      alt={`A portrait of ${name}`}
    />
    <div className="tab">
      <input id={`tab-${id}`} type="checkbox" name="tabs" />
      <label htmlFor={`tab-${id}`}>
        <h4>{name}</h4>
        <h6>{title}</h6>
        <p className="read-more cta">
          <a>Read More</a>
        </p>
      </label>
      <p className="tab-content">{children}</p>
    </div>
  </div>
)

const TeamPage = props => (
  <div className="TeamPage">
    <div className="wrap">
      <PageHeading>Our Team</PageHeading>

      <div className="bios">
        <Card
          id="jason"
          name="Jason L. Perry"
          title="Chief Executive Officer"
          imgData={props.data.jason.sizes}
        >
          Jason is a native Floridian who started building for the web as a teen
          in the mid-’90s, so he’s been a web developer for about as long as
          anybody. Co-founding the Tampa Ruby Brigade in 2006, Suncoast
          Developers Guild in 2015, Jason takes pride in being a leader in the
          local tech community. After stints in academia, startups, and as a
          consulting freelancer, he’s found great joy in mentoring and sharing
          the knowledge gained along the way. He’s also a game development
          enthusiast, passionate about cryptocurrency, and loves animation.
          Jason is a father, a skeptic, entirely too opinionated, and prefers a
          word count in powers of two. When the world gets heavy you can find
          him either unbuilding LEGO® sets as catharsis or harnessing his power
          animal—the panda.
        </Card>

        <Card
          id="toni"
          name="Toni Warren"
          title="President"
          imgData={props.data.toni.sizes}
        >
          Toni was born in South Carolina, raised in Virginia, and lives in
          Florida, where she learned to love the southeast, sunny weather, and
          Chihuahuas. After receiving her MBA at the University of Tampa, she
          began to share the impact of how technology can help nonprofit
          organizations touch more people. As former Campus Director of The Iron
          Yard, she understands the needs for talented developers. Her passion
          is people and believes technology can help people achieve better
          results, quicker. She is excited about the warm welcome from St.
          Petersburg/Tampa and looks forward to collaborating with the community
          to develop amazing developers who want to make awesome things.
        </Card>

        <Card
          id="gavin"
          name="Gavin Stark"
          title="Chief Technology Officer"
          imgData={props.data.gavin.sizes}
        >
          Gavin is a native of Florida and currently resides in St. Petersburg.
          Fearful he would someday melt under the Florida sun, Gavin took a
          break from the Sunshine State and studied mathematics and computer
          science in Rochester, New York and Management Information Systems in
          Tucson, Arizona. Gavin has been writing software since programs were
          saved on tape and source code was printed in magazines. When not
          programming, he can be found wondering if he will ever finish book
          four of the ‘A Song of Fire and Ice’ series, promoting a future of
          electric cars, convincing his girlfriend that PopTarts™‚ should go in
          the shopping cart since they are healthy because they contain seven
          minerals, and recently trying his hand at improv comedy.
        </Card>

        <Card
          id="mark"
          name="Mark Dewey"
          title="Core Instructor"
          imgData={props.data.mark.sizes}
        >
          Mark has seen success in both the government and commercial arenas of
          software engineering. Graduating from University of Pitt at Johnstown
          with a BS in Computer Science, Mark has fostered a love of being a
          lifelong learner. Through his journey of building a wide variety of
          software, Mark has found a passion for revolutionizing industries and
          a drive to improve people’s lives through new technology and
          paradigms. When not trying to change the world, Mark can be found
          outside enjoying the sun in his hammock, learning a new hobby or
          redesigning a bad user experience. Over the years, Mark has developed
          a passion for mentoring young and ambitious talent, and wants to bring
          developer training to the next level.
        </Card>
      </div>

      <h2>Our Supporters & Volunteers</h2>

      <div className="bios">
        <Card id="jim" name="Jim James" imgData={props.data.jim.sizes}>
          I came to Tampa to help start a FinTech company that helps ordinary
          Americans get fair access to small-dollar loans. We sold it to
          Experian in 2017 and I decided to stay for the hurricanes, termites,
          humidity, and the awesome Ruby community we discovered in the Suncoast
          Developers Guild. Let&lsquo;s build something new together.
        </Card>

        <Card id="liz" name="Liz Tiller" imgData={props.data.liz.sizes}>
          Liz is a recovering academic turned javascript developer thanks to The
          Iron Yard. When TIY shut down and the meetups scattered, she wanted to
          make sure the kids classes weren’t forgotten. She helped rebrand and
          continue the classes as SDG Jr so children could continue to learn to
          code for free. Liz became the first Tampa City Organizer for Tech
          Ladies in order to support and lift up women in all branches of
          technology.
        </Card>

        <Card id="taylor" name="Taylor Cox" imgData={props.data.taylor.sizes}>
          Hailing from Indiana, Taylor is a digital designer turned front-end
          developer by way of The Iron Yard and stealing her parents' ThinkPad
          as a child to write CSS for her Neopets profile page. As a student in
          the final cohort of The Iron Yard in Tampa Bay, Taylor became
          ingrained in the community through the staff's encouragement to
          participate in local hackathons, meetups, and conferences. Now, she
          serves as a co-organizer for SDG Jr. to promote the importance of
          learning technology and problem solving skills to a younger
          generation.
        </Card>

        <Card
          id="katherine"
          name="Katherine Trammell"
          imgData={props.data.katherine.sizes}
        >
          A Florida transplant that originated from Michigan, Katherine is an alumnus from The Iron Yard. After joining the TIY team she soon found her love for supporting the local tech community, especially the Kids Academy classes. She uses her experiences as a developer and former student to help elevate the experience on the SDG campus.
        </Card>
      </div>
    </div>
  </div>
)

export const pageQuery = graphql`
  query TeamPageQuery {
    jason: imageSharp(id: { regex: "/people/jason/" }) {
      sizes(maxWidth: 416) {
        ...GatsbyImageSharpSizes
      }
    }
    toni: imageSharp(id: { regex: "/people/toni/" }) {
      sizes(maxWidth: 416) {
        ...GatsbyImageSharpSizes
      }
    }
    gavin: imageSharp(id: { regex: "/people/gavin/" }) {
      sizes(maxWidth: 416) {
        ...GatsbyImageSharpSizes
      }
    }
    mark: imageSharp(id: { regex: "/people/mark/" }) {
      sizes(maxWidth: 416) {
        ...GatsbyImageSharpSizes
      }
    }
    jim: imageSharp(id: { regex: "/people/jim/" }) {
      sizes(maxWidth: 416) {
        ...GatsbyImageSharpSizes
      }
    }
    liz: imageSharp(id: { regex: "/people/liz/" }) {
      sizes(maxWidth: 416) {
        ...GatsbyImageSharpSizes
      }
    }
    taylor: imageSharp(id: { regex: "/people/taylor/" }) {
      sizes(maxWidth: 416) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`

export default TeamPage
