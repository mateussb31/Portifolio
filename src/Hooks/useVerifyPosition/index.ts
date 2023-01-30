import { WIDTH_PERSONAGEM, ALTURA_IMAGEM_PERSONAGEM } from './../../settings/constants.ts';

export default function useVerifyPosition(cordenadasPersonagem: { x: number, y: number }) {
    var visivel = false
    if (
        cordenadasPersonagem.x * 3 + WIDTH_PERSONAGEM > 705 &&
        cordenadasPersonagem.x * 3 < 705 + 290 &&
        cordenadasPersonagem.y * 3 + ALTURA_IMAGEM_PERSONAGEM > 159
    ){visivel = true}
    return {
        estado: visivel
    }
}
