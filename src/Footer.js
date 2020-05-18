import React from 'react';

class Footer extends React.Component{

  render(){
    let {btn,str}=this.props
    return (
      <div onClick={()=>btn('two')}>
         footer   {str}
      </div>
    )

  }
}

export default Footer;
