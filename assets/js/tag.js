const tags = document.getElementById('tags')
const tagsBtn = document.getElementById('tags-btn')
const arrayTags = Array.from(tags.children)
const arrayTagsBtn = Array.from(tagsBtn.children)

const urlParams = new URLSearchParams(window.location.search);
const tagParam = urlParams.get('tag');

let prevActiveTag = arrayTags[0]
let prevActiveBtnTag = arrayTagsBtn[0]

if (tagParam !== null) {
  const targetElement = arrayTags.find(elm => elm.id === tagParam);
  const targetBtn = arrayTagsBtn.find(elm => elm.getAttribute('data-tag') === tagParam);
  targetBtn.classList.add("flex")
  targetElement.classList.remove("hidden")
  targetBtn.classList.add("border-[1px]", "border-slate-300")
  prevActiveTag = targetElement
  prevActiveBtnTag = targetBtn
} else {
  arrayTags[0].classList.add("flex")
  arrayTags[0].classList.remove("hidden")
  arrayTagsBtn[0].classList.add("border-[1px]", "border-slate-300")
}

arrayTagsBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    id = btn.getAttribute('data-tag')
    const targetElement = arrayTags.find(elm => elm.id === id);

    prevActiveBtnTag.classList.remove("border-[1px]", "border-slate-300")
    prevActiveTag.classList.remove("flex")
    prevActiveTag.classList.add("hidden")

    prevActiveTag = targetElement
    prevActiveBtnTag = btn

    btn.classList.add("border-[1px]", "border-slate-300")
    targetElement.classList.add("flex")
    targetElement.classList.remove("hidden")
  })
})

