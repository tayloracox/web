import React from 'react'
import Link from 'gatsby-link'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import PageHeading from '../components/PageHeading'
import Meetup from '../components/Meetup'
import orgs from '../orgs.json'

const ConductPage = ({ data }) => (
  <div className="ConductPage">
    <div className="wrap">
      <PageHeading hidden>Code of Conduct</PageHeading>
      <article className="markdown-body entry-content" itemProp="text">
        <h1>Code of Conduct</h1>
        <p>
          The Suncoast Developers Guild is a group that welcomes anyone to come
          and learn, share, network and collaborate our skills and knowledge.
          This Code of Conduct outlines our expectations for all those who
          participate in our community, as well as the consequences for
          unacceptable behavior.
        </p>
        <p>
          We invite all those who participate in our community to help us create
          safe and positive experiences for everyone.
        </p>
        <p>
          <strong>tl;dr: Be excellent to each other.</strong>
        </p>
        <h2>
          <a
            id="user-content-expected-behavior"
            className="anchor"
            aria-hidden="true"
            href="#expected-behavior"
          >
            <svg
              className="octicon octicon-link"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
              />
            </svg>
          </a>Expected Behavior
        </h2>
        <ul>
          <li>
            Participate in an authentic and active way. In doing so, you
            contribute to the health and longevity of this community.
          </li>
          <li>
            Exercise consideration and respect in your speech and actions.
          </li>
          <li>Attempt collaboration before conflict.</li>
          <li>
            Refrain from demeaning, discriminatory, or harassing behavior and
            speech.
          </li>
          <li>
            Be mindful of your surroundings and of your fellow participants.
            Alert community leaders if you notice a dangerous situation, someone
            in distress, or violations of this Code of Conduct, even if they
            seem inconsequential.
          </li>
        </ul>
        <h2>
          <a
            id="user-content-anti-harassment-policy"
            className="anchor"
            aria-hidden="true"
            href="#anti-harassment-policy"
          >
            <svg
              className="octicon octicon-link"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
              />
            </svg>
          </a>Anti-harassment Policy
        </h2>
        <p>
          The Suncoast Developers Guild is dedicated to providing a
          harassment-free experience for all, regardless of gender, gender
          identity and expression, sexual orientation, disability, physical
          appearance, body size, race, age or religion. We do not tolerate
          harassment of anyone in any form. Sexual language and imagery is not
          appropriate for any venue, including talks and chat channels.
          Individuals violating these rules may be sanctioned or expelled from
          the event or communication channel at the discretion of our
          organizers.
        </p>
        <p>
          Harassment includes verbal comments that reinforce social structures
          of domination related to gender, gender identity and expression,
          sexual orientation, disability, physical appearance, body size, race,
          age, religion; sexual images in public spaces; deliberate
          intimidation; stalking; following; harassing photography or recording;
          sustained disruption of talks or other events; inappropriate physical
          contact; and unwelcome sexual attention. Participants asked to stop
          any harassing behavior are expected to comply immediately.
        </p>
        <h2>
          <a
            id="user-content-violence-free-community"
            className="anchor"
            aria-hidden="true"
            href="#violence-free-community"
          >
            <svg
              className="octicon octicon-link"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
              />
            </svg>
          </a>Violence-Free Community
        </h2>
        <p>
          The Suncoast Developers Guild strictly prohibits violence, threats of
          violence, and any other behavior that jeopardizes or harms the safety
          and wellbeing of our community members or their property. This
          includes aggression, intimidation, belligerence, and disruptive
          behavior.
        </p>
        <h2>
          <a
            id="user-content-technology-agnosticism"
            className="anchor"
            aria-hidden="true"
            href="#technology-agnosticism"
          >
            <svg
              className="octicon octicon-link"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
              />
            </svg>
          </a>Technology Agnosticism
        </h2>
        <p>
          Our mission is to bridge communities surrounding a multitude of
          technologies. Whether discussing programming languages, platforms,
          libraries, tools, or editors; our organizers strive to be open minded
          and positive toward all, and we expect that you'll do the same.
        </p>
        <h2>
          <a
            id="user-content-privacy-concerns"
            className="anchor"
            aria-hidden="true"
            href="#privacy-concerns"
          >
            <svg
              className="octicon octicon-link"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
              />
            </svg>
          </a>Privacy Concerns
        </h2>
        <p>
          Your privacy is important to us. While photographs may be taken during
          events and can be shared by members on group's Meetup page, social
          media, etc., no photograph shall be used for commercial purposes
          without verbal and/or written consent of the attendees. If you wish to
          take photographs of the group, announce your intent in advance, so
          members may opt-out. If a group photograph is taken, your
          participation will serve as your agreement to the use of such a
          photograph for promotional purposes. If you are uncomfortable having
          your photograph shared, please let us know. Taking photographs of
          members who do not wish to be photographed falls under the
          anti-harrassment policy.
        </p>
        <p>
          In public communication channels and events, please remember there is
          no reasonable expectation of privacy. Please be aware that any
          information you divulge in these arenas is deemed public information
          and is not protected.
        </p>
        <h2>
          <a
            id="user-content-consequences-of-unacceptable-behavior"
            className="anchor"
            aria-hidden="true"
            href="#consequences-of-unacceptable-behavior"
          >
            <svg
              className="octicon octicon-link"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
              />
            </svg>
          </a>Consequences Of Unacceptable Behavior
        </h2>
        <p>
          Unacceptable behavior from any community member, including sponsors
          and those with decision-making authority, will not be tolerated. If a
          participant engages in policy-violating behavior, organizers may take
          any action they deem appropriate, including warning the offender or
          expulsion from the community without warning (and without refund in
          the case of a paid event).
        </p>
        <h2>
          <a
            id="user-content-if-you-witness-or-are-subject-to-unacceptable-behavior"
            className="anchor"
            aria-hidden="true"
            href="#if-you-witness-or-are-subject-to-unacceptable-behavior"
          >
            <svg
              className="octicon octicon-link"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
              />
            </svg>
          </a>If You Witness or Are Subject to Unacceptable Behavior
        </h2>
        <p>
          If you are being harassed, notice that someone else is being harassed,
          or have any other concerns, please contact an organizer immediately.
        </p>
        <p>
          Organizers will be happy to help participants contact security or
          local law enforcement, provide escorts, or otherwise assist those
          experiencing harassment to feel safe. We value your participation in
          our community.
        </p>
        <h2>
          <a
            id="user-content-contacting-our-community-leaders"
            className="anchor"
            aria-hidden="true"
            href="#contacting-our-community-leaders"
          >
            <svg
              className="octicon octicon-link"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
              />
            </svg>
          </a>Contacting Our Community Leaders
        </h2>
        <table>
          <thead>
            <tr>
              <th>Organization</th>
              <th>Name</th>
              <th>Email</th>
              <th>Twitter</th>
              <th>Slack</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tampa.rb</td>
              <td>Jason L Perry</td>
              <td>
                <OutboundLink href="mailto:jasper@ambethia.com">
                  jason@suncoast.io
                </OutboundLink>
              </td>
              <td>@ambethia</td>
              <td>@ambethia</td>
            </tr>
            <tr>
              <td>Tampa.rb</td>
              <td>Gavin Stark</td>
              <td>
                <OutboundLink href="mailto:gavin@gstark.com">
                  gavin@suncoast.io
                </OutboundLink>
              </td>
              <td>@gavinstark</td>
              <td>@gavinstark</td>
            </tr>
            <tr>
              <td>Suncoast.js</td>
              <td>Julian Duque</td>
              <td>
                <OutboundLink href="mailto:julianduque@gmail.com">
                  julianduque@gmail.com
                </OutboundLink>
              </td>
              <td>@julian_duque</td>
              <td>@julianduque</td>
            </tr>
            <tr>
              <td>Suncoast.js</td>
              <td>Alyssa Amrhein</td>
              <td>
                <OutboundLink href="mailto:heyahharissa@gmail.com">
                  heyahharissa@gmail.com
                </OutboundLink>
              </td>
              <td>@ahharissa</td>
              <td>@ahharissa</td>
            </tr>
            <tr>
              <td>Girl Develop It</td>
              <td>Andrea Cannistra</td>
              <td>
                <OutboundLink href="mailto:andrea@girldevelopit.com">
                  andrea@girldevelopit.com
                </OutboundLink>
              </td>
              <td>@acannist</td>
              <td>@andrea_gditampabay</td>
            </tr>
          </tbody>
        </table>
        <h2>
          <a
            id="user-content-scope"
            className="anchor"
            aria-hidden="true"
            href="#scope"
          >
            <svg
              className="octicon octicon-link"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
              />
            </svg>
          </a>Scope
        </h2>
        <p>
          We expect all community participants (contributors, paid or otherwise;
          sponsors; and other guests) to abide by this Code of Conduct in all
          community venues—online and in-person—as well as in all one-on-one
          communications pertaining to community business.
        </p>
        <p>
          The Suncoast Developers Guild developed this code of conduct using the{' '}
          <OutboundLink
            href="http://geekfeminism.wikia.com/wiki/Conference_anti-harassment/Policy"
            rel="nofollow"
          >
            anti-harassment policy
          </OutboundLink>{' '}
          created by the{' '}
          <OutboundLink href="https://adainitiative.org" rel="nofollow">
            Ada Initiative
          </OutboundLink>{' '}
          (and other volunteers) as well as{' '}
          <OutboundLink href="https://github.com/rubyberlin/code-of-conduct">
            Ruby Berlin's Code of Conduct
          </OutboundLink>{' '}
          and the{' '}
          <OutboundLink href="http://citizencodeofconduct.org" rel="nofollow">
            Citizen Code of Conduct
          </OutboundLink>{' '}
          as starting points.
        </p>
        <p>
          This Code of Conduct is licensed under a{' '}
          <a
            href="http://creativecommons.org/licenses/by-sa/4.0/"
            rel="nofollow"
          >
            Creative Commons Attribution-ShareAlike
          </a>{' '}
          license.
        </p>
      </article>
    </div>
  </div>
)

export default ConductPage
