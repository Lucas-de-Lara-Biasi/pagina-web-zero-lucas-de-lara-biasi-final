const post_template = document.getElementById("template_post")
const posts_container = document.getElementById("posts_container")

let posts_count = 0

function createPost(post_title, post_user, post_content) {
    //CLONANDO
    let post = post_template.cloneNode(true);
    post.id = "post_" + posts_count;

    //LOCALIZANDO
    const top_bar = post.getElementsByClassName("post_top_bar")[0]
    const bottom_bar = post.getElementsByClassName("post_bottom_bar")[0]
    const content_div = post.getElementsByClassName("post_content")[0]

    //TOP BAR
    const title = top_bar.getElementsByClassName("post_title")[0]
    const buttons = top_bar.getElementsByClassName("post_buttons")[0]

    //BOTTOM BAR
    const user = bottom_bar.getElementsByClassName("post_user")[0]
    const date = bottom_bar.getElementsByClassName("post_date")[0]

    //SETUP
    title.textContent = post_title
    user.textContent = "Por: " + post_user

    //DATE SETUP
    const current_date = new Date
    date.textContent = `${current_date.toLocaleDateString()} - ${current_date.toLocaleTimeString()}`

    //POST CONTENT SETUP
    for (let definition of post_content) {
        let element = document.createElement(definition.type)
        //PARA PARAGRAFO
        let typeo = definition.type
        if (typeo == "p") {
            element.textContent = definition.content
        }else if (typeo = "img") {
            element.src = definition.content
            element.style.height = definition.size
            element.style.paddingLeft = "10px"
            element.style.borderRadius = "10px"
        }

        //ADD CHILD
        content_div.appendChild(element)
    }

    //BEFORE
    post.style.cssText = ''
    posts_container.appendChild(post);
    posts_count++;
}

createPost("BOAS VINDAS!", "Lucas de Lara Biasi",
    [
        { type: "p", content: "Boas vindas ao meu blog de desenvolvimento de jogos!" }
    ]
)

createPost("MOTORES GRÁFICOS", "Lucas de Lara Biasi",
    [
        { type: "p", content: "Motores gráficos são uma base fundamental para o desenvolvimento de um jogo." },
        { type: "p", content: "Esses motores gráficos são utilizados para uma melhor interação entre o desenvolvedor e a máquina, sem muitas dores de cabeça." },
        { type: "p", content: "Eles possuem funções pré programadas, gráficos pré programados e outras funcionalidades que facilitam tudo." },
        { type: "p", content: "Dentre todos os motores gráficos existem:" },
        { type:"img", content: "https://logos-world.net/wp-content/uploads/2023/01/Unity-Logo.png", size: "10em"},
        { type:"img", content: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Unreal_Engine_logo_and_wordmark.png", size: "10em"},
        { type:"img", content: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7O4lsOfzhN-F2PRy0w6zNt2Zyw_EXglkXOywI19T5ww&amp", size: "8rem"},
        { type:"img", content: "https://static.wikia.nocookie.net/the-fnaf-fan-game/images/d/d4/RPG_Maker_MV_Logo.png/revision/latest?cb=20220816024000", size: "10em"},
        { type:"img", content: "https://godotengine.org/assets/press/logo_vertical_color_light.png", size: "10em"},
    ]
)


//SETUPS BUTTONS
const post_buttons = document.getElementsByClassName("post_button")

for (let button of post_buttons) {
    let clicked = false
    button.addEventListener("click", () => {
        if (clicked == false) {
            button.getElementsByTagName("p")[0].textContent++;
            clicked = true
        }
    })
}

const all_cats = document.getElementsByClassName("cat")
const meow = new Audio("cat meow.mp3")

for (cat of all_cats) {
    cat.getElementsByTagName("img")[0].src = "https://http2.mlstatic.com/D_NQ_NP_668479-CBT111932075681_052026-O.webp"
    cat.addEventListener("click", () => {
        meow.play()
    })
}