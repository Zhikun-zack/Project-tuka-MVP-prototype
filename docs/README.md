# Tuka

## Components
### Structure
|--index.js
    |--App.js
        |--Header
            |-- Search.js
                |--Key.js
                |--MusicRow.js
        |--Homepage_Contents.js
            |--MusicRow
        |--Detail
        |--Footer
### Data Flow
#### Redux
index.js
    create store
        state: {
            keyWordsList: default value, type list
        }
Search.js
    onClick(suggestion keys and search button): generate action, update state
    remove keys: generate action, update state
        state: {
            keyWordsList: the selected up to five genres, type list
        }
Homepage_Contents.js
    read state and shows the MusicRow.js based on the state value

#### Pure React
Search.js --> Keywords.js
    value: keyword //which is one of the genre that selected by user
    function: removeKey //take one genre as the input parameter then remove it from the list
                        //this function is executed by Keyword.js component, child component changes father component's state

### Navbar
### SearchBar
#### Structure

#### Function
For search bar, implement several functions:
    1. display search bar
    2. when input some words, appears the suggestion window 
    3. when select one of the suggestion genre / click search / press enter, appears one key word div
    4. when select one of the suggestion genre / click search / press enter, changes carousel correspondingly

### Carousels

> An awesome project.
