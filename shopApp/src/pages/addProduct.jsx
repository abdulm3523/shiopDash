export const AddProduct = () => {
  return (
    <div id="add-product" className="mb-4">
      <h2>Add Product</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="productName" className="form-label">
            Product Name
          </label>
          <input
            name="title"
            type="text"
            className="form-control"
            id="productName"
            placeholder="Enter product name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productPrice" className="form-label">
            Price
          </label>
          <input
            name="price"
            type="text"
            className="form-control"
            id="productPrice"
            placeholder="Enter product price"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productCategory" className="form-label">
            Category
          </label>
          <select name="category" id="productCategory">
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
            <option value="Cloth">Cloth</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="productDescription" className="form-label">
            Description
          </label>
          <textarea
            name="description"
            className="form-control"
            id="productDescription"
            rows="3"
            placeholder="Enter product description"
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="productImage" className="form-label">
            Thumbnile
          </label>
          <input
            name="image"
            type="text"
            className="form-control"
            id="productImage"
            placeholder="Enter product price"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>
    </div>
  );
};
