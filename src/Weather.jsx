function Weather (props) {
    if (props.temperature <= 15) {
        return `It's cold outside! 🥶`;
    }
    else if (props.temperature >= 15 && props <= 25) {
        return `It's nice outside! ☀`;
    }
    else if (props.temperature >= 25) {
        return `It's hot outside! 🔥`;
    }
}

export default Weather;