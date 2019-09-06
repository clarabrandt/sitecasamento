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
    // this.toggleModal = this.toggleModal.bind(this);
    this.renderModalEuro = this.renderModalEuro.bind(this);
    this.renderModalReal = this.renderModalReal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitReal = this.handleSubmitReal.bind(this);
    this.handleSubmitEuro = this.handleSubmitEuro.bind(this);

  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmitReal(event) {
    event.preventDefault();
    this.setState({ novoNumero: this.props.numero - this.state.value })
    // if (this.state.newValue === 0) {
    //   this.setState({ newValue: this.props.numero - this.state.value })
    // } else {
    //   this.setState({ newValue: this.state.newValue - this.state.value })
    // }
  }
  handleSubmitEuro(event) {
    event.preventDefault();
    this.setState({ newNumber: this.props.number - this.state.value })
    // if (this.state.newValue === 0) {
    //   this.setState({ newValue: this.props.numero - this.state.value })
    // } else {
    //   this.setState({ newValue: this.state.newValue - this.state.value })
    // }
  }

  // componentDidMount() {
  //   if (this.state.newValue === 0) {
  //     console.log(this.state.newValue, this.props.numero, this.state.value);
  //     this.setState({ newValue: this.props.numero - this.state.value })
  //   }
  //   else {
  //     this.setState({ newValue: this.state.newValue - this.state.value })
  //   }
  // }


  renderModalEuro() {
    return (
      <Modal toggleFn={this.toggleModalEuro} isOpen={this.state.modalEuroOpen}>
        <div className='modal__title'>Para isso, pedimos que você faça uma transferência bancária com o valor escolhido para nossa conta na Europa:</div>
        <div className='dados_bancarios'>IBAN</div>
        <div className='modal_table'>
          <div>Item escolhido: {this.props.title}</div>
          <form onSubmit={this.handleSubmitEuro}>
            <label>
              Quotas
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <Button variant="contained" size='small' type='submit' onClick={this.toggleModalReal}>
              Confirmar
            </Button>
          </form>
        </div>
      </Modal>
    );
  };
  renderModalReal() {
    return (
      <Modal toggleFn={this.toggleModalReal} isOpen={this.state.modalRealOpen}>
        <div className='modal-title'>Para isso, pedimos que você faça uma transferência bancária com o valor escolhido para nossa conta Bradesco:</div>
        <div>Agência</div>
        <div>Conta</div>
        <div>

          <div>Item escolhido: {this.props.title}</div>
          <form onSubmit={this.handleSubmitReal}>
            <label>
              Quotas
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <Button variant="contained" size='small' type='submit' onClick={this.toggleModalReal}>
              Confirmar
            </Button>
          </form>
        </div>
      </Modal>
    );
  };

  toggleModalEuro() {
    this.setState(prevState => ({
      modalEuroOpen: !prevState.modalEuroOpen,
    }));
    console.log('modal euro')
  };
  toggleModalReal() {
    this.setState(prevState => ({
      modalRealOpen: !prevState.modalRealOpen,
    }));
    console.log('modal real')
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
