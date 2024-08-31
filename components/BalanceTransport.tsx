"use client";
import { useEffect, useState } from "react";

interface Transaction {
  id: number;
  name: string;
  price: string;
  dateTime: string;
  description: string;
  selectedOption: string;
  createdAt: string; // Use string if the API returns dates as strings
  updatedAt: string; // Use string if the API returns dates as strings
}

const BalanceTransport = ({ change }: { change: number }) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  

  const fetchTransaction = async () => {
    try {
      const response = await fetch("/api/fetchtransports");
      const data = await response.json();
      setTransactions(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTransaction();
  }, []);

  let balance = 0;
  for (const transaction of transactions) {
    if (transaction.selectedOption !== "Done") balance += +transaction.price; // +transaction.price because we want to convert it to a number first before adding
  }

  if (change > 0) {
    balance -= change;
  }

  return (
    <div
      className={`text-3xl md:text-4xl font-bold text-left mt-8 ${
        balance > 0 ? "text-green-500" : "text-red-500"
      }`}
    >
      {balance > 0 ? "" : "-"}₹{Math.abs(balance)}
      <span>.00</span>
    </div>
  );
};

export default BalanceTransport;
