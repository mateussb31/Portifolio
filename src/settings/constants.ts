export const Y_CHAO = 200;
export const Y_PERSONAGEM=100;
export const Y_TAPETE=60/100*Y_CHAO;
export const WIDTH_PERSONAGEM=160*1.25;
export const HEIGHT_PERSONAGEM=160*1.25;
export const ALTURA_IMAGEM_PERSONAGEM = 96;
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
export const EMargens = [2,20]
export const EDeco=[
    {url: "lanterna.png", tamanho: "100%", margem:Math.random()*(70 - 25)+25+"vh", width:225, height: 225, zindex:0, distancia:0.3},
 //   {url: "arvere.png", tamanho:"80%", margem:"2vh", width:753, height: 672, zindex:1, distancia:0.25},
    {url: "arvere2.png", tamanho:"100%", margem:EMargens[Math.floor(Math.random()*2)]+"vh", width:675, height: 510, zindex:2, distancia:0.25},
    {url: "janela.png", tamanho: "100%", margem:Math.random()*(70 - 25)+25+"vh", width:330, height: 337.5, zindex:0, distancia:0.3}
]
export const X_ITEM =0.7*window.innerWidth
export const TAMANHO_PORTA=375