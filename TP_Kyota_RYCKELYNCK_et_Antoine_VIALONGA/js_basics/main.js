const noteText = document.querySelector("#note-text");
const addNoteBtn = document.querySelector("#add-note-btn");
const notesList = document.querySelector("#notes-list");
const audio = document.querySelector("#audio");

addNoteBtn.addEventListener("click", () => {
  if (noteText.value.trim()) {
    const li = document.createElement("li");
    li.textContent = noteText.value.trim();
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Supprimer";
    deleteBtn.addEventListener("click", () => li.remove());
    li.appendChild(deleteBtn);
    notesList.appendChild(li);
    noteText.value = "";
    audio.play();
  }
});

window.addEventListener("DOMContentLoaded", () => {
  notesList.innerHTML = localStorage.getItem("notes") || "";
  notesList.addEventListener("click", ({ target }) => {
    if (target.matches(".delete-button")) {
      target.closest("li").remove();
    }
  });
});

window.addEventListener("beforeunload", () => {
  localStorage.setItem("notes", notesList.innerHTML);
});





