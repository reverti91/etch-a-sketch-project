
//const div_square=document.createElement('div');
const container=document.querySelector('#container');
let clear_all=document.getElementById('clear_all');
const n_grid=16;

grid_build(container,n_grid);
function grid_build(container,n_grid){
    for (let j = 0; j < n_grid; j++) {
    
        const div_lign=document.createElement('div');
        div_lign.setAttribute('id',j);
        let id_coln="c_"+j;
        for (let i = 0; i < n_grid; i++) {
            const div_coln=document.createElement('div');
            div_coln.setAttribute('id',id_coln+'_'+i);
            if(n_grid>25){
                div_coln.setAttribute('style','width:15px;height:15px;border:1px solid blue');
            }else{
                div_coln.setAttribute('style','width:40px;height:40px;border:1px solid blue');
            }
            

            div_coln.addEventListener('mouseover',()=> {
                div_coln.style.backgroundColor="green";
             });
             
            div_lign.appendChild(div_coln);
        }
        div_lign.setAttribute('style','display:flex');
        
        container.appendChild(div_lign);
    
    }
}

clear_all.addEventListener('click',()=>{
    console.log("toto");
    for (let j = 0; j < 16; j++) {
        let id_coln="c_"+j;
        for (let i = 0; i < 16; i++) {
            let div_coln=document.getElementById(id_coln+'_'+i);
            div_coln.style.backgroundColor='white';
            
        }
        
    }
   const n_grid= prompt("Enter a new grid;Don't more than 100");
   while(n_grid>100){
     n_grid= prompt("Enter a new grid;Don't more than 100");
   }
  container.innerHTML = '';
   grid_build(container,n_grid);
});

//document.getElementsByClassName('square');


