import React, { Component } from 'react';

class Whitepaper extends Component {
  componentDidMount() {
    window.open('blockchainplus_whitepaper.pdf', '_self');
  }
  render() {
    return <div className='whitepaper'></div>
  }
}

export default Whitepaper;