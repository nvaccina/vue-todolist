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
      ],
      msgError: '',
      newItemString:'',
    }
  },

  methods:{

    deleteItem(index){
      this.msgError = '';

      if(this.items[index].done){
        this.items.splice(index,1)
      }else{
        this.msgError = 'Attenzione!! Puoi eliminare questo elemento solo se è stato eseguito!'
      }
    },

    addItem(){

      if(this.newItemString.length > 4){
        const newItem = {
          text: this.newItemString,
          done: false,
        }
        this.items.unshift(newItem);
      }else{
        this.msgError = 'Attenzione!! Il testo inserito deve avere almeno 5 caratteri'
      }
      

    }

  }


}).mount('#app')