import { useSearchParams } from "react-router-dom";

const SortTodos = ({ todos, setTodos }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const selectOptions = [
    { value: "titleAsc", label: "Title Ascending" },
    { value: "titleDesc", label: "Title Descending" },
    { value: "createdAsc", label: "Latest Elements" },
    { value: "createdDesc", label: "Oldest Elements" },
    { value: "due", label: "Due Date" },
  ];

  const sortHandler = (value) => {
    setSearchParams({ sort: value });
    todos.length > 0 && sort(value);
  };

  const sort = (value) => {
    switch (value) {
      case "titleAsc":
        setTodos([...todos].sort((a, b) => a.title.toLowerCase() < b.title.toLowerCase() && -1));
        break;
      case "titleDesc":
        setTodos([...todos].sort((a, b) => a.title.toLowerCase() > b.title.toLowerCase() && -1));
        break;
      case "createdAsc":
        setTodos([...todos].sort((a, b) => a.created > b.created && -1));
        break;
      case "createdDesc":
        setTodos([...todos].sort((a, b) => a.created < b.created && -1));
        break;
      case "due":
      //TODO
    }
  };

  return (
    <div>
      <div>
        <select onChange={(e) => sortHandler(e.target.value)} multiple={false}>
          {selectOptions.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SortTodos;
