import { useState } from "react";

export default function Slider() {
  const [index, setIndex] = useState(0);
  const slides = [
    { img: "/p1.jpg", text: "Slide 1" },
    { img: "/p2.jpg", text: "Slide 2" },
    { img: "/p3.jpg", text: "Slide 3" },
  ];

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-screen h-[700px] overflow-hidden ">
      {/* Slide Track */}
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="w-screen h-[700px] flex flex-col items-center justify-center relative flex-shrink-0"
          >
            <img src={slide.img} className="h-[90%] w-[90%] object-cover" alt="" />
            <p className="absolute top-1/2 text-white text-2xl">{slide.text}</p>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded"
      >
        Prev
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded"
      >
        Next
      </button>
    </div>
  );
}
