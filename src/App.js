import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./App.css";

const tg = window.Telegram?.WebApp;

const products = [
  {
    id: 1,
    name: "Dior Forever Skin Contour",
    price: 4728,
    image: "https://www.sephora.com/productimages/sku/s2649007-main-zoom.jpg"
  },
  {
    id: 2,
    name: "YSL пудра 44",
    price: 4728,
    image: "https://www.sephora.com/productimages/sku/s2648074-main-zoom.jpg"
  },
  {
    id: 3,
    name: "Gisou trio set",
    price: 9750,
    image: "https://www.sephora.com/productimages/sku/s2847390-main-zoom.jpg"
  },
  {
    id: 4,
    name: "Контуринг Charlotte Fair",
    price: 4728,
    image: "https://www.sephora.com/productimages/sku/s2648108-main-zoom.jpg"
  },
  {
    id: 5,
    name: "Пудра Charlotte Fair",
    price: 4728,
    image: "https://www.sephora.com/productimages/sku/s2779205-main-zoom.jpg"
  },
  {
    id: 6,
    name: "Dior Forever Skin Stick 1N",
    price: 6194,
    image: "https://www.sephora.com/productimages/sku/s2789188-main-zoom.jpg"
  },
  {
    id: 7,
    name: "Sol de Janeiro Mist Set",
    price: 3815,
    image: "https://www.sephora.com/productimages/sku/s2639092-main-zoom.jpg"
  }
];

function App() {
  useEffect(() => {
    if (tg) {
      tg.ready();
      tg.expand();
    }
  }, []);

  const handleBuy = (product) => {
    tg?.sendData(JSON.stringify(product));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-xl font-bold mb-4">Магазин косметики</h1>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={16}
        slidesPerView={1}
      >
        {products.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="bg-white p-4 rounded-xl shadow-md flex flex-col items-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-60 h-60 object-cover rounded-xl mb-4"
              />
              <h2 className="text-lg font-semibold mb-2">{item.name}</h2>
              <p className="text-gray-600 mb-2">{item.price} ₽</p>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                onClick={() => handleBuy(item)}
              >
                Купить
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default App;
