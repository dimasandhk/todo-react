const TodoItem = (props) => {
  const buttonClass = "btn btn-dark shadow-none mt-3 btn-block";
  const deleteHandler = () => {
    props.onDeleteList(props.provide);
  };

  return (
    <div className="col-12 col-md-12 col-lg-6 mt-3">
      <div className="todo-item">
        <div className="container">
          <h3>{props.title}</h3>
          <button className={buttonClass} onClick={deleteHandler}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
