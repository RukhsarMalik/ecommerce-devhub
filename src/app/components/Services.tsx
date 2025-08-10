// components/Services.tsx
import Image from "next/image";

const servicesData = [
  {
    name: "Source from Industry Hubs",
    image: "/services/bg-1.png",
    icon: "/services/Vector.png",
  },
  {
    name: "Customize Your Products",
    image: "/services/bg-2.png",
    icon: "/services/inventory_2.png",
  },
  {
    name: "Fast, reliable shipping by ocean or air",
    image: "/services/bg-3.png",
    icon: "/services/send.png",
  },
  {
    name: "Product monitoring and inspection",
    image: "/services/bg-4.png",
    icon: "/services/security.png",
  },
];

export default function Services() {
  return (
    <section className="w-full flex justify-center py-8">
      <div className="w-[1180px]">
        {/* Heading */}
        <h2 className="text-2xl font-semibold ml-5 sm:ml-0 mb-6">Our Extra Services</h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 ml-5 sm:ml-0 md:grid-cols-4 gap-6">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="w-[280px] h-[200px] bg-white shadow rounded-lg overflow-hidden flex flex-col"
            >
              {/* Image Section */}
              <div className="relative w-full h-[120px]">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover"
                />
                {/* Black overlay (dim effect) */}
                <div className="absolute inset-0  pointer-events-none"></div>

                {/* Icon Circle (mid-right, half over image, half over text) */}
                <div className="absolute top-1/2 translate-y-1/2 right-3 w-[55px] h-[55px] rounded-full bg-[#D1E7FF] flex items-center justify-center shadow-lg">
                  <Image
                    src={service.icon}
                    alt="icon"
                    width={18}
                    height={18}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Text Section */}
              <div className="flex-1 flex px-5 mt-5">
                <p className="w-[215px] h-[44px] text-[16px] ">{service.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
