import "./selected.scss";
import CloseIcon from "@mui/icons-material/Close";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateList,
  getList,
  deleteList,
  checkedList
} from "../../action";

const SelectedModal = () => {
  const { checkedListResult, updateResult, deleteResult } = useSelector(
    (state) => state.dataReducer
  );
  const [selected, setSelected] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setSelected(checkedListResult);
  }, [checkedListResult]);

  useEffect(() => {
    dispatch(getList());
    dispatch(checkedList(false))
    console.log('selected' + selected);
    console.log('checkedListResult' + checkedListResult);
  }, [updateResult]);

  useEffect(() => {
    dispatch(getList());
    dispatch(checkedList(false))
    console.log('deleteselected' + selected);
    console.log('deletecheckedListResult' + checkedListResult);
  }, [deleteResult]);

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(updateList(selected));
    
  };
  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteList(selected));
  };
  if (selected.length > 0) {
    return (
      <div className="modal">
        <div className="close-button">
          <CloseIcon onClick={() => setSelected([])} />
        </div>
        <div className="selected-table">{selected.length} Selected</div>
        <div className="mark-button" onClick={handleEdit}>
          <EditOutlinedIcon className="icon" />
          <span>Mark as Arrived</span>
        </div>
        <div className="delete-button" onClick={handleDelete}>
          <DeleteForeverOutlinedIcon />
          Delete Table
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default SelectedModal;
