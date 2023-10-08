
import Carousel from 'react-multi-carousel';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import 'react-multi-carousel/lib/styles.css';
import './style.css';

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <div className="container-skills">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Habilidades</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <CircularProgressbar
                                        value={75}
                                        text="75%"
                                        className='item-circular-bar'
                                        strokeWidth={15}
                                        styles={buildStyles({
                                            textColor: "white",
                                            pathColor: `url(#gradient)`,
                                            trailColor: "transparent"
                                          })}
                                    />
                                    <svg style={{ height: 0, width: 0 }}>
                                        <defs>
                                            <linearGradient id="gradient" gradientTransform="rotate(90)">
                                                <stop offset="0%" stopColor="rgba(131,58,180,1)" />
                                                <stop offset="50%" stopColor="rgba(253,29,29,1)" />
                                                <stop offset="100%" stopColor=" rgba(252,176,69,1)" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <h5>Desenvolvimento Web</h5>
                                </div>
                                <div className="item">
                                <CircularProgressbar
                                        value={90}
                                        text="90%"
                                        className='item-circular-bar'
                                        strokeWidth={15}
                                        styles={buildStyles({
                                            textColor: "white",
                                            pathColor: `url(#gradient)`,
                                            trailColor: "transparent"
                                          })}
                                    />
                                    <svg style={{ height: 0, width: 0 }}>
                                        <defs>
                                            <linearGradient id="gradient" gradientTransform="rotate(90)">
                                                <stop offset="0%" stopColor="rgba(131,58,180,1)" />
                                                <stop offset="50%" stopColor="rgba(253,29,29,1)" />
                                                <stop offset="100%" stopColor=" rgba(252,176,69,1)" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <h5>Desenvolvimento Java</h5>
                                </div>
                                <div className="item">
                                <CircularProgressbar
                                        value={55}
                                        text="55%"
                                        className='item-circular-bar'
                                        strokeWidth={15}
                                        styles={buildStyles({
                                            textColor: "white",
                                            pathColor: `url(#gradient)`,
                                            trailColor: "transparent"
                                          })}
                                    />
                                    <svg style={{ height: 0, width: 0 }}>
                                        <defs>
                                            <linearGradient id="gradient" gradientTransform="rotate(90)">
                                                <stop offset="0%" stopColor="rgba(131,58,180,1)" />
                                                <stop offset="50%" stopColor="rgba(253,29,29,1)" />
                                                <stop offset="100%" stopColor=" rgba(252,176,69,1)" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <h5>Professor</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}