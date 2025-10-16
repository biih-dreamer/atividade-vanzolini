document.addEventListener('DOMContentLoaded', () => {
    
    // Função para scroll suave ao clicar no CTA
    window.scrollToElement = (id) => {
        const element = document.getElementById(id);
        if (element) {
            // Calcula a posição para scroll, ajustando pelo header fixo
            const offset = 80; 
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    // Função simples para o botão de conclusão da atividade
    const finishButton = document.getElementById('finish-activity');
    if (finishButton) {
        finishButton.addEventListener('click', () => {
            const amigoText = document.getElementById('amigo-response').value.trim();
            const selfText = document.getElementById('self-response').value.trim();

            if (amigoText === "" || selfText === "") {
                alert("Por favor, preencha ambos os campos para refletir sobre a atividade.");
                return;
            }

            // Simulação de conclusão e feedback ao usuário
            alert("Parabéns! Sua reflexão sobre a Autoaceitação foi registrada. Lembre-se de revisitar sua mensagem de autocompaixão sempre que necessário. O poder de aceitar está em suas mãos.");
            
            // Opcional: Desabilitar o botão após o envio (para evitar reenvio)
            finishButton.disabled = true;
            finishButton.textContent = "Atividade Concluída!";
        });
    }

});