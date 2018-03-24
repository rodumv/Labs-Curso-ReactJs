import React from 'react'
import GalleryService from '../../api/GalleryService'
const Image = (props) => {
    return(
        <div className="title" > <img alt={props.id} src={props.src} /> </div>
    );
}

class Gallery extends React.Component{
    constructor(){
        super();
        this.state = {columns: 1};
        this.onResize = this.onResize.bind(this);
    }
    componentDidMount(){
        this.onResize();
        window.addEventListener('resize', this.onResize);
    }
    getColumns(width){
        let reducer = (initital, current, index) => {
            return current < width ? initital : index;
        }

        return GalleryService.Columns.reduceRight(reducer, GalleryService.Columns.length) +1;
    }
    onResize(){
        let columns = this.getColumns(this.refs.Masonry.offsetWidth);
        if(columns !== this.state.columns){
            this.setState({columns: columns});
        }
    }
    grid(){
        let gridInitial = [];
        const columns = this.state.columns;
        for(let i=0; i < columns; i++){
            gridInitial.push([]);
        }

        let reducer = (elements, image, index) => {
            elements[index%columns].push(image);
            return elements;
        };
        
        return GalleryService.Images.reduce(reducer, gridInitial);
    }
    render(){
        return(
            <div className="masonry" ref="Masonry">
                {this.grid().map((images, index)=> {
                        return(
                            <div className="columns" key={index}>
                                {images.map((image, id) => <Image key={id} src={image} />
                                )}
                            </div>
                          )
                })
                }
            </div>);
        }
}

export default Gallery;