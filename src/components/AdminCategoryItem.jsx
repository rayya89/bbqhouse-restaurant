//NPM packages
import { useNavigate } from 'react-router-dom'

export default function AdminCategoryItem({ item, onDelete }) {

    const { id, name, thumbnail, description } = item;

    //Properties
    const navigate= useNavigate();

  return (
    <div className="filpOrder">
            <img src={thumbnail} onClick={() => navigate(`category/${id}`)} alt="category thumbnail"/>
            <article className='category-detail'>
            <h2>{name}</h2>
            <p>{description}</p>
            <button onClick={() => navigate(`category/${id}`)} className="button-secondary">Detailed menu</button>
            <button onClick={() => onDelete(id)}>Delete</button>
            </article>
        </div>
  )
}
