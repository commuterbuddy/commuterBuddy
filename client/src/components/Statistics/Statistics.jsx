import React, { Component } from 'react';
import Input from '../factoryComponents/Input.jsx';
import Button from '../factoryComponents/Button.jsx'
import styles from './OptionStyles.css';

class Statistics extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {

    const { button, className, carImg, carPrice, birdImg, birdPrice, lyftImg, lyftRides, uberImg, uberRides, handleInputChange, tripSubmit, tripSubmitted } = this.props;

    const { buttonStyle, card, carImgStyle, carContainer, options, item, img, container, name, price, flexInput, border, flexSubmit, textInput } = styles;
    
    return (
      
      <div className={className.statsContainer}>
        
        <div className={className.statsFlex}>

            <div className={card}>
              <img className={carImgStyle} src={carImg} alt="CarImg" />
              <div className={carContainer}>
                <div className={options}>
                  {carPrice.costPerGallon ? <p className={item}><b>Price per gallon</b>{`$${carPrice.costPerGallon.toFixed(2)}`}</p> : null}
                  {carPrice.dailyGasCost ? <p className={item}><b>Price per day</b>{carPrice.dailyGasCost}</p> : null}
                </div>
              </div>          
            </div>

            <div className={card}>
              <img className={img} src={birdImg} alt="BirdLogo" />
              <div className={container}>
                <div className={options}>
                  {birdPrice ? <p className={item}><b>Scooter</b>{birdPrice}</p> : null}
                </div>
              </div>          
            </div>

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

            <div className={card}>
              <img className={img} src={uberImg} alt="LyftLogo" />
              <div className={container}>
                <ul className={options}>
                  {uberRides.map((option) => {
                    return (
                      <li className={item}>
                        <b>{option.name}</b>{option.price}
                      </li>
                    )
                  })}
                </ul>
              </div>          
            </div>

            
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
}

export default Statistics;