// Project files
import { readCollection, readDocument } from "../scripts/fireStore";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductItem from "../components/ProductItem";

// good
export default function CategoryPage() {
  const { categoryId } = useParams();

  // Local state
  const [document, setDocument] = useState({});
  const [list, setList] = useState([]);
  const [status, setStatus] = useState(0);

  useEffect(() => {
    async function loadData() {
      const documentData = await readDocument("categories", categoryId);
      const listData = await readCollection(
        `categories/${categoryId}/content/`
      );

      setDocument(documentData);
      setList(listData);
      setStatus(1);
    }
    loadData();
  }, []);

  //Safeguard
  if (status === 0) return <p>Loading</p>;
  if (status === 2) return <p>error</p>;

  //Components
  const ProductList = list.map((item) => (
    <ProductItem key={item.id} item={item} />
  ));

  return (
    <div className="category-page">
      <section className="category-title">
        <h1>{document.name}</h1>
        <p>{document.description}</p>
      </section>
      {ProductList}
    </div>
  );
}
