//NPM packages
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UpdateProduct from "./UpdateProduct";

// format -1
export default function AdminProductItem({
  item,
  onDelete,
  listState,
  categoryId,
}) {
  const { id, name, shortDescription, thumbnail } = item;

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
    <div className="product-container">
      <img
        onClick={() => navigate(`${location.pathname}/${id}`)}
        src={thumbnail}
        alt="product thumbnail"
      />
      <div className="product-detail">
        <h2 onClick={() => navigate(`${location.pathname}/${id}`)}>{name}</h2>
        <p>{shortDescription}</p>
        <button onClick={() => onDelete(id)}>Delete</button>
        <button onClick={openForm}>Update</button>
        {openForm && (
          <UpdateProduct
            formState={[showForm, setShowForm]}
            listState={listState}
            item={item}
            categoryId={categoryId}
          />
        )}
      </div>
    </div>
  );
}
