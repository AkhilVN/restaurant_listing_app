import React, { FC, useState } from 'react';
import Dropdown from '../dropdown';
const { FilterWrapper, HorizontalLine, FilterBy, FilterTab, OpenNow, FilterDropDown, Icon, ClearButtonWrapper, ClearButton } = require('../filter/style.js');

interface TitleProps {
    openStatus: any,
    price: any,
    category: any
}

const Filter: FC<TitleProps> = ({ openStatus, price, category }) => {
    const [openNow, setOpenNow] = useState(false);
    const [clearAll, setClearAll] = useState(false)

    const changeOpenNow = () => {
        setOpenNow(!openNow)
        openStatus(!openNow)
    }
    const changePrice = (val:any) => {
        price(val)
    }

    const changeCategory = (val:any) => {
        category(val.toLowerCase())
    }
    const timeOutFunction = () => {
        setClearAll(false)
    }

    const clearFilters = () => {
        if(!clearAll){
            setClearAll(true)
            openNow && changeOpenNow()
            changePrice('All')
            changeCategory('All')
            setTimeout(timeOutFunction, 2000)
        }
    }

    const PRICES = ['All', '$', '$$', '$$$', '$$$$']
    const CATEGORIES = ['All', 'Tacos', 'Thai', 'FoodStands', 'Ramen', 'Indian', 'Pizza' ]

    return (
        <>
            <HorizontalLine>
                <FilterWrapper>
                    <FilterBy>Filter by:</FilterBy>
                    <OpenNow>
                        <input type="radio" name="FilterTab" checked={openNow} onClick={() => changeOpenNow()} />
                        <span> Open Now</span>
                        <hr />
                    </OpenNow>
                    <FilterTab className="dropdown" width="97px">
                        <FilterDropDown><span>Price</span><Icon className="fa fa-chevron-down" />
                        </FilterDropDown>
                        <hr />
                        <Dropdown width="97px" list={PRICES} name="price" clearAll={clearAll} getCallBack={(val:any)=>changePrice(val)}/>
                    </FilterTab>
                    <FilterTab className="dropdown" width="193px">
                        <FilterDropDown><span>Categories</span><Icon className="fa fa-chevron-down" />
                        </FilterDropDown>
                        <hr />
                        <Dropdown width="193px" list={CATEGORIES} name="category" clearAll={clearAll} getCallBack={(val:any)=>changeCategory(val)}/>
                    </FilterTab>
                    <ClearButtonWrapper><ClearButton onClick={()=> clearFilters()}>ClearAll</ClearButton></ClearButtonWrapper>
                </FilterWrapper>
            </HorizontalLine>
        </>
    );
};

export default Filter;