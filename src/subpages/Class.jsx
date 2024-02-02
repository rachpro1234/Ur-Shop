import React from 'react';

class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           name: "Roben",
           country: "Somewhere",
           height: "5'6"
       }
    }

    changeName = () => {
        this.setState({name: "Harvard"})
    }

    render() {
        return (
            <div>
                <h1>hello my name us {this.state.name}</h1>
            </div>
        )
    }
}
export default Car;