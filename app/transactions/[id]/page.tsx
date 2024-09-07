"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Loader from "@/app/loading";

interface Transaction {
  name: string;
  price: string;
  dateTime: string;
  description: string;
  selectedOption: string;
}

const UpdateTransaction = ({ params }: { params: { id: string } }) => {
  const id = parseInt(params.id, 10);
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [dateTime, setDateTime] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  // const [change, setChange] = useState<number>(0);

  const router = useRouter();

  // Function to fetch transaction
  const fetchTransaction = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/${id}`);
      const data = await response.json();
      // console.log(data.data);

      setName(data.data.name);
      setPrice(data.data.price);
      setDateTime(data.data.dateTime);
      setDescription(data.data.description);
      setSelectedOption(data.data.selectedOption);
      setLoading(false);
    } catch (error: any) {
      console.log(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTransaction();
  }, [id]);

  // Function to update transaction
  const handleUpdateTransaction = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const transaction = {
      name,
      dateTime,
      description,
      selectedOption,
    };

    // if (selectedOption === "Done") {
    //   setPrice(`+${price}`);
    // } else if (selectedOption === "Pending") {
    //   setPrice(`-${price}`);
    // }

    try {
      const response = await fetch(`/api/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(transaction),
      });
      toast.success("Transaction updated successfully");
      const data = await response.json();

      router.push("/");
      // console.log(data.data);

      // setName(data.data.name);
      // setPrice(data.data.price);
      // setDateTime(data.data.dateTime);
      // setDescription(data.data.description);
      // setSelectedOption(data.data.selectedOption);
    } catch (error: any) {
      console.log(error.mesage);
      toast.error("Failed to update transaction");
    }
  };

  const handleDeleteTransaction = async () => {
    try {
      const response = await fetch(`/api/${id}`, {
        method: "DELETE",
      });

      toast.success("Transaction deleted successfully");
      const data = await response.json();
      console.log(data);
      router.push("/");
    } catch (error: any) {
      console.log(error.message);
      toast.error("Failed to delete transaction");
    }
  };

  return (
    <>
      <Toaster />
      {/* <Balance change={change} /> */}
      <form action="" className="mt-[20px]" onSubmit={handleUpdateTransaction}>
        {/* Name and DateTime */}
        <div className="flex items-center gap-2 basic">
          <input
            type="text"
            placeholder={`+200 new samsung tv`}
            className="block w-1/2 p-2 text-base text-slate-900 dark:text-gray-300 bg-transparent border border-slate-950 dark:border-gray-300 rounded-lg"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="datetime-local"
            className="block w-1/2 p-2 text-base text-slate-900 dark:text-gray-300 bg-transparent border border-slate-950 dark:border-gray-300 rounded-lg"
            value={dateTime}
            onChange={(e) => setDateTime(e.target.value)}
          />
        </div>

        {/* Description and currentState(Done/Pending) */}
        <div className="flex gap-2 mt-2 mb-5 description">
          <input
            type="text"
            placeholder={`Description...`}
            className="block w-9/12 p-2 text-base text-slate-900 dark:text-gray-300 bg-transparent border border-slate-950 dark:border-gray-300 rounded-lg"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <select
            className="p-[1px] md:p-2 text-slate-900 dark:text-gray-300 bg-transparent border border-slate-950 dark:border-gray-300 rounded-lg text-xs w-3/12 dark:bg-slate-950"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option
              value="None"
              className="text-xs bg-transparent md:text-base"
            >
              None
            </option>
            <option
              value="Done"
              className="text-xs bg-transparent md:text-base"
            >
              Done
            </option>
            <option
              value="Pending"
              className="text-xs bg-transparent gray-300 md:text-base"
            >
              Pending
            </option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full p-1 mb-5 font-semibold duration-150 bg-slate-900 dark:bg-gray-200 rounded-lg text-white dark:text-slate-950 hover:bg-slate-700 hover:dark:bg-gray-400"
        >
          Update transaction
        </button>
      </form>

      {/* Transaction Display starts here */}
      {loading ? (
        <Loader />
      ) : (
        <div className="mb-8 md:mb-16 transactions">
          <div className="border-t-[1px] border-t-gray-600 first:border-t-0">
            <div className="flex flex-col justify-between py-2 font-medium md:flex-row transaction ">
              {/* left */}
              <div className="left">
                <div className="flex items-center gap-4">
                  <div className="text-2xl name">{name}</div>
                  <Badge
                    variant={
                      selectedOption === "Done" ? "default" : "destructive"
                    }
                  >
                    {selectedOption}
                  </Badge>
                </div>
                <div className="text-base text-gray-500 dark:text-gray-400 description">
                  {description}
                </div>
              </div>

              {/* right */}
              <div className="flex flex-col md:items-end right">
                <div
                  className={`text-2xl ${
                    +price > 0 ? "text-green-500" : "text-red-500"
                  } price`}
                >
                  {+price > 0 ? "+" : "-"}
                  {Math.abs(+price)}
                </div>
                <div className="text-base text-gray-500 dark:text-gray-400 datetime">
                  {dateTime.split("T")[0]} {dateTime.split("T")[1]}
                </div>
              </div>
            </div>
          </div>

          {/* {transactions.length === 0 && (
            <div className="text-center text-xl text-gray-500 dark:text-gray-400">
              No transactions found
            </div>
          )} */}

          <div className="flex justify-between gap-3 mt-8 flex-row-reverse">
            <Button variant="default">
              <Link href="/">Back</Link>
            </Button>

            <Button variant="destructive" onClick={handleDeleteTransaction}>
              Delete
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default UpdateTransaction;
