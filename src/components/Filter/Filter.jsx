import "./Filter.module.css"
import { useDispatch } from "react-redux";
import {updateFilter} from 'redux/filterSlice'

export const Filter = () => {
    const dispatch = useDispatch();
    const setFilter = (e) => {
        dispatch(updateFilter(e.target.value))
    };
  
    return (
        <div><label htmlFor="filter">Find contacts by name</label>
            <input type="text" name="filter" onChange={setFilter} />
        </div>
    )
}
