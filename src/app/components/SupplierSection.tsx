// components/SuppliersSection.tsx
import Image from "next/image";

const countries = [
  { name: "Arabic Emirates", flag: "/flags/uae.png" },
  { name: "Australia", flag: "/flags/australia.png" },
  { name: "United States", flag: "/flags/us.png" },
  { name: "Russia", flag: "/flags/russia.png" },
  { name: "Italy", flag: "/flags/italy.png" },
  { name: "Denmark", flag: "/flags/denmark.png" },
  { name: "France", flag: "/flags/france.png" },
  { name: "China", flag: "/flags/china.png" },
  { name: "Pakistan", flag: "/flags/pakistan.svg" },
  { name: "Great Britain", flag: "/flags/great-britain.png" },
];

export default function SuppliersSection() {
  return (
    <section className="w-full flex justify-center py-6">
      <div className="w-[1177px] sm:ml-0 ml-8 max-w-full">
        {/* Heading */}
        <h2 className="text-[24px] font-bold mb-4">Suppliers by Region</h2>

        {/* Countries container */}
        <div className="w-[1177px] max-w-full flex flex-wrap gap-y-4">
          {countries.map((country, idx) => (
            <div
              key={idx}
              className="w-[221px] h-[36px] flex items-center gap-2"
            >
              {/* Flag */}
              <div className="w-[28px] h-[20px] relative">
                <Image
                  src={country.flag}
                  alt={country.name}
                  fill
                  className="object-cover rounded"
                />
              </div>

              {/* Text */}
              <div className="flex flex-col leading-none">
                <span className="text-sm font-medium">{country.name}</span>
                <span className="text-xs text-gray-500">shopename.ae</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
