"use client";
import Balance from "@/components/Balance";
import AddTransaction from "@/components/AddTransaction";
import DisplayTransactions from "@/components/DisplayTransactions";

export default function Home() {
  return (
    <>

      <Balance change={0} />

      <AddTransaction />

      <DisplayTransactions />
    </>
  );
}
