//NPM Packages
import { useState, useEffect } from "react";
import CategoryItem from "../components/AdminCategoryItem";
import CreateCategory from "../components/CreateCategory";

// Project files
import { deleteDocument, readCollection } from "../scripts/fireStore";

// Format -1 (your component looks short but is not the real lengght after prettier)
// This comment will be apply to every page even if i dont put the comment over there
export default function AdminPage() {
  //LocalState
  const [categories, setCategories] = useState([]);
  const [status, setStatus] = useState(0); //0 loading, 1: loaded, 2: error
  const [showForm, setShowForm] = useState(false);

  //Method
  useEffect(() => {
    async function loadData(path) {
      const data = await readCollection(path);
      setCategories(data);
      setStatus(1);
    }
    loadData("categories");
  }, []);

  function openForm() {
    setShowForm(true);
  }

  async function onDelete(id) {
    await deleteDocument("categories", id);
    const clonedCategories = [...categories];
    const index = clonedCategories.findIndex((item) => item.id === id);
    clonedCategories.splice(index, 1);
    setCategories(clonedCategories);
  }

  //Components
  const CategoryCards = categories.map((item) => (
    <CategoryItem
      item={item}
      key={item.id}
      onDelete={onDelete}
      categoryState={[categories, setCategories]}
    />
  ));

  //Safeguard
  if (status === 0) return <p>Loading</p>;
  if (status === 2) return <p>error</p>;

  return (
    <div className="admin-page">
      <p>
        Welcome! Here you can control the information of the menu and the
        products of this website
      </p>
      <button onClick={openForm}>Add new category</button>
      {openForm && (
        <CreateCategory
          formState={[showForm, setShowForm]}
          categoryState={[categories, setCategories]}
        />
      )}
      <section>{CategoryCards}</section>
    </div>
  );
}
