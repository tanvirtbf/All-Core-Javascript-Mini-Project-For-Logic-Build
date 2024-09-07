const firstGoal = document.querySelector('#input1')
const secondGoal = document.querySelector('#input2')
const thirdGoal = document.querySelector('#input3')

const circle = document.querySelectorAll('.circle')
const input = document.querySelectorAll('input')
const error = document.querySelector('.error')
const bar = document.querySelector('.bar')



function setLocalStorage(obj){
  const stringConvert = JSON.stringify(obj)
  localStorage.setItem('focusObj',stringConvert)
}
function getLocalStorage(obj){
  const objectConvert = JSON.parse(localStorage.getItem('focusObj'))
  return objectConvert
}

function setLocalVariable(v){
  localStorage.setItem('barWidth',v)
}
function getLocalVariable(v){
  return localStorage.getItem('barWidth')
}

let inputArray = [
  {id: 1, text : '', isActive : false},
  {id: 2, text : '', isActive : false},
  {id: 3, text : '', isActive : false},
]


firstGoal.addEventListener('input',(e)=>{
  inputArray[0].text = e.target.value
  setLocalStorage(inputArray)
})
secondGoal.addEventListener('input',(e)=>{
  inputArray[1].text = e.target.value
  setLocalStorage(inputArray)
})
thirdGoal.addEventListener('input',(e)=>{
  inputArray[2].text = e.target.value
  setLocalStorage(inputArray)
})


circle.forEach((item,index)=>{

  item.addEventListener('click',()=>{

    let barWidth = 0;

    if(inputArray[0].text===''||inputArray[1].text===''||inputArray[2].text===''){
      error.style.display = 'block'
    }else{
      error.style.display = 'none'
      inputArray.map((xyz)=> {
        if(xyz.id===index+1){
          xyz.isActive = !xyz.isActive
        }
      })
    }

    inputArray.map((inp,i)=>{
      if(inp.isActive && inputArray[0].text && inputArray[1].text && inputArray[2].text){
        circle[i].style.backgroundColor = 'green'
        input[i].classList.add('afterActive')
      }else if(!inp.isActive && inputArray[0].text && inputArray[1].text && inputArray[2].text){
        circle[i].style.backgroundColor = 'white'
        input[i].classList.remove('afterActive')
      }
    })

    inputArray.map((item)=>{
      if(item.isActive){
        barWidth += 1
      }
    })

    if(barWidth===1){
      bar.style.width = '33.3%'
    }else if(barWidth===2){
      bar.style.width = '66.7%'
    }else if(barWidth===3){
      bar.style.width = '100%'
    }else{
      bar.style.width = '0'
    }

    setLocalVariable(barWidth)

  })
})

setTimeout(()=>{
  const [a,b,c] = getLocalStorage(inputArray) 
  if(a && b && c){
    firstGoal.value = a.text
    secondGoal.value = b.text
    thirdGoal.value = c.text
  }

  inputArray = getLocalStorage(inputArray)

})







