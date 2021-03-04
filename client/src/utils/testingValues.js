import fakeCharacter from './fake-character.json'
import fakesCharacters from './fake-characters.json'

export const makeFakeCharacter = () => {
    return fakeCharacter
}

export const makeFakeCharacters = () => {
    return fakesCharacters
}

export default{
    makeFakeCharacter,
    makeFakeCharacters
}