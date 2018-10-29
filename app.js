var curtir= new Vue({
	el: '#postagens',
  data: {
  curtir: 0,
  descurtir: 0,
  nome: "",
  nomes: []
  },
  
  methods: {
  	curtidas: function(){
    	this.curtir++; 
    },
    
    descurtidas: function(){
    	this.descurtir++;
    },
    
  	addNome: function(){
  		this.nomes.push(this.nome);
  	},
  }
})