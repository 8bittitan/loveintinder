import React from 'react'
import Img from 'gatsby-image'

import EpisodeList from '../components/EpisodeList/EpisodeList'
import Icon from '../components/Icon/Icon'
import Masthead from '../components/Masthead/Masthead'
import Social from '../components/Social/Social'
import SocialIcon from '../components/Icon/SocialIcon'

// TODO: Add in some damn propTypes
const IndexPage = ({
  data,
  socials,
  currentlyPlaying,
  setPlaying,
  pausePlaying,
}) => {
  const latestEpisode = data.allRssFeed.edges[0].node.childrenRssFeedItem[0]
  const episodes = data.allRssFeed.edges[0].node.childrenRssFeedItem

  return (
    <div>
      {/* START: Masthead */}
      <Masthead
        episode={latestEpisode}
        socials={socials}
        selectEpisode={setPlaying}
        isPlaying={currentlyPlaying === latestEpisode.guid}
      />
      {/* END: Masthead */}

      <div className="inner-container">
        {/* START: Past Episodes */}
        <div className="section PastEpisodes" id="episodes">
          <h2 className="SectionTitle">Past Episodes</h2>

          <EpisodeList
            episodes={episodes}
            setPlayingEpisode={setPlaying}
            currentlyPlaying={currentlyPlaying}
            pauseCurrentEpisode={pausePlaying}
          />
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
            type="Stitcher"
          />
          <Social
            link="https://open.spotify.com/show/0C6tdOjvuVM75aSDYn0LKC?si=rj7kzY5iRZOnbvykrFDVpw"
            type="Spotify"
          />
          <Social
            link="https://itunes.apple.com/us/podcast/love-in-tinder/id400904245?mt=2"
            type="iTunes"
          />
          <Social
            link="https://play.google.com/music/listen#/ps/Idowf6cgxove3eytpbdp3xg5mvu"
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
          <a href="/" className="Footer__Logo">
            <Icon type="logo" />
          </a>

          <div className="Footer__Social">
            <a href={socials.twitter}>
              <SocialIcon type="twitter" />
            </a>
            <a href={socials.instagram}>
              <SocialIcon type="instagram" />
            </a>
            <a href={socials.facebook}>
              <SocialIcon type="facebook" />
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
            itunes {
              duration
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
