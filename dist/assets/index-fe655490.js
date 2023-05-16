var u=Object.defineProperty;var h=(l,c,i)=>c in l?u(l,c,{enumerable:!0,configurable:!0,writable:!0,value:i}):l[c]=i;var t=(l,c,i)=>(h(l,typeof c!="symbol"?c+"":c,i),i);(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const e of a)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function i(a){const e={};return a.integrity&&(e.integrity=a.integrity),a.referrerPolicy&&(e.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?e.credentials="include":a.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function r(a){if(a.ep)return;a.ep=!0;const e=i(a);fetch(a.href,e)}})();class n{constructor(c,i,r){t(this,"name");t(this,"house");t(this,"age");t(this,"alive");t(this,"speech");this.name=c,this.house=i,this.age=r,this.alive=!0,this.speech=""}kill(){this.alive=!1}talk(){return this.speech}}t(n,"series","Game of Thrones");class m extends n{constructor(i,r,a,e){super(i,r,a);t(this,"kingYears");this.kingYears=e,this.speech="Vais a morir todos"}}class _ extends n{constructor(i,r,a,e){super(i,r,a);t(this,"advisedCharacter");this.advisedCharacter=e,this.speech="No sé por qué, pero creo que voy a morir pronto"}}class d extends n{constructor(i,r,a,e,o){super(i,r,a);t(this,"weapon");t(this,"skill");this.weapon=e,this.skill=o,this.speech="Primero pego y luego pregunto"}}class p extends n{constructor(i,r,a,e,o){super(i,r,a);t(this,"served");t(this,"flattery");this.served=e,this.flattery=o,this.speech="Soy un loser"}}const v=new m("Joffrey","Baratheon",20,2),f=new d("Jaime","Lannister",40,"espada",8),b=new d("Daenerys","Targaryen",21,"dragon",9),g=new _("Tyrion","Lannister",32,"Daenerys"),y=new p("Bronn","Desconocido",43,"Jaime",8),s=[v,f,b,g,y],$=document.querySelector(".characters-list"),j=`<li class="character col">
    <div class="card character__card">
      <img src="/images/joffrey.jpg" alt="Joffrey Baratheon" class="character__picture card-img-top" />
      <div class="card-body">
        <h2 class="character__name card-title h4">${s[0].name} ${s[0].house}</h2>
        <div class="character__info">
          <ul class="list-unstyled">
            <li>Edad: ${s[0].age} años</li>
            <li>
              Estado:
              <i class="fas fa-thumbs-down"></i>
              <i class="fas fa-thumbs-up"></i>
            </li>
          </ul>
        </div>
        <div class="character__overlay">
          <ul class="list-unstyled">
            <li>Años de reinado: ${s[0].kingYears}</li>
          </ul>
          <div class="character__actions">
            <button class="character__action btn">habla</button>
            <button class="character__action btn">muere</button>
          </div>
        </div>
      </div>
      <i class="emoji">👑</i>
    </div>
  </li>
  <div class="comunications">
      <p class="comunications__text display-1">Una frase que dice alguien</p>
      <img class="comunications__picture" src="/public/no-one.jpg" alt="Nombre y familia del que habla" />
    </div>`,q=`<li class="character col">
    <div class="card character__card">
      <img src="/images/jaime.jpg" alt="Jaime Lannister" class="character__picture card-img-top" />
      <div class="card-body">
        <h2 class="character__name card-title h4">${s[1].name} ${s[1].house}</h2>
        <div class="character__info">
          <ul class="list-unstyled">
            <li>Edad: ${s[1].age} años</li>
            <li>
              Estado:
              <i class="fas fa-thumbs-down"></i>
              <i class="fas fa-thumbs-up"></i>
            </li>
          </ul>
        </div>
        <div class="character__overlay">
          <ul class="list-unstyled">
            <li>Arma: ${s[1].weapon}</li>
            <li>Destreza: ${s[1].skill}</li>
          </ul>
          <div class="character__actions">
            <button class="character__action btn">habla</button>
            <button class="character__action btn">muere</button>
          </div>
        </div>
      </div>
      <i class="emoji">🗡️</i>
    </div>
  </li>
  <div class="comunications">
      <p class="comunications__text display-1">Una frase que dice alguien</p>
      <img class="comunications__picture" src="/public/no-one.jpg" alt="Nombre y familia del que habla" />
    </div>`,w=`<li class="character col">
    <div class="card character__card">
      <img src="/images/daenerys.jpg" alt="Daenerys Targaryen" class="character__picture card-img-top" />
      <div class="card-body">
        <h2 class="character__name card-title h4">${s[2].name} ${s[2].house}</h2>
        <div class="character__info">
          <ul class="list-unstyled">
            <li>Edad: ${s[2].age} años</li>
            <li>
              Estado:
              <i class="fas fa-thumbs-down"></i>
              <i class="fas fa-thumbs-up"></i>
            </li>
          </ul>
        </div>
        <div class="character__overlay">
          <ul class="list-unstyled">
            <li>Arma: ${s[2].weapon}</li>
            <li>Destreza: ${s[2].skill}</li>
          </ul>
          <div class="character__actions">
            <button class="character__action btn">habla</button>
            <button class="character__action btn">muere</button>
          </div>
        </div>
      </div>
      <i class="emoji">🗡️</i>
    </div>
  </li>
  <div class="comunications">
      <p class="comunications__text display-1">Una frase que dice alguien</p>
      <img class="comunications__picture" src="/public/no-one.jpg" alt="Nombre y familia del que habla" />
    </div>`,E=`<li class="character col">
    <div class="card character__card">
      <img src="/images/tyrion.jpg" alt="Tyrion Lannister" class="character__picture card-img-top" />
      <div class="card-body">
        <h2 class="character__name card-title h4">${s[3].name} ${s[3].house}</h2>
        <div class="character__info">
          <ul class="list-unstyled">
            <li>Edad: ${s[3].age} años</li>
            <li>
              Estado:
              <i class="fas fa-thumbs-down"></i>
              <i class="fas fa-thumbs-up"></i>
            </li>
          </ul>
        </div>
        <div class="character__overlay">
          <ul class="list-unstyled">
            <li>Asesora a: ${s[3].advisedCharacter}</li>
          </ul>
          <div class="character__actions">
            <button class="character__action btn">habla</button>
            <button class="character__action btn">muere</button>
          </div>
        </div>
      </div>
      <i class="emoji">🎓</i>
    </div>
  </li>
  <div class="comunications">
      <p class="comunications__text display-1">Una frase que dice alguien</p>
      <img class="comunications__picture" src="/public/no-one.jpg" alt="Nombre y familia del que habla" />
    </div>`,T=`<li class="character col">
    <div class="card character__card">
      <img src="/images/bronn.jpg" alt="Bronn" class="character__picture card-img-top" />
      <div class="card-body">
        <h2 class="character__name card-title h4">${s[4].name} ${s[4].house}</h2>
        <div class="character__info">
          <ul class="list-unstyled">
            <li>Edad: ${s[4].age} años</li>
            <li>
              Estado:
              <i class="fas fa-thumbs-down"></i>
              <i class="fas fa-thumbs-up"></i>
            </li>
          </ul>
        </div>
        <div class="character__overlay">
          <ul class="list-unstyled">
             <li>Peloteo: ${s[4].flattery}</li>
             <li>Sirve a: ${s[4].served}</li>
          </ul>
          <div class="character__actions">
            <button class="character__action btn">habla</button>
            <button class="character__action btn">muere</button>
          </div>
        </div>
      </div>
      <i class="emoji">🛡</i>
    </div>
  </li>
  <div class="comunications">
      <p class="comunications__text display-1">Una frase que dice alguien</p>
      <img class="comunications__picture" src="/public/no-one.jpg" alt="Nombre y familia del que habla" />
    </div>`;$.innerHTML=j+q+w+E+T;
