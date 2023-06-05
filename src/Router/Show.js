import React from 'react'

function Show({props}) {

    // const deploy = useSelector((state) => state.route.cart);
    // const dispatch=useDispatch();
    // dispatch(route(props))

  return (<>
    <div className="productimg">
      {/* {q1} */}
     <img src={props.imgurl} alt="" />
     <div className="info">

     <h2 className="price"> Rs:{(props.price*50).toFixed(1)}</h2>
     <h3 className="price">Quantity {props.q}</h3>
     </div>

    </div>
  
  </>
  )
}

export default Show