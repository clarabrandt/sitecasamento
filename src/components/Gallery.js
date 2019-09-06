import React, { Component } from 'react'
import './Gallery.css'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { withStyles } from '@material-ui/core/styles';
import londres from './photos/gallery/londres.jpg'


const tileData = [
  {
    img: 'https://picscasamentosaetomas.s3-sa-east-1.amazonaws.com/SaeTomas3.28701e0d.jpeg',
    title: 'Image',
    author: 'author',
    cols: false,
    rows: true
  },
  {
    img: 'https://picscasamentosaetomas.s3-sa-east-1.amazonaws.com/alianca2.a37a7e88.jpg',
    title: 'Image',
    author: 'author',
    cols: false,
    rows: true
  },
  {
    img: 'https://picscasamentosaetomas.s3-sa-east-1.amazonaws.com/eles.ff326989.jpeg',
    title: 'Image',
    author: 'author',
    cols: true,
    rows: true
  },
  {
    img: 'https://picscasamentosaetomas.s3-sa-east-1.amazonaws.com/SaeTomas6.0f0c4085.jpeg',
    title: 'Image',
    author: 'author',
    cols: false,
    rows: false
  },
  {
    img: 'https://picscasamentosaetomas.s3-sa-east-1.amazonaws.com/SaeTomas2.87ac1b43.jpg',
    title: 'Image',
    author: 'author',
    cols: false,
    rows: false
  },
  {
    img: 'https://picscasamentosaetomas.s3-sa-east-1.amazonaws.com/SaeTomas5.9341fe83.jpeg',
    title: 'Image',
    author: 'author',
    cols: false,
    rows: false
  },
  {
    img: 'https://picscasamentosaetomas.s3-sa-east-1.amazonaws.com/boca.c05d982d.jpeg',
    title: 'Image',
    author: 'author',
    cols: false,
    rows: false
  },
  {
    img: 'https://picscasamentosaetomas.s3-sa-east-1.amazonaws.com/vinho.947d5cce.jpg',
    title: 'Image',
    author: 'author',
    cols: true,
    rows: true
  },
  {
    img: 'https://picscasamentosaetomas.s3-sa-east-1.amazonaws.com/oculos.f6ddde15.jpeg',
    title: 'Image',
    author: 'author',
    cols: true,
    rows: true
  },

  {
    img: 'https://picscasamentosaetomas.s3-sa-east-1.amazonaws.com/close.468c9b99.jpg',
    title: 'Image',
    author: 'author',
    cols: true,
    rows: true
  },
  {
    img: londres,
    title: 'Image',
    author: 'author',
    cols: false,
    rows: true
  },
  {
    img: 'https://picscasamentosaetomas.s3-sa-east-1.amazonaws.com/deserto.186d799d.jpg',
    title: 'Image',
    author: 'author',
    cols: false,
    rows: true
  },
  {
    img: 'https://picscasamentosaetomas.s3-sa-east-1.amazonaws.com/civil2.e5628a85.jpg',
    title: 'Image',
    author: 'author',
    cols: false,
    rows: true
  },
  {
    img: 'https://picscasamentosaetomas.s3-sa-east-1.amazonaws.com/pertinho(1).d4458eb3.jpg',
    title: 'Image',
    author: 'author',
    cols: true,
    rows: true
  },
  {
    img: 'https://picscasamentosaetomas.s3-sa-east-1.amazonaws.com/paris.869ffa2d.jpeg',
    title: 'Image',
    author: 'author',
    cols: false,
    rows: true
  },
  {
    img: 'https://picscasamentosaetomas.s3-sa-east-1.amazonaws.com/casorio2.8fef8c15.jpg',
    title: 'Image',
    author: 'author',
    cols: false,
    rows: false
  },
  {
    img: 'https://picscasamentosaetomas.s3-sa-east-1.amazonaws.com/neve.9c75e41e.jpeg',
    title: 'Image',
    author: 'author',
    cols: false,
    rows: false
  },
  {
    img: 'https://picscasamentosaetomas.s3-sa-east-1.amazonaws.com/lux.00328476.jpg',
    title: 'Image',
    author: 'author',
    cols: false,
    rows: false
  },
  {
    img: 'https://picscasamentosaetomas.s3-sa-east-1.amazonaws.com/castelo(1).d8d17309.jpg',
    title: 'Image',
    author: 'author',
    cols: false,
    rows: false
  },
  {
    img: 'https://picscasamentosaetomas.s3-sa-east-1.amazonaws.com/dubai.da12d01e.jpg',
    title: 'Image',
    author: 'author',
    cols: true,
    rows: true
  },
  {
    img: 'https://picscasamentosaetomas.s3-sa-east-1.amazonaws.com/risada.8018824e.jpeg',
    title: 'Image',
    author: 'author',
    cols: false,
    rows: true
  },
  {
    img: 'https://picscasamentosaetomas.s3-sa-east-1.amazonaws.com/SaeTomas1.6af3b8e1.jpg',
    title: 'Image',
    author: 'author',
    cols: false,
    rows: true
  },

];

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
});

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSmall: false,
      isMedium: false,
      isBig: false,
    };

  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    let screenSize = window.innerWidth;

    this.setState({
      isHuge: screenSize >= 1021,
      isBig: 1020 >= screenSize && screenSize >= 765,
      isMedium: 765 >= screenSize && screenSize >= 414,
      isSmall: 375 >= screenSize && screenSize >= 320
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className='gallery' ref={this.props.galeria}>
        <div className='component-title'>Nossos momentos</div>
        {this.state.isHuge &&
          <div className={classes.root}>
            <GridList cellHeight={170} className='gridList' cols={4}>
              {tileData.map(tile => (
                <GridListTile className='gallery-item gallery-img' key={tile.img} cols={tile.cols ? 2 : 1} rows={tile.rows ? 2 : 1}>
                  <img src={tile.img} alt="foto" />
                </GridListTile>
              ))}
            </GridList>
          </div>
        }
        {this.state.isBig &&
          <div className={classes.root}>
            <GridList cellHeight={170} className='gridList' cols={4}>
              {tileData.map(tile => (
                <GridListTile className='gallery-item gallery-img' key={tile.img} cols={tile.cols ? 2 : 1} rows={tile.rows ? 2 : 1}>
                  <img src={tile.img} alt="foto" />
                </GridListTile>
              ))}
            </GridList>
          </div>
        }
        {this.state.isMedium &&
          <div className={classes.root}>
            <GridList cellHeight={200} className='gridList' cols={1}>
              {tileData.map(tile => (
                <GridListTile className='gallery-item gallery-img' key={tile.img} cols={tile.cols ? 1 : 1} rows={tile.rows ? 2 : 2}>
                  <img src={tile.img} alt="foto" />
                </GridListTile>
              ))}
            </GridList>
          </div>
        }
        {this.state.isSmall &&
          <div className={classes.root}>
            <GridList cellHeight={300} className='gridList' cols={1}>
              {tileData.map(tile => (
                <GridListTile className='gallery-item gallery-img' key={tile.img} cols={tile.cols ? 1 : 1} rows={tile.rows ? 1 : 1}>
                  <img src={tile.img} alt="foto" />
                </GridListTile>
              ))}
            </GridList>
          </div>
        }
      </div>
    )
  }
}

export default withStyles(styles)(Gallery);
