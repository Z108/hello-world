import React from 'react';
import PropTypes from 'prop-types';
class Header extends React.Component{

  render(){
    let {tit,num}=this.props
    return (
      <div>
         header
         {tit}
         {num}
      </div>
    )

  }
}


Header.propTypes = {
  tit: PropTypes.string.isRequired
};
Header.defaultProps={
  num:100
}
export default Header;
