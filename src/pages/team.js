import React from 'react'

import portraitJason from '../images/team/jason.png'
import portraitToni from '../images/team/toni.jpg'
import portraitHolly from '../images/team/holly.jpg'
import portraitGavin from '../images/team/gavin.jpg'
import portraitMark from '../images/team/mark.jpg'

const TeamPage = () => (
  <div className="TeamPage">
    <div className="wrap">
      <h2>Our Team</h2>

      <div className="member">
        <h3>Jason L Perry, Chief Executive Officer</h3>
        <div>
          <img
            src={portraitJason}
            alt="A portrait of Jason"
            width="160"
            height="160"
          />
          <p>
            Jason is a native Floridian who started building for the web as a
            teen in the mid-’90s, so he’s been a web developer for about as long
            as anybody. Co-founding the Tampa Ruby Brigade in 2006, Suncoast
            Developers Guild in 2015, Jason takes pride in being a leader in the
            local tech community. After stints in academia, startups, and as a
            consulting freelancer, he’s found great joy in mentoring and sharing
            the knowledge gained along the way. He’s also a game development
            enthusiast, passionate about cryptocurrency, and loves animation.
            Jason is a father, a skeptic, entirely too opinionated, and prefers
            a word count in powers of two. When the world gets heavy you can
            find him either unbuilding LEGO&reg; sets as catharsis or harnessing
            his power animal&mdash;the panda.
          </p>
        </div>
      </div>

      <div className="member">
        <h3>Toni Warren, President</h3>
        <div>
          <img
            src={portraitToni}
            alt="A portrait of Toni"
            width="160"
            height="160"
          />
          <p>
            Toni was born in South Carolina, raised in Virginia, and lives in
            Florida, where she learned to love the southeast, sunny weather, and
            Chihuahuas. After receiving her MBA at the University of Tampa, she
            began to share the impact of how technology can help nonprofit
            organizations touch more people. As former Campus Director of The
            Iron Yard, she understands the needs for talented developers. Her
            passion is people and believes technology can help people achieve
            better results, quicker. She is excited about the warm welcome from
            St. Petersburg/Tampa and looks forward to collaborating with the
            community to develop amazing developers who want to make awesome
            things.
          </p>
        </div>
      </div>

      <div className="member">
        <h3>Holly Valenty, Program Director</h3>
        <div>
          <img
            src={portraitHolly}
            alt="A portrait of Holly"
            width="160"
            height="160"
          />
          <p>
            Holly is born and raised in St. Petersburg, Florida. She is a
            graduate of the University of Florida, where she studied Family,
            Youth, and Community Science and became an avid Gator football fan.
            After completing her degree, Holly worked within Marketing and the
            Tech industry. She found what she loved most was connecting people
            to their passions, and exploring new ways to improve the world
            around us. Holly is passionate about helping students change their
            lives through a new career. When not working with students, Holly
            can be found cuddling her dog, Lola, learning to code, or exploring
            new restaurants.
          </p>
        </div>
      </div>

      <div className="member">
        <h3>Gavin Stark, Chief Technology Officer</h3>
        <div>
          <img
            src={portraitGavin}
            alt="A portrait of Gavin"
            width="160"
            height="160"
          />
          <p>
            Gavin is a native of Florida and currently resides in St.
            Petersburg. Fearful he would someday melt under the Florida sun,
            Gavin took a break from the Sunshine State and studied mathematics
            and computer science in Rochester, New York and Management
            Information Systems in Tucson, Arizona. Gavin has been writing
            software since programs were saved on tape and source code was
            printed in magazines. When not programming, he can be found
            wondering if he will ever finish book four of the ‘A Song of Fire
            and Ice’ series, promoting a future of electric cars, convincing his
            girlfriend that PopTarts™‚ should go in the shopping cart since they
            are healthy because they contain seven minerals, and recently trying
            his hand at improv comedy.
          </p>
        </div>
      </div>

      <div className="member">
        <h3>Mark Dewey, Core Instructor</h3>
        <div>
          <img
            src={portraitMark}
            alt="A portrait of Mark"
            width="160"
            height="160"
          />
          <p>
            Mark has seen success in both the government and commercial arenas
            of software engineering. Graduating from University of Pitt at
            Johnstown with a BS in Computer Science, Mark has fostered a love of
            being a lifelong learner. Through his journey of building a wide
            variety of software, Mark has found a passion for revolutionizing
            industries and a drive to improve people’s lives through new
            technology and paradigms. When not trying to change the world, Mark
            can be found outside enjoying the sun in his hammock, learning a new
            hobby or redesigning a bad user experience. Over the years, Mark has
            developed a passion for mentoring young and ambitious talent, and
            wants to bring developer training to the next level.
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default TeamPage
