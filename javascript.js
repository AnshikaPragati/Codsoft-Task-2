function showsidebar(){
    const items= document.querySelector('.items')
     items.style.display='flex'
     const icon1= document.querySelector('.icon1')
     icon1.style.display='none'
     const icon2= document.querySelector('.icon2')
     icon2.style.display='flex'
      
     
 }
 function hidesidebar(){
    const items= document.querySelector('.items')
     items.style.display='none'
     const icon2= document.querySelector('.icon2')
     icon2.style.display='none'
     const icon1= document.querySelector('.icon1')
     icon1.style.display='flex'
}

function showmsg(){
    const msg= document.querySelector('.msg')
     msg.style.display='flex'
}

function hidemsg(){
    const msg= document.querySelector('.msg')
     msg.style.display='none'
}


 