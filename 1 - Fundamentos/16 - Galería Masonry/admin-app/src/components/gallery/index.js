import React from 'react'

const Image = (props) => {
    return(
        <div className="title" > <img alt="image" src={props.src} /> </div>
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

        return this.props.columns.reduceRight(reducer, this.props.columns.length) +1;
    }
    onResize(){
        let columns = this.getColumns(this.refs.Masonry.offsetWidth);
        if(columns != this.state.columns){
            this.setState({columns: columns});
        }
    }
    grid(props){
        let gridInitial = [];
        const columns = this.state.columns;
        for(let i=0; i < columns; i++){
            gridInitial.push([]);
        }

        let reducer = (elements, image, index) => {
            elements[index%columns].push(image);
            return elements;
        };
        
        return this.props.images.reduce(reducer, gridInitial);
    }
    render(){
        return(
            <div className="masonry" ref="Masonry">
                {this.grid(this.props).map((images, index)=> {
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