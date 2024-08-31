"use client";

import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

interface Transaction {
  name: string;
  price: string;
  dateTime: string;
  description: string;
  selectedOption: string;
}

const AddTransportTransaction = () => {
  const [name, setName] = useState<string>("");
  const [dateTime, setDateTime] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const price: string = name.split(" ")[0];

    const transaction: Transaction = {
      name: name.substring(price.length + 1),
      price,
      dateTime,
      description,
      selectedOption,
    };
    try {
      const response = await fetch("/api/addtransport", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(transaction),
      });

      if (!response.ok) {
        throw new Error("Failed to add transaction");
      }

      const responseData = await response.json();
      toast.success("Transaction added successfully");
      console.log(responseData);

      setName("");
      setDateTime("");
      setDescription("");
      setSelectedOption("");
      window.location.reload();
    } catch (err) {
      console.log(err);
      toast.error("Failed to add transaction");
    }
  };

  return (
    <>
      <Toaster />
      <form action="" className="mt-[20px]" onSubmit={handleSubmit}>
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
          Add new transaction
        </button>
      </form>
    </>
  );
};

export default AddTransportTransaction;
