// Project files
import { readCollection, readDocument, getIdByName } from "../scripts/fireStore";
import { useParams } from "react-router-dom";
import {useState, useEffect} from 'react'
import ProductItem from "../components/ProductItem";
import CreateProduct from '../components/CreateProduct';


export default function AdminCategoryPage() {

  const { categoryId } = useParams();

  // Local state
  const [document, setDocument] = useState({});
  const [list, setList] = useState([]);
  const [status, setStatus] = useState(0);
  const [showForm, setShowForm] = useState(false);

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

  function openForm() {
    setShowForm(true);
  }

  //Safeguard
if (status === 0) return <p>Loading</p>
if (status === 2) return <p>error</p>


  //Components
  const ProductList = list.map((item) => (
    <ProductItem key={item.id} item={item} />
  ));
  return (
    <div className="category-page">
        <section className="category-title">
        <h1>{document.name}</h1>
        <p>{document.description}</p>
        <button onClick={openForm}>Add new product</button>
        {openForm && <CreateProduct formState={[showForm, setShowForm]} listState={[list,setList]} categoryId={categoryId}/>}
        {ProductList}
      </section>

    </div>
  )
}
