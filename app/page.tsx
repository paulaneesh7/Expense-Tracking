'use client';
import Header from "@/components/Header";
import Balance from "@/components/Balance";
import AddTransaction from "@/components/AddTransaction";
import DisplayTransactions from "@/components/DisplayTransactions";


export default function Home() {
  return (
    <div className="max-w-[350px] md:max-w-[600px] lg:max-w-[700px] m-auto mt-12 h-screen">
      <Header />
      <Balance />

      <AddTransaction />

      <DisplayTransactions />
    </div>
  );
}
