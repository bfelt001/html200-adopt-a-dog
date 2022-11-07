
let divBody = document.createElement('div');
document.body.appendChild(divBody); 
divBody.classList.add("body");



const fields = [['images/blog-1.jpg', 'Traveling With Your Dog', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nulla modi cum? Placeat culpa, quos sunt, iste nulla, similique exercitationem at delectus dicta nostrum perferendis labore vel ab odit minima.'],
['images/blog-2.jpg', 'How To Walk Multiple Dogs', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nulla modi cum? Placeat culpa, quos sunt, iste nulla, similique exercitationem at delectus dicta nostrum perferendis labore vel ab odit minima.'],
['images/blog-3.jpg', 'Teach Your Dog To Fetch!', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nulla modi cum? Placeat culpa, quos sunt, iste nulla, similique exercitationem at delectus dicta nostrum perferendis labore vel ab odit minima.'] 
];




for (let i = 0; i < fields.length; i++) {
    let divElement = document.createElement('div');
    document.body.appendChild(divElement); 

    let sectElement = document.createElement('section');
    divElement.appendChild(sectElement); 
    sectElement.classList.add("flex-row"); 

    let img1 = document.createElement('img');
    img1.src = fields[i][0];
    sectElement.appendChild(img1);

    let divElement2 = document.createElement('div');
    sectElement.appendChild(divElement2); 
    divElement2.classList.add("flex-l"); 
    
    let h2Text = document.createElement('h2');
    h2Text.textContent = fields[i][1];
    divElement2.appendChild(h2Text);

    let pText1 = document.createElement('p');
    pText1.textContent = fields[i][2];
    divElement2.appendChild(pText1);
    
    let pText2 = document.createElement('p');
    pText2.textContent = fields[i][2];
    divElement2.appendChild(pText2);


}

/*let divElement = document.createElement('div');
document.body.appendChild(divElement);



//create blog post title
let h2Text = document.createElement("h2");

h2Text.textContent = "Traveling With Your Dog";

divElement.appendChild(h2Text);

//set blog post image

const img1 = document.createElement('img');
img1.src = 'images/blog-1.jpg';
divElement.appendChild(img1);

//create paragraph
let pText1 = document.createElement("p");

pText1.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nulla modi cum? Placeat culpa, quos sunt, iste nulla, similique exercitationem at delectus dicta nostrum perferendis labore vel ab odit minima. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nulla modi cum? Placeat culpa, quos sunt, iste nulla, similique exercitationem at delectus dicta nostrum perferendis labore vel ab odit minima."

divElement.appendChild(pText1);

let pText2 = document.createElement("p");

pText2.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nulla modi cum? Placeat culpa, quos sunt, iste nulla, similique exercitationem at delectus dicta nostrum perferendis labore vel ab odit minima. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nulla modi cum? Placeat culpa, quos sunt, iste nulla, similique exercitationem at delectus dicta nostrum perferendis labore vel ab odit minima."

divElement.appendChild(pText2); */
