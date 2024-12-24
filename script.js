document.addEventListener("DOMContentLoaded", function() {
    const text = "Bem Vindo ao Meu Portfólio";
    const animatedText = document.getElementById("animated-text");
    let index = 0;
    let colors = ["#ffffff", "#09f774", "#f40000", "#ffffff"];  // Branco, Verde, Vermelho
    let currentColorIndex = 0;  // Começa com a cor branca
    let isTypingComplete = false;

    // Função para animar o texto, letra por letra
    function typeWriter() {
        animatedText.innerHTML = ""; // Limpa o conteúdo do texto a cada reinício
        index = 0; // Reinicia o índice de digitação
        isTypingComplete = false;
        
        // Função de digitação
        function write() {
            if (index < text.length) {
                animatedText.innerHTML += text[index];
                index++;
                setTimeout(write, 150);  // Ajuste a velocidade da digitação
            } else {
                isTypingComplete = true;
                changeColor();  // Inicia a troca de cores após a digitação
            }
        }

        write(); // Inicia a digitação
    }

    // Função para trocar a cor do texto
    function changeColor() {
        if (isTypingComplete) {
            let colorChangeInterval = setInterval(function() {
                // Troca a cor
                animatedText.style.color = colors[currentColorIndex];
                currentColorIndex = (currentColorIndex + 1) % colors.length;  // Alterna entre as cores

                // Quando todas as cores forem alteradas, reinicia a digitação
                if (currentColorIndex === 0) {
                    clearInterval(colorChangeInterval); // Para o intervalo de cores
                    setTimeout(function() {
                        typeWriter(); // Reinicia a animação de digitação
                    }, 500);  // Espera meio segundo antes de reiniciar a digitação
                }
            }, 1000);  // Troca de cor a cada 2 segundos
        }
    }

    typeWriter(); // Inicia a animação de digitação assim que o conteúdo for carregado
});
