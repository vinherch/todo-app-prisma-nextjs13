import Todo from "./Todo";

type TodoItem = { id: number; userId: number; title: string; description: string; checked: boolean; created: string; updated: string };

type TodoListProps = {
  todos: TodoItem[];
  sort: string;
  search: string;
};

const TodoList = ({ todos, sort, search }: TodoListProps) => {
  const sortTodos = (a: TodoItem, b: TodoItem) => {
    switch (sort) {
      case "titleAsc":
        return a.title.toLowerCase() < b.title.toLowerCase() ? 1 : -1;
      case "titleDesc":
        return a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1;
      case "createdAsc":
        return a.created > b.created ? -1 : 1!;
      case "createdDesc":
        return a.created < b.created ? -1 : 1!;
      case "due":
      //TODO
      default:
        return 0;
    }
  };
  return (
    <div>
      {todos.length === 0 ? (
        <p className="text-center pt-5 pb-2">No Todo's yet.</p>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 mt-5">
          {todos
            .filter((e: TodoItem) => {
              if (!search) return e.title.toLowerCase().includes("") || e.description.toLowerCase().includes("");
              return e.title.toLowerCase().includes(search.toLocaleLowerCase()) || e.description.toLowerCase().includes(search.toLocaleLowerCase());
            })
            .sort((a, b) => sortTodos(a, b))
            .map(({ id, userId, title, description, checked, created, updated }: TodoItem) => (
              <li key={id}>
                <Todo id={id} userId={userId} title={title} description={description} created={created} updated={updated} checked={checked} />
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
