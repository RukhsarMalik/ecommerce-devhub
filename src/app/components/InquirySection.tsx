export default function InquirySection() {
  return (
    <section
      className="relative w-full max-w-[1180px] mx-auto min-h-[420px] bg-cover bg-center"
      style={{ backgroundImage: "url('/inquiry-bg.png')" }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2C7CF1] to-[#00D1FF80]"></div>

      {/* Content */}
      <div className="relative z-10 h-full grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        
        {/* Left Side */}
        <div className="flex flex-col justify-center text-white mt-3 space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold max-w-[440px]">
            An easy way to send requests to all suppliers
          </h2>
          <h3 className="text-base sm:text-lg max-w-[440px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
          </h3>
        </div>

        {/* Right Side - Form */}
        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-[491px] h-auto md:h-[346px] mx-auto">
          <h2 className="text-lg font-bold mb-4">Send quote to suppliers</h2>
          <form className="space-y-4">
            {/* Item Input */}
            <input
              type="text"
              placeholder="What item you need?"
              className="w-full border border-gray-300 rounded-md p-2"
            />

            {/* Large Textarea */}
            <textarea
              placeholder="Type more details"
              className="w-full border border-gray-300 rounded-md p-2 h-20 resize-none"
            ></textarea>

            {/* Quantity Selector */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 space-y-2 sm:space-y-0">
              <label className="text-sm border border-gray-300 w-full sm:w-[206px] h-[40px] p-2 font-medium">
                Quantity
              </label>
              <select className="border border-gray-300 w-full sm:w-[111px] h-[40px] rounded-md p-2">
                <option>Pcs</option>
              </select>
            </div>

            {/* Send Button */}
            <button
              type="submit"
              className="bg-blue-600 text-white w-full sm:w-[128px] h-[40px] py-2 rounded-md hover:bg-blue-700"
            >
              Send Inquiry
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
