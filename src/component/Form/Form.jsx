import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './form.scss'
import { addList,getList } from "../../action";

const Form = () => {
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [availability, setAvailability] = useState('')
    const [arrival_status, setArrival_status] = useState("Hasn't Arrived");
    const dispatch = useDispatch();
    const { addResult, addLoading, addError } = useSelector((state) => state.dataReducer);

    const data = {name, category, availability, arrival_status};
    

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addList(data));
    }

    useEffect(() => {
        if (addResult) {
          dispatch(getList());
        }
      }, [addResult, dispatch]);
  return (
    <div className="form">
        <form action="" onSubmit={handleSubmit}>
            <div className="name">
                <label htmlFor="">Name</label>
                <input type="text" name="name" id="name" placeholder='Enter your name' onChange={e => setName(e.target.value)}/>
            </div>
            <div className="category">
                <label htmlFor="">Category</label>
                <select name="" id="" onChange={e =>  setCategory(e.target.value)}>
                <option value="">Select Category</option>
                <option value="Category 1">Category 1</option>
                <option value="Category 2">Category 2</option>
                <option value="Category 3">Category 3</option>
                <option value="Category 4">Category 4</option>
                </select>
            </div>

            <div className="availibility">
                <label htmlFor="" className='title-label' >Availibility</label>
                <div className="radio-container">
                <div>
                <input type="radio" id="available" name="availibility" value="Available" onChange={e => setAvailability(e.target.value)}  />
                <label for="html">Available</label><br/>
                </div>
                <div>
                <input type="radio" id="full" name="availibility" value="Full"  onChange={e => setAvailability(e.target.value)} />
                <label for="html">Full</label><br/>
                </div>
                </div>
            </div>

            <div className="name">
                <label htmlFor="">Arrival</label>
                <input type="text" name="name" id="name" placeholder="Value Hasn't Arrived" onChange={e => setArrival_status(e.target.value)} />
            </div>

            <div className="submit">
                <input type="submit" value="Submit Form"  />
            </div>
    
        </form>
    </div>
  )
}

export default Form