import React, { Component } from 'react';
import './App.css';
import Card from "./Card";
import Masonry from 'react-masonry-component';

class App extends Component {
    render() {
        return (
            <Masonry
                className={'my-gallery-class'} 
                elementType={'div'}  
                disableImagesLoaded={false}
                updateOnEachImageLoad={false}>

                    {this.props.elements.map((element)=>{
                        return (
                               <Card src={element.src} text={element.text} />
                        )
                    })}
            </Masonry>
        );
    }
}

export default App;
