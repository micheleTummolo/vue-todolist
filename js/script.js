const { createApp } = Vue

createApp({
    data() {
        return {
            theme: false,
            newTask: "",
            tasks: [
                {
                    text: "Task 1",
                    done: false
                },
                {
                    text: "Task 2",
                    done: false
                },
                {
                    text: "Task 3",
                    done: false
                },
                {
                    text: "Task 4",
                    done: false
                },
                {
                    text: "Task 5",
                    done: false
                },
                {
                    text: "Task 6",
                    done: false
                },
            ]
        }
    },

    methods: {
        removeTask (index) {
            this.tasks.splice(index, 1)
        },

        addTask () {
            let task = {
                text: this.newTask,
                done: false
            }

            if (this.newTask == "")
                this.removeTask(index)
            else
                this.tasks.push(task)

            this.newTask = ""
        },

        doneTask (index) {
            let task = this.tasks[index]
            if (!task.done)
                task.done = true
            else
                task.done = false
        },

        darkTheme () {
            /* let theme = this.theme */

            if (!this.theme)
                this.theme = true
            else
                this.theme = false        
        }
    }
}).mount('#app')