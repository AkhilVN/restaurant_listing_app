import React, { FC, useState } from 'react';

interface TitleProps {
  width: string,
  list: any,
  name: string,
  getCallBack: any
}

const Dropdown: FC<TitleProps> = ({ width, list, name, getCallBack }) => {
  const [price, setPrice] = useState('All')
  const [category, setCategory] = useState('All')

  const abc = (e:any) => {
    name==='price' ? setPrice(e) : setCategory(e)
    getCallBack(e)
  }
  return (
    <>
      <div className="dropdown-content" style={{ width: width }}>
        {list.map((e: any) =>
          <p><input type="radio" name={name} checked={name==='price' ? price===e : category===e} value={e} onClick={()=>abc(e)}/>{e}</p>
        )}
      </div>
    </>
  );
};

export default Dropdown;