const checkBoxList = document.querySelectorAll('.custom-checkbox')
const inputList = document.querySelectorAll('.goal-input')
const progressBar = document.querySelector('.progress-bar')

const inputArr = [...inputList]

checkBoxList.forEach((checkbox)=>{
  checkbox.addEventListener('click',(e)=>{
    const inputFilledOrNot = inputArr.every((i)=> {
      return i.value;
    })
    if(inputFilledOrNot){
      checkbox.parentElement.classList.toggle('completed');
      errorLabel.style.display = 'none'
    }else{
      progressBar.classList.add('show-error')
    }
  })
})



