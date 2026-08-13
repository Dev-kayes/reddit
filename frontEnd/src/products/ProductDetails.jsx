import React, { useEffect } from "react";
import { toast } from "react-toastify";
// dummy API:
const selectedProduct = {
  name: "Stylish Jacket",
  price: 120,
  originalPrice: 150,
  description: "This is a Stylish Jacket",
  brand: "Puma",
  material: "Leather",
  sizes: ["S", "M", "L", "XL"],
  colors: ["Red", "Blue", "Green"],
  images: [
    {
      url: "https://picsum.photos/200?random=9",
      alt: "Stylished T-Shirt-1",
    },
    {
      url: "https://picsum.photos/200?random=11",
      alt: "Stylished T-Shirt-2",
    },
  ],
};

const ProductDetails = () => {
  const [mainImage, setMainImage] = React.useState("");
  const [selectedColor, setSelectedColor] = React.useState("");
  const [selectedSize, setSelectedSize] = React.useState("");
  const [selectedQuantity, setSelectedQuantity] = React.useState(1);
  const [isDisable, setIsDisable] = React.useState(false);
  useEffect(() => {
    if (selectedProduct?.images?.length > 0) {
      setMainImage(selectedProduct.images[0].url);
    }
  }, [selectedProduct]);

  const handleQuantityChange = (action) => {
    if (action === "plus") {
      setSelectedQuantity((prev) => prev + 1);
    } else if (action === "minus" && selectedQuantity > 1) {
      setSelectedQuantity((prev) => prev - 1);
    }
  };
  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      toast.error(
        "Please select a color and size before adding to cart.",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        },
        { duration: 3000 },
      );
      return;
    }
    setIsDisable(true);
    setTimeout(() => {
      toast.success("Product added to cart!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setIsDisable(false);
    }, 1000);
  };

  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg ">
        <div className="flex flex-col md:flex-row space-y-4 mr-6">
          {/* Left Thumbnails */}
          <div className="hidden md:flex flex-col mr-6 space-y-4">
            {selectedProduct.images.map((image, index) => {
              return image.url ? (
                <img
                  key={index}
                  className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                    mainImage === image.url
                      ? "border-gray-900"
                      : "border-gray-200"
                  }`}
                  src={image.url || null}
                  alt={image.alt || index}
                  onClick={() => setMainImage(image.url)}
                />
              ) : (
                <p>"No Image Available"</p>
              );
            })}
          </div>
          {/* Main Image */}
          <div className="w-1/2">
            <div className="mb-5">
              <img
                src={mainImage}
                alt="Main Product"
                className="w-full h-auto object-cover rounded-lg space-x-4 mb-4"
              />
            </div>
          </div>
          {/* Mobile view */}
          <div className="md:hidden flex flex-row space-x-4 mb-6">
            {selectedProduct.images.map((image, index) => {
              return image.url ? (
                <img
                  key={index}
                  className={`w-10 h-10 object-cover rounded-lg cursor-pointer border ${
                    mainImage === image.url
                      ? "border-gray-900"
                      : "border-gray-200"
                  }`}
                  src={image.url || null}
                  alt={image.alt || index}
                  onClick={() => setMainImage(image.url)}
                />
              ) : (
                <p>"No Image Available"</p>
              );
            })}
          </div>
          {/* Right Side */}
          <div className="md:w-1/2 md:ml-10">
            <h1 className="text-2xl md:text-3xl font-bold mb-4">
              {selectedProduct.name}
            </h1>
            <p className="text-lg text-gray-600 mb-1 line-through">
              {selectedProduct.originalPrice}
            </p>
            <p className="text-xl text-gray-500 mb-2">
              {selectedProduct.price}
            </p>
            <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
            <div className="mb-4">
              <p className="text-gray-700 ">color:</p>
              <div className="flex gap-2 mt-2">
                {selectedProduct.colors.map((color, index) => (
                  <button
                    onClick={() => setSelectedColor(color)}
                    key={color}
                    className={`w-8 h-8 rounded-full border cursor-pointer ${selectedColor === color ? "ring-2 ring-offset-2 ring-black" : ""}`}
                    style={{
                      backgroundColor: color.toLocaleLowerCase(),
                      brightness: 0.8,
                    }}
                  ></button>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <p className="text-gray-700">size:</p>
              <div className="flex gap-2 mt-2">
                {selectedProduct.sizes.map((size) => (
                  <button
                    onClick={() => setSelectedSize(size)}
                    key={size}
                    className={`px-4 py-2 rounded border cursor-pointer ${selectedSize === size ? "bg-black text-white" : ""}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-6">
              <p className="text-gray-700">Quantity:</p>
              <div className="flex items-center space-x-2 mt-2">
                <button
                  onClick={() => handleQuantityChange("minus")}
                  className="border rounded px-2 py-1 text-2xl font-bold bg-gray-200 cursor-pointer"
                >
                  -
                </button>
                <span className="text-lg">{selectedQuantity}</span>
                <button
                  onClick={() => handleQuantityChange("plus")}
                  className="border rounded px-2 py-1 text-xl font-bold bg-gray-200 cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>
            <button
              onClick={handleAddToCart}
              className={`rounded-lg mb-4 w-full px-3 py-3 
            cursor-pointer transition ${isDisable ? "opacity-50 cursor-not-allowed bg-gray-400" : "bg-black text-white hover:bg-gray-800 "}`}
            >
              {isDisable ? "Adding..." : "Add to Cart"}
            </button>
            <div className="mt-10 text-gray-700">
              <h3 className="text-xl font-bold mb-4">Characteristics:</h3>
              <table className="w-full text-left text-sm text-gray-600">
                <tbody>
                  <tr>
                    <td className="py-1">Brand</td>
                    <td className="py-1">{selectedProduct.brand}</td>
                  </tr>
                  <tr>
                    <td className="py-1">Materials</td>
                    <td className="py-1">{selectedProduct.material}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
