import React from "react";
import { FaFilter } from "react-icons/fa";
import FilterSidebar from "../products/FilterSidebar";
import SortOptions from "../products/SortOptions";
import ProductGrid from "../products/ProductGrid";

const CollectionPage = () => {
  const [products, setProducts] = React.useState([]);
  const sidebarRef = React.useRef(null);
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const toggleSideBar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const handleClickOutside = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setIsSidebarOpen(false);
    }
  };
  React.useEffect(() => {
    // Add Event Listener For Clicks
    document.addEventListener("mousedown", handleClickOutside);
    // clean up
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  React.useEffect(() => {
    setTimeout(() => {
      const fetchProducts = [
        {
          _id: "1",
          name: "Stylished T-Shirt",
          price: 20,
          images: [
            {
              url: "https://picsum.photos/200?random=1",
              alt: "Stylished T-Shirt",
            },
          ],
        },
        {
          _id: "2",
          name: "Stylished Shirt",
          price: 40,
          images: [
            {
              url: "https://picsum.photos/200?random=2",
              alt: "Stylished Shirt",
            },
          ],
        },
        {
          _id: "3",
          name: "Stylished pant",
          price: 50,
          images: [
            {
              url: "https://picsum.photos/200?random=3",
              alt: "Stylished pant",
            },
          ],
        },
        {
          _id: "4",
          name: "Stylished halfPant",
          price: 10,
          images: [
            {
              url: "https://picsum.photos/200?random=4",
              alt: "Stylished halfPantt",
            },
          ],
        },
        {
          _id: "5",
          name: "Stylished Panjabi",
          price: 60,
          images: [
            {
              url: "https://picsum.photos/200?random=5",
              alt: "Stylished Panjabi",
            },
          ],
        },
        {
          _id: "6",
          name: "Stylished katua",
          price: 70,
          images: [
            {
              url: "https://picsum.photos/200?random=6",
              alt: "Stylished katua",
            },
          ],
        },
        {
          _id: "7",
          name: "Stylished T-Shirt",
          price: 80,
          images: [
            {
              url: "https://picsum.photos/200?random=7",
              alt: "Stylished T-Shirt",
            },
          ],
        },
        {
          _id: "8",
          name: "Stylished glass",
          price: 90,
          images: [
            {
              url: "https://picsum.photos/200?random=8",
              alt: "Stylished glass",
            },
          ],
        },
      ];
      setProducts(fetchProducts);
    }, 1000);
  }, []);
  return (
    <div className="flex flex-col lg:flex-row">
      {/* Mobile Filter Button */}
      <button
        onClick={toggleSideBar}
        className="lg:hidden p-2 flex justify-center items-center "
      >
        <FaFilter /> Filters
      </button>
      {/* Filter Sidebar */}
      <div
        ref={sidebarRef}
        className={`${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0`}
      >
        <FilterSidebar />
      </div>
      <div className="grow p-4">
        <h2 className="text-2xl uppercase mb-4">All Collections</h2>
        {/* Sort Options */}
        <SortOptions />
        {/* Product Grid */}
        <ProductGrid products={products} />
      </div>
    </div>
  );
};

export default CollectionPage;
