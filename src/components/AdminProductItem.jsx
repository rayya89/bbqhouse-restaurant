//NPM packages
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UpdateProduct from "./UpdateProduct";

export default function AdminProductItem({ item, onDelete, listState, categoryId }) {

const { id, name} = item;

//LocalState
const [showForm, setShowForm] = useState(false);

//Properties
  const location = useLocation();
  const navigate = useNavigate();

  //Methods
  function openForm() {
    setShowForm(true);
  }

  return (
    <div className="admin-product-item">
      <h2 onClick={() => navigate(`${location.pathname}/${id}`)}>{name}</h2>
      <button onClick={() => onDelete(id)}>Delete</button>
      <button onClick={openForm}>Update</button>
        {openForm && <UpdateProduct formState={[showForm, setShowForm]} listState={listState} item={item} categoryId={categoryId}/>}
  </div>
  )
}
