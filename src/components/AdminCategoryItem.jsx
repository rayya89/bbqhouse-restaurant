//NPM packages
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import UpdateCategory from "./UpdateCategory";

export default function AdminCategoryItem({ item, onDelete, categoryState }) {

    const { id, name } = item;

    //LocalState
    const [showForm, setShowForm] = useState(false);

    //Properties
    const navigate= useNavigate();

    //Methods
    function openForm() {
        setShowForm(true);
      }

  return (
    <div className="category-container">
            <article className='admin-category-detail'>
            <h2>{name}</h2>
            <button onClick={() => navigate(`category/${id}`)} className="button-secondary">Detailed menu</button>
            <button onClick={() => onDelete(id)}>Delete</button>
            <button onClick={openForm}>Update</button>
            {openForm && <UpdateCategory formState={[showForm, setShowForm]} categoryState={categoryState} item={item}/>}
            </article>
        </div>
  )
}
