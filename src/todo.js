/**
 * @author sumi <selina20000@naver.com>
 */

/**
 * todo
 * @constructor
 * @param {number} id - The id of the todo (unique)
 * @param {string} content - The content of the todo
 * @param {boolean} isCompleted - The complete status of the todo
 * @param {string} category - The category of the todo
 * @param {string[]} [tags] - The tag list of the todo
 */
function Todo(id, content, isCompleted, category, tags) {}

/**
 * create todo, no content todo is not create
 * @param {string} content - The content of the todo
 * @param {string} category - The category of the todo
 * @param {string[]} [tags] - The tag list of the todo
 */
function createTodo(content, category, tags) {}

/**
 * read all | specific todo
 * @param {number} [id] - todo id want to read, todo id undefined is all read
 */
function readTodo(id) {}

/**
 * update select todo property, put parameter in what you want to modify
 *
 * @param {*} id - The id of the wanted update todo
 * @param {*} [content] - The content that you want to update
 * @param {*} [isCompleted] - The complete status that you want to update
 * @param {*} [category] - The category that you want to update
 * @param {*} [tags] - The tag list that you want to update
 */
function updateTodo(id, content, isCompleted, category, tags) {}

/**
 * all | one todo delete and all | one todo's tag delete
 * @param {number} [id] - The id of the wanted delete todo, id is undefined -> all todo delete
 * @param {string} [deleteTag] - The tag of the wanted todo's delete tag, deleteTag is undefined -> all tag delete
 */
function deleteTodo(id, deleteType) {}
