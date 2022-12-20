const { createApp } = Vue

createApp({
    data() {
        return {
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
        }

    }
}).mount('#app')