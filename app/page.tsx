"use client";
import Balance from "@/components/Balance";
import AddTransaction from "@/components/AddTransaction";
import DisplayTransactions from "@/components/DisplayTransactions";
import RouteMove from "@/components/RouteMove";

export default function Home() {
  return (
    <>

      <Balance change={0} />

      <AddTransaction />

      <DisplayTransactions />
      
      {/* <RouteMove route={"/transport"} description={"Transport expenses"} /> */}
    </>
  );
}
