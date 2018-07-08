import React from 'react'
import Img from 'gatsby-image'

import EpisodeList from '../components/EpisodeList/EpisodeList'
import Masthead from '../components/Masthead/Masthead'
import Social from '../components/Social/Social'

import Twitter from '../images/003-twitter.svg'
import Instagram from '../images/002-instagram.svg'
import Facebook from '../images/001-facebook.svg'
import Stitcher from '../images/stitcher.svg'
import Spotify from '../images/spotify.svg'
import iTunes from '../images/itunes.svg'
import GooglePlay from '../images/google-play.svg'
import Logo from '../images/logo.svg'

const IndexPage = ({ data, socials }) => {
  const latestEpisode = data.allRssFeed.edges[0].node.childrenRssFeedItem[0]
  const episodes = data.allRssFeed.edges[0].node.childrenRssFeedItem

  return (
    <div>
      {/* START: Masthead */}
      <Masthead
        title={latestEpisode.title}
        description={latestEpisode.contentSnippet}
        socials={socials}
      />
      {/* END: Masthead */}

      <div className="inner-container">
        {/* START: Past Episodes */}
        <div className="section PastEpisodes" id="episodes">
          <h2 className="SectionTitle">Past Episodes</h2>

          <EpisodeList episodes={episodes} />
        </div>
        {/* END: Past Episodes */}
      </div>

      {/* START: Social */}
      <div className="section Social" id="social">
        <div className="inner-container">
          <h2 className="SectionTitle">Where to find us</h2>
        </div>

        <div className="Social__Belt">
          <Social
            link="https://www.stitcher.com/podcast/winger-studios/love-in-tinder"
            image={Stitcher}
            type="Stitcher"
          />
          <Social
            link="https://open.spotify.com/show/0C6tdOjvuVM75aSDYn0LKC?si=rj7kzY5iRZOnbvykrFDVpw"
            image={Spotify}
            type="Spotify"
          />
          <Social
            link="https://itunes.apple.com/us/podcast/love-in-tinder/id400904245?mt=2"
            image={iTunes}
            type="iTunes"
          />
          <Social
            link="https://play.google.com/music/listen#/ps/Idowf6cgxove3eytpbdp3xg5mvu"
            image={GooglePlay}
            type="GooglePlay"
          />
        </div>
      </div>
      {/* END: Social */}

      {/* START: About Us */}
      <div className="section AboutUs" id="about">
        <div className="inner-container">
          <h2 className="SectionTitle is-white">About Us</h2>

          <div className="Host">
            <div className="Avatar">
              <Img sizes={data.nicProfile.sizes} />
            </div>

            <div className="Host__Information">
              <h3 className="Host__Information__Name">Nic Hill</h3>
              <p className="Host__Information__Description">
                Lorem ipsum dolor amet small batch ugh aesthetic, cronut squid
                beard snackwave listicle air plant. Sustainable pickled
                jianbing, quinoa drinking vinegar copper mug stumptown.
              </p>
            </div>
          </div>

          <div className="Host is-right">
            <div className="Avatar">
              <Img sizes={data.sheaProfile.sizes} />
            </div>

            <div className="Host__Information">
              <h3 className="Host__Information__Name">Shea Nolin</h3>
              <p className="Host__Information__Description">
                Lorem ipsum dolor amet small batch ugh aesthetic, cronut squid
                beard snackwave listicle air plant. Sustainable pickled
                jianbing, quinoa drinking vinegar copper mug stumptown.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* END: About Us */}

      {/* START: Footer */}
      <div className="Footer">
        <div className="outer-container Footer__Container">
          <a href="/">
            <img
              className="Footer__Logo"
              src={Logo}
              alt="Love in Tinder logo"
            />
          </a>

          <div className="Footer__Social">
            <a href={socials.twitter}>
              <img src={Twitter} alt="Share on Twitter" />
            </a>
            <a href={socials.instagram}>
              <img src={Instagram} alt="Share on Instagram" />
            </a>
            <a href={socials.facebook}>
              <img src={Facebook} alt="Share on Facebook" />
            </a>
          </div>
        </div>
      </div>
      {/* END: Footer */}
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
    allRssFeed {
      edges {
        node {
          childrenRssFeedItem {
            contentSnippet
            enclosure {
              url
            }
            guid
            title
          }
        }
      }
    }
    nicProfile: imageSharp(id: { regex: "/nic.png/" }) {
      sizes(maxWidth: 144, maxHeight: 144, quality: 90) {
        ...GatsbyImageSharpSizes_noBase64
      }
    }
    sheaProfile: imageSharp(id: { regex: "/shea.png/" }) {
      sizes(maxWidth: 144, maxHeight: 144, quality: 90) {
        ...GatsbyImageSharpSizes_noBase64
      }
    }
  }
`
