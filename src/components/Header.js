import React, {Component} from 'react';
//import './App.css';

class Header extends Component{
  render(){
    return(
      <div className="header">
        <div className="fa fa-more"></div>

        <span className="title">{this.props.title}</span>

        <input
          type="text"
          className="searchInput"
          placeholder="Search ..."
        />

        <div className="fa fa-search searchIncon"></div>

      </div>
    );
  }
}

export default Header;
