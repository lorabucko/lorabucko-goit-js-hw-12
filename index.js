import{a as v,S as M,i}from"./assets/vendor-73qhTu8_.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const q="55760318-43e5d4b90f7f21f4193a7db8f",R="https://pixabay.com/api/",f=15;async function m(o,t){return(await v.get(R,{params:{key:q,q:o,page:t,per_page:f,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const g=document.querySelector(".gallery"),h=document.querySelector(".loader"),p=document.querySelector(".load-more"),$=new M(".gallery a",{captionsData:"alt",captionDelay:250,captionsPosition:"bottom"});function y(o){const t=o.map(({webformatURL:s,largeImageURL:n,tags:e,likes:r,views:l,comments:P,downloads:S})=>`
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
              ${r}
            </p>
            <p class="info-item">
              <b>Views</b><br />
              ${l}
            </p>
            <p class="info-item">
              <b>Comments</b><br />
              ${P}
            </p>
            <p class="info-item">
              <b>Downloads</b><br />
              ${S}
            </p>
          </div>
        </li>
      `).join("");g.insertAdjacentHTML("beforeend",t),$.refresh()}function B(){g.innerHTML=""}function b(){h.classList.remove("is-hidden")}function L(){h.classList.add("is-hidden")}function w(){p.classList.remove("is-hidden")}function c(){p.classList.add("is-hidden")}const E=document.querySelector(".form"),O=document.querySelector(".load-more"),x=document.querySelector(".gallery");let d="",a=1,u=0;E.addEventListener("submit",A);O.addEventListener("click",H);c();async function A(o){if(o.preventDefault(),d=o.currentTarget.elements["search-text"].value.trim(),!d){i.warning({message:"Please enter a search term!",position:"topRight"});return}a=1,u=0,B(),c(),b();try{const t=await m(d,a),{hits:s,totalHits:n}=t;if(u=n,!s.length){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(s);const e=Math.ceil(u/f);a<e?w():(c(),i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch{i.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{L(),E.reset()}}async function H(){a+=1,c(),b();try{const o=await m(d,a),{hits:t}=o;y(t),I();const s=Math.ceil(u/f);a<s?w():(c(),i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch{i.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{L()}}function I(){const o=x.firstElementChild;if(!o)return;const t=o.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
