import { useState } from "react";
import { createDocument } from "../scripts/fireStore";
import InputField from "../components/InputField";
import addCategory from "../data/addCategoryForm.json"

export default function CreateCategory({ formState, categoryState }) {

    const [showForm, setShowForm] = formState;
    const [categories,setCategories] = categoryState;
    
  //Localstate
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setimageURL] = useState("");
  const [thumbnail, setThumbnail] = useState("");


  async function onCreate(event) {
    event.preventDefault();
  const newCategory = {
    name: name,
    description: description,
    imageURL: imageURL,
    thumbnail: thumbnail
  }
  await createDocument("categories", newCategory, name);
  newCategory.id = name;
  setCategories([...categories,newCategory]);
  resetForm();
  }

  function resetForm() {
    setName("");
    setDescription("");
    setThumbnail("");
    setimageURL("");
    setShowForm(false);
  }

//Safeguard
if (!showForm) return null;

  return (
    <div>
      <section className="create-category">
      <form onSubmit={onCreate}>
      <h2>Create a category and add it to the Menu</h2>
      <InputField setup={addCategory.name} state={[name,setName]}/>
      <InputField setup={addCategory.description} state={[description,setDescription]}/>
      <InputField setup={addCategory.thumbnail} state={[thumbnail,setThumbnail]}/>
      <InputField setup={addCategory.imageURL} state={[imageURL,setimageURL]}/>
      <button>Create</button>
    </form>
    </section>
    </div>
  )
}
