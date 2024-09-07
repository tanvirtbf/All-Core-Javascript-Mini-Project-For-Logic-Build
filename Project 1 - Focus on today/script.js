const firstGoal = document.querySelector('#input1')
const secondGoal = document.querySelector('#input2')
const thirdGoal = document.querySelector('#input3')

const circle = document.querySelectorAll('.circle')

const inputObj = {
  firstInput : '',
  secondInput : '',
  thirdInput : '',
}

firstGoal.addEventListener('input',(e)=>{
  inputObj.firstInput = e.target.value
})
secondGoal.addEventListener('input',(e)=>{
  inputObj.secondInput = e.target.value
})
thirdGoal.addEventListener('input',(e)=>{
  inputObj.thirdInput = e.target.value
})

circle.forEach((item,i)=>{
  console.log(i)
  item.addEventListener('click',()=>{
    if(inputObj.firstInput===''||inputObj.secondInput===''||inputObj.thirdInput===''){
      document.querySelector('.error').style.display = 'block'
    }else{
      document.querySelector('.error').style.display = 'none'
    }
  })
})

