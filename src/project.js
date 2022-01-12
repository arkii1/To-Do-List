export default function project(title, id) {
    const getTitle = () => { return title; }
    const getId = () => { return id; }

    const setTitle = (newTitle) => { this.title = newTitle; }
    const setId = (newId) => { this.id = newId };

    return {
        getTitle,               setTitle,
        getId,                  setId
    }
}