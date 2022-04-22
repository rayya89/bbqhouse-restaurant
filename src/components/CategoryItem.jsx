//NPM packages
import { useNavigate } from 'react-router-dom'

export default function CategoryItem({ item }) {

    const { name, thumbnail, description } = item;
    
    //Properties
    const navigate= useNavigate();

  return (
        <div className="filpOrder">
            <img src={thumbnail} onClick={() => navigate(`${name}`)} alt="category thumbnail"/>
            <article className='category-detail'>
            <h2>{name}</h2>
            <p>{description}</p>
            <button onClick={() => navigate(`${name}`)} className="button-secondary">Detailed menu</button>
            </article>
        </div>
        )}

