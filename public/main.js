const url = "/api/v1";

const subjectInput = document.querySelector(".subject");
const contentInput = document.querySelector(".content");
const buttonSub = document.querySelector(".post-form");
const postConatainer = document.querySelector(".posts");

buttonSub.addEventListener("submit", async (e) => {
  e.preventDefault();
  const subjectValue = subjectInput.value;
  const contentValue = contentInput.value;
  if (subjectValue == "") {
    alert("THIS IS AN EMPTY SUBJECT");
  }
  try {
    const post = { subject: subjectValue, content: contentValue };
    console.log(post);

    await axios.post(`${url}/upload`, post);
    fetchPosts();
    subjectInput.value = "";
    contentInput.value = "";
  } catch (error) {
    console.log(error);
  }
});

async function contentChange(id, sub, con) {
  try {
    sub = prompt("New Subject");
    con = prompt("New content");

    await axios.put(`${url}/upload`, { _id: id, subject: sub, content: con });
    fetchPosts();
  } catch (error) {
    console.log(error);
  }
}

async function deletePost(id) {
  try {
    console.log(id);
    const test = await axios.delete(`${url}/upload/${id}`);
    console.log(test);
    fetchPosts();
    const {
        data: { posts },
      } = await axios.get(`${url}/upload`);
    console.log(posts);
  } catch (error) {
    console.log(error);
  }
}

async function fetchPosts() {
  try {
    const {
      data: { posts },
    } = await axios.get(`${url}/upload`);

    const postSetup = posts
      .map((post) => {
        return `<div class = "ind-post">
            <div class = "btn-style">
            <button class = "edit" onclick = "contentChange('${post._id}', '${post.subject}', '${post.content}')"><span class="material-symbols-outlined">
            edit
            </span></button>
            <button class = "remove" onclick = "deletePost('${post._id}')"><span class="material-symbols-outlined">
            close
            </span></button>
            </div>
            <h2>${post.subject}</h2>
            <div class = "hrule"></div>
            <p>${post.content}</p>
            </div>
            `;
      })
      .join("");

    postConatainer.innerHTML = postSetup;
  } catch (error) {
    console.log(error);
  }
}

fetchPosts();
