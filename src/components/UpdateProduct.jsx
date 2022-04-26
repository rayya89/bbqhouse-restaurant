import { useState } from "react";
import { updateDocument } from "../scripts/fireStore";
import InputField from "../components/InputField";
import addProduct from "../data/addProductForm.json";

export default function UpdateProduct({
  formState,
  listState,
  item,
  categoryId,
}) {
  const [showForm, setShowForm] = formState;
  const [list, setList] = listState;

  //Localstate
  const [name, setName] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [imageURL, setimageURL] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [longDescription, setLongDescription] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [price, setPrice] = useState(0);

  //Methods
  async function onUpdate(data) {
    await updateDocument(`categories/${categoryId}/content`, data);
    const clonedList = [...list];
    const index = clonedList.findIndex((item) => item.id === data.id);
    clonedList[index] = data;
    setList(clonedList);
  }

  function resetForm() {
    setName("");
    setLongDescription("");
    setShortDescription("");
    setPrice(0);
    setIngredients([]);
    setThumbnail("");
    setimageURL("");
    setShowForm(false);
  }

  function updateFields(event) {
    event.preventDefault();
    const editedItem = { ...item };
    editedItem.name = name;
    editedItem.shortDescription = shortDescription;
    editedItem.longDescription = longDescription;
    editedItem.price = price;
    editedItem.ingredients = ingredients;
    editedItem.imageURL = imageURL;
    editedItem.thumbnail = thumbnail;
    onUpdate(editedItem);
    resetForm();
  }

  //Safeguard
  if (!showForm) return null;

  return (
    <div className="admin-form">
      <section className="update-product">
        <form onSubmit={updateFields}>
          <h2>Update the product</h2>
          <InputField setup={addProduct.name} state={[name, setName]} />
          <InputField
            setup={addProduct.shortDescription}
            state={[shortDescription, setShortDescription]}
          />
          <InputField
            setup={addProduct.longDescription}
            state={[longDescription, setLongDescription]}
          />
          <InputField
            setup={addProduct.ingredients}
            state={[ingredients, setIngredients]}
          />
          <InputField setup={addProduct.price} state={[price, setPrice]} />
          <InputField
            setup={addProduct.thumbnail}
            state={[thumbnail, setThumbnail]}
          />
          <InputField
            setup={addProduct.imageURL}
            state={[imageURL, setimageURL]}
          />
          <button>Update</button>
        </form>
      </section>
    </div>
  );
}
