import Link from "next/link";

const SortTodos = () => {
  const selectOptions = [
    { value: "titleAsc", label: "Title Ascending" },
    { value: "titleDesc", label: "Title Descending" },
    { value: "createdAsc", label: "Latest Elements" },
    { value: "createdDesc", label: "Oldest Elements" },
    { value: "due", label: "Due Date" },
  ];

  return (
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-secondary w-full text-white lg:w-auto">
        Sort
      </label>
      <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-full lg:w-auto">
        {selectOptions.map(({ value, label }) => (
          <li key={value} value={value}>
            <Link href={{ query: { sort: `${value}` } }}>{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SortTodos;
