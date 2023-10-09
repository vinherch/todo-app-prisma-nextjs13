import SortTodos from "./SortTodos";
import FilterTodos from "./FilterTodos";

const ControlTodos = () => {
  return (
    <div className="flex gap-3 flex-col lg:flex-row">
      <SortTodos />
      <FilterTodos />
    </div>
  );
};

export default ControlTodos;
