import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { REMOVESINGLEITEM,emptyCartData,ADD,DECREMENTITEM } from '../redux/actions/action';
import '../style/cartstyle.css';

const CartDetails = () => {
    const mycarts = useSelector((state)=> state.cartreducer);

    const [totalprice,setPrice] = useState(0);
    const [totalquantity,setTotalQuantity] = useState(0);

    const carts = mycarts.carts
    // console.log(carts);

    const dispatch = useDispatch();

    const handleRmvCart = (id)=>{
        dispatch(REMOVESINGLEITEM(id))
    }

    const handleSingleDecrement  = (data)=>{
        dispatch(DECREMENTITEM(data))
    }

    const handleIncrement = (data)=>{
        dispatch(ADD(data))
    }

    const emptycart = ()=> {
        dispatch(emptyCartData());
    }

    // Total Price
    const total = ()=>{
        let totalprice = 0;
        carts?.map((elm,ind)=>{
            totalprice = (elm.price * elm.qnty) + totalprice
            // return totalprice
        });
        setPrice(totalprice);
    }

    // Quantity
    const Quantity = ()=>{
        let totalquantity = 0
        carts?.map((elm,ind)=>{
            totalquantity = elm.qnty + totalquantity
            // return quantity
        });
        setTotalQuantity(totalquantity);
    }

    useEffect(()=>{
        total()
        Quantity()
    },[total,Quantity]);

  return (
    <>
            <div className='row justify-content-center m-0'>
                <div className='col-md-8 mt-5 mb-5 cardsdetails'>
                    <div className="card">
                        <div className="card-header bg-dark p-3">
                            <div className='card-header-flex'>
                                <h5 className='text-white m-0'>Cart Calculation{carts.length >0 ? `(${carts.length})`:""}</h5>
                                {/* <button className='btn btn-success mt-0 btn-sm' onClick={makePament}>Check Out <i class="fa fa-regular fa-arrow-right"></i></button> */}
                                {
                                    carts.length > 0 ? <button className='btn btn-danger mt-0 btn-sm'
                                    onClick={emptycart}
                                    ><i className='fa fa-trash-alt mr-2'></i><span>EmptyCart</span></button>
                                        : ""
                                }
                            </div>

                        </div>
                        <div className="card-body p-0">
                                {
                                    carts.length === 0 ? <table className='table cart-table mb-0'>
                                        <tbody>
                                            <tr>
                                                <td colSpan={6}>
                                                    <div className='cart-empty'>
                                                        <i className='fa fa-shopping-cart'></i>
                                                        <p>Your Cart Is Empty</p>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table> :
                                    <table className='table cart-table mb-0 table-responsive-sm'>
                                        <thead>
                                            <tr>
                                                <th>Action</th>
                                                <th>Product</th>
                                                <th>Name</th>
                                                <th>Price</th>
                                                <th>Qty</th>
                                                <th className='text-right'> <span id="amount" className='amount'>Total Amount</span></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                carts?.map((data,index)=>{
                                                    return (
                                                        <>
                                                            <tr>
                                                                <td>
                                                                    <button className='prdct-delete'
                                                                    onClick={()=>handleRmvCart(data.id)}
                                                                    ><i className='fa fa-trash-alt'></i></button>
                                                                </td>
                                                                <td><div className='product-img'><img src={data.imgdata} alt="" /></div></td>
                                                                <td><div className='product-name'><p>{data.dish}</p></div></td>
                                                                <td>{data.price}</td>
                                                                <td>
                                                                    <div className="prdct-qty-container">
                                                                        <button className='prdct-qty-btn' type='button' 
                                                                        onClick={data.qnty <=1 ?()=>handleRmvCart(data.id) :()=>handleSingleDecrement(data)}
                                                                        >
                                                                            <i className='fa fa-minus'></i>
                                                                        </button>
                                                                        <input type="text" className='qty-input-box' value={data.qnty} disabled name="" id="" />
                                                                        <button className='prdct-qty-btn' type='button' onClick={()=>handleIncrement(data)}>
                                                                            <i className='fa fa-plus'></i>
                                                                        </button>
                                                                    </div>
                                                                </td>
                                                                <td className='text-right'>₹ {data.qnty * data.price}</td>
                                                            </tr>
                                                        </>
                                                    )
                                                })
                                            }
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <th>&nbsp;</th>
                                                <th colSpan={3}>&nbsp;</th>
                                                <th>Items In Cart <span className='ml-2 mr-2'>:</span><span className='text-danger'>{totalquantity}</span></th>
                                                <th className='text-right'>Total Price<span className='ml-2 mr-2'>:</span><span className='text-danger'>₹ {totalprice}</span></th>
                                            </tr>
                                        </tfoot>
                                    </table>
                                }
                        </div>
                    </div>
                </div>
            </div>
        </>
  )
}

export default CartDetails