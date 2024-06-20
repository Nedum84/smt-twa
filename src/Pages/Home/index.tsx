import { useState } from "react";
import TappingItem from "./Sections/TappingItem";
import CounterDisplay from "./Sections/CounterDisplay";

export default function HomePage() {
  const [value, setValue] = useState(0);

  const onClick = () => {
    setValue((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col items-center gap-4 py-8">
      <TappingItem onClick={onClick} />
      <CounterDisplay value={value} />
    </div>
  );
}
