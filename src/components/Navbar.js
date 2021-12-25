import React from 'react';

class Navbar extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Apna Cart({this.props.productCount()})
          </a>
        </div>
      </nav>

      </React.Fragment>
    );
  }
}

export default Navbar;
