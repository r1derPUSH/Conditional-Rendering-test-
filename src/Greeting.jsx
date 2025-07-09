function Greeting (props) {
    if (props.timeOfDay == 'morning') {
        return `Good morning! 🌄`;
    }
    else if (props.timeOfDay == 'afternoon') {
        return `Good afternoon! 🌆`;
    }
}

export default Greeting;