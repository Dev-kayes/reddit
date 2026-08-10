import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { FiChevronLeft } from "react-icons/fi";
import { Link } from "react-router";

const NewArrivals = () => {
  const scrollRef = React.useRef(null);
  const [isDragging, setIsDragging] = React.useState(false);
  const [startX, setStartX] = React.useState(0);
  const [scrollLeft, setScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [canScrollLeft, setCanScrollLeft] = React.useState(true);
  const newArrivals = [
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
  const handleOnMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX - scrollRef.current.getBoundingClientRect().left);
    setScrollLeft(scrollRef.current.scrollLeft);
  };
  const handleOnMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.clientX - scrollRef.current.getBoundingClientRect().left;
    const walk = x - startX;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };
  const handleOnMouseUpOrLeave = (e) => {
    setIsDragging(false);
  };
  // Update scroll buttons
  const scroll = (direction) => {
    const scrollAmount = direction === "left" ? -500 : 300;
    scrollRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };
  const updateScrollButtons = () => {
    const container = scrollRef.current;
    if (container) {
      const leftScroll = container.scrollLeft;
      const rightScrollable =
        container.scrollWidth > leftScroll + container.clientWidth;
      setCanScrollLeft(leftScroll > 0);
      setCanScrollRight(rightScrollable);
    }
    // console.log({
    //   scrollLeft: container.scrollLeft,
    //   clientWidth: container.clientWidth,
    //   containerScrollWidth: container.scrollWidth,
    // });
  };
  React.useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollButtons);
      updateScrollButtons();
      return () => {
        container.removeEventListener("scroll", updateScrollButtons);
      };
    }
  }, []);
  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="container mx-auto text-center mb-10 relative">
        <h2 className="text-2xl font-bold mb-4">Explore New Arrivals</h2>
        <p className="text-lg text-gray-600 mb-8">
          Discover the latest styles and trends in our collection
        </p>
        {/* Scrollable buttons */}
        <div className="absolute right-0 top-18 md:top-16 flex space-x-2">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`p-2 rounded border ${canScrollLeft ? "bg-white text-black" : "bg-gray-500 text-white"}`}
          >
            <FiChevronLeft className="text-2xl" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`p-2 rounded border ${canScrollRight ? "bg-white text-black" : "bg-gray-500 text-white"}`}
          >
            <FiChevronRight className="text-2xl" />
          </button>
        </div>
        {/* Scrollable Contents */}
        <div
          ref={scrollRef}
          onMouseDown={handleOnMouseDown}
          onMouseMove={handleOnMouseMove}
          onMouseUp={handleOnMouseUpOrLeave}
          onMouseLeave={handleOnMouseUpOrLeave}
          className="container mx-auto overflow-x-scroll flex space-x-6 relative "
          style={{ cursor: isDragging ? "grabbing" : "grab" }}
        >
          {newArrivals.map((product) => (
            <div
              key={product._id}
              className="min-w-100 md:min-w-[50%] lg:min-w-[30%] relative"
            >
              <img
                src={product.images[0]?.url}
                alt={product.images[0]?.alt || product.name}
                className="w-full h-125 object-cover rounded-lg"
                draggable="false"
              />
              <div
                className="absolute bottom-0 left-0 right-0 bg-opacity-50 backdrop-blur-md
               text-white p-4 rounded-b-lg"
              >
                <Link to={`/product/${product._id}`} className="block">
                  <h4 className="font-medium">{product.name}</h4>
                  <p className="mt-1">{product.price}</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
