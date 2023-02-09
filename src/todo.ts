interface TodoType {
  id: number;
  content: string;
  completed: boolean;
  category: string;
  tags?: string[];
}

function createTodo(content: string, category: string, tags?: string[]) {}

function readAllTodo() {}

function readTodo(id: string) {}

function updateTodo(
  id: string,
  content?: string,
  category?: string,
  tags?: string[]
) {}

function deleteTodo(id: string) {}

function deleteAllTodo() {}

function deleteTodoTag(id: string, tag: string) {}

function deleteTodoAllTag(id: string) {}