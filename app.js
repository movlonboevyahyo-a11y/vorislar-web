function showSection(id) {
  // Hamma sectionlarni yashiramiz
  const sections = document.querySelectorAll("main section");
  sections.forEach(section => {
    section.classList.add("hidden");
  });

  // Tanlangan sectionni ko‘rsatamiz
  const active = document.getElementById(id);
  active.classList.remove("hidden");
}
