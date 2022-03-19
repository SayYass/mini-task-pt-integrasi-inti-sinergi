import "./table.scss";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getList,  checkedList } from "../../action";
const Table = () => {
  const { getListResult, getListLoading, getListError, deleteResult , updateResult } =
  useSelector((state) => state.dataReducer);
  const dispatch = useDispatch();
  const [selected , setSelected] = useState([]);
  useEffect(() => {
    dispatch(getList());
  }, [dispatch]);
  
  const handleChecked = (e) => {
   
    if(e.target.checked){
      setSelected([...selected, e.target.value])
    }else{
      setSelected(selected.filter(item => item !== e.target.value))
    }
    
  }
  useEffect(() => {
    dispatch(checkedList(selected));
    
  }, [selected, dispatch]);
  
  useEffect(() => {
    
    setSelected([]);
    
  }, [deleteResult , updateResult]);


  return (
    <table className="table">
      <thead>
        <tr>
          <th>
            {" "}
            <input type="checkbox" />{" "}
          </th>
          <th>Name</th>
          <th>Category</th>
          <th>Availibility</th>
          <th>Arrival</th>
        </tr>
      </thead>
      <tbody>
        {getListResult ? (
          getListResult.map((item) => {
            return (
              <tr>
                <td className="first">
                  <input type="checkbox" className="checkboxtable" value={item._id} onChange={handleChecked} />
                </td>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.availability}</td>
                <td className="last">{item.arrival_status}</td>
              </tr>
            );
          })
        ) : getListLoading ? (
          <p>Loading...</p>
        ) : getListError ? (
          <p>{getListError.message}</p>
        ) : (
          "data kosong"
        )}
      </tbody>
    </table>
  );
};

export default Table;
