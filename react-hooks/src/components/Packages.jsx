const Packages = ({ h1, h4, p, ul, h2, index }) => {
    const isFirstCard = index === 0;
  
    return (
      <div
        className={`p-6 rounded-xl shadow-lg text-white ${
          isFirstCard
            ? 'bg-gradient-to-br from-[#69f] to-[#f36]'
            : 'bg-black'
        }`}
      >
        <h1 className="text-xl font-bold">{h1}</h1>
        <h4 className="text-md text-gray-200">{h4}</h4>
        <p className="mt-2 text-sm">{p}</p>
        {ul?.length > 0 && (
          <ul className="list-disc pl-6 mt-3 space-y-1 text-sm">
            {ul.map((li, i) => (
              <li key={i}>{li}</li>
            ))}
          </ul>
        )}
        {h2 && <h2 className="mt-4 font-semibold text-lg">{h2}</h2>}
      </div>
    );
  };
  
  export default Packages;
  
 
  