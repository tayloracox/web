import React from 'react'
import Img from 'gatsby-image'

import portraitJason from '../images/people/jason.jpg'
import portraitToni from '../images/people/toni.jpg'
import portraitGavin from '../images/people/gavin.jpg'
import portraitMark from '../images/people/mark.jpg'
import portraitJim from '../images/people/jim-james.jpg'
import portraitAdam from '../images/people/adam-recvlohe.jpg'

const TeamPage = props => (
  <div className="TeamPage">
    <div className="wrap">
      <h2>Our Team</h2>

      <div className="team-bios">
        <div className="card-deck">
          <div className="card">
            <Img
              sizes={{ ...props.data.jason.sizes, aspectRatio: 1.6 }}
              alt="A portrait of Jason"
            />
            <div className="card-body tab">
              <input id="tab-jason" type="checkbox" name="tabs" />
              <label for="tab-jason">
                <h4 className="card-title">Jason L. Perry</h4>
                <h6 className="card-subtitle">Chief Executive Officer</h6>
                <p className="read-more cta">
                  <a>Read More</a>
                </p>
              </label>
              <p className="card-text tab-content">
                Jason is a native Floridian who started building for the web as
                a teen in the mid-’90s, so he’s been a web developer for about
                as long as anybody. Co-founding the Tampa Ruby Brigade in 2006,
                Suncoast Developers Guild in 2015, Jason takes pride in being a
                leader in the local tech community. After stints in academia,
                startups, and as a consulting freelancer, he’s found great joy
                in mentoring and sharing the knowledge gained along the way.
                He’s also a game development enthusiast, passionate about
                cryptocurrency, and loves animation. Jason is a father, a
                skeptic, entirely too opinionated, and prefers a word count in
                powers of two. When the world gets heavy you can find him either
                unbuilding LEGO® sets as catharsis or harnessing his power
                animal—the panda.
              </p>
            </div>
          </div>

          <div className="card">
            <Img
              sizes={{ ...props.data.toni.sizes, aspectRatio: 1.6 }}
              alt="A portrait of Toni"
            />
            <div className="card-body tab">
              <input id="tab-toni" type="checkbox" name="tabs" />
              <label htmlFor="tab-toni">
                <h4 className="card-title">Toni Warren</h4>
                <h6 className="card-subtitle">President</h6>
                <p className="read-more cta">
                  <a>Read More</a>
                </p>
              </label>
              <p className="card-text tab-content">
                Toni was born in South Carolina, raised in Virginia, and lives
                in Florida, where she learned to love the southeast, sunny
                weather, and Chihuahuas. After receiving her MBA at the
                University of Tampa, she began to share the impact of how
                technology can help nonprofit organizations touch more people.
                As former Campus Director of The Iron Yard, she understands the
                needs for talented developers. Her passion is people and
                believes technology can help people achieve better results,
                quicker. She is excited about the warm welcome from St.
                Petersburg/Tampa and looks forward to collaborating with the
                community to develop amazing developers who want to make awesome
                things.
              </p>
            </div>
          </div>
        </div>

        <div className="card-deck">
          <div className="card">
            <Img
              sizes={{ ...props.data.gavin.sizes, aspectRatio: 1.6 }}
              alt="A portrait of Gavin"
            />
            <div className="card-body tab">
              <input id="tab-gavin" type="checkbox" name="tabs" />
              <label htmlFor="tab-gavin">
                <h4 className="card-title">Gavin Stark</h4>
                <h6 className="card-subtitle">Chief Technology Officer</h6>
                <p className="read-more cta">
                  <a>Read More</a>
                </p>
              </label>
              <p className="card-text tab-content">
                Gavin is a native of Florida and currently resides in St.
                Petersburg. Fearful he would someday melt under the Florida sun,
                Gavin took a break from the Sunshine State and studied
                mathematics and computer science in Rochester, New York and
                Management Information Systems in Tucson, Arizona. Gavin has
                been writing software since programs were saved on tape and
                source code was printed in magazines. When not programming, he
                can be found wondering if he will ever finish book four of the
                ‘A Song of Fire and Ice’ series, promoting a future of electric
                cars, convincing his girlfriend that PopTarts™‚ should go in the
                shopping cart since they are healthy because they contain seven
                minerals, and recently trying his hand at improv comedy.
              </p>
            </div>
          </div>

          <div className="card">
            <Img
              sizes={{ ...props.data.mark.sizes, aspectRatio: 1.6 }}
              alt="A portrait of Mark"
            />
            <div className="card-body tab">
              <input id="tab-mark" type="checkbox" name="tabs" />
              <label htmlFor="tab-mark">
                <h4 className="card-title">Mark Dewey</h4>
                <h6 className="card-subtitle">Core Instructor</h6>
                <p className="read-more cta">
                  <a>Read More</a>
                </p>
              </label>
              <p className="card-text tab-content">
                Mark has seen success in both the government and commercial
                arenas of software engineering. Graduating from University of
                Pitt at Johnstown with a BS in Computer Science, Mark has
                fostered a love of being a lifelong learner. Through his journey
                of building a wide variety of software, Mark has found a passion
                for revolutionizing industries and a drive to improve people’s
                lives through new technology and paradigms. When not trying to
                change the world, Mark can be found outside enjoying the sun in
                his hammock, learning a new hobby or redesigning a bad user
                experience. Over the years, Mark has developed a passion for
                mentoring young and ambitious talent, and wants to bring
                developer training to the next level.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bios">
        <div className="card">
          <Img
            sizes={{ ...props.data.jimJames.sizes, aspectRatio: 1.6 }}
            alt="A portrait of Jim"
          />
          <div className="card-body tab">
            <input id="tab-jj" type="checkbox" name="tabs" />
            <label htmlFor="tab-jj">
              <h4 className="card-title">Jim James</h4>
              <p className="read-more cta">
                <a>Read More</a>
              </p>
            </label>
            <p className="card-text tab-content">
              I came to Tampa to help start a FinTech company that helps
              ordinary Americans get fair access to small-dollar loans. We sold
              it to Experian in 2017 and I decided to stay for the hurricanes,
              termites, humidity, and the awesome Ruby community we discovered
              in the Suncoast Developers Guild. Let&lsquo;s build something new
              together.
            </p>
          </div>
        </div>
        <div className="card">
          <Img
            sizes={{ ...props.data.adamRecvlohe.sizes, aspectRatio: 1.6 }}
            alt="A portrait of Adam"
          />
          <div className="card-body tab">
            <input id="tab-adam" type="checkbox" name="tabs" />
            <label htmlFor="tab-adam">
              <h4 className="card-title">Adam Recvlohe</h4>
              <p className="read-more cta">
                <a>Read More</a>
              </p>
            </label>
            <p className="card-text tab-content">
              The main reason I wanted to support the Suncoast Developers Guild
              was because of the sense of community Toni was able to foster
              amongst the entire Tampa Bay tech scene. There were over forty
              plus meetup groups at the previous coding bootcamp location and
              Toni was able to coordinate them all seamlessly. It was important
              to me that this sense of community shared amongst everyone in the
              tech industry continued on, hopefully for many more years to come.
            </p>
          </div>
        </div>
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
    jimJames: imageSharp(id: { regex: "/people/jim-james/" }) {
      sizes(maxWidth: 416) {
        ...GatsbyImageSharpSizes
      }
    }
    adamRecvlohe: imageSharp(id: { regex: "/people/adam-recvlohe/" }) {
      sizes(maxWidth: 416) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`

export default TeamPage
