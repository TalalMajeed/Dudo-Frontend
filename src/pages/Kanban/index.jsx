import { useState } from "react";
import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";
import { IoAddCircleSharp } from "react-icons/io5";
import { Button, TextField } from "@mui/material";
import { FaArrowCircleUp, FaCheckCircle } from "react-icons/fa";
import { IoBookmark } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

const createdAt = new Date().toLocaleDateString();

function Popup({ isOpen, onClose, onConfirm, title, placeholder }) {
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");

  const handleConfirm = () => {
    if (!inputValue1.trim()) return; // Prevent empty task creation
    onConfirm(inputValue1, inputValue2);
    setInputValue1("");
    setInputValue2("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div
        className="bg-white p-6 rounded shadow-lg max-w-sm w-full"
        style={{ borderRadius: "10px" }}
      >
        <h3 className="text-lg font-bold mb-4">{title}</h3>
        <TextField
          fullWidth
          placeholder={placeholder}
          value={inputValue1}
          onChange={(e) => setInputValue1(e.target.value)}
          sx={{
            margin: "10px 0",
            "& .MuiOutlinedInput-root": {
              "&:hover fieldset": { borderColor: "#A286DD" },
              "&.Mui-focused fieldset": { borderColor: "#A286DD" },
            },
          }}
        />
        {title === "Add New Task" && (
          <TextField
            fullWidth
            placeholder="Assigned to"
            value={inputValue2}
            onChange={(e) => setInputValue2(e.target.value)}
            sx={{
              margin: "10px 0",
              "& .MuiOutlinedInput-root": {
                "&:hover fieldset": { borderColor: "#A286DD" },
                "&.Mui-focused fieldset": { borderColor: "#A286DD" },
              },
            }}
          />
        )}
        <div style={{ display: "flex", gap: "8px", justifyContent: "flex-end" }}>
          <Button onClick={onClose}>Cancel</Button>
          <Button
            onClick={handleConfirm}
            variant="contained"
            sx={{
              backgroundColor: "#A286DD",
              "&:hover": { backgroundColor: "#7E5A9B" },
            }}
          >
            Confirm
          </Button>
        </div>
      </div>
    </div>
  );
}

function Column({ id, title, tasks, onAddTask }) {
  const { setNodeRef } = useDroppable({ id });

  const styleBox = {
    backgroundColor: "#f4f5f7",
    borderRadius: "8px",
    minHeight: "200px",
    width: "272px",
    border: "1px solid #dfe1e6",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.12)",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
  };

  const styleHeader = {
    backgroundColor: "#ebecf0",
    padding: "12px 16px",
    fontWeight: "bold",
    borderTopRightRadius: "8px",
    borderTopLeftRadius: "8px",
    fontSize: "16px",
    color: "#333333",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  return (
    <div ref={setNodeRef} style={styleBox}>
      <div style={styleHeader}>
        {title}
        {title === "To Do" && (
          <IoAddCircleSharp size={20} onClick={onAddTask} sx={{ cursor: 'pointer' }}/>
        )}
      </div>
      <div style={{ padding: "8px" }}>
        {tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            content={task.content}
            assignee={task.assignee}
            column={title}
          />
        ))}
      </div>
    </div>
  );
}

function Task({ id, content, assignee, column }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });

  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : "",
    padding: "12px",
    marginBottom: "8px",
    backgroundColor: "#A286DD",
    borderRadius: "4px",
    cursor: "pointer",
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.15)",
    transition: "background-color 0.3s ease",
  };

  const renderIcon = () => {
    if (column === "To Do") return <FaArrowCircleUp color="white" size={20} />;
    if (column === "In Progress") return <IoBookmark color="white" size={20} />;
    if (column === "Done") return <FaCheckCircle color="white" size={20} />;
  };

  return (
    <div ref={setNodeRef} {...listeners} {...attributes} style={style}>
      <div className="flex flex-col w-full gap-2">
        <div className="flex items-center gap-2">
          {renderIcon()}
          <span>{content}</span>
        </div>
        <div className="flex items-center justify-between">
          <span style={{ fontSize: "10px" }}>{createdAt}</span>
          {assignee && (
            <abbr title={`Assigned to: ${assignee}`}>
              <CgProfile size={25} style={{ color: "#ffffff" }} />
            </abbr>
          )}
        </div>
      </div>
    </div>
  );
}

function KanbanBoard() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupType, setPopupType] = useState("");
  const [columns, setColumns] = useState({
    "To Do": [],
    "In Progress": [],
    "Done": [],
  });

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;

    const sourceColumn = Object.keys(columns).find((col) =>
      columns[col].find((task) => task.id === active.id)
    );
    const destinationColumn = over.id;

    if (sourceColumn !== destinationColumn) {
      setColumns((prevColumns) => {
        const activeTask = prevColumns[sourceColumn].find(
          (task) => task.id === active.id
        );
        return {
          ...prevColumns,
          [sourceColumn]: prevColumns[sourceColumn].filter(
            (task) => task.id !== active.id
          ),
          [destinationColumn]: [...prevColumns[destinationColumn], activeTask],
        };
      });
    }
  };

  const addTask = (taskName, assignee) => {
    setColumns((prevColumns) => ({
      ...prevColumns,
      "To Do": [
        ...prevColumns["To Do"],
        { id: Math.random(), content: taskName, assignee },
      ],
    }));
  };

  const deleteTask = (taskToDelete) => {
    setColumns((prevColumns) => {
      const updatedColumns = { ...prevColumns };
      Object.keys(updatedColumns).forEach((columnName) => {
        updatedColumns[columnName] = updatedColumns[columnName].filter(
          (task) =>
            task.content.toLowerCase() !== taskToDelete.trim().toLowerCase()
        );
      });
      return updatedColumns;
    });
  };

  const openPopup = (type) => {
    setPopupType(type);
    setIsPopupOpen(true);
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div style={{ display: "flex", gap: "16px", padding: "16px" }}>
        {Object.keys(columns).map((colId) => (
          <Column
            key={colId}
            id={colId}
            title={colId}
            tasks={columns[colId]}
            onAddTask={() => openPopup("add")}
          />
        ))}
      </div>
      <Popup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        onConfirm={(value1, value2) => {
          if (popupType === "add") addTask(value1, value2);
          if (popupType === "delete") deleteTask(value1);
        }}
        title={popupType === "add" ? "Add New Task" : "Delete Task"}
        placeholder={
          popupType === "add" ? "Enter new task name" : "Enter task to delete"
        }
      />
    </DndContext>
  );
}

export default KanbanBoard;
