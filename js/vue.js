const { createApp } = Vue

createApp({
  data() {
    return {
        message: 'Hello Vue!'
    }
  }, methods: {

    cambio(){
        this.message = "hola desde vue"
    }

  }
}).mount('#app')