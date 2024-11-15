import { useState } from 'react';
import { DndContext, useDraggable, useDroppable } from '@dnd-kit/core';
import { Button } from '@mui/material';
import { FaArrowCircleUp } from "react-icons/fa";
import { IoBookmark } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";

function Column({ id, title, tasks, onDropTask }) {
    const { setNodeRef } = useDroppable({
        id,
    });

    const style = {
        backgroundColor: '#f0f0f0',
        padding: '16px',
        borderRadius: '8px',
        minHeight: '200px',
        width: '250px',
    };

    return (
        <div ref={setNodeRef} style={style}>
            <h3>{title}</h3>
            {tasks.map((task) => (
                <Task
                    key={task.id}
                    id={task.id}
                    content={task.content}
                    column={title} // Pass the column name here
                />
            ))}
        </div>
    );
}

function Task({ id, content, column }) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id,
    });

    const style = {
        transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : '',
        padding: '8px',
        marginBottom: '4px',
        backgroundColor: '#A286DD',
        borderRadius: '4px',
        cursor: 'pointer',
    };

    const renderIcon = () => {
        if (column === 'To Do') {
            return <FaArrowCircleUp />;
        }
        if (column === 'In Progress') {
            return <IoBookmark />;
        }
        if (column === 'Done') {
            return <FaCheckCircle />;
        }
    };

    return (
        <div ref={setNodeRef} {...listeners} {...attributes} style={style}>
            {content}
            {renderIcon()}
        </div>
    );
}

function KanbanBoard() {
    const [columns, setColumns] = useState({
        'To Do': [],
        'In Progress': [],
        'Done': [],
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
                const activeTask = prevColumns[sourceColumn].find((task) => task.id === active.id);
                return {
                    ...prevColumns,
                    [sourceColumn]: prevColumns[sourceColumn].filter((task) => task.id !== active.id),
                    [destinationColumn]: [...prevColumns[destinationColumn], activeTask],
                };
            });
        }
    };

    const addTask = () => {
        const newTask = prompt("Enter new Task name:");
        if (newTask) {
            setColumns((prevColumns) => ({
                ...prevColumns,
                'To Do': [
                    ...prevColumns['To Do'],
                    { id: Math.random(), content: newTask }
                ],
            }));
        }
    };

    const deleteTask = () => {
        const taskToDelete = prompt("Enter Task to Delete:");
        if (taskToDelete) {
            setColumns((prevColumns) => {
                let updatedColumns = { ...prevColumns };
    
                Object.keys(updatedColumns).forEach((columnName) => {
                    updatedColumns[columnName] = updatedColumns[columnName].filter(
                        (task) => task.content !== taskToDelete
                    );
                });
    
                return updatedColumns;
            });
        } else {
            console.log("Nothing to delete");
        }
    };
    
    return (
        <DndContext onDragEnd={handleDragEnd}>
            <div style={{ display: 'flex', gap: '16px', padding: '16px' }}>
                {Object.keys(columns).map((colId) => (
                    <Column
                        key={colId}
                        id={colId}
                        title={colId}
                        tasks={columns[colId]}
                        onDropTask={handleDragEnd}
                    />
                ))}
            </div>
            <Button onClick={addTask} variant="contained">Add Task</Button>
            <Button onClick={deleteTask} variant="contained">Delete Task</Button>
        </DndContext>
    );
}

export default KanbanBoard;
