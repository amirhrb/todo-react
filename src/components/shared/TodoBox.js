import React,{useContext, useState } from 'react';

//contxt
import {DataContext} from '../../contexts/DataContexProvider'

//styles
import styles from './TodoBox.module.css'

const TodoBox = ({data}) => {
    const {dispatch} = useContext(DataContext)

    const [inputs, setValue] = useState({text:data.text,selection:data.type})
    const changeHandler=(event)=>{
        setValue({
            ...inputs,
            [event.target.name]:event.target.value
        })
    }

    return (
        <div className={styles.todoBox}>
            {
                (!data.edit) ?
            <>
            <input type= 'checkbox' onChange={()=>dispatch({type:'CHECKED',payload:data})} value={data.isChecked}/>
            <strong
            className={
                data.isChecked ?
                styles.ischecked : ''
            }
            >{data.type}</strong>
            <p
            className={
                data.isChecked ?
                styles.ischecked : ''
            }
            >{data.text}</p>
            <button onClick={()=>dispatch({type:"EDIT", payload:data})}>Edit</button>
            <button onClick={()=>dispatch({type:"DELETE", payload:data})}>Delete</button>
            </>
            :
            <>
            <input 
                type= 'checkbox' 
                onChange={()=>dispatch({type:'CHECKED',payload:data})} 
                value={data.isChecked} />
            <select name='selection' value={inputs.selection} onChange={changeHandler}>
                <option value='work'>work</option>
                <option value='study'>study</option>
                <option value='fun'>fun</option>
            </select>
            <input type='text' name='text' value={inputs.text} onChange={changeHandler} placeholder=''/>
            <button onClick={()=>dispatch({type:"SAVE_EDITS", payload:{text:inputs.text,type:inputs.selection,key:data.key}})}>Save</button>
            </>
            }
            
        </div>
    );
};

export default TodoBox;