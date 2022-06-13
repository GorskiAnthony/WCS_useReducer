# Prise en main du hook useReducer

## La base

Nous allons faire une petite application avant de commencer à utiliser le hook useReducer.
Sur la branche principale, nous avons déjà créé cette application.

Nous allons ensuite, via plusieurs branches, changer le code de l'application pour utiliser le hook useReducer.

## Installation

```shell
git clone <projet>
cd <projet>
npm install
npm start
```

## Étape 1 - Création du reducer

Nous allons donc changer quelques éléments du code de l'application.
Dans `App.jsx` nous allons faire les modifications suivantes :

```diff
- const [todos, setTodos] = useState(datas);
+ const initialValue = datas;
```

Nous allons ajouter le reducer à notre application.
```js
const [todos, dispatchTodo] = useReducer(todoReducer, initialValue);
```

Mais la fonction `todoReducer` existe t'elle ? Non, nous devons donc la créer.

```js
// Notre fonction "reducer" prenant en argument
// `state` la valeur actuelle du `useReducer et
// action l'argument passé par la fonction `dispatchTodo`
const todoReducer = (state, action) => {
    // On se basera sur la propriété `type` de l'objet envoyé par `dispatchTodo`
    // pour déterminer l'action à effectuer sur le `state`
    switch (action.type) {
        // si action.type === 'ADD_TODO', on ajoute la propriété todo au `state`
        case "ADD_TODO":
            return [...state, action.payload];
        // si action.type === 'REMOVE_TODO', on retire l'équivalent de la propriété todo du `state`
        case "REMOVE_TODO":
            return state.filter((todo) => todo !== action.payload);
        // Sinon retourner la valeur actuelle (cela aura pour conséquence de ne pas réafficher le composant)
        default:
            return state;
    }
}
```

## Étape 2 : Ajout de la méthode "addTodo"

```js
const addTodo = () => {
    dispatchTodo({ type: "ADD_TODO", payload: input });
    setInput("");
};
```

Du coup, nous devons faire une autre modification, sur le bouton Ajouter.

```js
<button onClick={addTodo}>Ajouter</button>
```

## Étape 3 : Ajout de la méthode "removeTodo"

Maintenant que nous avons la méthode `addTodo`, nous allons ajouter la méthode `removeTodo`.

Celui ci sera passé un props dans le composant `TodoList`.

```js
  const removeTodo = (todo) => {
    dispatchTodo({ type: "REMOVE_TODO", payload: todo });
  };
```

Et dans le composant `TodoList`, nous allons ajouter la méthode `removeTodo` :

```js
import React from "react";

const TodoList = ({ todos, removeTodo }) => {
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo, id) => {
          return (
            <li key={id}>
              {todo}
              <button onClick={() => removeTodo(todo)}>X</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
```
