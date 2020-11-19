(function(){
   const customerImg = document.getElementById('customer-img')
   const customerName = document.getElementById('customer-name')
   const customerText = document.getElementById('customer-text')
   const btns = document.querySelectorAll('.btn')
   let index = 0
   let customers = [] 


   function Customer (img,name,text){
       this.img = img
       this.name = name
       this.text = text
   }

   const createCustomer = (index,name,text) => {
        let img = `./img/customer-${index}.jpg`
        let customer = new Customer(img,name,text)
        customers = [...customers,customer]
   }

   createCustomer(0,'John','Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio?');
   createCustomer(1,'Sandy','Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock');
   createCustomer(2,'Amy',`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`);
   createCustomer(3,'Tyrell',`If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.`);
   createCustomer(4,'Wanda',`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`);

   customers.forEach(customer => {
       console.log(customer.img)
   })
    
   btns.forEach(btn => {
       btn.addEventListener('click',(e)=>{
           if(e.target.parentElement.classList.contains('prevBtn')){
               if(index == 0){
                   index = customers.length - 1
               }
               index--
               customerImg.src = customers[index].img
               customerName.innerText = customers[index].name
               customerText.innerText = customers[index].text

           }else if (e.target.parentElement.classList.contains('nextBtn')){
               index++
               if(index > customers.length -1){
                   index = 0
               }
               
               customerImg.src = customers[index].img
               customerName.innerText = customers[index].name
               customerText.innerText = customers[index].text
           }
       })
   })


  
})()