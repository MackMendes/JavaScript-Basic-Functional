// Função de Somatório executado via recursividade
// i: valor do índice do somatório
// n: valor limite do somatório
// fnSomatorio: função executada na interação do somatório
var somatorio = function(i, n, fnSomatorio){ 
	if(i <= n) return fnSomatorio(i, somatorio(++i, n, fnSomatorio));
	return 0;
}

// Chamado da função
somatorio(1, 5, (i, x) => { return i + x; });