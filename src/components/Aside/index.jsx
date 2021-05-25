import React, { useState } from 'react';

import './style.scss';

function Aside(){
    const [checkbox, setCheckbox] = useState( {all: true, withoutTransfer: false, oneTransfer: false, twoTransfers: false, threeTransfers: false} );
    
    
    const filterList = (event) => {
        const value = event.target.value;

        setCheckbox(checkbox[value] = (event.target.checked) ? true : false);
       

        console.log(checkbox);
    }
  
  return(
    
    <aside>
        <h4>Количество пересадок</h4>
        <div className='filter_transferCount'>
            <label>
                <input 
                    className='transfer_checkbox' 
                    type='checkbox' 
                    name='all' 
                    value='all' 
                    onChange={filterList} 
                    checked />
                    Все
            </label>
            <label>
                <input className='transfer_checkbox' type='checkbox' name='withoutTransfer' value='withoutTransfer' onChange={filterList}/>
                Без пересадок
            </label>
            <label>
                <input className='transfer_checkbox' type='checkbox' name='oneTransfer' value='oneTransfer' onChange={filterList}/>
                1 пересадка
            </label>
            <label>
                <input className='transfer_checkbox' type='checkbox' name='twoTransfers' value='twoTransfers' onChange={filterList}/>
                2 пересадки
            </label>
            <label>
                <input className='transfer_checkbox' type='checkbox' name='threeTransfers' value='threeTransfers' onChange={filterList}/>
                3 пересадки
            </label>
        </div>
    </aside>
        
  )
};

export default Aside;