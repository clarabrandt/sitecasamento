import React, { Component } from 'react'
import './Gallery.css'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { withStyles } from '@material-ui/core/styles';
import one from './photos/gallery/SaeTomas1.jpg'
import brinde from './photos/gallery/SaeTomas2.jpg'
import natal from './photos/gallery/SaeTomas3.jpeg'
import risada from './photos/gallery/risada.jpeg'
import paris from './photos/gallery/paris.jpeg'
import boca from './photos/gallery/boca.jpeg'
import susto from './photos/gallery/SaeTomas6.jpeg'
import oculos from './photos/gallery/oculos.jpeg'
import eles from './photos/gallery/eles.jpeg'
import neve from './photos/gallery/neve.jpeg'
import four from './photos/gallery/pertinho(1).jpg'
import five from './photos/gallery/castelo(1).jpg'
import civil from './photos/gallery/civil2.jpg'
import alianca from './photos/gallery/alianca2.jpg'
import lux from './photos/gallery/lux.jpg'
import close from './photos/gallery/close.jpg'
import londres from './photos/gallery/londres.jpg'
import vinho from './photos/gallery/vinho.jpg'
import deserto from './photos/timeline/deserto.jpg'
import casorio2 from './photos/gallery/casorio2.jpg'
import dubai from './photos/gallery/dubai.jpg'
import coracao from './photos/gallery/SaeTomas5.jpeg'
import { NONAME } from 'dns';

const tileData = [
  {
    img: natal,
    title: 'Image',
    author: 'author',
    cols: false,
    rows: true
  },
  {
    img: alianca,
    title: 'Image',
    author: 'author',
    cols: false,
    rows: true
  },
  {
    img: eles,
    title: 'Image',
    author: 'author',
    cols: true,
    rows: true
  },
  {
    img: susto,
    title: 'Image',
    author: 'author',
    cols: false,
    rows: false
  },
  {
    img: brinde,
    title: 'Image',
    author: 'author',
    cols: false,
    rows: false
  },
  {
    img: coracao,
    title: 'Image',
    author: 'author',
    cols: false,
    rows: false
  },
  {
    img: boca,
    title: 'Image',
    author: 'author',
    cols: false,
    rows: false
  },
  {
    img: vinho,
    title: 'Image',
    author: 'author',
    cols: true,
    rows: true
  },
  {
    img: oculos,
    title: 'Image',
    author: 'author',
    cols: true,
    rows: true
  },

  {
    img: close,
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
    img: deserto,
    title: 'Image',
    author: 'author',
    cols: false,
    rows: true
  },
  {
    img: civil,
    title: 'Image',
    author: 'author',
    cols: false,
    rows: true
  },
  {
    img: four,
    title: 'Image',
    author: 'author',
    cols: true,
    rows: true
  },
  {
    img: paris,
    title: 'Image',
    author: 'author',
    cols: false,
    rows: true
  },
  {
    img: casorio2,
    title: 'Image',
    author: 'author',
    cols: false,
    rows: false
  },
  {
    img: neve,
    title: 'Image',
    author: 'author',
    cols: false,
    rows: false
  },
  {
    img: lux,
    title: 'Image',
    author: 'author',
    cols: false,
    rows: false
  },
  {
    img: five,
    title: 'Image',
    author: 'author',
    cols: false,
    rows: false
  },
  {
    img: dubai,
    title: 'Image',
    author: 'author',
    cols: true,
    rows: true
  },
  {
    img: risada,
    title: 'Image',
    author: 'author',
    cols: false,
    rows: true
  },
  {
    img: one,
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