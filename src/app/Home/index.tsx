import {View, FlatList, Text, Alert} from "react-native"

import {styles} from "./styles"
import {TaskDataStorage, tasksMethodsStorage} from "@/storage/tasksStorage"

import { Input } from "@/components/Input"
import { Button } from "@/components/Button"
import { Header } from "@/components/Header"
import { HeaderList } from "@/components/HeaderList"
import { Icon } from "@/components/Icon"
import { Task } from "@/components/Task"
import { useEffect, useState } from "react"

enum TaskStatus {
    PENDING = "pending",
    DONE = "done"
}

export function Home() {
    const [tasks, setTasks] = useState<TaskDataStorage[]>([])
    const [taskStatus, setTaskStatus] = useState(TaskStatus.PENDING)
    const [description, setDescription] = useState("")
    
    const completedTaskCount = tasks.filter((task) => task.status === TaskStatus.DONE)

    async function tasksByStatus() {
        try {
            const response = await tasksMethodsStorage.getByStatus(taskStatus)
            setTasks(response)
        } catch (error) {
            console.log(error)
            Alert.alert("Erro", "Não foi possível filtrar os itens")
        }
    }

    async function handleAddTask() {
        if(!description.trim()) {
            return Alert.alert("Campo obrigatório", "Informe a descrição da tarefa para adiciona-lo a lista!")
        }

        const newTask = {
            id: Math.random().toString(36).substring(2),
            status: TaskStatus.PENDING,
            description
        }

        await tasksMethodsStorage.add(newTask)
        await tasksByStatus()

        setTaskStatus(TaskStatus.PENDING)
        setDescription("")
    }

    async function handleRemoveTask(id: string) {
        try {
            await tasksMethodsStorage.remove(id)
            await tasksByStatus()
        } catch (error) {
            console.log(error)
            Alert.alert("Remover" , "Não foi possível remover")
        }
    }

    async function handleTaskToggleStatus(id: string) {
        try {
            await tasksMethodsStorage.toggleStatus(id)
            tasksByStatus()
        } catch (error) {
            Alert.alert("Erro", "Não foi possível atualizar os status do item")
        }
    }

    useEffect(() => {
        tasksByStatus()
    }, [taskStatus])


    return (
        <View style={styles.container}>
            <Header />

            <View style={styles.content}>
                <View style={styles.form}>
                    <Input onChangeText={setDescription} value={description} />
                    <Button iconName="add-circle-outline" iconSize={20} iconColor="#fff" onPress={handleAddTask} />
                </View>

                <HeaderList createdTitle={tasks.length.toString()} checkedTitle={completedTaskCount.length.toString()} />

                <FlatList
                showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={() => <View style={styles.separatorList} />}
                    contentContainerStyle={styles.listContent}
                    data={tasks}
                    keyExtractor={(task) => task.id}
                    renderItem={({item}) => <Task key={item.id} data={item} onRemove={() => handleRemoveTask(item.id)} onStatus={() => handleTaskToggleStatus(item.id)} />}
                    ListEmptyComponent={() => (
                        <View style={styles.listEmpty}>
                            <Icon name="content-paste" size={56} color="#3d3d3d" />
                            <Text style={[styles.textListEmpty, {fontWeight: "bold", marginTop: 16}]}>Você ainda não tem tarefas cadastradas</Text>
                            <Text style={styles.textListEmpty}>Crie tarefas e organize seus itens a fazer</Text>
                        </View>
                    )}
                />
            </View>
        </View>
    )
}