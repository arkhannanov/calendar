import React from "react";
import Slider from "react-slick";
import './HeroSlider.scss';
import noImage from './images/no-image.png';
import hero1 from './images/1.jpg';
import hero2 from './images/2.jpg';
import hero3 from './images/3.jpg';
import hero4 from './images/4.jpg';
import hero5 from './images/5.jpg';
import hero6 from './images/6.jpg';


function SampleNextArrow(props) {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{...style, display: "block", width: "30px", height: "30px"}}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{...style, display: "block", width: "30px", height: "30px"}}
            onClick={onClick}
        />
    );
}

class HeroSlider extends React.Component {
    // componentDidMount() {
    //     this.props.input.onChange(5);
    // }

    render() {
        let settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 3,
            speed: 500,
            focusOnSelect: true,
            nextArrow: <SampleNextArrow/>,
            prevArrow: <SamplePrevArrow/>
        };
        const {input: {value, onChange}, meta: {touched, error, warning}} = this.props;

        if (value === 1) {this.image.src = hero1;}
        if (value === 2) {this.image.src = hero2;}
        if (value === 3) {this.image.src = hero3;}
        if (value === 4) {this.image.src = hero4;}
        if (value === 5) {this.image.src = hero5;}
        if (value === 6) {this.image.src = hero6;}

        return (
            <div className="hero-slider-container">
                <div className="hero-slider__header">Выберите изображение героя:</div>
                <img className="hero-slider__image" src={noImage} ref={(img) => {
                    this.image = img;
                }} alt='hero'/>
                {touched && ((error && <span className="hero-slider__text-danger">{error}</span>) || (warning &&
                    <span>{warning}</span>))}
                <Slider {...settings} className="hero-slider">
                    <button type="button" className="slide" onClick={() => onChange(1)}><img alt='hero' align="middle" className="hero-slider__image-slider" width={90} height={90} src={hero1}/></button>
                    <button type="button" className="slide" onClick={() => onChange(2)}><img alt='hero' align="middle" className="hero-slider__image-slider" width={90} height={90} src={hero2}/></button>
                    <button type="button" className="slide" onClick={() => onChange(3)}><img alt='hero' align="middle" className="hero-slider__image-slider" width={90} height={90} src={hero3}/></button>
                    <button type="button" className="slide" onClick={() => onChange(4)}><img alt='hero' align="middle" className="hero-slider__image-slider" width={90} height={90} src={hero4}/></button>
                    <button type="button" className="slide" onClick={() => onChange(5)}><img alt='hero' align="middle" className="hero-slider__image-slider" width={90} height={90} src={hero5}/></button>
                    <button type="button" className="slide" onClick={() => onChange(6)}><img alt='hero' align="middle" className="hero-slider__image-slider" width={90} height={90} src={hero6}/></button>
                </Slider>
            </div>
        );
    }
}

export default HeroSlider;