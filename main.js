function getData() {
  fetch("https://georgendesign.com/Module8/real-estate/wp-json/wp/v2/house")
    .then((response) => response.json())
    .then(showPosts);
}

function showPosts(e) {
  //   console.log(e);

  e.forEach((e) => {
    // console.log(e.featured_media);
    fetch(
      `https://georgendesign.com/Module8/real-estate/wp-json/wp/v2/media/${e.featured_media}`
    )
      .then((response) => response.json())
      .then((i) => {
        const temp = document.querySelector("template").content;
        const clone = temp.cloneNode(true);

        clone.querySelector("img").src = i.source_url;

        clone.querySelector("h2").textContent = e.title.rendered;
        document.querySelector("main").appendChild(clone);
      });
  });
}

getData();
