import './App.css'
import Post from './components/Posts'
function App() {
    return (
        <div className="App">
            <Post />
        </div>
    )
}

export default App

//todo

// з jsonplaceholder отримати всі пости в компоненту Posts.js
// відобразити кожного інформацію (id,title) з кожного поста (компонента Post)
// Зробити кнопку вибора поста, при натисканні на яку в Posts.js ви покажете детальну інфомацію про пост(всю інфу)
