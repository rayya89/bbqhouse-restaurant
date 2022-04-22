// NPM packages
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

// Project files
import { getDocument } from "../scripts/fireStore";

export default function ProductPage() {
    const { categoryId, productId } = useParams();

    //Properties
    const navigate = useNavigate();

    // Local state
    const [document, setDocument] = useState({});
  const [status, setStatus] = useState(0);

  useEffect(() => {
    async function loadData() {
        const documentData = await getDocument(`categories/${categoryId}/content/`, productId);
        setDocument(documentData);
        setStatus(1);
    }
    loadData();
  }, []);

// Safeguard
if (status === 0) return <p>Loading</p>;
if (status === 2) return <p>error</p>;


//Components
const IngredientList = document.ingredients.map((item,index)=>(
    <li key={index}>{item}</li>
));

  return (
      <div className="product-page">
      <img src={document.imageURL} alt="product" />
      <h2>{document.name}</h2>
      <p>{document.longDescription}</p>
      <h2>Ingredients</h2>
      <ul>{IngredientList}</ul>
      <span>Price: {document.price}:-</span>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  )
}
