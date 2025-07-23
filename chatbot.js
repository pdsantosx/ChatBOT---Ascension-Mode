// leitor de qr code
const qrcode = require('qrcode-terminal');
const { Client, Buttons, List, MessageMedia } = require('whatsapp-web.js'); // Mudança Buttons
const client = new Client();
// serviço de leitura do qr code
client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});
// apos isso ele diz que foi tudo certo
client.on('ready', () => {
    console.log('Tudo certo! WhatsApp conectado.');
});
// E inicializa tudo 
client.initialize();

const delay = ms => new Promise(res => setTimeout(res, ms)); // Função que usamos para criar o delay entre uma ação e outra

// Funil

client.on('message', async msg => {

    if (msg.body.match(/(menu|Menu|dia|tarde|noite|oi|Oi|Olá|olá|ola|Ola)/i) && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        const contact = await msg.getContact(); //Pegando o contato
        const name = contact.pushname; //Pegando o nome do contato
        await client.sendMessage(msg.from,'Olá, '+ name.split(" ")[0] + '! Parabéns pela sua escolha de nos contatar! ⚜\n\n Sou o assistente virtual da Ascension Mode. Como posso ajudá-lo(a)? Por favor, digite uma das opções abaixo:\n\n1 - Como funciona? ❓\n2 - Qual é o valor de acesso? 🏷\n3 - Quais são os benefícios? 🎁\n4 - Quero garantir minha vaga! 🎫\n5 - Tenho outra pergunta/dúvida. 💬\n6 - Prestar feedback 🏅'); 
        //Primeira mensagem de texto ^    
    }


    if (msg.body !== null && msg.body === '1' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'O nosso canal de assinaturas oferece +15 opções de livros e e-books, sendo atualizados todos os meses diretamente pelo nosso grupo no WhatsApp. 📁\n\nNão há carência, o que significa que você pode começar a usar nossos serviços imediatamente após garantir o seu acesso. ✅\n\nOferecemos um canal de suporte por 24 horas e 7 dias por semana. ☎\n\n(Spoiler: Futuramente teremos mentorias e cursos pagos e conhecidos de diversas áreas!) 🤫');
   
    }

    if (msg.body !== null && msg.body === '2' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Você pode aderir sua vaga diretamente aqui pelo nosso WhatsApp. (Nessa mesma conversa)\n\nApós a adesão, você terá acesso imediato ao nosso canal de conteúdos! 🎫');
        await delay(2000); //Delay de 2000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(2000);
        await client.sendMessage(msg.from, '*Acesso Mensal:* R$27,99 por mês.📃\n\nPagamento recorrente ao longo do período de assinatura\n\nCaso você não pague a renovação da assinatura, VOCÊ SERÁ REMOVIDO DO CANAL! Sem aviso prévio.❌');
        
        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '*Ao longo do seu período de assinatura, enviaremos uma mensagem para a renovação de seu acesso ao canal.*\n\n*Responda a mensagem e conclua o passo a passo para continuar com sua vaga!* ✅');
        
    }

    if (msg.body !== null && msg.body === '3' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Benefícios 🎁 :\n\n- Acesso ao conteúdo do canal durante 30 dias\n\n- Número de suporte 24h por dia.\n\n- Spoiler dos próximos conteúdos do mês seguinte.\n\n- Surpresas e bônus ao longo dos meses! ');

    }

    if (msg.body !== null && msg.body === '4' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '*PARABÉNS POR TOMAR ESSA DECISÃO E AGARRAR ESSA NOVA OPORTUNIDADE!*👏');
        await delay(2000); //delay de 2 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await client.sendMessage(msg.from, 'Suas sugestões ou feedbacks serão sempre bem-vindos!\n\n(Lembre-se de digitar a opção 6!)\n\n(Por gentileza, utilizar essa opção após o atendimento ou adesão de seu acesso!)');
        
        await delay(1000); //delay de 1 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(1000);
        await client.sendMessage(msg.from, 'O valor para garantir o seu acesso ao nosso canal de conteúdos é de R$ 27,99!\n\nSendo a forma de pagamento via PIX. 💰');
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Chave PIX para o pagamento: 85 987152800 / Pedro Santos / Banco Inter');
        
        await delay(2000); //delay de 2 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await client.sendMessage(msg.from, 'Após o pagamento, por gentileza, encaminhe o comprovante da transação para a liberação do acesso. 📦');



    }

    if (msg.body !== null && msg.body === '5' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Se você tiver outras dúvidas ou precisar de mais informações, por favor, fale aqui nesse whatsapp! Encaminharemos as dúvidas para o nosso atendente. 📞\n\n(Prazo de resposta: 24 horas) ⏰');


    }

    if (msg.body !== null && msg.body === '6' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Se você tiver algum feedback ou sugestão para nos enviar, pode nos enviar agora.\n\n*O momento de fala é seu!* 💭');

}

});