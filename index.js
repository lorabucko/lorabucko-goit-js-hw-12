import{a as m,S as p,i as a}from"./assets/vendor-73qhTu8_.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const g="55760318-43e5d4b90f7f21f4193a7db8f",y="https://pixabay.com/api/",h=15;async function b(o,r){return(await m.get(y,{params:{key:g,q:o,page:r,per_page:h,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const c=document.querySelector(".gallery"),f=document.querySelector(".loader");document.querySelector(".load-more");const L=new p(".gallery a",{captionsData:"alt",captionDelay:250,captionsPosition:"bottom"});function P(o){const r=o.map(({webformatURL:s,largeImageURL:n,tags:e,likes:t,views:i,comments:u,downloads:d})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${n}">
            <img
              class="gallery-image"
              src="${s}"
              alt="${e}"
            />
          </a>
          <div class="info">
            <p class="info-item">
              <b>Likes</b><br />
              ${t}
            </p>
            <p class="info-item">
              <b>Views</b><br />
              ${i}
            </p>
            <p class="info-item">
              <b>Comments</b><br />
              ${u}
            </p>
            <p class="info-item">
              <b>Downloads</b><br />
              ${d}
            </p>
          </div>
        </li>
      `).join("");c.insertAdjacentHTML("beforeend",r),L.refresh()}function S(){c.innerHTML=""}function w(){f.classList.remove("is-hidden")}function q(){f.classList.add("is-hidden")}const l=document.querySelector(".form");l.addEventListener("submit",o=>{o.preventDefault();const r=o.target.elements["search-text"].value.trim();if(!r){a.warning({message:"Please fill in the search field!",position:"topRight"});return}S(),w(),b(r).then(s=>{if(s.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}P(s.hits)}).catch(()=>{a.error({message:"Something went wrong. Please try again later!",position:"topRight"})}).finally(()=>{q(),l.reset()})});
//# sourceMappingURL=index.js.map
