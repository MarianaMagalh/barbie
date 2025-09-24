import './style.css';

export default function FotoProfile(){
    return(
        <>
        <div class="fundoPerfil">
            <h1 class="bigH">H</h1><p class="conTitulo">ello!</p>
            <h2>Eu sou a</h2>
            <h3>Barbie Millicent</h3>
            <p class="pequenoTexto">
                Apaixonada por moda, criatividade e novas aventuras. 
                Acredito que a imaginação transforma sonhos em realidade e que todos podemos brilhar do nosso jeito.
            </p>
        </div>
        <div class="card1"></div>
        <figure class='portaFoto'>
            <img 
                src="https://i.pinimg.com/736x/bf/b2/8c/bfb28c85616232fbeb4c9052c2202d59.jpg" 
                alt="" />
        </figure>
        </>
    );
}