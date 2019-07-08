const checkBtn = document.getElementById("btn_check_out");
const project1 = document.getElementById("project-1");
const project2 = document.getElementById("project-2")
const project3 = document.getElementById("project-3")
const project = document.getElementById("projects-container");

checkBtn.addEventListener('click',()=>{
    alert("Hello World");
});

const createNode = (element)=>document.createElement(element);
const append = (parent,el) => parent.appendChild(el);

const content =async (repo)=>{
    const uri = `https://api.github.com/repos/hriteek/${repo}/readme`;
    const res = await fetch(uri);
    const result = res.json();
    // return atob(result.content);
    return 
}

(async ()=>{
    const url =  "https://api.github.com/users/hriteek/repos"
    const res =  await fetch(url)
    const result = await res.json()
    console.log(result);
    result.map(async res=>{
        let article = createNode('article'),
        h1 = createNode('h1'),
        a = createNode('a'),
        des = createNode('p');

        h1.innerHTML = `${res.name}`;
        const cont = await content(res.name);
        p.innerText = cont;
        a.href = `${res.html_url}`;
        a.innerHTML = "Check Here";

        append(article, h1);
        append(article,p);
        append(article,a);
        append(project,article);
    })
})();