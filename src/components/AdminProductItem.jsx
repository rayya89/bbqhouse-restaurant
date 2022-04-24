//NPM packages
import { useLocation, useNavigate } from "react-router-dom";

function AdminProductItem({ item, onDelete }) {

const { id, name, shortDescription, thumbnail } = item;

//Properties
  const location = useLocation();
  const navigate = useNavigate();

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
    </div>
  </div>
  )
}

export default AdminProductItem