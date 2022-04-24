//NPM Packages
import {useState, useEffect} from 'react'
import CategoryItem from '../components/CategoryItem';

// Project files
import { readCollection } from "../scripts/fireStore";

export default function MenuPage() {
//LocalState
const [categories, setCategories] = useState([]);
const [status, setStatus] = useState(0); //0 loading, 1: loaded, 2: error

//Method
useEffect(() => {
    async function loadData(path){
      const data = await readCollection(path);
      setCategories(data);
      setStatus(1);
    }
    loadData("categories")
  }, []);

//Components
const CategoryCards = categories.map((item) => (
    <CategoryItem item= {item} key={item.id}/>
  ));

  //Safeguard
if (status === 0) return <p>Loading</p>
if (status === 2) return <p>error</p>

  return (
    <div className="menu-page">
        <h1>Our Menu</h1>
        <section>{CategoryCards}</section>
    </div>   
  )
}
