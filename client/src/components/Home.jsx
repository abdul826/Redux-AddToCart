import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import CardsData from './CardData';
import { ADD } from '../redux/actions/action';
import { DarkModeContext } from '../context/DarkModeContext';

const Home = () => {
    const [cartData, setCartData] = useState(CardsData);

    const data = useSelector((state)=> state.cartreducer);

    const {darkMode} = useContext(DarkModeContext);

    const dispatch = useDispatch();

    const send = (data)=> {
        dispatch(ADD(data));
    }

    // console.log(data);
  return (
    <>
     <div className='container mt-3'>
      <h2 className='text-center'>Add to Cart Projects</h2>

      <div className="row d-flex justify-content-center align-items-center">
        {
          cartData.map((element, id) => {
            return (
              <>
                <Card style={{ width: '22rem',border:"none" }} className={darkMode ? "mx-2 mt-4 card_style dark" : "mx-2 mt-4 card_style light"}>
                  <Card.Img variant="top" src={element.imgdata} style={{height:"16rem"}} className="mt-3" />
                  <Card.Body>
                    <Card.Title>{element.dish}</Card.Title>
                    <Card.Text>
                      <p className={darkMode ? 'textColor' : ""}>Price : ₹ {element.price}</p>
                    </Card.Text>
                    <div className="button_div d-flex justify-content-center">
                    <Button variant="primary"  
                      onClick={()=> send(element)}
                     className='col-lg-12'>Add to Cart</Button>
                    </div>
                  
                  </Card.Body>
                </Card>
              </>
            )
          })
        }

      </div>
    </div>
</>
  )
}

export default Home