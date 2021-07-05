import { makeStyles } from '@material-ui/core';
import React, {  useRef } from 'react'
// import { useSelector } from 'react-redux';
import Header from '../components/Header';
// import { selectPrice } from '../features/PriceSlice';

const Paypal = () => {
    const classes = useStyle();
    const paypal = useRef();
    // const price = useSelector( selectPrice );

    // useEffect(() => {
    //     window.paypal.Buttons({
    //         createOrden:(data, actions, err)=>{
    //             return actions.order.create({
    //                 intent:"CAPTURE",
    //                 purchase_units:[
    //                     {
    //                         description:"Netflix subscription",
    //                         amount:{
    //                             currency_code:"USD",
    //                             value: price,
    //                         },
    //                     },
    //                 ],
    //             });
    //         },
    //         onApprove: async (data, actions)=>{
    //             const order= await actions.order.capture();
    //             console.log(order);
    //         },
    //         onError:err=>console.log(err),
    //     }).render(paypal.current)
    // },[]);

    return (
        <div 
            ref={paypal}
            className={classes.root}>
            <Header/>
            paypal
        </div>
    )
}

const useStyle = makeStyles((theme)=>({
    root:{
    },
}));

export default Paypal;
