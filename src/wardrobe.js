import React, { Component } from 'react';

class Wardrobe extends Component {

    state = {

    }

    componentDidMount() {
    }   

    render() {
        let selectedTop;
        let selectedOuterwear = "";
        let weatherIDCategory = this.props.weatherID.toString().split("")[0];

        //Find tops
        if (this.props.lowTemp > 75){
            selectedTop = "T-Shirt";
        } else if (this.props.lowTemp <=75 && this.props.lowTemp > 60){
            selectedTop = "Long Sleeve T-Shirt";
        } else if (this.props.lowTemp <= 60 && this.props.lowTemp > 50){
            selectedTop = "Sweatshirt";
        } else {
            selectedTop = "Quarter Zip"
        }

        //Outwear selection
        if (this.props.weatherID === 500 || this.props.weatherID === 501 || weatherIDCategory === "3"){
            selectedOuterwear = "Light Rain Jacket"
        }

        if (weatherIDCategory === "2"){
            selectedOuterwear = "Rain Jacket";
        }

        if (this.props.lowTemp < 35){
            selectedOuterwear = "Down Winter Coat"
        }

        return (
        <div className="card">
            {selectedOuterwear !== "" ? (
                <div>
                    <h5>OUTERWEAR</h5>
                    <h1>{selectedOuterwear}</h1>
                </div>
            ) : ("")}
            <h5>TOPS</h5>
                <h1>{selectedTop}</h1>
            <h5>BOTTOMS</h5>
                {this.props.lowTemp > 65 ? 
                    <h1>Shorts</h1> : <h1>Pants</h1>
            }
        </div>
        );
    }
}

export default Wardrobe;