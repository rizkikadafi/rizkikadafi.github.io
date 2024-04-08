const categories = document.getElementById('categories')
const categoriesBtn = document.getElementById('categories-btn')
const arrayCategories = Array.from(categories.children)
const arrayCategoriesBtn = Array.from(categoriesBtn.children)

arrayCategories[0].classList.add("flex")
arrayCategories[0].classList.remove("hidden")
arrayCategoriesBtn[0].classList.add("border-[1px]", "border-slate-300")
let prevActiveElement = arrayCategories[0]
let prevActiveBtnElement = arrayCategoriesBtn[0]

arrayCategoriesBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    id = btn.getAttribute('data-category')
    const targetElement = arrayCategories.find(elm => elm.id === id);

    prevActiveBtnElement.classList.remove("border-[1px]", "border-slate-300")
    prevActiveElement.classList.remove("flex")
    prevActiveElement.classList.add("hidden")

    prevActiveElement = targetElement
    prevActiveBtnElement = btn

    btn.classList.add("border-[1px]", "border-slate-300")
    targetElement.classList.add("flex")
    targetElement.classList.remove("hidden")
  })
})
