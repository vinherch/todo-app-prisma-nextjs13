import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import TodoContext from "../../../context/TodoContext";
import { getDateTime } from "../../../utils/DataTimeHelper";

const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState([]);
  const { setTodos, setTodoTags } = useContext(TodoContext);
  const navigate = useNavigate();

  const createTodo = () => {
    //Generate new TODO ID
    const id = crypto.randomUUID();
    setTodos((prev) => {
      return [
        ...prev,
        {
          id,
          title,
          description,
          created: getDateTime(),
        },
      ];
    });
    setTodoTags((prev) => [...prev, { id, tags }]);
    navigate("/");
  };

  const addTag = () => {
    setTags((prev) => {
      return [...prev, tag];
    });
    setTag("");
  };

  return (
    <div>
      <h2>Create new ToDo</h2>
      <div>
        <label htmlFor="title"></label>
        <input type="text" id="title" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required={true} />
      </div>
      <div>
        <label htmlFor="description"></label>
        <input type="text" id="description" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required={true} />
      </div>
      <div>
        <input type="text" placeholder="Tag's" value={tag} onChange={(e) => setTag(e.target.value)} />
        <button onClick={() => addTag()}>Add</button>
      </div>
      <button onClick={() => createTodo()} disabled={title.length > 0 && description.length > 0 ? false : true}>
        Add
      </button>
    </div>
  );
};

export default CreateTodo;
