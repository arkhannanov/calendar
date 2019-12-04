import React from "react";
import Slider from "react-slick";
import './ChildSlider.scss';
import noImage from './images/no-image.png';
import child1 from './images/1.jpg';
import child2 from './images/2.jpg';
import child3 from './images/3.jpg';
import child4 from './images/4.jpg';
import child5 from './images/5.jpg';
import child6 from './images/6.jpg';


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

class ChildSlider extends React.Component {
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

        if (value === 1) {
            this.image.src = child1;
        }
        if (value === 2) {
            this.image.src = child2;
        }
        if (value === 3) {
            this.image.src = child3;
        }
        if (value === 4) {
            this.image.src = child4;
        }
        if (value === 5) {
            this.image.src = child5;
        }
        if (value === 6) {
            this.image.src = child6;
        }

        return (
            <div className="child-slider-container">
                <div className="child-slider__header">Выберите изображение ребенка:</div>
                <img className="child-slider__image" src={noImage} ref={(img) => {
                    this.image = img;
                }} alt='child'/>
                {touched && ((error && <span className="child-slider__text-danger">{error}</span>) || (warning &&
                    <span>{warning}</span>))}
                <Slider {...settings} className="child-slider">
                    <button type="button" className="slide" onClick={() => onChange(1)}><img alt='child' align="middle"
                                                                                             className="child-slider__image-slider"
                                                                                             width={90} height={90}
                                                                                             src={child1}/></button>
                    <button type="button" className="slide" onClick={() => onChange(2)}><img alt='child' align="middle"
                                                                                             className="child-slider__image-slider"
                                                                                             width={90} height={90}
                                                                                             src={child2}/></button>
                    <button type="button" className="slide" onClick={() => onChange(3)}><img alt='child' align="middle"
                                                                                             className="child-slider__image-slider"
                                                                                             width={90} height={90}
                                                                                             src={child3}/></button>
                    <button type="button" className="slide" onClick={() => onChange(4)}><img alt='child' align="middle"
                                                                                             className="child-slider__image-slider"
                                                                                             width={90} height={90}
                                                                                             src={child4}/></button>
                    <button type="button" className="slide" onClick={() => onChange(5)}><img alt='child' align="middle"
                                                                                             className="child-slider__image-slider"
                                                                                             width={90} height={90}
                                                                                             src={child5}/></button>
                    <button type="button" className="slide" onClick={() => onChange(6)}><img alt='child' align="middle"
                                                                                             className="child-slider__image-slider"
                                                                                             width={90} height={90}
                                                                                             src={child6}/></button>
                </Slider>
            </div>
        );
    }
}

export default ChildSlider;