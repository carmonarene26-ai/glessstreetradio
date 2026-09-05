document.addEventListener("DOMContentLoaded", () => {
  // Engagement Counter Logic
  const setupCounter = (btnId, countId) => {
    const btn = document.getElementById(btnId);
    const countSpan = document.getElementById(countId);
    let count = parseInt(countSpan.innerText);
    let active = false;

    btn.addEventListener("click", () => {
      active = !active;
      btn.classList.toggle("active", active);
      count = active ? count + 1 : count - 1;
      countSpan.innerText = count;
    });
  };

  setupCounter("btn-heart", "count-heart");
  setupCounter("btn-like", "count-like");

  // Comment Drawer Toggle
  const btnComment = document.getElementById("btn-comment-toggle");
  const commentDrawer = document.getElementById("comment-drawer");
  const btnCloseComments = document.getElementById("btn-close-comments");

  btnComment.addEventListener("click", () => {
    commentDrawer.classList.toggle("hidden");
  });
  btnCloseComments.addEventListener("click", () => {
    commentDrawer.classList.add("hidden");
  });

  // Comment Posting Logic
  const commentForm = document.getElementById("comment-form");
  const commentInput = document.getElementById("comment-input");
  const commentFeed = document.getElementById("comment-feed");
  const commentCount = document.getElementById("count-comment");

  commentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (commentInput.value.trim() === "") return;

    const newComment = document.createElement("div");
    newComment.className = "comment-item";
    newComment.innerHTML = `<strong>Listener:</strong> ${commentInput.value.trim()}`;
    commentFeed.appendChild(newComment);

    commentCount.innerText = parseInt(commentCount.innerText) + 1;
    commentInput.value = "";
    commentFeed.scrollTop = commentFeed.scrollHeight;
  });

  // Playlist Queue Notification
  document.getElementById("btn-playlist").addEventListener("click", () => {
    alert("Track queued to your session playlist.");
  });

  // Legal Terms Modal Logic
  const modal = document.getElementById("legal-modal");
  document.getElementById("link-terms").addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.remove("hidden");
  });
  document.getElementById("btn-close-modal").addEventListener("click", () => {
    modal.classList.add("hidden");
  });
});
