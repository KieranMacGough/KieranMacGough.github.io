type Projects = ({
    name: string,
    languages: Array<string>,
    year: number,
    imgName: string,
    description: string
})

const projects:Projects[ ] = [
    {
        "name": "The Four Horsemen",
        "languages": ["AngelScript"],
        "year": 2013,
        "imgName": 'TheFourHorsemen.jpg',
        "description": "The Four Horsemen is a custom story mod for Amensia: The Dark Descent, written in AngelScript, a game-oriented compiled scripting language influenced by C++."
    },
    {
        "name": "Pokedex App",
        "languages": ["React Native", "Javascript", "CSS"],
        "year": 2022,
        "imgName": 'PokedexApp.png',
        "description": "Pokedex App made in React Native, utilising PokeAPI and a public Figma design. Used as a first project to learn the React framework."

    }
]

export default projects;
export type { Projects };