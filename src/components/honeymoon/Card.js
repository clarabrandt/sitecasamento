import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import { green, red } from '@material-ui/core/colors';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Modal from '../Modal'
import './Card.css'




export default class Card extends Component {

  constructor(props) {
    super(props);

    this.state = {
      modalRealOpen: false,
      modalEuroOpen: false,
      value: 0,
      novoNumero: this.props.numero,
      newNumber: this.props.number,
    };

    this.toggleModalEuro = this.toggleModalEuro.bind(this);
    this.toggleModalReal = this.toggleModalReal.bind(this);
    this.renderModalEuro = this.renderModalEuro.bind(this);
    this.renderModalReal = this.renderModalReal.bind(this);

  }

  toggleScroll() {
    const disable = this.state.modalRealOpen || this.state.modalEuroOpen;
    document.documentElement.style.overflowY = disable ? 'hidden' : '';
  }


  renderModalEuro() {
    return (
      <Modal toggleFn={this.toggleModalEuro} isOpen={this.state.modalEuroOpen}>
        <div className='modal__title'>Ficamos muito felizes por você querer nos ajudar na nossa lua de mel!</div>
        <div className='modal__title'>Para isso, pedimos que você faça uma transferência bancária da quantia escolhida para nossa conta na Europa:</div>
        <div className='dados-bancarios'>
          <div className='dados-bancarios--indices'>
            <div className='indice'>Nome:</div>
            <div className='indice'>IBAN:</div>
            <div className='indice'>BIC:</div>
          </div>
          <div className='dados-bancarios--conteudo'>
            <div className='conteudo_nome'>Tomás Leite Clara Sousa Eiró </div>
            <div className='conteudo_agencia'>PT50 0269 0101 00200079071 49</div>
            <div className='conteudo_conta'>BKBKPTPL</div>
          </div>
        </div>
      </Modal>
    );
  };
  renderModalReal() {
    return (
      <Modal toggleFn={this.toggleModalReal} isOpen={this.state.modalRealOpen}>
        <div className='modal__title'>Ficamos muito felizes por você querer nos ajudar na nossa lua de mel!</div>
        <div className='modal__title'>Para isso, pedimos que você faça uma transferência bancária da quantia escolhida para nossa conta no Brasil:</div>
        <div className='dados-bancarios'>
          <div className='dados-bancarios--indices'>
            <div className='indice'>Banco:</div>
            <div className='indice'>Nome:</div>
            <div className='indice'>Agência:</div>
            <div className='indice'>Conta:</div>
          </div>
          <div className='dados-bancarios--conteudo'>
            <div className='conteudo_banco'>BRADESCO</div>
            <div className='conteudo_nome'>Sabrina Brandt</div>
            <div className='conteudo_agencia'>1683</div>
            <div className='conteudo_conta'>139858-0</div>
          </div>
        </div>
      </Modal>
    );
  };

  toggleModalEuro() {
    this.setState(prevState => ({
      modalEuroOpen: !prevState.modalEuroOpen,
    }), this.toggleScroll);
  };
  toggleModalReal() {
    this.setState(prevState => ({
      modalRealOpen: !prevState.modalRealOpen,
    }), this.toggleScroll);
  };


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
            <div className='price-text'>Faltam {this.state.newNumber === this.props.number ? this.props.number : (this.state.newNumber - this.state.value)} quotas</div>
          </div>
          <div className='price-real'>
            <div className='price-text'>{this.props.numero} quotas de</div>
            <div className='price-value'>R$ {this.props.real}</div>
            <div className='price-text'>Faltam {this.state.novoNumero === this.props.numero ? this.props.numero : (this.state.novoNumero - this.state.value)} quotas</div>
          </div>
        </div>
        <MuiThemeProvider theme={this.theme}>
          <div className='honeymoon-card--button'>

            <Button variant="contained" size='small' onClick={() => this.toggleModalEuro()}>
              comprar

            </Button>
            <Button variant="contained" size='small' onClick={() => this.toggleModalReal()}>
              comprar

            </Button>
          </div>
          {this.renderModalEuro()}
          {this.renderModalReal()}
        </MuiThemeProvider>
      </div>
    )
  }
}
