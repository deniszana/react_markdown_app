import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/*
  state = {
    text: sampleText
  };
  
  componentWillMount() {
    const localStorageText = localStorage.getItem( 'text' );
    if( localStorageText     && typeof localStorageText !== 'undefined'       && localStorageText.replace(/\s/g,'').length > 0 ) {
        this.setState( { text: localStorageText } );
    }
  }
  
  componentWillUpdate( nextProps, nextState ) {
    localStorage.setItem( 'text', nextState.text );
  }
  
  editText( event ) {
    this.setState({
        text: event.target.value
    });
  }
  
  renderText() {
    return {
        __html: marked( this.state.text, { sanitize: true } )
    };
  }
  
*/
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
