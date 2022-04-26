import { useState } from "react";
import { createDocument } from "../scripts/fireStore";
import InputField from "../components/InputField";
import addProduct from "../data/addProductForm.json";

export default function CreateProduct({ formState, listState, categoryId }) {
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

  async function onCreate(event) {
    event.preventDefault();
    const newProduct = {
      name: name,
      shortDescription: shortDescription,
      longDescription: longDescription,
      ingredients: ingredients,
      imageURL: imageURL,
      thumbnail: thumbnail,
      price: price,
    };
    await createDocument(`categories/${categoryId}/content`, newProduct, name);
    newProduct.id = name;
    setList([...list, newProduct]);
    resetForm();
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

  //Safeguard
  if (!showForm) return null;

  return (
    <div className="admin-form">
      <section className="create-product">
        <form onSubmit={onCreate}>
          <h2>Create a new product and add it to the Category Menu</h2>
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
          <button>Create</button>
        </form>
      </section>
    </div>
  );
}
