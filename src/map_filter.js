
// Monte uma estrutura de dados e imprima na tela. 
// Fa�a o c�digo mais sucinto poss�vel:
// Chave;  Valores
// [0];    [0,1,2]
// [1];    [4,5,6]
// [2];    [8,9,10]
// [3];    [12,13,14]
// ...
// fazer at� 100 (99 chaves);

var getHash = function(hashCode) { if(hashCode < 0 || hashCode > 100) return []; var arrayBase = [0,1,2]; return arrayBase.map((t) => { return t + (4 * hashCode); });}

getHash(1);

getHash(2);

getHash(3);

getHash(100);

// Filtre a estrutura de dados acima usando obrigatoriamente um filtro e remova os itens �mpares da lista de valores. O resultado final �:
// Chave;  Valores
// [0];    [0,2]
// [1];    [4,6]
// [2];    [8,10]
// [3];    [12,14]

getHash(1).filter((x) => { return x % 2 !== 1;}); 

getHash(2).filter((x) => { return x % 2 !== 1;})

getHash(3).filter((x) => { return x % 2 !== 1;}); 

getHash(100).filter((x) => { return x % 2 !== 1;});