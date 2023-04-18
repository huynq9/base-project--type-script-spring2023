import { useState, useEffect } from "react";
import { deleteProduct, getAll } from "../api/products";
import { IProducts } from "../interfaces/products";
import axios from "axios";
import { instance } from "../api/instance";
import { Link, useNavigate } from "react-router-dom";
export const List = () => {
  const [products, setProducts] = useState<IProducts[]>([]);
  const naviagate = useNavigate();
  const fecthProducts = async () => {
    const { data } = await getAll();
    return setProducts(data);
  };

  useEffect(() => {
    fecthProducts();
  }, []);
  console.log(products);
  const remove = async (id: string) => {
    const result = confirm("Are you sure you want to delete this product?");
    if (result == true) {
      await deleteProduct(id);
      setProducts((products) => products.filter((item) => item.id !== id));
      alert("Product deleted successfully");
    } else {
    }
  };
  return (
    <div>
      <Link to="/admin/add">Add</Link>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>name</th>
            <th>des</th>
            <th>price</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.des}</td>
              <td>{item.price}</td>
              <td>
                <button onClick={() => remove(item.id)}>delete</button>
                <Link to={`/admin/edit/${item.id}`}>update</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
