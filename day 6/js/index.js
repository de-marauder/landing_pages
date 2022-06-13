const descList = [
  "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.\n\nYou can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
  "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₦1,200 to ₦4,400 a month. No extra costs, no contracts.",
  "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.\n\nYou can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
  "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
  "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
  "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.\n\nKids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
];

const faqList = document.querySelectorAll(".faq-item");

let show = false;
const toggle = (faqItem, id) => {
  const descDiv = document.createElement("div");
  descDiv.classList.add("faq-item-desc");

  const desc = document.createElement("p");

  desc.innerText = descList[id];
  descDiv.appendChild(desc);

  const shownItem = document.querySelector(".show");
  const shownDiv = shownItem?.querySelector(".faq-item-desc");

  if (faqItem.classList.contains("show")) {
    const shownDiv = shownItem?.querySelector(".faq-item-desc");
    console.dir(shownDiv);
    faqItem.classList.remove("show");
    faqItem.removeChild(shownDiv);
    //   faqItem.classList.add("show");
    //   faqItem.appendChild(descDiv);
    //   show = !show;
  } else {
    shownItem?.classList.remove("show");
    shownItem?.removeChild(shownDiv);
    faqItem.classList.add("show");
    faqItem.appendChild(descDiv);
  }
};

faqList.forEach((faqItem, id) => {
  faqItem.addEventListener("click", () => {
    toggle(faqItem, id);
  });
});
