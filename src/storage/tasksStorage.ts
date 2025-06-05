import AsyncStorage from "@react-native-async-storage/async-storage"

enum TaskStatus {
    PENDING = "pending",
    DONE = "done"
}

const ITEMS_STORAGE_KEY = "@ToDo:tasks"

export type TaskDataStorage = {
    id: string
    status: TaskStatus
    description: string
}

async function get(): Promise<TaskDataStorage[]> {
    try {
        const storage = await AsyncStorage.getItem(ITEMS_STORAGE_KEY)
        return storage ? JSON.parse(storage) : []
    } catch (error) {
        throw new Error("GET_TASKS" + error)
    }
}

async function getByStatus(status:TaskStatus) {
    const tasks = await get()
    return tasks
}

async function save(tasks: TaskDataStorage[]) {
    try {
        await AsyncStorage.setItem(ITEMS_STORAGE_KEY, JSON.stringify(tasks))
    } catch (error) {
        throw new Error("SAVE_TASKS" + error)
    }
}

async function add(newTask: TaskDataStorage) {
    const tasks = await get()
    const updatedTasks = [...tasks, newTask]
    await save(updatedTasks)
    return updatedTasks
}

async function remove(id: string) {
    const tasks = await get()
    const updatedTasks = tasks.filter((task) => task.id !== id)
    await save(updatedTasks)
}

async function toggleStatus(id: string) {
    const tasks = await get()
    const updatedTasks = tasks.map((task) => task.id === id ? {
        ...task,
        status: task.status === TaskStatus.PENDING ? TaskStatus.DONE : TaskStatus.PENDING
    } : task)
    await save(updatedTasks)
}

export const tasksMethodsStorage = {
    get,
    getByStatus,
    add,
    remove,
    toggleStatus
}