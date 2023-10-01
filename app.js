(function(){
const custumerImage=document.querySelector("#custumer-img");
const custumerName=document.querySelector("#custumer-name");
const custumerText=document.querySelector("#custumer-text");

const btn=document.querySelectorAll(".btn");
let index=1;

const custumers=[];

function Custumer(img,name,text){
    this.img=img;
    this.name=name;
    this.text=text;

}

function creatCustumer(img,name,text){
    let Img= `./img/${img}.jpg`;
    let custumer=new Custumer(Img,name,text);
    custumers.push(custumer);
}

creatCustumer(1,'Harpreet','Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nemo maiores accusamus amet a aliquam aspernatur, impedit unde voluptatum consectetur, molestias temporibus debitis cupiditate exercitationem voluptate, numquam architecto! Ad qui a quas explicabo consectetur nostrum eaque, cumque, ullam eius accusamus recusandae! Obcaecati praesentium velit suscipit et illo nisi maxime iusto?')

creatCustumer(2,'josy','Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nemo maiores accusamus amet a aliquam aspernatur, impedit unde voluptatum consectetur, molestias temporibus debitis cupiditate exercitationem voluptate, numquam architecto! Ad qui a quas explicabo consectetur nostrum eaque, ')

creatCustumer(3,'Loly','Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nemo maiores , cumque, ullam eius accusamus recusandae! Obcaecati praesentium velit suscipit et illo nisi maxime iusto?')

creatCustumer(4,'Loha','accusamus amet a aliquam aspernatur, impedit unde voluptatum consectetur, molestias temporibus debitis cupiditate exercitationem voluptate, numquam architecto! Ad qui a quas explicabo consectetur nostrum eaque, cumque, ullam eius accusamus recusandae! Obcaecati praesentium velit suscipit et illo nisi maxime iusto?')

creatCustumer(5,'Iron','Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nemo maiores accusamus amet a aliquam aspernatur, impedit unde voluptatum consectetur, molestias temporibus debitis , cumque, ullam eius accusamus recusandae! Obcaecati praesentium velit suscipit et illo nisi maxime iusto?')




btn.forEach(function(button){


    button.addEventListener('click',function(e){

        if(e.target.parentElement.classList.contains('prevBtn')){


            if(index===0){
                index=custumers.length;
            }
            index--;
            custumerImage.src=custumers[index].img;
            custumerName.textContent=custumers[index].name;
            custumerText.textContent=custumers[index].text;
        }

        if(e.target.parentElement.classList.contains('nextBtn')){


            if(index===custumers.length){
                index=0;
            }
            index++;
            custumerImage.src=custumers[index].img;
            custumerName.textContent=custumers[index].name;
            custumerText.textContent=custumers[index].text;
        }
    })
})

})()