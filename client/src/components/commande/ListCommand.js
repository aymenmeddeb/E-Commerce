import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPanier } from "../../js/action/panier"
import { CurrentUser } from '../../js/action/users';
import { Command } from './command'
import "./command.css"

const ListCommand = () => {
    const dispatch = useDispatch();
    const current = useSelector(state => state.userReducer.user)
    const paniers = useSelector(state => state.paniersReducer.paniers.filter(el=>el.user==current._id))
    // console.log(paniers)
    let total = [];
    for (let i = 0; i < paniers.length; ++i) {
        // console.log(paniers[i].price)
        let prix = parseInt(paniers[i].price)
        total.push(prix)
        // console.log(total)
    }
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    const sub_total = total.reduce(reducer, 0);
    // console.log(sub_total)
    const sum_total = sub_total + 10;



    useEffect(() => {
        dispatch(getPanier())
        dispatch(CurrentUser())

    }, [dispatch])

    
    return (

        <div className="container mb-4">
            <div className="row">
                <div className="col-12">
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col"> </th>
                                    <th scope="col">Products</th>
                                    <th scope="col">Available</th>
                                    <th scope="col" className="text-center">Quantity</th>
                                    <th scope="col" className="text-right">Price</th>
                                    <th> </th>
                                </tr>
                            </thead>
                            <tbody>
                                {!paniers ? <div className="ui active centered inline loader">loading...</div> : (paniers.filter(el=>el.user==current._id).map(el => <Command key={el._id} panier={el} />))}

                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>Sub-Total</td>
                                    <td className="text-right">{sub_total}DT</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>Shipping</td>
                                    <td className="text-right">10 DT</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td><strong>Total</strong></td>
                                    <td className="text-right"><strong>{sum_total} DT</strong></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col mb-2">
                    <div className="row">
                        <div className="col-sm-12  col-md-6">
                            <a href="/products">  <button className="btn btn-block btn-light">Continue Shopping</button></a>
                        </div>
                        <div className="col-sm-12 col-md-6 text-right">
                            <button className="btn btn-lg btn-block btn-success text-uppercase">Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ListCommand
