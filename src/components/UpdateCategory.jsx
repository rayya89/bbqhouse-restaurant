import { useState } from "react";
import { updateDocument } from "../scripts/fireStore";
import InputField from "../components/InputField";
import addCategory from "../data/addCategoryForm.json";

export default function UpdateCategory({ formState, categoryState, item }) {

    const [showForm, setShowForm] = formState;
    const [categories,setCategories] = categoryState;

    //LocalState
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [imageURL, setimageURL] = useState("");
    const [thumbnail, setThumbnail] = useState("");

    //Methods
    async function onUpdate(data){
      await updateDocument("categories",data);
      const clonedCategories = [...categories];
      const index = clonedCategories.findIndex((item) => item.id === data.id)
      clonedCategories[index] = data;
      setCategories(clonedCategories);
  }

  function resetForm() {
    setName("");
    setDescription("");
    setThumbnail("");
    setimageURL("");
    setShowForm(false);
  }

  function updateFields(event) {
    event.preventDefault();
      const editedItem = {...item};
      editedItem.name=name;
      editedItem.description=description;
      editedItem.imageURL=imageURL;
      editedItem.thumbnail=thumbnail;
    onUpdate(editedItem);
    resetForm();
  }

//Safeguard
if (!showForm) return null;

  return (
    <div>
      <section className="create-category">
      <form onSubmit={updateFields}>
      <h2>Update the category</h2>
      <InputField setup={addCategory.name} state={[name,setName]}/>
      <InputField setup={addCategory.description} state={[description,setDescription]}/>
      <InputField setup={addCategory.thumbnail} state={[thumbnail,setThumbnail]}/>
      <InputField setup={addCategory.imageURL} state={[imageURL,setimageURL]}/>
      <button>Update</button>
    </form>
    </section>
    </div>
  )
}
