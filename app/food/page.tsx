"use client";

import BalanceFood from "@/components/BalanceFood";
import AddFoodTransaction from "@/components/AddFoodTransaction";
import DisplayFoodTransaction from "@/components/DisplayFoodTransaction";

export default function Home() {
  return (
    <>

      <BalanceFood change={0} />

      <AddFoodTransaction />

      <DisplayFoodTransaction />
    </>
  );
}
