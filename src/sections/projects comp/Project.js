import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PopUpWindow from './PopUpWindow';

import style from './Project.module.css'


export default function Project({data}) {
  const [showPopUp, setShowPopUp] = useState(false);
  
  const togglepopUp = function (){
    setShowPopUp(!showPopUp);
  }


  return (
    <div className={`m-3 ${style.wrapper}`}>
      <div className={`${style.popUpWindow} ${showPopUp ? style.show : style.hide}`}>
        <PopUpWindow liveSite={data.liveLink} github={data.github} porjectImg={data.img} name={data.name}/>
      </div>
      <Card className={style.card}>
        <Card.Header className={style.cardBords} as="h5">{data.name}</Card.Header>
        <Card.Body className={style.cardBody}>
          <div className=' d-flex flex-column justify-content-between h-100'>

          <Card.Text className={style.cardText}>{data.des}</Card.Text>
          <Button onClick={togglepopUp} className={style.btn} variant="primary">{showPopUp ? 'Hide Details' : 'View Details'}</Button>
          </div>
        </Card.Body>
        <Card.Footer className={style.cardBords}>
          <small className="text-light">{data.creationDate}</small>
        </Card.Footer>
      </Card>
    </div>
  )
}
