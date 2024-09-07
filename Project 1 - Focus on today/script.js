const firstGoal = document.querySelector('#input1')
const secondGoal = document.querySelector('#input2')
const thirdGoal = document.querySelector('#input3')

const circle = document.querySelectorAll('.circle')
const error = document.querySelector('.error')

// function setLocalStorage(obj){
//   const stringConvert = JSON.stringify(obj)
//   localStorage.setItem('focusObj',stringConvert)
// }
// function getLocalStorage(obj){
//   const objectConvert = JSON.parse(localStorage.getItem('focusObj'))
//   return objectConvert
// }

const inputArray = [
  {id: 1, text : '', isActive : false},
  {id: 2, text : '', isActive : false},
  {id: 3, text : '', isActive : false},
]

// inputObj.firstInput = getLocalStorage(inputObj).firstInput
// inputObj.secondInput = getLocalStorage(inputObj).secondInput
// inputObj.thirdInput = getLocalStorage(inputObj).thirdInput

firstGoal.addEventListener('input',(e)=>{
  inputArray[0].text = e.target.value
})
secondGoal.addEventListener('input',(e)=>{
  inputArray[1].text = e.target.value
})
thirdGoal.addEventListener('input',(e)=>{
  inputArray[2].text = e.target.value
})

circle.forEach((item,index)=>{
  console.log(item)
  item.addEventListener('click',()=>{
    if(inputArray[0].text===''||inputArray[1].text===''||inputArray[2].text===''){
      error.style.display = 'block'
    }else{
      error.style.display = 'none'
      inputArray.map((xyz)=> {
        if(xyz.id===index+1){
          xyz.isActive = !xyz.isActive
        }
      })
      inputArray.map((abc)=>{
        
      })
    }
  })
})



