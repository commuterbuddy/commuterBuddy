import React from 'react';

const ListCard = (props) => {

  const { cardStyle, src, alt, imgStyle, containerStyle, optionsStyle, cardType, price, itemStyle, rides } = props;

  return (

    <div className={cardStyle}>
      <img className={imgStyle} src={src} alt={alt} />
      <div className={containerStyle}>
        
        <ul className={optionsStyle}>
          {rides.map((option) => {
            return (
              
              <li className={itemStyle}>
                <b>{option.name}</b>{option.price}
              </li>
              
            )
          })}
        </ul>

      </div>          
    </div>
        
  );

}

export default ListCard;

