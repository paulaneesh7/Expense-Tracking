"use client";

import AddTransportTransaction from "@/components/AddTransportTransaction";
import DisplayTransportTransactions from "@/components/DisplayTransportTransaction";
import BalanceTransport from "@/components/BalanceTransport";

export default function Home() {
  return (
    <>

      <BalanceTransport change={0} />

      <AddTransportTransaction />

      <DisplayTransportTransactions />
    </>
  );
}
