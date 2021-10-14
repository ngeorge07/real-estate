function getData() {
  fetch(
    "https://georgendesign.com/Module8/real-estate/wp-json/wp/v2/house?order=asc"
  )
    .then((response) => response.json())
    .then(showPosts);
}

function showPosts(e) {
  console.log(e);

  e.forEach((e) => {
    fetch(
      `https://georgendesign.com/Module8/real-estate/wp-json/wp/v2/media/${e.featured_media}`
    )
      .then((response) => response.json())
      .then((i) => {
        const temp = document.querySelector("template").content;
        const clone = temp.cloneNode(true);

        clone.querySelector("h2").textContent = e.title.rendered;

        clone.querySelector("img").src = i.source_url;
        clone.querySelector("img").alt = i.alt_text;

        clone.querySelector("p:first-of-type").textContent = `${e.bed} BED`;
        clone.querySelector("p:nth-of-type(2)").textContent = `${e.bath} BATH`;
        clone.querySelector("p:last-of-type").textContent = `${e.size} SQ FEET`;

        document.querySelector("main").appendChild(clone);
      });
  });
}

getData();
