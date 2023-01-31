// import React from 'react';
// import {
//     Card,
//     CardHeader,
//     CardBody,
//     CardFooter,
//     Typography,
//     Button,
// } from "@material-tailwind/react";
// import { useReducer } from 'react';

// const Counter = () => {
//     const initialState = 0
//     const reducer = (state, action) => {
//         if (action.type === "INCREMENT") {
//             return state + action.payload.count
//         }
//         else if (action.type === "DECREMENT") {
//             return state - action.payload.count
//         }
//     }
//     const [state, dispatch] = useReducer(reducer, initialState)
//     return (
//         <div className='flex justify-center mt-40 '>
//             <div>
//                 <Card className="w-96">
//                     <CardBody className="text-center">
//                         <div>
//                             <p className='font-bold my-10'>{state}</p>
//                         </div>
//                         <Button onClick={() => dispatch({ type: 'INCREMENT', payload: { count: 5 } })} className='mr-5' color="green">Increment</Button>
//                         <Button onClick={() => dispatch({ type: 'DECREMENT', payload: { count: 5 } })} color="red">Decrement</Button>
//                     </CardBody>

//                 </Card>
//             </div>
//         </div>
//     );
// };

// export default Counter;