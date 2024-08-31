import Link from "next/link";

interface RouteMoveProps {
  route: string;
  description: string;
}

const RouteMove = ({ route, description }: RouteMoveProps) => {
  return (
    <div className="flex justify-end ">
      <div className="flex justify-center w-full mb-3 p-2 mt-2 border-[1px] rounded-lg">
        <Link href={route}>{description}</Link>
      </div>
    </div>
  );
};

export default RouteMove;
