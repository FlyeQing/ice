import React, { Component } from 'react';
import PropTypes from 'prop-types';

const style = {
  hyAbilityStyles: {
    fontFamily: 'Microsoft YaHei',
    height: '223px',
    textAlign: 'center',
    background: '#fff',
  },
  hyAbilityItemStyle: {
    display: 'inline-block',
    width: '280px',
    margin: '38px 35px 0',
    verticalAlign: 'top',
  },
  hyAbilityItemImgStyle: {
    height: '62px',
  },
  hyAbilityItemTitleStyle: {
    fontSize: '20px',
    lineHeight: '26px',
    color: '#333',
    fontWeight: '400',
    margin: '18px 0 10px',
  },
  hyAbilityItemSubtitleStyle: {
    fontSize:'16px',
    color:'#999',
    lineHeight:'21px',
  },
};

export default class AblityItems extends Component {
  static displayName = 'AblityItems';

  static propTypes = {
    value: PropTypes.string
  };

  static defaultProps = {
    value: 'string data'
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="hy-ability" style={style.hyAbilityStyles}>
        <div className="hy-ability-item" style={style.hyAbilityItemStyle}>
          <img 
            src="https://gw.alipayobjects.com/zos/rmsportal/aWimbMGxabytxrRqcnEU.svg" 
            style={style.hyAbilityItemImgStyle}/>
          <h3 style={style.hyAbilityItemTitleStyle}>蚂蚁能力输出</h3>
          <p style={style.hyAbilityItemSubtitleStyle}>支付、实名、信用、理财、大数据</p>
        </div>
      
        <div className="hy-ability-item" style={style.hyAbilityItemStyle}>
          <img 
            src="https://gw.alipayobjects.com/zos/rmsportal/neNAdNbBxUbWpbUQIsJA.svg" 
            style={style.hyAbilityItemImgStyle}/>
          <h3 style={style.hyAbilityItemTitleStyle}>官方政策扶持</h3>
          <p style={style.hyAbilityItemSubtitleStyle}>物料、返佣、品牌支持、运营收益</p>
        </div>
      
        <div className="hy-ability-item" style={style.hyAbilityItemStyle}>
          <img 
            src="https://gw.alipayobjects.com/zos/rmsportal/SsStefBxcUWayMyktAwz.svg" 
            style={style.hyAbilityItemImgStyle}/>
          <h3 style={style.hyAbilityItemTitleStyle}>第三方资源整合</h3>
          <p style={style.hyAbilityItemSubtitleStyle}>门禁停车、智能家居、生活服务</p>
        </div>
      </div>
    );
  }
}


