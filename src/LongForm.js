import React from 'react';
import { useReducer } from 'react';
import { initialState, reducer } from './State/formReducer';

const LongForm = () => {

    const formHandler = (event) => {
        event.preventDefault()
        console.log(state)
    }
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div >
            <div className='flex justify-center mt-14 bg-base-200 px-5 py-14 mx-40'>
                <form onSubmit={formHandler} className='flex gap-7' action="">
                    <div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">What is your first name?</span>
                            </label>
                            <input onBlur={(e) => dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })} name="firstName" type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email?</span>
                            </label>
                            <input onBlur={(e) => dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })} name="email" type="email" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Education?</span>
                            </label>
                            <select onChange={(e) => dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })} name='education' className="select select-bordered w-full max-w-xs">
                                <option selected>SSC</option>
                                <option>HSC</option>
                                <option>Undergraduate</option>
                            </select>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Feedback?</span>
                            </label>
                            <textarea onBlur={(e) => dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })} name='feedback' className="textarea textarea-bordered" placeholder="Type here"></textarea>
                        </div>
                        <div className="flex gap-3 mt-5">
                            <input onClick={() => dispatch({ type: "TOGGLE" })} name='checkbox' type="checkbox" className="checkbox" />
                            <div>I agree to terms and condition?</div>
                        </div>

                    </div>
                    <div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">What is your last name?</span>
                            </label>
                            <input onBlur={(e) => dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })} name="lastName" type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Gender?</span>
                            </label>
                            <div className='flex gap-4'>
                                <input onBlur={(e) => dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })} type="radio" id="Male" name="gender" value="Male" />
                                <label for="Male">Male</label><br />
                                <input onBlur={(e) => dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })} type="radio" id="Female" name="gender" value="Female" />
                                <label for="Female">Female</label><br />
                                <input onBlur={(e) => dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })} type="radio" id="Custom" name="gender" value="Custom" />
                                <label for="Custom">Custom</label>
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">Number of PCs?</span>
                                </label>
                                <div className='flex gap-5'>
                                    <p className='btn'>-</p>
                                    <input onBlur={(e) => dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })} name="pcNumber" type="number" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                                    <p className='btn'>+</p>
                                </div>
                            </div>
                            <button disabled={state.checkbox === false} className='btn mt-5' type="submit">Submit</button>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LongForm;