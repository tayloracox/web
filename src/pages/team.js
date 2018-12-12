import React from 'react'
import Img from 'gatsby-image'
import PageHeading from '../components/PageHeading'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import portraitJason from '../images/people/jason.jpg'
import portraitToni from '../images/people/toni.jpg'
import portraitGavin from '../images/people/gavin.jpg'
import portraitMark from '../images/people/mark-dewey.jpg'
import portraitJim from '../images/people/jim-james.jpg'

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

const Advisory = ({ id, name, title, company, link, children, imgData }) => (
  <div className="card" id={`${id}`}>
    <Img
      sizes={{ ...imgData, aspectRatio: 1.6 }}
      alt={`A portrait of ${name}`}
    />
    <div className="tab">
      <input id={`tab-${id}`} type="checkbox" name="tabs" />
      <label htmlFor={`tab-${id}`}>
        <h4>{name}</h4>
        <h6>
          <OutboundLink href={link} target="_blank">
            {company}
          </OutboundLink>
        </h6>
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
      <PageHeading>Our Organization</PageHeading>
      <Tabs>
        <TabList>
          <Tab>Team</Tab>
          <Tab>Volunteers</Tab>
          <Tab>Advisory Board</Tab>
        </TabList>
        <TabPanel>
          <div className="bios">
            <Card
              id="jason"
              name="Jason L. Perry"
              title="Chief Executive Officer"
              imgData={props.data.jason.sizes}
            >
              Jason is a native Floridian who started building for the web as a
              teen in the mid-’90s, so he’s been a web developer for about as
              long as anybody. Co-founding the Tampa Ruby Brigade in 2006,
              Suncoast Developers Guild in 2015, Jason takes pride in being a
              leader in the local tech community. After stints in academia,
              startups, and as a consulting freelancer, he’s found great joy in
              mentoring and sharing the knowledge gained along the way. He’s
              also a game development enthusiast, passionate about
              cryptocurrency, and loves animation. Jason is a father, a skeptic,
              entirely too opinionated, and prefers a word count in powers of
              two. When the world gets heavy you can find him either unbuilding
              LEGO® sets as catharsis or harnessing his power animal—the panda.
            </Card>

            <Card
              id="toni"
              name="Toni Warren"
              title="President"
              imgData={props.data.toni.sizes}
            >
              Toni was born in South Carolina, raised in Virginia, and lives in
              Florida, where she learned to love the southeast, sunny weather,
              and Chihuahuas. After receiving her MBA at the University of
              Tampa, she began to share the impact of how technology can help
              nonprofit organizations touch more people. As former Campus
              Director of The Iron Yard, she understands the needs for talented
              developers. Her passion is people and believes technology can help
              people achieve better results, quicker. She is excited about the
              warm welcome from St. Petersburg/Tampa and looks forward to
              collaborating with the community to develop amazing developers who
              want to make awesome things.
            </Card>

            <Card
              id="gavin"
              name="Gavin Stark"
              title="Chief Technology Officer"
              imgData={props.data.gavin.sizes}
            >
              Gavin is a native of Florida and currently resides in St.
              Petersburg. Fearful he would someday melt under the Florida sun,
              Gavin took a break from the Sunshine State and studied mathematics
              and computer science in Rochester, New York and Management
              Information Systems in Tucson, Arizona. Gavin has been writing
              software since programs were saved on tape and source code was
              printed in magazines. When not programming, he can be found
              wondering if he will ever finish book four of the ‘A Song of Fire
              and Ice’ series, promoting a future of electric cars, convincing
              his girlfriend that PopTarts™‚ should go in the shopping cart
              since they are healthy because they contain seven minerals, and
              recently trying his hand at improv comedy.
            </Card>

            <Card
              id="mark"
              name="Mark Dewey"
              title="Core Instructor"
              imgData={props.data.mark.sizes}
            >
              Mark has seen success in both the government and commercial arenas
              of software engineering. Graduating from University of Pitt at
              Johnstown with a BS in Computer Science, Mark has fostered a love
              of being a lifelong learner. Through his journey of building a
              wide variety of software, Mark has found a passion for
              revolutionizing industries and a drive to improve people’s lives
              through new technology and paradigms. When not trying to change
              the world, Mark can be found outside enjoying the sun in his
              hammock, learning a new hobby or redesigning a bad user
              experience. Over the years, Mark has developed a passion for
              mentoring young and ambitious talent, and wants to bring developer
              training to the next level.
            </Card>
            <Card
              id="katherine"
              name="Katherine Trammell"
              title="Campus Director"
              imgData={props.data.katherine.sizes}
            >
              A Florida transplant that originated from Michigan, Katherine is
              an alumn from The Iron Yard. After joining the TIY team, she soon
              found her love for supporting the local tech community, especially
              the Kids Academy classes. She uses her experiences as a developer
              and former student to help elevate the experience on the SDG
              campus. As Campus Director, Katherine is our community liaison for
              events on campus, our volunteer coordinator, and handles career
              support and student success.
            </Card>

            <Card
              id="denise"
              name="Denise Roane"
              title="Educational Coordination and Funding"
              imgData={props.data.denise.sizes}
            >
              A resident of St. Petersburg, FL and a student currently enrolled
              in the College of Education at St. Petersburg College Denise is a
              simple person passionate about education and is devoted to making
              a better, smarter world we can all live in. Her professional
              passion revolves around education, specifically finding new ways
              to create innovative educational opportunities for all and
              communication stating, “I love to meet, talk, and correspond with
              new people as I believe that communication is the key to
              exchanging ideas and forging partnerships within the educational
              community and beyond.” Personally, she is a hobbyist and loves to
              dabble in anything DIY. She is also known to run a mean campaign
              as DM (Dungeon Master) Extraordinaire and is a total gaming
              fanatic (carpal tunnel permitting) with fave games being: Destiny,
              PUBG, and Rocket League.
            </Card>

            <Card
              id="lauren"
              name="Lauren Mabra"
              title="Community & Employer Outreach"
              imgData={props.data.lauren.sizes}
            >
              Lauren was born in Missouri, moved around quite a bit to different
              states (and even a different country), and for the past 10+ years
              is proud to call St. Pete her home. She will soon be a graduate of
              USF and will have her Bachelor’s degree in Marketing. In and
              outside of work, Lauren has a strong passion for anything
              creative: writing, video editing, drawing, and
              brainstorming/proposing new ideas. St. Petersburg is a fitting
              community for Lauren because she is always striving to change and
              grow for the better. She looks forward to finding new ways to get
              involved with its dynamic businesses, entrepreneurial individuals,
              and ever-growing community.
            </Card>
            <Card
              id="kento"
              name="Kento Kawakami"
              title="Enrollment Specialist "
              imgData={props.data.kento.sizes}
            >
              Born in a small city outside of Tokyo called Kawasaki (not the
              motorcycle brand!) Kento has lived in Japan for 10 years until he
              and his mother made their way to Florida in ’03. Kento’s life
              passions include film photography, road trips, cooking, and
              solving problems. Graduated with a photography studio art degree
              at USF, he found the darkroom to be the place he loves to spend
              the most time in. That being said, he is always enthusiastic about
              being exposed to new things and stepping out of his comfort zone.
              His life motto is simple and concise: leave the world a better
              place for his children and generations to come. Enthralled to be a
              part of the Suncoast Developers Guild team, you will find Kento to
              be the person to talk to about getting your life started as a
              developer and guide students on a career path with the skills you
              will achieve with SDG. If he’s not on campus or anywhere else for
              that matter, you will most likely find him in his apartment
              bathroom in which he converted into a darkroom.
            </Card>
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Our Volunteers</h2>

          <div className="bios">
            <Card id="liz" name="Liz Tiller" imgData={props.data.liz.sizes}>
              Liz is a recovering academic turned javascript developer thanks to
              The Iron Yard. When TIY shut down and the meetups scattered, she
              wanted to make sure the kids classes weren’t forgotten. She helped
              rebrand and continue the classes as SDG Jr so children could
              continue to learn to code for free. Liz became the first Tampa
              City Organizer for Tech Ladies in order to support and lift up
              women in all branches of technology.
            </Card>

            <Card
              id="taylor"
              name="Taylor Cox"
              imgData={props.data.taylor.sizes}
            >
              Hailing from Indiana, Taylor is a digital designer turned
              front-end developer by way of The Iron Yard and stealing her
              parents'ThinkPad as a child to write CSS for her Neopets profile
              page. As a student in the final cohort of The Iron Yard in Tampa
              Bay, Taylor became ingrained in the community through the staff's
              encouragement to participate in local hackathons, meetups, and
              conferences. Now, she serves as a co-organizer for SDG Jr. to
              promote the importance of learning technology and problem solving
              skills to a younger generation.
            </Card>
            <Card
              id="crystal"
              name="Crystal McGowan"
              imgData={props.data.crystal.sizes}
            >
              As a graduate of the final cohort of TIY (shout-out to the Ocho!),
              Crystal is a customer service guru turned Front End Developer.
              When she’s not attending meet-ups and conferences, Crystal can be
              seen spending time with her husband, Nick, and cuddling her rescue
              beagles, Arya and Sansa. While a sense of community can be
              fostered many places and in many ways, SDG proves to be a safe
              haven, not just for coding, but for life in general. Toni, Jason,
              Gavin, and Mark have created a diverse, inclusive and tight-knit
              squad that Crystal can’t help but support and be a part of.
            </Card>
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Our Advisory Board</h2>

          <div className="bios">
            <Advisory
              id="jim"
              name="Jim James"
              company="Experian Plc"
              title="Chief Technology Officer, Clarity"
              link="https://www.clarityservices.com"
              imgData={props.data.jim.sizes}
            >
              I came to Tampa to help start a FinTech company that helps
              ordinary Americans get fair access to small-dollar loans. We sold
              it to Experian in 2017 and I decided to stay for the hurricanes,
              termites, humidity, and the awesome Ruby community we discovered
              in the Suncoast Developers Guild. Let&lsquo;s build something new
              together.
            </Advisory>
            <Advisory
              id="jesse"
              name="Jesse Curry"
              company="Haneke Design"
              title="Director of Development"
              link="https://www.hanekedesign.com/"
              imgData={props.data.jesse.sizes}
            >
              Jesse Curry, Development Director at Haneke Design, entered the
              world of software development through the games industry, working
              on several Nintendo DS and Nintendo Wii games, eventually leading
              his own teams. The experience of developing for the games consoles
              allowed Jesse to make an easy transition to the mobile space. At
              Haneke Design, Jesse works with a team of talented developers to
              provide first class native solutions for the iOS and Android
              platforms while leveraging the latest backend technology to
              provide robust web services. When not creating next-level mobile
              applications for his clients Jesse enjoys bicycling, brewing beer,
              and spending time with his family.
            </Advisory>
            <Advisory
              id="kiran"
              name="Kiran Harrichand"
              company="Raymond James Financial"
              title="Experience Design Manager"
              link="https://www.raymondjames.com/"
              imgData={props.data.kiran.sizes}
            >
              Kiran is a native New Yorker who relocated for a great opportunity
              at Raymond James. He spends most of him time educating people
              about the power of design thinking and the value of proper problem
              framing. He is working hard to remove design from the list of
              naughty words in his industry. He is a foodie at heart so please
              feel free to ask him about authentic restaurants in your area.
            </Advisory>
            <Advisory
              id="stephanie"
              name="Stephanie Bartenope"
              company="Spatial Networks, Inc."
              title="VP, Corporate Development & Strategy"
              link="https://spatialnetworks.com/"
              imgData={props.data.stephanie.sizes}
            >
              A native Texan, Stephanie came to Florida for the beaches &
              diverse culture. After graduating from Florida State University
              with a MS in Business she spent many years in the corporate world
              managing business operations and human resource efforts. Now, as a
              successful leader at a St. Pete geospatial tech company, Stephanie
              spends most of her time ensuring internal business functions are
              aligned with overall corporate strategy. Hiring talented
              developers is one piece of her business strategy and why she is
              thrilled to be part of the Suncoast Developer’s Guild advisory
              board. She is a self-proclaimed foodie who spends most of her free
              time at gourmet restaurants, creating food for her family and
              friends or outside enjoying the sun.
            </Advisory>
            <Advisory
              id="daniel-james"
              name="Daniel James Scott"
              company="Tampa Bay Tech"
              title="Co-Executive Director"
              link="https://tampabay.tech/"
              imgData={props.data.daniel.sizes}
            >
              Daniel James Scott illuminates the magic of his hometown as the
              co-Executive Director of Tampa Bay Tech, empowering Florida’s
              largest and fastest-growing tech hub. He brings the gift of sight
              to thousands each year as the Treasurer of the Lions Eye Institute
              for Transplant & Research, the only combined eye bank and ocular
              research center in the world. And he hopes to develop the next
              generation of software revolutionaries by serving on the Suncoast
              Developer Guild’s advisory board.
            </Advisory>
            <Advisory
              id="john-morrow"
              name="John Morrow"
              company="Morrow Consultants, LLC"
              title="CEO"
              link="https://morrowconsultants.com/"
              imgData={props.data.john.sizes}
            >
              John Morrow has launched and grown a number of technology
              companies. As CEO of Morrow Consultants, he works with clients to
              leverage machine learning technology into their systems and
              products. John is a strong supporter of Tampa Bay’s technology and
              entrepreneurial communities and serves as Entrepreneur in
              Residence at USF Connect - the Tampa Bay Technology Incubator at
              University of South Florida.
            </Advisory>
          </div>
        </TabPanel>
      </Tabs>
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
    mark: imageSharp(id: { regex: "/people/mark-dewey/" }) {
      sizes(maxWidth: 416) {
        ...GatsbyImageSharpSizes
      }
    }
    katherine: imageSharp(id: { regex: "/people/katherinet/" }) {
      sizes(maxWidth: 416) {
        ...GatsbyImageSharpSizes
      }
    }
    denise: imageSharp(id: { regex: "/people/denise/" }) {
      sizes(maxWidth: 416) {
        ...GatsbyImageSharpSizes
      }
    }
    lauren: imageSharp(id: { regex: "/people/lauren/" }) {
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
    crystal: imageSharp(id: { regex: "/people/crystal/" }) {
      sizes(maxWidth: 416) {
        ...GatsbyImageSharpSizes
      }
    }
    jim: imageSharp(id: { regex: "/people/jim/" }) {
      sizes(maxWidth: 416) {
        ...GatsbyImageSharpSizes
      }
    }
    jesse: imageSharp(id: { regex: "/people/jesse/" }) {
      sizes(maxWidth: 416) {
        ...GatsbyImageSharpSizes
      }
    }
    kiran: imageSharp(id: { regex: "/people/kiran/" }) {
      sizes(maxWidth: 416) {
        ...GatsbyImageSharpSizes
      }
    }
    stephanie: imageSharp(id: { regex: "/people/stephanie/" }) {
      sizes(maxWidth: 416) {
        ...GatsbyImageSharpSizes
      }
    }
    daniel: imageSharp(id: { regex: "/people/daniel-/" }) {
      sizes(maxWidth: 416) {
        ...GatsbyImageSharpSizes
      }
    }
    john: imageSharp(id: { regex: "/people/john-/" }) {
      sizes(maxWidth: 416) {
        ...GatsbyImageSharpSizes
      }
    }
    kento: imageSharp(id: { regex: "/people/kento/" }) {
      sizes(maxWidth: 416) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`

export default TeamPage
