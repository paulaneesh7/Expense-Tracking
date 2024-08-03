import { ModeToggle } from "./mode.toggle";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <div className="flex justify-between">
      <h1 className="text-3xl md:text-4xl  text-red-500 font-semibold underline">Expenses</h1>
      <div className="flex gap-3">
        <ModeToggle />
        <a href="https://github.com/paulaneesh7/Expense-Tracking" target="_blank" rel="noopener noreferrer">
          <Button variant="outline">GitHub</Button>
        </a>
      </div>
    </div>
  );
};

export default Header;
