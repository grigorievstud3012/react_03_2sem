import react, { useState } from 'react'
import InputMask from 'react-input-mask'

let inp 
let protoinpvalue = ''
let selvalue = ''
function PhoneInput() {
const [inpvalue, setInpvalue] = useState('');


function def() {
    inp = <input autoFocus value={inpvalue} onChange={(e => {setInpvalue(e.target.value)})}></input>    
        if (inpvalue.length > 4) {
            setInpvalue('+')
        } else if ((/\D/ig).test(inpvalue.substr(1,4))) {
            setInpvalue('+' + inpvalue.replace(/\D/ig, ''))
        }
    selvalue = 'non'
}
let radtext = []
let rad = []
function mob4(m1, m2, m3, m4) {
    radtext = [m1, m2, m3, m4]
    for (let i = 0;i < 4;i++) {
        rad[i] = <div key={i}>
            <input type='radio' name='operator'></input>
            <span>{radtext[i]}</span>
            </div>
    }
}
function mob3(m1, m2, m3) {
    radtext = [m1, m2, m3]
    for (let i = 0;i < 3;i++) {
        rad[i] = <div key={i}>
            <input type='radio' name='operator'></input>
            <span>{radtext[i]}</span>
            </div>
    }
}
if (inpvalue.length == 0) {
    setInpvalue('+')
}
switch(inpvalue.substr(0,2)) {
    
    case '+3':
        switch(inpvalue.substr(0,4)) {
            case '+375':
                mob3('MTC', 'A1', 'life:)')
                inp = <InputMask autoFocus maskChar=" " value={inpvalue} mask="+999 (99) 999-99-99" onChange={(e => {setInpvalue(e.target.value)})}/>
                selvalue = '+375'
            break;
            case '+380':
                mob3('Lifecell', 'Vodafone', 'Київстар')
                inp = <InputMask autoFocus maskChar=" " value={inpvalue} mask="+999 (99) 999-99-99" onChange={(e => {setInpvalue(e.target.value)})}/>
                selvalue = '+380'
            break;
            case '+370':
                mob3('Telia', 'Bite', 'Tele2')
                inp = <InputMask autoFocus maskChar=" " value={inpvalue} mask="+999 (99) 999-99-99" onChange={(e => {setInpvalue(e.target.value)})}/>
                selvalue = '+370'
            break;
            case '+371':
                mob3('LMT', 'Tele2', 'Bite')
                inp = <InputMask autoFocus maskChar=" " value={inpvalue} mask="+999 9999-9999" onChange={(e => {setInpvalue(e.target.value)})}/>
                selvalue = '+371'
            break;
            default: def()
        }
    break;

    case '+7':
        mob4('Билайн', 'Мегафон', 'МТС', 'Теле2')
        inp = <InputMask autoFocus maskChar=" " value={inpvalue} mask="+9 (999) 999-99-99" onChange={(e => {setInpvalue(e.target.value)})}/>
        selvalue = '+7'
    break;


    case '+4':
        switch(inpvalue.substr(0,3)) {
            case '+48':
                mob4('Orange', 'Play', 'Plus', 'T-Mobile')
                inp = <InputMask autoFocus maskChar=" " value={inpvalue} mask="+99 999-999-999" onChange={(e => {setInpvalue(e.target.value)})}/>
                selvalue = '+48'
            break;
            default: def()
        }
    break;
        

    default: def()

}

    return(
        <div className="form-group">
            <label htmlFor="phone">Телефон: </label><br/>
            <select value={selvalue} id="country" className="form-control" onChange={(event) => {selvalue = event.target.value;setInpvalue(event.target.value)}}>
                <option value="" hidden>Страна</option>
                <option value="+375">Беларусь +375</option>
                <option value="+7">Россия +7</option>
                <option value="+380" data-selected="true">Украина +380</option>
                <option value="+48">Польша +48</option>
                <option value="+370">Литва +370</option>
                <option value="+371">Латвия +371</option>
            </select>
            {inp}
            {rad}
            </div>
    )
}

export default PhoneInput