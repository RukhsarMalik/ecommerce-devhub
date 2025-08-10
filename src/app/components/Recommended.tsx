// components/RecommendedItems.tsx
import Image from "next/image";
import data from "../../../data.json";

export default function RecommendedItems() {
  // Filter recommended items
  const recommendedItems = data.products.filter((item) => {
    if (Array.isArray(item.category)) {
      return item.category.some(
        (cat) =>
          cat.toLowerCase() === "recommended items" ||
          cat.toLowerCase() === "recommanded items"
      );
    }
    return (
      item.category?.toLowerCase() === "recommended items" ||
      item.category?.toLowerCase() === "recommanded items"
    );
  });

  return (
    <section className="w-full max-w-[1180px] mx-auto font-sans py-8">
      {/* Heading */}
      <h2 className="text-2xl font-semibold ml-3 mb-6">Recommended Items</h2>

      {/* Grid of items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {recommendedItems.map((item) => (
          <div
            key={item.id}
            className="w-full max-w-[220px] h-[310px] border border-gray-200 rounded-lg bg-white shadow-sm hover:shadow-lg transition mx-auto"
          >
            {/* Image */}
            <div className="w-[200px] h-[200px] mx-auto flex items-center justify-center">
              <Image
                src={item.image}
                alt={item.pname}
                width={180}
                height={180}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* Text */}
            <div className="px-3 py-2 text-center">
              <p className="text-lg font-semibold">{item.price}</p>
              <p className="text-[#8B96A5] w-[186px] h-[53px] text-sm">
                {item.pname}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
