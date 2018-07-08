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
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="314.000000pt"
              height="278.000000pt"
              viewBox="0 0 314.000000 278.000000"
              preserveAspectRatio="xMidYMid meet"
              className="Footer__Logo"
            >
              <title>Love in Tinder Logo</title>
              <g
                transform="translate(0.000000,278.000000) scale(0.100000,-0.100000)"
                fill="#f1f1f1"
                stroke="none"
              >
                <path
                  d="M1338 2521 c-125 -27 -180 -47 -290 -103 -389 -198 -622 -581 -621
          -1018 1 -377 173 -706 489 -933 77 -56 248 -134 359 -164 93 -26 113 -28 290
          -27 173 0 199 2 288 27 186 50 350 142 489 275 237 226 358 506 358 826 0 128
          -10 200 -46 323 -107 373 -418 677 -799 779 -137 36 -385 44 -517 15z m337
          -51 c301 -32 563 -181 747 -424 292 -387 283 -927 -22 -1311 -344 -432 -965
          -530 -1428 -225 -95 63 -204 167 -277 265 -127 170 -205 410 -205 630 0 163
          49 359 125 504 105 199 309 388 514 477 179 77 354 104 546 84z"
                />
                <path
                  d="M2054 1931 c-16 -10 -45 -37 -64 -60 -19 -24 -125 -135 -235 -247
          l-200 -205 -188 193 c-103 106 -211 219 -241 251 -29 31 -60 57 -69 57 -27 0
          -77 -50 -77 -76 0 -26 92 -134 114 -134 6 0 94 -83 196 -185 l185 -185 -228
          -228 c-177 -178 -227 -234 -227 -253 0 -30 28 -59 56 -59 12 0 108 89 249 230
          l230 230 245 -245 c161 -160 253 -245 266 -245 12 0 28 8 37 18 38 42 28 56
          -225 310 l-243 242 202 198 c111 108 229 221 262 251 68 61 78 92 39 128 -34
          30 -52 33 -84 14z m-532 -664 c-331 -330 -442 -436 -455 -431 -9 3 -17 11 -17
          18 0 6 201 211 446 456 423 423 446 444 455 420 9 -23 -18 -52 -429 -463z m-7
          113 c-14 -13 -33 3 -177 147 -141 141 -159 163 -147 176 12 14 33 -4 176 -146
          145 -144 161 -163 148 -177z m337 -307 c131 -131 238 -244 238 -250 0 -38 -58
          10 -273 225 -187 187 -235 240 -225 250 7 7 14 12 17 12 3 0 113 -107 243
          -237z"
                />
                <path d="M1530 1700 l0 -140 25 0 25 0 0 140 0 140 -25 0 -25 0 0 -140z" />
                <path
                  d="M1040 1320 l0 -140 95 0 c109 0 130 18 28 22 l-68 3 -3 128 -3 127
          -24 0 -25 0 0 -140z"
                />
                <path
                  d="M1820 1450 c0 -5 23 -10 50 -10 l50 0 0 -130 0 -130 30 0 30 0 0 130
          0 130 50 0 c28 0 50 5 50 10 0 6 -50 10 -130 10 -80 0 -130 -4 -130 -10z"
                />
              </g>
            </svg>
          </a>

          <div className="Footer__Social">
            <a href={socials.twitter}>
              <svg
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="611.981px"
                height="611.981px"
                viewBox="0 0 611.981 611.981"
              >
                <g>
                  <g id="twitter">
                    <g>
                      <path
                        d="M605.95,114.16c-4.909-3.356-11.387-3.245-16.144,0.319c-3.287,2.455-8.183,4.632-13.896,6.532
                c18.82-23.342,19.098-38.944,18.82-42.786c-0.375-4.993-3.412-9.417-7.947-11.539c-4.549-2.136-9.875-1.664-13.952,1.276
                c-25.658,18.363-51.329,22.357-66.308,22.884c-24.382-22.648-55.906-35.061-89.414-35.061
                c-72.494,0-131.479,58.957-131.479,131.451c0,5.243,0.305,10.485,0.929,15.672C165.581,199.899,67.457,85.867,66.472,84.703
                c-2.898-3.44-7.268-5.256-11.789-4.854c-4.48,0.402-8.488,2.94-10.763,6.824c-30.789,52.633-18.224,102.506,2.885,137.387
                c-3.925-2.108-8.668-2.247-12.746-0.208c-4.632,2.302-7.614,7.004-7.697,12.191c-0.901,55.296,24.354,88.443,49.832,107.748
                c-1.872,0.764-3.578,1.943-4.979,3.482c-3.314,3.633-4.466,8.75-3.01,13.453c17.711,57.127,59.318,78.539,88.513,86.557
                c-33.48,23.605-74.893,29.139-106.362,29.139c-20.096,0-33.938-2.385-34.077-2.414c-6.269-1.109-12.565,2.262-15.131,8.143
                c-2.552,5.879-0.749,12.744,4.383,16.6c63.146,47.475,139.397,57.447,192.253,57.447c41.773,0,70.801-6.104,72.271-6.422
                c271.306-63.354,281.611-306.618,281.181-350.943c50.857-46.725,58.957-64.963,60.233-69.512
                C613.065,123.605,610.846,117.517,605.95,114.16z M527.896,182.604c-3.148,2.857-4.812,6.99-4.521,11.234
                c0.181,2.635,15.006,264.801-259.365,328.877c-0.264,0.055-27.6,5.756-66.239,5.756c-36.004,0-83.658-4.924-129.135-24.881
                c41.635-2.664,92.687-15.438,129.412-56.059c3.675-4.078,4.577-9.918,2.344-14.938c-2.233-5.008-7.239-8.238-12.718-8.238
                c-2.58,0-57.168-0.652-84.49-51.398c12.648,0.402,24.118-1.471,32.62-5.34c5.45-2.482,8.668-8.17,8.03-14.119
                c-0.638-5.949-5.048-10.818-10.901-12.08c-2.954-0.637-65.795-14.951-77.126-81.231c9.847,3.759,21.83,6.366,33.425,4.66
                c5.381-0.804,9.805-4.674,11.303-9.902c1.498-5.229-0.208-10.859-4.341-14.382c-2.773-2.358-62.702-54.436-36.669-122.588
                c34.908,35.435,129.897,118.844,244.442,112.395c4.133-0.236,7.961-2.316,10.401-5.658c2.441-3.343,3.273-7.614,2.247-11.636
                c-2.15-8.391-3.231-17.087-3.231-25.824c0-57.182,46.53-103.713,103.74-103.713c28.029,0,54.283,10.998,73.95,30.983
                c2.552,2.58,6.019,4.078,9.652,4.133l2.136,0.014c10.194,0,26.171-1.234,44.492-7.143c-5.866,6.199-13.494,13.189-23.383,20.831
                c-4.854,3.759-6.657,10.25-4.452,15.963c2.205,5.728,7.975,9.334,14.021,8.834c2.247-0.18,12.121-1.04,24.34-3.231
                C550.183,161.801,540.378,171.273,527.896,182.604z"
                        strokeWidth="3"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </a>
            <a href={socials.instagram}>
              <svg
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
              >
                <g>
                  <g>
                    <path
                      d="M363.273,0H148.728C66.719,0,0,66.719,0,148.728v214.544C0,445.281,66.719,512,148.728,512h214.544
			C445.281,512,512,445.281,512,363.273V148.728C512,66.719,445.281,0,363.273,0z M472,363.272C472,423.225,423.225,472,363.273,472
			H148.728C88.775,472,40,423.225,40,363.273V148.728C40,88.775,88.775,40,148.728,40h214.544C423.225,40,472,88.775,472,148.728
			V363.272z"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M256,118c-76.094,0-138,61.906-138,138s61.906,138,138,138s138-61.906,138-138S332.094,118,256,118z M256,354
			c-54.037,0-98-43.963-98-98s43.963-98,98-98s98,43.963,98,98S310.037,354,256,354z"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <circle cx="396" cy="116" r="20" />
                  </g>
                </g>
              </svg>
            </a>
            <a href={socials.facebook}>
              <svg
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
              >
                <g>
                  <g>
                    <path
                      d="M452,0H60C26.916,0,0,26.916,0,60v392c0,33.084,26.916,60,60,60h392c33.084,0,60-26.916,60-60V60
              C512,26.916,485.084,0,452,0z M472,452c0,11.028-8.972,20-20,20H338V309h61.79L410,247h-72v-43c0-16.975,13.025-30,30-30h41v-62
              h-41c-50.923,0-91.978,41.25-91.978,92.174V247H216v62h60.022v163H60c-11.028,0-20-8.972-20-20V60c0-11.028,8.972-20,20-20h392
              c11.028,0,20,8.972,20,20V452z"
                    />
                  </g>
                </g>
              </svg>
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
