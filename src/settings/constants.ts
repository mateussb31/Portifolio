export const Y_CHAO = 200;
export const Y_PERSONAGEM=100;
export const Y_TAPETE=60/100*Y_CHAO;
export const WIDTH_PERSONAGEM=96;
export const HEIGHT_PERSONAGEM=192;
export const ALTURA_IMAGEM_PERSONAGEM = 96;
export enum EDirecao{
    LEFT= "ArrowLeft",
    RIGHT="ArrowRight",
    UP = "ArrowUp",
    DOWN = "ArrowDown",
    
}
export const ELinks= [
    "https://github.com/mateussb31/Connect_sigaa",
    "https://thivizinx.github.io/webbiologuia/",
    "https://github.com/mateussb31"]
export const EDeco=[
    {url: "lanterna.png", tamanho: "100%", margem:"40vh", width:150, height: 150, zindex:0, distancia:0.3},
    {url: "arvere.png", tamanho:"80%", margem:"2vh", width:753, height: 672, zindex:1, distancia:0.25},
    {url: "janela.png", tamanho: "100%", margem:"60vh", width:220, height: 226, zindex:0, distancia:0.3}
]
export const X_ITEM =0.6*window.innerWidth
export const TAMANHO_PORTA=164