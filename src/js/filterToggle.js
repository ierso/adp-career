function filterToggle() {
  const filterForm = document.querySelector('.c-what-you-love__form');
  const allFilterSelectors = document.querySelectorAll('.c-what-you-love__selector');
  const body = document.querySelector('body');

  function closeOpenedFilter(event) {
    const allActiveFilters = document.querySelectorAll('.o-select-btn--active');
    if (allActiveFilters.length) {
      const dropdown = document.querySelector('.o-select-bg-dropdown');
      const filterBtns = document.querySelectorAll('.c-what-you-love__selector');
      let isClickedOnBtn = false;
      filterBtns.forEach((element) => {
        if (element.contains(event.target) === true) {
          isClickedOnBtn = true;
        }
      });
      const isClickedInside = dropdown.contains(event.target);
      if (!isClickedInside && !isClickedOnBtn) {
        allFilterSelectors.forEach((element) => {
          element.classList.remove('o-select-btn--active');
        });
      }
    }
  }
  function removeOtherActiveButtons(targetElement) {
    allFilterSelectors.forEach((element) => {
      if (element !== targetElement) {
        element.classList.remove('o-select-btn--active');
      }
    });
  }
  function toggleActiveClass(targetElement) {
    removeOtherActiveButtons(targetElement);
    if (targetElement.classList.contains('o-select-btn--active') === true) {
      targetElement.classList.remove('o-select-btn--active');
    } else {
      targetElement.classList.add('o-select-btn--active');
    }
  }
  function toggleFilterDropdown(event) {
    const targetElement = event.target;
    if (targetElement.classList.contains('c-what-you-love__selector') !== true) {
      return;
    }
    toggleActiveClass(targetElement);
  }
  filterForm.addEventListener('click', toggleFilterDropdown);
  body.addEventListener('click', closeOpenedFilter);
}

export default filterToggle;
