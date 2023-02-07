export const Y_CHAO = 200;
export const Y_PERSONAGEM=100;
export const Y_TAPETE=60/100*Y_CHAO;
export const WIDTH_PERSONAGEM=160*1.25;
export const HEIGHT_PERSONAGEM=160*1.25;
export const ALTURA_IMAGEM_PERSONAGEM = 96;
export const WIDTH_ITEM_CENARIO = 675
export const WIDTH_PLACA= 180
export const WIDTH_PORTA=375
export enum EDirecao{
    LEFT= "ArrowLeft",
    RIGHT="ArrowRight",
    UP = "ArrowUp",
    DOWN = "ArrowDown",
    
}
export const ELinks= [
    {nome: "Connect Sigaa", url : "https://github.com/mateussb31/Connect_sigaa"},
    {nome: "Biologuia", url:"https://thivizinx.github.io/webbiologuia/"},
    {nome: "Servidor git", url:"https://www.youtube.com/watch?v=zWdtCHHc8Kc"},
    {nome: "Ransomware", url:"https://www.youtube.com/watch?v=eKau1xZyDRQ"},
    {nome: "Perfil github", url:"https://github.com/mateussb31" },
]
export const WIDTH_TELA= (ELinks.length*3+1)*((WIDTH_ITEM_CENARIO+WIDTH_PLACA+WIDTH_PORTA)/2.5)+0.3*window.innerWidth
export const EDeco=[
    {url: "lanterna.png", tamanho: "33% 100%", height: 225, alinhamento:"center"},
 //   {url: "arvere.png", tamanho:"80%", margem:"2vh", width:753, height: 672, zindex:1, distancia:0.25},
    {url: "arvere2.png", tamanho:"100%", height: 510, alinhamento:"end"},
    {url: "janela.png", tamanho: "48% 100%", height: 337.5, alinhamento:"start"}
]
