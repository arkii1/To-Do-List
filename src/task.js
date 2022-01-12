export default function task(title, complete, dueDate, priority, description) {
    const getTitle = () => { return title; }
    const getComplete = () => { return complete; }
    const getDueDate = () => { return dueDate; }
    const getPriority = () => { return priority; }
    const getDescription = () => { return description; }

    const setTitle = (newTitle) => { this.title = newTitle; }
    const setComplete = (newComplete) => { this.complete = newComplete; }
    const setDueDate = (newDueDate) => { this.dueDate = newDueDate; }
    const setPriority = (newPriority) => { this.priority = newPriority; }
    const setDescription = (newDescription) => { this.description = newDescription; }


    return {
        getTitle,               setTitle,
        getComplete,            setComplete,
        getDueDate,             setDueDate,
        getPriority,            setPriority,
        getDescription,         setDescription
    }

}