import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import { green, red } from '@material-ui/core/colors';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './Card.css'




export default class Card extends Component {

  theme = createMuiTheme({
    palette: {
      primary: {
        main: '#7CF7FF',
      },
      secondary: {
        main: green[500],
      },
      error: {
        light: red[300],
        main: red[500],
        dark: red[700],
      },
    },
    typography: {
      useNextVariants: true,
    },
  });

  render() {

    return (
      <div className='honeymoon-card'>
        <img className='honeymoon-card--pic' src={this.props.photo} alt='safari' />
        <div className='honeymoon-card--title'>{this.props.title}</div>
        <div className='honeymoon-card--price'>
          <div className='price-euro'>
            <div className='price-text'>{this.props.number} quotas de</div>
            <div className='price-value'>€ {this.props.euro}</div>
          </div>
          <div className='price-real'>
            <div className='price-text'>{this.props.numero} quotas de</div>
            <div className='price-value'>R$ {this.props.real}</div>
          </div>
        </div>
        <MuiThemeProvider theme={this.theme}>
          <div className='honeymoon-card--button'>

            <Button variant="contained" size='small' >
              comprar

            </Button>
            <Button variant="contained" size='small'>
              comprar

            </Button>
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
}
