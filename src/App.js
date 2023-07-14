import './App.css'
import Unit from './components/Unit'

function App() {
    return (
        <div className="App">
            <Unit
                id={'1'}
                name={'Rick Sanchez'}
                status={'Alive'}
                species={'Human'}
                gender={'Male'}
                image={'https://rickandmortyapi.com/api/character/avatar/1.jpeg'}
            />
            <Unit
                id={'2'}
                name={'Morty Smith'}
                status={'Alive'}
                species={'Human'}
                gender={'Male'}
                image={'https://rickandmortyapi.com/api/character/avatar/2.jpeg'}
            />
            <Unit
                id={'3'}
                name={'Summer Smith'}
                status={'Alive'}
                species={'Human'}
                gender={'Female'}
                image={'https://rickandmortyapi.com/api/character/avatar/3.jpeg'}
            />
            <Unit
                id={'4'}
                name={'Beth Smith'}
                status={'Alive'}
                species={'Human'}
                gender={'Female'}
                image={'https://rickandmortyapi.com/api/character/avatar/4.jpeg'}
            />
            <Unit
                id={'5'}
                name={'Jerry Smith'}
                status={'Alive'}
                species={'Human'}
                gender={'Male'}
                image={'https://rickandmortyapi.com/api/character/avatar/5.jpeg'}
            />
            <Unit
                id={'6'}
                name={'Abadango Cluster Princess'}
                status={'Alive'}
                species={'Alien'}
                gender={'Female'}
                image={'https://rickandmortyapi.com/api/character/avatar/6.jpeg'}
            />
        </div>
    )
}

export default App

//todo
// 2. Створити компонент який описує персонажа (властивості id,name,status,species,gender,image) з цього апі
// https://rickandmortyapi.com/
// https://rickandmortyapi.com/api/character
// Створити (описати) 6 персонажів з цьго апі.
