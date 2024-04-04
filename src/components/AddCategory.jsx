import { useState } from "react";


export const AddCategory = ({onNewCategory}) => {

    const [inputvalue, setInputvalue] = useState('One Punch');

    const onInputChange = ({target}) => {
        setInputvalue(target.value);
    }

    const onSumit = (event) => {
      event.preventDefault();
      if(inputvalue.trim().length <= 1) return;

      onNewCategory( inputvalue.trim());
      setInputvalue(' ');
    }

  return (
    <form onSubmit={(event) => onSumit(event)}>
    <input type="text" placeholder="buscar Gif" value={inputvalue} onChange={onInputChange}/>
    </form>

  )
}
