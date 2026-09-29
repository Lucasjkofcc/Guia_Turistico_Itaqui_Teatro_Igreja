function Espanhol(){
    const titulo = document.querySelector("h1")
    if (titulo) titulo.textContent = "Iglesia Matriz de San Patricio"

    const paragrafos = document.querySelectorAll(".texto-idioma")
    paragrafos[0].textContent = "En pleno conflicto de los Farrapos, en el año 1837, la provincia de Itaqui contó con una pequeña iglesia para los fieles, construida en piedra y con techo de paja. En 1864, la ciudad —ya emancipada— comenzó a recibir recursos del intendente (alcalde) municipal, de los proprietarios de estancias y de los comerciantes para la construcción, en estilo gótico, de la Iglesia Matriz de San Patricio."
    paragrafos[1].textContent = "Esta iglesia fue demolida en 1957 para construir la actual. Cuenta la historia que el nombre de San Patricio fue dado por comerciantes británicos que llegaban por el río Uruguay, quienes eligieron dicho nombre en honor al patrón de Irlanda, San Patricio."
    paragrafos[2].textContent = "Se cree que San Patricio vivió a mediados del siglo IV d. C. Nacido en Gran Bretaña, fue capturado por piratas y enviado a la región donde hoy se encuentra Irlanda, donde vivió esclavizado durante años hasta que logró liberarse y ingresar en la Iglesia Católica. Tras ser ordenado obispo, fue designado para llevar el Evangelio a la isla, un lugar al que los romanos aún no habían llegado."
    paragrafos[3].textContent = "Itaqui is considered the only Brazilian city to have San Patricio as patrón oficial del municipio. Cada año, el 17 de marzo (día de San Patricio), la comunidad local organiza procesiones religiosas tradicionales que culminam en la Iglesia Matriz, combinando las festividades católicas con eventos culturales en la ciudad. La iglesia ha sido declarada Patrimonio Histórico y Cultural por el Ayuntamiento Municipal."
    paragrafos[4].innerHTML = "<strong>Misas:</strong><br>Sabado a las 19h / Domingo a las 08h30 y a las 19h<br>Missa de Sanación y Liberación - primer jueves del mes a las 19h<br>Missa de Salud - viernes a las 15h"
    paragrafos[5].innerHTML = "<strong>Horario de Atencion:</strong><br>Lunes a Viernes de 8h hasta las 11h30 / 14h hasta las 17h30<br>Sábado de 8h hasta las 11h30"
}
function English(){
    const titulo = document.querySelector("h1")
    if (titulo) titulo.textContent = "Saint Patrick’s Parish Church"
    const paragrafos = document.querySelectorAll(".texto-idioma")
    paragrafos[0].textContent = "In the middle of the Farroupilha Revolution (Rio Grande do Sul’s uprising against the Empire of Brazil, 1835-1845), the Itaqui province gained a small church for its faithful, built in stone and with thatched roof."
    paragrafos[1].textContent = "In 1864, the now emancipated city started receiving funds from the Municipal Intendant, ranch owners and Merchants to build, in goth style, the Saint Patrick's Parish Church (Igreja Matriz de São Patrício)."
    paragrafos[2].textContent = "This church was demolished in 1957 for the construction of the actual. The story goes that the Saint Patrick name came from British merchants who used to duck via the Uruguay River, and they named the church in honor of Ireland's patron saint, Saint Patrick."
    paragrafos[3].textContent = "Saint Patrick is said to have lived in the mid-4th century BC. Born in Great Britain, he was captured by pirates and sent to the region where nowadays Ireland is located, where he lived as a slave for years, until becoming free and entering the Catholic Church. Ordained bishop, he was designated to spread the gospel in the island, local where the Romans haven't arrived yet. Itaqui is considered the only Brazilian city to have Saint Patrick as the official patron saint. Annually, on March 17th (St. Patrick's Day), the local community makes traditional religious processions that end at the Parish Church, mixing the Catholic celebrations with cultural events in the city. The Church is a Historic and Cultural Heritage Site listed by the Municipal Government."
    paragrafos[4].innerHTML = "<strong>Masses:</strong><br>Saturday at 7:00 PM / Sunday at 08:30 AM and 7:00 PM<br>Mass for Healing and Deliverance - 1st Thursday of the month at 7:00 PM<br>Mass for Health - Friday at 3:00 PM"
    paragrafos[5].innerHTML = "<strong>Office Hours:</strong><br>Monday to Friday - 8:00 AM to 11:30 AM / 2:00 PM to 5:30 PM<br>Saturday - 8:00 AM to 11:30 AM"
}

function Portuguese(){
    const titulo = document.querySelector("h1")
    if (titulo) titulo.textContent = "Igreja Matriz de São Patrício"

    const paragrafos = document.querySelectorAll(".texto-idioma")
    paragrafos[0].textContent = "Em pleno conflito farroupilha, no ano de 1837, a província de Itaqui ganhou uma pequena igreja para os fiéis, construída em pedra e telhado de capim. No ano de 1864, a cidade já emancipada começou a receber recursos do Intendente Municipal, Estancieiros e Comerciantes para a construção em estilo gótico da Igreja Matriz de São Patrício."
    paragrafos[1].textContent = "Esta igreja foi demolida em 1957 para a construção da atual. Conta a história que o nome São Patrício teria sido dado por comerciantes britânicos que aportavam pelo Rio Uruguai, e que deram o nome em homenagem ao padroeiro da Irlanda, São Patrício."
    paragrafos[2].textContent = "São Patrício teria vivido em meados do século 4 depois de Cristo. Nascido na Grã-Bretanha, ele foi capturado por piratas e enviado para a região onde hoje fica a Irlanda, onde viveu escravizado por anos, até conseguir se libertar e ingressar na Igreja Católica. Ordenado bispo, foi designado a levar o evangelho à ilha, local onde os romanos ainda não haviam chegado."
    paragrafos[3].textContent = "Itaqui é considerada a única cidade brasileira que tem São Patrício como padroeiro oficial do município. Anualmente, no dia 17 de março (St. Patrick's Day), the local community realiza tradicionais procissões religiosas que culminam na Igreja Matriz, mesclando as festividades católicas com eventos culturais na cidade. A Igreja é Patrimônio Histórico e Cultural tombado pela Prefeitura Municipal."
    paragrafos[4].innerHTML = "<strong>Missas:</strong><br>Sábado às 19h / Domingo às 08h30 e 19h<br>Missa por Cura e Libertação - 1ª quinta-feira do mês às 19h<br>Missa da Saúde - sexta-feira às 15h"
    paragrafos[5].innerHTML = "<strong>Atendimento:</strong><br>Segunda a sexta-feira das 8h às 11h30 / 14h às 17h30<br>Sábado das 8h às 11h30"
}
