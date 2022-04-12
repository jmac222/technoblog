const url = "/api/v1";

const subjectInput = document.querySelector('.subject')
const contentInput = document.querySelector('.content')
const buttonSub = document.querySelector('.post-form')
const postConatainer = document.querySelector('.posts')

buttonSub.addEventListener('submit', async (e) => {
    e.preventDefault();
    const subjectValue = subjectInput.value
    const contentValue = contentInput.value
    try {
        const post = {subject: subjectValue, content: contentValue}
        console.log(post);
        
        await axios.post(`${url}/upload`, post)
        fetchPosts();
        subjectInput.value = ''
        contentInput.value = ''
    } catch (error) {
        console.log(error)
    }
})



async function fetchPosts() {
    try {
        const {
            data: {posts}
        } = await axios.get(`${url}/upload`);

        const postSetup = posts.map(post => {
            return `<div class = "ind-post">
            <h2>${post.subject}</h2>
            <p>${post.content}</p>
            </div>
            `;
          })
          .join("");

          postConatainer.innerHTML = postSetup
    } catch (error) {
        console.log(error);
    }
}

fetchPosts();


