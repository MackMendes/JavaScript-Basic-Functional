// Fun��o de Somat�rio executado via recursividade
// i: valor do �ndice do somat�rio
// n: valor limite do somat�rio
// fnSomatorio: fun��o executada na intera��o do somat�rio
var somatorio = function(i, n, fnSomatorio){ 
	if(i <= n) return fnSomatorio(i, somatorio(++i, n, fnSomatorio));
	return 0;
}

// Chamado da fun��o
somatorio(1, 5, (i, x) => { return i + x; });