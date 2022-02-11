## Projeto Zoo-functions
Desevolvido pela escola Trybe de programação (https://www.betrybe.com/) como método de avaliação. Todos os requisitos contidos nesse readme foram fornecidos pela escola, cabendo a mim o desenvolvimento e conclusão dos mesmos.

- Esse foi o meu oitavo projeto desenvolvido na escola e eu fui aprovado nele entregando 100% dos seus requisitos totais.

- Durante o desenvolvimento do projeto foi necessário desenvolver funções com base nos requisitos dos testes (TDD). Todos os testes contidos na pasta "test" deste repositório são de autoria da escola Trybe, cabendo a mim apenas desenvolver as funções contidas na pasta "src". Os arquivos que possuírem o seguinte comentário em suas linhas: // linha de código fornecida pela escola Trybe, significa que aquela linha já estava implementada quando o projeto foi passado a mim. Logo, as linhas que não possuirem tal comentário, foram feitas por mim.

## Habilidades

Neste projeto, verificamos se você é capaz de:

- Produzir código legível, conciso e expressivo utilizando as novas funcionalidades do ES6;
- Utilizar as _Higher Order Functions_ para manipular e criar arrays;
- Escolher a _Higher Order Function_ mais adequada para a obtenção de um resultado esperado;
- Aprender a usar de forma conjunta as _Higher Order Functions_;
- Interpretar testes unitários e produzir soluções que atendam a eles.

---

## Requisitos do projeto

### 1. Implemente a função `getSpeciesByIds`

Esta função é responsável pela busca das espécies de animais por id. Ela retorna um array contendo as espécies referentes aos ids passados como parâmetro, podendo receber um ou mais ids.

**Observações técnicas**

- O parâmetro desta função pode ser alterado para atender ao requisito proposto.

**O que será avaliado**

- Caso receba nenhum parâmetro, necessário retornar um array vazio;
- Ao receber como parâmetro um único id, retorna um array com a espécie referente à esse id;
- Ao receber mais de um id, retorna um array com as espécies referentes aos ids.

---

### 2. Implemente a função `getAnimalsOlderThan`

Esta função, a partir do nome de uma espécie e uma idade mínima, verifica se todos os animais daquela espécie possuem a idade mínima especificada.

**Observações técnicas**

- Deve retornar um valor booleano.

**O que será avaliado**

- Ao passar o nome de uma espécie e uma idade, testa se todos os animais desta
espécie possuem a idade mínima especificada.

---

### 3. Implemente a função `getEmployeeByName`

Esta função é responsável pela busca das pessoas colaboradoras através do primeiro ou do último nome delas

**O que será avaliado**

- Sem parâmetros, retorna um objeto vazio
- Quando provido o primeiro nome do funcionário, retorna o objeto do funcionário
- Quando provido o último nome do funcionário, retorna o objeto do funcionário

---

### 4. Implemente a função `getRelatedEmployees`

Considerando a boa prática de dividir o código em partes menores, apresentamos a função `getRelatedEmployees` em que você deverá dividí-la em duas funções: 
  
1 - `isManager` - que será responsável por verificar se uma pessoa colaboradora é gerente ou não. O retorno dessa função deve ser um booleano: `true` ou `false`;

2 - `getRelatedEmployees` - que utiliza a primeira função para apresentar as seguintes saídas: 
  * se for uma pessoa colaboradora gerente, deve retornar um array contendo os nomes das pessoas colaboradoras que ela é responsável;
  * se **não** for uma pessoa colaboradora gerente, deverá ser lançado um erro gerado com a função construtora **Error** da biblioteca padrão do JavaScript com a mensagem **"O id inserido não é de uma pessoa colaboradora gerente!"**.

Exemplo:

```javascript
throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
```

Você pode ler mais sobre a [função construtora **Error**, neste link.](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Error)

  **Observações técnicas**

  - Retorna um array contendo nome e sobrenome das pessoas colaboradoras gerenciadas por determinada pessoa com cargo de gerência.
  
  Exemplo de output:

  ```javascript
  [ 'Burl Bethea', 'Ola Orloff', 'Emery Elser' ];
  ```

  - Dispara um erro com a mensagem: "O id inserido não é de uma pessoa colaboradora gerente!".

  **O que será avaliado**

  - Retorna `true` se o id passado for de um gerente;
  - Retorna `false` se o id passado não for de um gerente;
  - Se o id passado for de um gerente, retorna um array contendo nome e sobrenome das pessoas colaboradoras que ela é responsável;
  - Se o id passado **não** for de um gerente, dispara um erro com a mensagem: "O id inserido não é de uma pessoa colaboradora gerente!".

---

### 5. Implemente a função `countAnimals`

  Esta função é responsável por contabilizar a quantidade de animais de cada espécie.

**Observações técnicas**

  - Se nenhum argumento for passado, retorna um objeto cujo o nome de cada espécie é uma chave desse objeto, e o total de animais dessa espécie é o seu valor;
  - Com o argumento `{ specie: 'penguins' }`, retorna um número, a quantidade de pinguins no zoológico;
  - Com o argumento `{ specie: 'giraffes', sex: 'female' }`, retorna um número, a quantidade de girafas do sexo feminino.

**O que será avaliado**

  - Sem parâmetros, retorna as espécies e sua quantidade;
  - Recebendo como parâmetro um objeto com a chave `specie`, retorna um número, a quantidade de animais daquela espécie;
  - Recebendo como parâmetro um objeto com a chave `specie` e `sex`, retorna um número, a quantidade de animais daquela espécie, no sexo selecionado.

---

### 6. Implemente a função `calculateEntry`

Esta função irá receber um array de visitantes no seguinte formato:

```javascript
const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];
```

Você deve isolar a parte da lógica na função `countEntrants` que se encontra no mesmo arquivo da função `calculateEntry`. Ela deverá receber o array de visitantes e retornar um objeto com a contagem de acordo com os seguintes critérios de classificação:

* Pessoas com idade menor que 18 anos são classificadas como crianças (child);
* Pessoas com idade maior ou igual a 18 anos e menor que 50 são classicadas como adultas (adult);
* Pessoas com idade maior ou igual 50 anos são classificadas como pessoas com mais idade (senior).

O retorno da função deverá ser um objeto no seguinte formato: `{ child: 3, adult: 2, senior: 1 }`.

**Exemplo de uso da função `countEntrants`:**

```javascript
countEntrants(entrants);
```

**Saída:**

```json
{ "child": 3, "adult": 2, "senior": 1 }
```

Após terminar a implementação da função `countEntrants` você deverá utilizá-la para implementar a função `calculateEntry`. Esta deverá receber um array de visitantes e a partir da quantidade de visitantes e faixa etária de cada um, deverá retornar o valor total a ser cobrado.

**Exemplo de uso da função `calculateEntry`:**

```javascript
calculateEntry(entrants);
```

**Saída:**

```javascript
187.94
```

**Observações técnicas**

- Ambas funções recebem como parâmetro um array contendo objetos que representam pessoas.

**O que será avaliado**

- Ao receber um array de visitantes, retorna um objeto com a contagem;
- Retorna 0 se nenhum argumento for passado;
- Retorna 0 se um objeto vazio for passado;
- Retorna o preço total a ser cobrado dado o array de pessoas.

---

### 7. Implemente a função `getAnimalMap`

A função é responsável pelo mapeamento geográfico das espécies e seus animais, podendo ainda filtrá-los por ordem alfabética e sexo.

**Observações técnicas**

- Analise o teste unitário para entender os retornos que são esperados para esta função.

**O que será avaliado**

- Sem parâmetros, retorna animais categorizados por localização;
- Sem a opção `includeNames` especificada, retorna animais categorizados por localização;
- Com a opção `includeNames: true` especificada, retorna nomes de animais;
- Com a opção `sorted: true` especificada, retorna nomes de animais ordenados;
- Com a opção `sex: 'female'` ou `sex: 'male'` especificada, retorna somente nomes de animais macho/fêmea;
- Com a opção `sex: 'female'` ou `sex: 'male'` especificada e a opção `sorted: true` especificada, retorna somente nomes de animais macho/fêmea com os nomes dos animais ordenados;

---

### 8. Implemente a função `getSchedule`

A função é responsável por disponibilizar as informações de horário dos animais em uma consulta para o usuário, que pode querer ter acesso ao cronograma da semana, de um dia ou de um animal em específico.

**Observações técnicas**

- Analise os testes unitários para entender os retornos que são esperados para esta função;
- Quebre o problema em funções menores para que fique mais simples de administrar a responsabilidade de cada uma delas.

**O que será avaliado**

- Sem parâmetros, retorna os horários para cada dia e quais animais estarão disponíveis;
- Com parâmetros que não sejam nem um animal e nem um dia, retorna os horários para cada dia e quais animais estarão disponíveis;
- Se um único dia for passado, retorna os horários para aquele dia e quais animais estarão disponíveis;
- Se o nome de um animal for passado, deverá retornar um array com os dias em que ele estará em exibição.
 
---

### 9. Implemente a função `getOldestFromFirstSpecies`

A função busca por informações do animal mais velho da primeira espécie gerenciada pela pessoa colaboradora do parâmetro.

**O que será avaliado**

- Passado o id de um funcionário, encontra a primeira espécie de animal gerenciado pelo funcionário, e retorna um array com nome, sexo e idade do animal mais velho dessa espécie.

---

### 10. Implemente a função `getEmployeesCoverage`

Esta função será responsável por associar informações de cobertura das pessoas funcionárias.

A cobertura deverá ser representada por um objeto com as seguintes propriedades:

```javascript
{
  "id": "4b40a139-d4dc-4f09-822d-ec25e819a5ad", // id da pessoa
  "fullName": "Sharonda Spry", // nome completo: firstName + lastName
  "species": [ "otters", "frogs" ], // espécies as quais a pessoa é responsável
  "locations": [ "SE", "SW" ], // Um array contendo todas as localizações das espécies
}
```

A função deve receber um objeto de opções que determinará seu comportamento, sendo:

* **name**: O nome ou sobrenome da pessoa a ser buscada
* **id**: O id da pessoa a ser buscada

**Exemplos de uso da função `getEmployeesCoverage`:**

```javascript
getEmployeesCoverage({ name: 'Sharonda' });
getEmployeesCoverage({ name: 'Spry' });
getEmployeesCoverage({ id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad' });
```

**Saída:**

```json
{
  "id": "4b40a139-d4dc-4f09-822d-ec25e819a5ad",
  "fullName": "Sharonda Spry",
  "species": [ "otters", "frogs" ],
  "locations": [ "SE", "SW" ]
}
```

Ao ser chamada sem argumentos, deverá retornar um array com a cobertura de todas as pessoas funcionárias:

**Exemplo:**

```javascript
getEmployeesCoverage();
```

**Saída:**

```javascript
[
  {
    "id": "c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1",
    "fullName": "Nigel Nelson",
    "species": [ "lions", "tigers" ],
    "locations": [ "NE", "NW" ],
  },
  {
    "id": "0e7b460e-acf4-4e17-bcb3-ee472265db83",
    "fullName": "Burl Bethea",
    "species": [ "lions", "tigers", "bears", "penguins" ],
    "locations": [ "NE", "NW", "NW", "SE" ],
  },
  {
    "id": "fdb2543b-5662-46a7-badc-93d960fdc0a8",
    "fullName": "Ola Orloff",
    "species": [ "otters", "frogs", "snakes", "elephants" ],
    "locations": [ "SE", "SW", "SW", "NW" ],
  },
  //[...]
];
```

Caso nenhuma pessoa seja encontrada com o nome, sobrenome ou id, deverá ser lançado um erro gerado com a função construtora **Error** da biblioteca padrão do JavaScript com a mensagem **"Informações inválidas"**. Exemplo:

```javascript
throw new Error('Informações inválidas');
```

Você pode ler mais sobre a [função construtora **Error**, neste link.](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Error)

**Observações técnicas**

- Ao receber o objeto de opções com a propriedade name, procura a pessoa funcionária correspondente;
- A opção name deverá aceitar nome e sobrenome para realizar a busca;
- Ao chamar a função sem argumentos ela deve retornar um array com a cobertura de todas as pessoas funcionárias.

**O que será avaliado**

- Se o objeto de opções tiver a propriedade name, retorna somente a pessoa correspondente;
- A propriedade name do objeto de opções também funciona usando o segundo nome;
- Se o objeto de opções tiver a propriedade id, retorna somente a pessoa correspondente;
- Sem parâmetros, retorna uma lista com a cobertura de todas as pessoas funcionárias;
- Caso não haja nenhuma pessoa com o nome ou id especificados deverá ser lançado um error.

---
