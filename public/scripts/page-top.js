function handleClick() {
  window.scroll({
    top: 0,
    behavior: 'smooth',
  });
}

const pageTopButtons = document.querySelectorAll('.page-top');
pageTopButtons.forEach((button) => {
  button.addEventListener('click', handleClick);
});
