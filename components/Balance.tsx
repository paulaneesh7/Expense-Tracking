const Balance = () => {
  let balance: number = 100;

  return (
    <div
      className={`text-3xl md:text-4xl font-bold text-left mt-8 ${
        balance > 0 ? "text-green-500" : "text-red-500"
      }`}
    >
      {balance > 0 ? "" : "-"}₹{Math.abs(balance)}<span>.00</span>
    </div>
  );
};

export default Balance;
