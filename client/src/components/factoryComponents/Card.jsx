import React from 'react';

const Card = (props) => {

  const { cardStyle, src, alt, imgStyle, containerStyle, optionsStyle, cardType, price, itemStyle } = props;

  return (
   
    <div className={cardStyle}>
      <img className={imgStyle} src={src} alt={alt} />
      <div className={containerStyle}>
        <div className={optionsStyle}>
          {price.costPerGallon ? <p className={itemStyle}><b>Price per gallon</b>{`$${price.costPerGallon.toFixed(2)}`}</p> : null}
          {price.dailyGasCost ? <p className={itemStyle}><b>Price per day</b>{price.dailyGasCost}</p> : null}
        </div>
      </div>          
    </div>

  )
}

export default Card;            

/*

Props that all cards need passed down
D  1. card className - ALL HAVE - 
D  2. img className
D  3. img src
D  4. alt text
D  5. container className
D  6. options className --ALL HAVE
  7. cardType -- so car and bird can conditionally render if present - MIGHT NOT BE NECESSARY
D  8. price -- car and bird
  9. optionName and optionPrice - lyft and uber
  10. rides - lyft and uber


*/


