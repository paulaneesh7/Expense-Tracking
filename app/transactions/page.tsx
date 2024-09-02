"use client";
import Link from "next/link";
import Loader from "@/app/loading";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";

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

const DisplayTransactions = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchTransactions = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/fetchtransactions");
      const data = await response.json();
      console.log(data.data);
      setTransactions(data.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="mb-8 md:mb-16 transactions mt-8">
          {transactions.map((transaction) => (
            <div
              className="border-t-[1px] border-t-gray-600 first:border-t-0"
              key={transaction.id}
            >
              <Link href={`/transactions/${transaction.id}`}>
                <div className="flex flex-col justify-between py-2 font-medium md:flex-row transaction ">
                  {/* left */}
                  <div className="left">
                    <div className="flex items-center gap-4">
                      <div className="text-2xl name">{transaction.name}</div>
                      <Badge
                        variant={
                          transaction.selectedOption === "Done"
                            ? "default"
                            : "destructive"
                        }
                      >
                        {transaction.selectedOption}
                      </Badge>
                    </div>
                    <div className="text-base text-gray-500 dark:text-gray-400 description">
                      {transaction.description}
                    </div>
                  </div>

                  {/* right */}
                  <div className="flex flex-col md:items-end right">
                    <div
                      className={`text-2xl ${
                        +transaction.price > 0
                          ? "text-green-500"
                          : "text-red-500"
                      } price`}
                    >
                      {+transaction.price > 0 ? "+" : "-"}
                      {Math.abs(+transaction.price)}
                    </div>
                    <div className="text-base text-gray-500 dark:text-gray-400 datetime">
                    {transaction.dateTime.split("T")[0]}{" "}
                    {transaction.dateTime.split("T")[1]}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}

          {transactions.length === 0 && (
            <div className="text-center text-xl text-gray-500 dark:text-gray-400">
              No transactions found
            </div>
          )}

          <div className="flex justify-end ">
            <div className="flex justify-center w-full md:w-3/12  p-2 mt-8 border-[1px] rounded-lg mb-3">
              <Link href="/">Go Back</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DisplayTransactions;
