const {createApp} = Vue;

createApp({

  data(){
    return{
      items:[
        {
          text: 'Fare la spesa',
          done: false,
        },
        {
          text: 'Andare a ritirare la camicia in lavanderia',
          done: false,
        },
        {
          text: 'Portare Marco a scuola',
          done: true,
        }
      ]
    }
  }

}).mount('#app')