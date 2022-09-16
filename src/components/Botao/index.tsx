import React from 'react';
import style from './style.module.scss';

interface IProps {
    children: React.ReactNode;
}
class Botao extends React.Component<IProps>{
  render(){
    return(
      <button className={style.botao}>
        {this.props.children}
      </button>
    )
  }
}

export default Botao;