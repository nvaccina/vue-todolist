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
      messageCheck: '',
    }
  },

  methods:{
    
    //funzione per eliminare item dalla lista
    deleteItem(index){
      this.msgError = '';

      if(this.items[index].done){
        this.items.splice(index,1)
      }else{
        this.hideMsgError('Attenzione!! Puoi eliminare questo elemento solo se è stato eseguito!')
      }
    },
    
    //funzione per aggiungere nuovi item
    addItem(){
      this.msgError = '';
      this.messageCheck = '';

      if(this.newItemString.length > 4){
        const newItem = {
          text: this.newItemString,
          done: false,
        }
        
        this.hideMessageCheck('<i class="fa-regular fa-circle-check"></i>')
        this.items.unshift(newItem);
        this.newItemString = '';
      }else{
        this.hideMsgError('Attenzione!! Il testo inserito deve avere almeno 5 caratteri')
      }
    },

    //funzione per far sparire il messaggio di errore dopo 2s
    hideMsgError(msg){
      this.msgError = msg;
      setTimeout(() => {
        this.msgError = '';
      },2000)
    },

    //funzione per far sparire il messaggio di check dopo 2s all'inserimento di un nuovo item corretto
    hideMessageCheck(message){
      this.messageCheck = message;
      setTimeout(() => {
        this.messageCheck = '';
      },2000)
    }
  }

}).mount('#app')