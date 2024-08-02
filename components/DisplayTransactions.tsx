"use client";

import Link from "next/link";
import { Badge } from "./ui/badge";

const DisplayTransactions = () => {
  let price: number = 1000;

  return (
    <div className="mb-8 md:mb-16 transactions">
      <div className="border-t-[1px] border-t-gray-600 first:border-t-0">
        <Link href={"dfd/dfgfdg"}>
          <div className="flex flex-col justify-between py-2 font-medium md:flex-row transaction ">
            {/* left */}
            <div className="left">
              <div className="flex items-center gap-4">
                <div className="text-2xl name">Money Payment for Pendrive</div>
                <Badge variant={"destructive"}>Pending</Badge>
              </div>
              <div className="text-base text-gray-400 description">
                Money payment for pendrive
              </div>
            </div>

            {/* right */}
            <div className="flex flex-col md:items-end right">
              <div
                className={`text-2xl ${
                  price > 0 ? "text-green-500" : "text-red-500"
                } price`}
              >
                {price}
              </div>
              <div className="text-base text-gray-400 datetime"></div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DisplayTransactions;
