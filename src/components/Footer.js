import React from 'react';
import './Footer.css';
import logo from '../components/homepage/img/logo.png';
import FB from '../components/homepage/img/facebook-icon.png';
import TW from '../components/homepage/img/twitter-icon.png';
import IN from '../components/homepage/img/linkedin-icon.png';
import closeButton from "./homepage/img/x-out-symbol.png";
import Popup from "reactjs-popup";

const tukaWeb = "http://www.tukaglobal.com";
const tukaFAQS = "https://www.tukaglobal.com/faqs/";
class Footer extends React.Component{
    state = {
        showIntro: false,
    }
    onClick = () => {
        const showIntro = !this.state.showIntro;
        console.log(showIntro);
        this.setState({
            showIntro: showIntro,
        })
    }
    render() {
        // const popUpWindow = () => (
            

        // )
        return (
            <div className='footer_bg'>
                <div style={{width:'100%',height:'20%'}}>
                    
                </div>
                
                <div className="footer_content">
                    {/*<div className="footer_left">*/}
                        <img height="60px" src={logo} />
                        <Popup
                            // the trigger to open the jump up window
                            trigger={<div>About</div>}
                            //boolean, when true jump up a window an left part of page change to gray
                            modal
                            nested
                        >
                            {close =>(
                                <div className = "popUp-body">
                                    <div className = "pop-close-button-border">
                                        <button className = "pop-close-button">
                                            <img src = {closeButton} onClick = {close}></img>
                                        </button>
                                    </div>
                                    <div className = "pop-allcontent">
                                        <div className="pop-starter">
                                            <p style={{ textAlign: 'center' }}>“Creativity is contagious. Pass it on…”</p>
                                            <p style={{ textAlign: 'center' }}>– Albert Einstein</p>
                                            <p style={{ textAlign: 'center' }}>
                                                <span style={{ color: "#a3150b" }}>
                                                    <strong>Create – Share – Connect</strong>
                                                </span>

                                            </p>
                                            <p style={{ textAlign: 'center' }}>
                                                <img src={"https://i2.wp.com/www.tukaglobal.com/wp-content/uploads/2021/04/TukaNewLogo2-small-200px-paint3.png?ssl=1"}></img>
                                            </p>
                                        </div>

                                        <div className="header">The tuka Story.</div>
                                        <hr className="#"></hr>
                                        <div className="pop-content">
                                            <div className="secondHeader"></div>
                                            <div className="secondContent">Creative industries have been totally disrupted by digital formats, yielding some good, some bad. Prices have collapsed due to the decrease in production and distribution costs and the explosion of new supply. Global demand has responded strongly. This should be great for consumers and creators, except it can also mean collapsing artist royalties and incomes, as well as an insurmountable challenge to connect audiences with content.</div>
                                            <h5 style ={{textAlign: "center"}}>
                                                <strong>WATCH THIS VIDEO!</strong>
                                            </h5>

                                            <p style ={{textAlign: "center"}}> 
                                                <a src = {"https://www.youtube.com/watch?v=LtDcv3Bf6WI"}>
                                                    <img src = {"https://i1.wp.com/www.tukaglobal.com/wp-content/uploads/2020/07/Covid19-Update1-Web.jpg?resize=300%2C94&ssl=1"}></img>
                                                </a>
                                            </p>
                                            <h5 style = {{textAlign: "center", paddingLeft: "80px"}}>
                                                <span style = {{color: "#800000"}}>The coronavirus pandemic has changed the way we share our creativity and connect. Click here to watch the video…</span>
                                            </h5>
                                            <div className="secondHeader">The Obvious Problem:</div>
                                            <hr></hr>
                                            <strong className="second-subhead">The Vanishing Incomes of Creators and the Challenges of digital rights management and copyright.</strong>
                                            <div className="secondContent">Did you know that almost half of the music and video we consume is streamed and it takes almost 15 million streams on YouTube to earn the equivalent of the average monthly minimum wage of $1260? Did you also know the median annual income of Authors Guild members is $17,500 for full-time authors and $4,500 for part-time authors? Not to mention the costless duplication and distribution of digital content that promotes piracy.</div>

                                            <div className="secondHeader">But here’s the Real Problem:</div>
                                            <hr></hr>
                                            <strong className="second-subhead">Exploding supply makes it impossibly difficult and costly to connect artists with audiences or vice-versa</strong>
                                            <div className="secondContent">You see, the true challenge of the digital world is Too Much Information. When we have too much of something, the price must fall. We also end up not being able to find what we want amid all the noise – as artists, fans, or consumers. These are not just problems for writers, musicians, and other artists, but for all of us as consumers of digital media. (Thinking about the digital oligopoly: Google, Apple, Facebook, and Amazon? Don’t worry, we’ll get to that.)</div>

                                            <div className="secondHeader">But we can fix this. With technology.</div>

                                            <div className="secondContent">By creating a sustainable new online ecosystem that harnesses social network dynamics to reward curators of desired content to build audience networks, we can help innovative creators thrive, and reward all of us who like to create and share content just for fun. By saving creative industries, we inspire the creative impulse in all of us.</div>

                                            <div className="secondHeader">Our mission: Empower artists – Reward fans – Make the Connection.</div>
                                        </div>

                                        <div className="header">An Ecosystem</div>
                                        <hr className="#"></hr>
                                        <div className="pop-content">
                                            <div className="secondContent">To understand how we can do this—to disrupt new technology with newer technology—is a complex challenge. To oversimplify, we should first think about why we humans started creating song, dance, and stories around a communal campfire in the first place.</div>
                                            <div className="second-subhead">Because the primary value of creative content is to connect us together through sharing networks.</div>
                                            <div className="secondContent">We do this now when we play music live, when we discuss books. We do it with online friend networks, creating enormous value that’s reflected in the market valuations of major social media networks. We create this value by sharing information and forming connections, not through sales revenues.</div>
                                            <div className="secondContent">The money transactions happen when other parties want access to these networks. The network servers are capturing most of that value now, but we, as creators and consumers, need to take the lion’s share back. How?</div>

                                            <ul>
                                                <li>We need an online creative media platform – a clearinghouse for content – where we can post, find, and curate content in order build out and manage our peer networks.</li>
                                                <li>We need a way to facilitate the monetary and non-monetary exchange of content among users.</li>
                                                <li>We need a way to track and manage all this information flow and control the value created.</li>
                                            </ul>

                                            <div className="secondContent">The key to this sustainable creative ecosystem is to design a community network that curates itself through the interaction of its users. This helps solve the “Too Much Information” problem by generating promotion value for quality content that serves consumers’ diverse tastes.</div>
                                        </div>

                                        <div className="header">3-part harmony</div>
                                        <hr className="#"></hr>
                                        <div className="pop-content"></div>
                                        <div className="header">A solution emerges</div>
                                        <hr className="#"></hr>
                                        <div className="pop-content">Next Step</div>
                                        <div className="header">The tuka Story.</div>
                                        <hr className="#"></hr>
                                        <div className="pop-content">The Obvious Problem:</div>
                                    </div>
                                    
                                </div>)}
                        </Popup>
                        <Popup
                            trigger = {<div>FAQs</div>}
                            modal
                            nested
                        >
                            {(close) => (
                                <div className="popUp-body">
                                    <div className="pop-close-button-border">
                                        <button className="pop-close-button">
                                            <img src={closeButton} onClick={close}></img>
                                        </button>
                                    </div>
                                    
                                    <div className = "header">What exactly is tuka?</div>
                                    <hr></hr>
                                    <div className = "pop-content">
                                        tuka is a digital platform for promoting, sharing, marketing, and curating original music. tuka integrates three essential functions of a sustainable creative ecosystem: social network dynamics with crypto-token rewards for filtering content; peer-to-peer files sharing and payment protocol to exchange value; and a blockchain trustless public ledger that secures intellectual property, the flow of data, and user control over the value created. Essentially, tuka is integrating all the independent website portals of artists who sell their content together on one platform with a public accounting ledger that enables consumers and fans to find and share the music they like. The difference from streaming services is that the artist-creators and consumers secure most of the value, not the platform.
                                    </div>

                                    <div className = "header">What's the problem(s) tuka is trying to solve?</div>
                                    <hr></hr>
                                    <div className = "pop-content">
                                        The basic problems, or challenges, of creative digital media is that there is TOO MUCH CONTENT and PRICES HAVE COLLAPSED.
                                    </div>
                                    <hr></hr>
                                    <div className = "pop-content">
                                        These two challenges are related because technology has pushed the costs of production and distribution towards zero, so many more people can now create and share their content. An excess supply of content means the price falls to the marginal cost, which is close to zero.
                                    </div>
                                    <hr></hr>
                                    <div className = "pop-content">
                                        This means artists can't easily find their audiences and consumers can't easily find new, innovative content they want. It also means revenues from content sales are insufficient to support artist incomes. Eventually, the ecosystem goes stale and dries up, despite the fact that more and more derivative content gets created. It finds no ready audience and nobody gets fairly paid.
                                    </div>


                                    
                                    <div className = "header">How does tuka solve these problems?</div>
                                    <hr></hr>
                                    <div className = "pop-content">
                                    tuka establishes an ecosystem, meaning a self-sustaining feedback system, that harnesses technology to reward users to solve the problem of curation. Curators are like promoters and the promotion and marketing agencies for creative content have been disrupted with the publisher/distributors. Today artists are expected to do their own promo and marketing of their content and it's a cost they cannot bear. The tuka media platform enables users to filter content with hashtags denoting media formats, genres, and subgenres. The filtering process can be as fine as one wishes to make it. Right now, digital distributors like Amazon and Facebook use algorithms and AI to filter content. The problem is that algorithms can't filter subjective qualities in content, instead treating all content as a commodity and analyzing its popularity by likes, etc. This process favors existing content and creates a much steeper and concentrated Winner-Take-All ecosystem. New, innovative content is ignored and never gets its chance to find a wider audience.
                                    </div>
                                    <hr></hr>
                                    <div className = "pop-content">
                                    The second problem tuka seeks to solve is the problem of collapsing price of content and the resulting incomes to artists. It now takes 15 million streams on YouTube to earn the creator a monthly minimum wage. So nobody, not even the biggest artists, are earning a living off streaming content. tuka recognizes that the value of content is no longer in its physical sale but in the ability to monetize associated data information in other ways. It seems we've gone back to the days of radio and broadcast tv, where content was free in order to sell advertising. The digital advertising world has become much more granular than in the days of mass markets, but the peer networks users build in tuka can be monetized to augment the incomes of creators and curators. Content creators and curators are also branders. Additionally, by eliminating the digital distributor - Apple, Amazon, or Google - there is a greater share of the value that can be divvied up between creators and consumers. In other words, with tuka creators make more and consumers get more, and the ecosystem ensures the continued creation of valued content.
                                    </div>




                                    <div className = "header">Why is an integrated ecosystem important?</div>
                                    <hr></hr>
                                    <div className = "pop-content">
                                    The integration of the three functions of sharing platform, transaction protocol, and public ledger help solve the problems that artists and their audiences face. First, it enables users to use technology to filter the content they want in their media feed. Second, it enables artists to find those fans who like the music they create - it helps them find and maintain their audience. Third, the public ledger enables the ecosystem to reward sharing music by tracking monetized transactions back along the share chain. Lastly, the public BC ledger enables users to build and maintain - and monetize - their own peer networks.
                                    </div>
                                    <div className = "pop-content">
                                    A good analogy is like the international telephony system: your smartphone theoretically connects you to every other smartphone on the planet, but you manage your own contact list that is unique from all others. The tuka ecosystem essentially empowers distributed peer networks sharing and exchanging original music content.
                                    </div>






                                    <div className = "header">How is tuka different from Facebook groups?</div>
                                    <hr></hr>
                                    <div className = "pop-content">
                                    tuka peer networks differ in significant ways from Facebook groups. FB groups are like walled-gardens, or private clubs, where members post and share information. They require central administrators. But like private clubs, they only work well under a manageable scale. tuka seeks to integrate a global ecosystem for original content. Distributed peer networks funneling through a single online media platform means there are no walls except those we put up around our own peer network and content. This means most content will be able to pollinate across many integrated networks much like information across the six degrees of separation. Like LinkedIn does with professional networks.
                                    </div>
                                    <div className = "pop-content">
                                    We believe this is essential to enhance the serendipity of innovation and creativity. One never knows where your next favorite artist will come from, in whatever genre or mode of creative expression. tuka seeks to enhance that accidental creative surprise by having your peer networks bring it to your attention based on their qualitative judgments.
                                    </div>
                                    <div className = "pop-content">
                                    The material difference is that Facebook takes most of the value created by groups, whereas tuka returns it to its users.
                                    </div>




                                    <div className = "header">But I don't buy content these days, I stream it. How does tuka solve that?</div>
                                    <hr></hr>
                                    <div className = "pop-content">
                                    More of the consumer market is moving toward streaming with services like YouTube Red, Pandora, Spotify, Apple Play, Amazon Kindle Select, etc. One problem is that these streaming services don't seem to be able to turn a profit at the current cost structure, while artists are still grossly underpaid. Of course, one must have a catalog of existing content to stream, but when tuka eventually has a sufficient source of content through its user community, the idea would be to establish a cooperative streaming service where artists share more of the value they create. In the meantime, one wonders how long existing paid streaming services can lose money - the low subscription prices are being subsidized by investors.
                                    </div>

                                    <div className = "header">How does the tuka media platform work? What does it look like?</div>
                                    <hr></hr>
                                    <div className = "pop-content">
                                    The product is being built up, but the user interface will look a lot like Facebook, Twitter, or LinkedIn, with columns for profile data, a central media feed for snippets of filtered content, and trending data concerning ecosystem and peer network content and users. Creators will have portfolio pages that host samples of all their uploaded content.
                                    </div>

                                </div>

                                
                            )}
                        </Popup>
                        <Popup
                            trigger = {<div>Contact</div>}
                            modal
                            nested
                        >   
                            {(close) => {
                                <div className="popUp-body">
                                    <div className="pop-close-button-border">
                                        <button className="pop-close-button">
                                            <img src={closeButton} onClick={close}></img>
                                        </button>
                                    </div>
                                </div>
                            }} 
                        </Popup>
                        <Popup
                            trigger = {<div>Privacy</div>}
                            modal
                            nested
                        >
                            {(close) => {
                                <div className="popUp-body">
                                    <div className="pop-close-button-border">
                                        <button className="pop-close-button">
                                            <img src={closeButton} onClick={close}></img>
                                        </button>
                                    </div>
                                </div>
                            }} 
                        </Popup>
                        <div> Copyright&Licensing</div>
                        <div> Terms of Service</div>
                    {/*</div>*/}

                    <div><img width="30px" src={FB} /></div>
                    <div><img width="30px" src={TW} /></div>
                    <div><img width="30px" src={IN} /></div>
                    <div>
                        2019 &copy; tukaglobal
                    </div>

                </div>
            </div>
        );
    }
}


export default Footer;
