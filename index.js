const scheme = document.querySelector('.scheme');
const draggScheme = draggElem(scheme);

// начальное значение размера элемента которое будем увеличивать
let i = 100;
document.querySelector('#plus').addEventListener('click', () => {
  i += 10;

  scheme.style.width = `${i}%`
  scheme.style.height = `${i}%`
  
})

document.querySelector('#minus').addEventListener('click', () => {
  i -= 10;
  scheme.style.width = `${i}%`
  scheme.style.height = `${i}%`
})



function draggElem(elem) {
// аргументом указать элемент который будем тащить
  let dragging = false

  let startX = 0;
  let startY = 0;
  
  elem.addEventListener('mousedown', (e) => {
    dragging = true
    elem.style.position = 'absolute';
    // В значения для startX и startY мы помещаем положение курсора
    // через свойства события e.pageX и e.pageY.
    startX = e.pageX - Number.parseInt(elem.style.left || 0)
    startY = e.pageY - Number.parseInt(elem.style.top || 0)
  
    // Из положения курсора мы вычитаем отступы элемента, если они есть.
    // Вычитание отступов нам нужно, чтобы элемент «запоминал»
    // своё последнее положение, иначе мы всегда будем начинать тащить его
    // от начала экрана.
  })
  
  document.body.addEventListener('mousemove', (e) => {
    // Если элемент не тащат, то ничего не делаем.
    if (!dragging) return
  
    // Если тащат, то высчитываем новое положение,
    // вычитая начальное положение элемента из положения курсора.
    elem.style.top = `${e.pageY - startY}px`
    elem.style.left = `${e.pageX - startX}px`
  })
  
  // Когда мы отпускаем мышь, мы отмечаем dragging как false.
  document.body.addEventListener('mouseup', () => {
    dragging = false
  })
  
}

const modalWindow = document.querySelector('.modal-window');

document.querySelector('#pay').addEventListener('click', () => {
  modalWindow.classList.add('modal-window-opacity');
  modalWindow.addEventListener('click', () => {
    modalWindow.classList.remove('modal-window-opacity')
  })
})