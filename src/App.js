import React, { Component } from 'react';
import './App.css';
import Card from "./Card";
import Masonry  from 'react-masonry-component';
import $ from 'jquery';


class App extends Component {

    render() {
        return (
            <div ref="masonry" className="container masonry-div">
                <Masonry enableResizableChildren={true} className={'my-gallery-class'} elementType={'div'} disableImagesLoaded={false} updateOnEachImageLoad={false}>
                    {this.props.elements.map((element,index)=>{
                        return (
                            <Card key={index} src={element.src} text={element.text} />
                        )
                    })}    
                </Masonry>
            </div>    
        );
    }
}

export default App;
