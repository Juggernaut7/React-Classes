const Packages = ({ h1, h4, p, ul, h2, index }) => {
  const isFirstCard = index === 0;

  return (
    <div
      className={`flex flex-col justify-between h-full p-6 rounded-xl shadow-lg text-white transition transform hover:scale-105 duration-300 ${
        isFirstCard
          ? 'bg-gradient-to-br from-[#69f] to-[#f36]'
          : 'bg-neutral-900'
      }`}
    >
      <div>
        <h1 className="text-xl font-bold mb-1">{h1}</h1>
        <h4 className="text-sm text-gray-300">{h4}</h4>
        <p className="mt-2 text-sm text-gray-200 leading-relaxed">{p}</p>

        {ul?.length > 0 && (
          <ul className="list-disc pl-5 mt-3 space-y-1 text-sm text-gray-300">
            {ul.map((li, i) => (
              <li key={i}>{li}</li>
            ))}
          </ul>
        )}

        {h2 && (
          <h2 className="mt-4 font-semibold text-lg text-yellow-300">{h2}</h2>
        )}
      </div>

      {/* CTA Button */}
      <div className="mt-6">
        <button
          className={`w-[100px] text-sm font-medium px-4 py-2 rounded-full ${
            isFirstCard
              ? 'bg-white text-black'
              : 'bg-primaryBlue'
          }`}
        >
          Let's Go
        </button>
      </div>
    </div>
  );
};

export default Packages;
