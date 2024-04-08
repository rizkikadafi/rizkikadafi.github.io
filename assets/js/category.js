const categories = document.getElementById('categories')
const categoriesBtn = document.getElementById('categories-btn')
const arrayCategories = Array.from(categories.children)
const arrayCategoriesBtn = Array.from(categoriesBtn.children)

arrayCategories[0].classList.add("flex")
arrayCategories[0].classList.remove("hidden")
arrayCategoriesBtn[0].classList.add("border-[1px]", "border-slate-300")

let prevActiveCategory = arrayCategories[0]
let prevActiveBtnCategory = arrayCategoriesBtn[0]

arrayCategoriesBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    id = btn.getAttribute('data-category')
    const targetElement = arrayCategories.find(elm => elm.id === id);

    prevActiveBtnCategory.classList.remove("border-[1px]", "border-slate-300")
    prevActiveCategory.classList.remove("flex")
    prevActiveCategory.classList.add("hidden")

    prevActiveCategory = targetElement
    prevActiveBtnCategory = btn

    btn.classList.add("border-[1px]", "border-slate-300")
    targetElement.classList.add("flex")
    targetElement.classList.remove("hidden")
  })
})
