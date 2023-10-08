import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../../assets/img/header-img.png";
import headerImg2 from "../../assets/img/header-img-2.jpg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import Typewriter from 'typewriter-effect';
import "./style.css"
import TrackVisibility from "react-on-screen";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        <section className="banner" id="home">
            <img src={headerImg2} alt="Header Img2" className="banner-img" id="img-back" />
            <img src={headerImg} alt="Header Img" className="banner-img" />
            <div className="stars-falling">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <Container>
                <div className="banner-general">
                    <Row className="aligh-items-center banner-text">
                        <Col xs={12} md={6} xl={7}>
                            <TrackVisibility>
                                {({ isVisible }) =>
                                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                        <span className="tagline">Bem-vindo ao meu PORTFÓLIO</span>

                                        <div className="text-banner">
                                            <h1>
                                                Olá! Sou Matheus
                                            </h1>
                                            <h1 className="text-type-writer">
                                                <Typewriter
                                                    options={{
                                                        strings: ['Programador Web', 'Programador Java', 'Professor'],
                                                        autoStart: true,
                                                        loop: true,
                                                    }}
                                                />
                                            </h1>
                                        </div>


                                        <p>Conhecido como Bigai, tenho uma grande experiencia em desenvolvimento web com ReactJS. Mas, como professor, ainda estou aprendendo qual o melhor caminho.</p>
                                        <button onClick={() => console.log('connect')}>Vamos Conectar! <ArrowRightCircle size={25} /></button>
                                    </div>}
                            </TrackVisibility>



                        </Col>

                    </Row>
                </div>
            </Container>
        </section>
    )
}