const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('.close');

// Events
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);

// Open
function openModal() 
{
  modal.style.display = 'block';
  modalBtn.style.display = 'none';
}

// Close
function closeModal() 
{
  modal.style.display = 'none';
  modalBtn.style.display = 'block';
}


