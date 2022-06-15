import React, { FC, useState, useEffect } from 'react';

interface TitleProps {
  width: string,
  list: any,
  name: string,
  getCallBack: any,
  clearAll: boolean
}

const Dropdown: FC<TitleProps> = ({ width, list, name, getCallBack, clearAll }) => {
  const [price, setPrice] = useState('All')
  const [category, setCategory] = useState('All')
  useEffect(() => {
    if(clearAll){
      setPrice('All')
      setCategory('All')
      getCallBack('All')
    } 
  }, [clearAll])

  const filter = (e:any) => {
    name==='price' ? setPrice(e) : setCategory(e)
    getCallBack(e)
  }
  return (
    <>
      <div className="dropdown-content" style={{ width: width }}>
        {list.map((e: any) =>
          <p><input type="radio" name={name} checked={name==='price' ? price===e : category===e} value={e} onClick={()=>filter(e)}/>{e}</p>
        )}
      </div>
    </>
  );
};

export default Dropdown;