import {FaFreeCodeCamp} from 'react-icons/fa';
import { useEffect,useState } from 'react';

const Drum = (props) => {

    const [isOn,setIsOn]=useState(true)
    const [audioName,setAudioName] = useState({name:''})
    console.log(audioName);
    useEffect(()=>{
        document.addEventListener('keydown',(event)=>{
            play(event.key.toUpperCase())
        })
    },[])

    return ( 
        <div className="drum">
            <div className="container" id="drum-machine">
                <div id="display">
                    <div className="left">
                        {
                            isOn ===false ?
                            props.audios.map((aud,index)=>{
                            return <button className="drum-pad" onClick={()=>{play(aud.id,aud.name)}} key={index} id={aud.src} name={aud.name}>
                                    {aud.id}
                                    <audio className="clip" id={aud.id} src={aud.src}></audio>
                                </button>
                        }): (
                            props.audios.map((aud,index)=>{
                                return <button className="drum-pad"  >
                                    {aud.id}
                                    <audio className="clip"></audio>
                                </button>
                            })
                        )

                        }
                    </div>
                    <div className="right">
                        <div className="brand">
                            <span>FCC</span>
                            <FaFreeCodeCamp  className='icon'/>
                        </div>
                        <div className="form-switch on-off-check">
                            <label htmlFor="mySwitch">Power</label>
                            <input onClick={handleCheckbox} value={isOn} type="checkbox" className='form-check-input ms-1 mt-0  ' role='switch' id='mySwitch' />
                        </div>
                        <div className="show">
                            <h4>{audioName.name}</h4>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
     );

     function play(id,name){
        const audi=document.getElementById(id)
        audi.play()
        setAudioName({name})
     }
     function handleCheckbox(){
        setIsOn(!isOn)
     }
}
 
export default Drum;