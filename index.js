// populate banned subs modal
fetch("subreddits.json")
  .then((response) => response.json())
  .then((data) => {
    const ul = document.getElementById("subredditsModal");

    for (let [category, subreddits] of Object.entries(data.subreddits)) {
      const categoryId = category
        .replace(/\s+/g, "_")
        .replace(/\//g, "_")
        .replace(/&/g, "_");

      const categoryDiv = document.createElement("div");
      categoryDiv.classList.add("accordion", "mb-4");

      const accHeader = document.createElement("h2");
      accHeader.classList.add("accordion-header");

      const accButton = document.createElement("button");
      accButton.classList.add(
        "accordion-button",
        "collapsed",
        "border",
        "rounded-1",
        "bg-body-tertiary"
      );
      accButton.setAttribute("type", "button");
      accButton.setAttribute("data-bs-toggle", "collapse");
      accButton.setAttribute("data-bs-target", "#" + categoryId);
      accButton.setAttribute("aria-expanded", "false");
      accButton.setAttribute("aria-controls", categoryId);
      accButton.textContent = category;

      const accContent = document.createElement("div");
      accContent.classList.add("accordion-body");
      accContent.style.padding = "0";

      const accBody = document.createElement("div");
      accBody.classList.add(
        "accordion-content",
        "list-group",
        "list-group-flush",
        "border"
      );

      accContent.id = categoryId;
      accContent.classList.add("accordion-collapse", "collapse");
      accContent.setAttribute("data-bs-parent", "#subredditsModal");

      for (let sub of subreddits) {
        const subListEl = document.createElement("li");
        subListEl.classList.add("list-group-item");

        const subLink = document.createElement("a");
        subLink.setAttribute(
          "href",
          "http://" +
            window.location.host +
            "/index.html?subreddit=" +
            sub.replace("r/", "")
        );
        subLink.textContent = sub;

        subListEl.appendChild(subLink);
        accBody.appendChild(subListEl);
      }

      categoryDiv.appendChild(accHeader);
      categoryDiv.appendChild(accContent);

      accHeader.appendChild(accButton);
      accContent.appendChild(accBody);

      ul.appendChild(categoryDiv);
    }
  });

// status handler
const status = document.querySelector("#status");
let timeoutId;

const statusLabel = new MutationObserver((mutations) => {
  const span = Array.from(mutations[0].addedNodes).find(
    (node) => node.tagName === "SPAN"
  );

  if (span && span.innerText.includes("Error")) {
    status.classList.remove("bg-secondary");
    status.classList.add("bg-danger");
    status.classList.add("border-danger");
    clearTimeout(timeoutId);
  } else if (span && span.innerText.includes("Loaded")) {
    status.classList.remove("bg-secondary");
    status.classList.add("bg-success");
    status.classList.add("border-success");
    clearTimeout(timeoutId);
  }

  timeoutId = setTimeout(() => {
    status.remove();
  }, "5000");
});

statusLabel.observe(status, { childList: true, subtree: true });

// empty selftext handler
function hideEmptyPosts() {
  function handleMutations(mutationsList) {
    mutationsList.forEach((mutation) => {
      if (mutation.addedNodes.length > 0) {
        mutation.addedNodes.forEach((node) => {
          if (node.classList && node.classList.contains("post")) {
            if (node.innerText === "" || node.innerHTML === "[removed]") {
              node.classList.add("d-none");
            }
          }
        });
      }
    });
  }

  function fetchPosts() {
    const comments = document.querySelector("[id^='t3_']");

    if (comments) {
      const observer = new MutationObserver((mutationsList) => {
        handleMutations(mutationsList);
      });
      observer.observe(comments, { childList: true, subtree: true });
    } else {
      setTimeout(fetchPosts, 100);
    }
  }

  setTimeout(() => {
    fetchPosts();
  }, 0);
}

hideEmptyPosts();

// page title handler
document.addEventListener("DOMContentLoaded", function () {
  function updatePageTitle() {
    const currentURL = window.location.href;
    if (/\?comments=[\w\d]{6,7}$/g.test(currentURL)) {
      const title = document.querySelector(".post_title");
      const author = document.querySelector(".op_title > #author");
      if (title) {
        const titleHeading = title.querySelector("h3");
        if (titleHeading) {
          const titleText = titleHeading.innerText;
          document.title = titleText + " - " + author.innerText;
        }
      }
    } else if (/&q=(.+)?/g.test(currentURL)) {
      document.title = "Search Results";
    }
  }

  setTimeout(() => {
    updatePageTitle();
  }, 1500);
});

// theme handler
const currentTheme = localStorage.getItem("theme");

function applyTheme(theme) {
  const html = document.querySelector("html");
  html.removeAttribute("data-bs-theme");
  html.setAttribute("data-bs-theme", theme);

  const themeIcon = document.querySelector("#theme_icon");
  themeIcon.classList.remove("bi-sun-fill", "bi-moon-fill");
  themeIcon.classList.add(theme === "dark" ? "bi-moon-fill" : "bi-sun-fill");
}

const themeToggle = document.querySelector("input#theme_toggle");
themeToggle.addEventListener("click", () => {
  const html = document.querySelector("html");
  if (html.getAttribute("data-bs-theme") === "dark") {
    localStorage.setItem("theme", "light");
    applyTheme("light");
  } else {
    localStorage.setItem("theme", "dark");
    applyTheme("dark");
  }
});

if (currentTheme) {
  applyTheme(currentTheme);
}
