import React from 'react';
import Input from '../factoryComponents/Input.jsx';
import Button from '../factoryComponents/Button.jsx';
import Card from '../factoryComponents/Card.jsx';
import ListCard from '../factoryComponents/ListCard.jsx';
import styles from './OptionStyles.css';

const Statistics = (props) => {

  const { button, className, carImg, carPrice, birdImg, birdPrice, lyftImg, lyftRides, uberImg, uberRides, handleInputChange, tripSubmit, tripSubmitted } = props;

  const { buttonStyle, card, carImgStyle, carContainer, options, item, img, container, name, price, flexInput, border, flexSubmit, textInput } = styles;
    
  return (
      
    <div className={className.statsContainer}>
        
      <div className={className.statsFlex}>

        <Card cardType="car" cardStyle={card} imgStyle={carImgStyle} itemStyle={item} src={carImg} alt="CarImg" containerStyle={carContainer} optionsStyle={options} price={carPrice} />
        <Card cardType="bird" cardStyle={card} imgStyle={img} itemStyle={item} src={birdImg} alt="BirdLogo" containerStyle={container} optionsStyle={options} price={birdPrice} />          
        <ListCard cardStyle={card} imgStyle={img} itemStyle={item} src={lyftImg} alt="LyftLogo" containerStyle={container} optionsStyle={options} rides={lyftRides} />          
        <ListCard cardStyle={card} imgStyle={img} itemStyle={item} src={uberImg} alt="UberLogo" containerStyle={container} optionsStyle={options} rides={uberRides} />
            
        {carPrice.costPerGallon ? 
        <div className={flexInput}>

          <div className={border}>
            
            <div>
              <h2>Save this commute?</h2>
            </div>  
              
            <div className={flexSubmit}>
              <Input className={textInput} id='tripName' type='text' placeholder='Name your trip' handleChange={handleInputChange} />  
              <Button className={buttonStyle} id="Save" submitFunc={tripSubmit} tripSubmitted={tripSubmitted} />                                 
            </div>
            
          </div>
            
        </div> 
        : null}
        
      </div>
  
    </div>
  )
}

export default Statistics;