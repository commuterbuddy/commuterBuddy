import React from 'react';

const ListCard = (props) => {

  const { cardStyle, src, alt, imgStyle, containerStyle, optionsStyle, cardType, price, itemStyle } = props;


  return (



  );

}

export default ListCard;

            <div className={card}>
              <img className={img} src={lyftImg} alt="LyftLogo" />
              <div className={container}>
                <ul className={options}>
                  {lyftRides.map((option) => {
                    return (
                      <li className={item}>
                        <b>{option.name}</b>{option.price}
                      </li>
                    )
                  })}
                </ul>
              </div>          
            </div>
