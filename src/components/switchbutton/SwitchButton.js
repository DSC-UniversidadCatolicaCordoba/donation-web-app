import React, {Fragment, useEffect, useState} from 'react';
import './SwitchButton.css'

const SwitchButtons = () => {

    const [state, setState] = useState({
        checkedA: false,
        checkedB: false,
        checkedC: false,
        checkedD: false,
        checkedE: false,
        checkedF: false,
    });

    const handleClick = (event) => {
        setState({...state, [event.target.name]: !event.target.value});
        console.log(event.target.name, event.target.value)
    }

    const [color, setColor] = useState({
        checkedA: '',
        checkedB: '',
        checkedC: '',
        checkedD: '',
        checkedE: '',
        checkedF: '',
    });

    useEffect( ()=> {
        if(state.checkedA){
            setColor({...color, ["checkedA"]: "blackButton"})}
        if(state.checkedB){
            setColor({...color, ["checkedB"]: "blackButton"})}
        if(state.checkedC){
            setColor({...color, ["checkedC"]: "blackButton"})}
        if(state.checkedD){
            setColor({...color, ["checkedD"]: "blackButton"})}
        if(state.checkedE){
            setColor({...color, ["checkedE"]: "blackButton"})}
        if(state.checkedF){
            setColor({...color, ["checkedF"]: "blackButton"})}
    });

    return (
        <Fragment>
            <h2>Buttonswitch</h2>
            <div className='container'>
                <div className="row">
                    <button className={state.checkedA ? 'blackButton' : 'whiteButton'}
                            value={state.checkedA}
                            name="checkedA"
                            onClick={handleClick}
                    />
                    <button className={state.checkedB ? 'blackButton' : 'whiteButton'}
                            value={state.checkedB}
                            name="checkedB"
                            onClick={handleClick}
                    />
                    <button className={state.checkedC ? 'blackButton' : 'whiteButton'}
                            value={state.checkedC}
                            name="checkedC"
                            onClick={handleClick}
                    />
                    <button className={state.checkedD ? 'blackButton' : 'whiteButton'}
                            value={state.checkedD}
                            name="checkedD"
                            onClick={handleClick}
                    />
                    <button className={state.checkedE ? 'blackButton' : 'whiteButton'}
                            value={state.checkedE}
                            name="checkedE"
                            onClick={handleClick}
                    />
                    <button className={state.checkedF ? 'blackButton' : 'whiteButton'}
                            value={state.checkedF}
                            name="checkedF"
                            onClick={handleClick}
                    />
                </div>
            </div>
        </Fragment>
    )
}
export default SwitchButtons;
