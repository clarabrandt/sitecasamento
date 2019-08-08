import React, { Component } from 'react'
import './Gallery.css'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { withStyles } from '@material-ui/core/styles';
import one from './photos/SaeTomas1.jpg'
import two from './photos/SaeTomas2.jpg'
import three from './photos/SaeTomas3peq.jpeg'
import four from './photos/pertinho(1).jpg'
import five from './photos/castelo(1).jpg'
import six from './photos/alianca2.jpg'
import Modal from './Modal'
const tileData = [
  {
    img: one,
    title: 'Image',
    author: 'author',
    cols: 2,
    featured: false,
  },
  {
    img: two,
    title: 'Image',
    author: 'author',
    cols: 1,
    featured: false,
  },
  {
    img: three,
    title: 'Image',
    author: 'author',
    // cols: 1,
    featured: true,
  },
  {
    img: four,
    title: 'Image',
    author: 'author',
    // cols: 2,
    featured: false,
  },
  {
    img: five,
    title: 'Image',
    author: 'author',
    // cols: 2,
    featured: false,
  },
  {
    img: six,
    title: 'Image',
    author: 'author',
    cols: 2,
  },
  {
    img: four,
    title: 'Image',
    author: 'author',
    cols: 2,
  },
  {
    img: four,
    title: 'Image',
    author: 'author',
    cols: 2,
  },
];

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 800,
    height: 650,
  },
});

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.renderModal = this.renderModal.bind(this);
  }

  renderModal() {
    return (
      <Modal toggleFn={this.toggleModal} isOpen={this.state.modalOpen}>
        <img src={this.state.selectedPicture} alt='' />
      </Modal>
    );
  };

  toggleModal(picture) {
    this.setState(prevState => ({
      modalOpen: !prevState.modalOpen,
      selectedPicture: picture,
    }));
  };

  jalapenho = () => {
    return this.toggleModal
  }

  render() {
    const { classes } = this.props;
    return (
      <div className='gallery'>
        <div className='component-title'>Nossos momentos</div>
        <div className={classes.root}>
          <GridList cellHeight={160} className={classes.gridList} cols={4}>
            {tileData.map(tile => (
              <GridListTile key={tile.img} cols={tile.featured ? 2 : 1} rows={tile.featured ? 1 : 2}>
                <img src={tile.img} alt="foto" />
              </GridListTile>
            ))}
          </GridList>
        </div>
        {/*<div className='gallery-grid'>
          <img className='gallery-item gallery-item--1 gallery-img' src={one} alt="couple" onClick={() => this.toggleModal(one)} />
          <img className='gallery-item gallery-item--2 gallery-img' src={two} alt="couple" onClick={() => this.toggleModal(two)} />
          <img className='gallery-item gallery-item--3 gallery-img' src={three} alt="couple" onClick={() => this.toggleModal(three)} />
          <img className='gallery-item gallery-item--4 gallery-img' src={four} alt="couple" onClick={() => this.toggleModal(four)} />
          <img className='gallery-item gallery-item--5 gallery-img' src={five} alt="couple" onClick={() => this.toggleModal(five)} />
    </div>*/}
        {this.renderModal()}
      </div>
    )
  }
}
// Gallery.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(Gallery);