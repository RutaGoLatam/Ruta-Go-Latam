const WHATSAPP_NUMBER="573237680838";
const countries = {
  CO:{name:"Colombia",flag:"🇨🇴",apps:["Uber","DiDi","inDrive","Cabify","Rappi","Uber Eats","DiDi Food","PedidosYa"]},
  MX:{name:"México",flag:"🇲🇽",apps:["Uber","DiDi","inDrive","Rappi","Uber Eats","DiDi Food","PedidosYa"]},
  AR:{name:"Argentina",flag:"🇦🇷",apps:["Uber","DiDi","Cabify","Rappi","PedidosYa"]},
  BR:{name:"Brasil",flag:"🇧🇷",apps:["Uber","DiDi","inDrive","Rappi","iFood"]},
  CL:{name:"Chile",flag:"🇨🇱",apps:["Uber","DiDi","inDrive","Cabify","Rappi","Uber Eats","PedidosYa"]},
  PE:{name:"Perú",flag:"🇵🇪",apps:["Uber","DiDi","inDrive","Cabify","Rappi","Uber Eats","PedidosYa"]},
  EC:{name:"Ecuador",flag:"🇪🇨",apps:["Uber","DiDi","inDrive","Rappi","Uber Eats","PedidosYa"]},
  PA:{name:"Panamá",flag:"🇵🇦",apps:["Uber","DiDi","inDrive","PedidosYa","Uber Eats"]},
  CR:{name:"Costa Rica",flag:"🇨🇷",apps:["Uber","DiDi","inDrive","Rappi","Uber Eats","PedidosYa"]},
  DO:{name:"República Dominicana",flag:"🇩🇴",apps:["Uber","DiDi","PedidosYa","Uber Eats"]},
  GT:{name:"Guatemala",flag:"🇬🇹",apps:["Uber","PedidosYa","Uber Eats"]},
  SV:{name:"El Salvador",flag:"🇸🇻",apps:["Uber","PedidosYa","Uber Eats"]},
  HN:{name:"Honduras",flag:"🇭🇳",apps:["Uber","PedidosYa"]},
  NI:{name:"Nicaragua",flag:"🇳🇮",apps:["PedidosYa"]},
  UY:{name:"Uruguay",flag:"🇺🇾",apps:["Uber","DiDi","Cabify","Rappi","PedidosYa"]},
  PY:{name:"Paraguay",flag:"🇵🇾",apps:["Uber","DiDi","PedidosYa"]},
  BO:{name:"Bolivia",flag:"🇧🇴",apps:["Uber","PedidosYa"]},
  VE:{name:"Venezuela",flag:"🇻🇪",apps:["PedidosYa"]}
};
const appInfo={"Uber":{abbr:"UB",desc:"Movilidad y servicios según ciudad.",tag:"MOVILIDAD"},"DiDi":{abbr:"DD",desc:"Movilidad y opciones disponibles por mercado.",tag:"MOVILIDAD"},"inDrive":{abbr:"IN",desc:"Movilidad con cobertura variable.",tag:"MOVILIDAD"},"Cabify":{abbr:"CB",desc:"Movilidad en mercados seleccionados.",tag:"MOVILIDAD"},"Rappi":{abbr:"RP",desc:"Delivery y servicios en mercados seleccionados.",tag:"DELIVERY"},"Uber Eats":{abbr:"UE",desc:"Entrega de comida donde está disponible.",tag:"DELIVERY"},"DiDi Food":{abbr:"DF",desc:"Delivery en mercados seleccionados.",tag:"DELIVERY"},"PedidosYa":{abbr:"PY",desc:"Delivery con amplia presencia regional.",tag:"DELIVERY"},"iFood":{abbr:"IF",desc:"Delivery con fuerte presencia en Brasil.",tag:"DELIVERY"}};
const country=document.getElementById("country"),app=document.getElementById("app"),need=document.getElementById("need"),appGrid=document.getElementById("appGrid"),countryGrid=document.getElementById("countryGrid"),result=document.getElementById("selectionResult");
Object.entries(countries).forEach(([code,c])=>{country.insertAdjacentHTML("beforeend",`<option value="${code}">${c.flag} ${c.name}</option>`);countryGrid.insertAdjacentHTML("beforeend",`<button class="country" onclick="selectCountry('${code}')"><span>${c.flag}</span><b>${c.name}</b></button>`)});
function updateApps(){const c=countries[country.value];app.innerHTML=`<option value="">Selecciona una aplicación</option>`+c.apps.map(a=>`<option value="${a}">${a}</option>`).join("");renderApps(c.apps);result.classList.add("hidden")}
function renderApps(list){appGrid.innerHTML=list.map(a=>{const x=appInfo[a]||{abbr:a.slice(0,2).toUpperCase(),desc:"Disponibilidad según mercado.",tag:"APP"};return `<article class="app-card"><div class="app-logo">${x.abbr}</div><h3>${a}</h3><p>${x.desc}</p><span class="tag">${x.tag}</span></article>`}).join("")}
function selectCountry(code){country.value=code;updateApps();document.querySelector("#selector").scrollIntoView({behavior:"smooth"})}
function openWhatsApp(){const c=countries[country.value];const a=app.value||"No especificada";const n=need.options[need.selectedIndex].text;const msg=`Hola RutaGo LATAM 👋%0AQuiero consultar un servicio.%0A%0A📍 País: ${c.name}%0A📱 Aplicación: ${a}%0A🛠️ Servicio: ${n}%0A%0AQuiero recibir información, precio y los datos/link de pago en tiempo real si corresponde.`;window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,"_blank")}
country.addEventListener("change",updateApps);updateApps();
document.getElementById("findBtn").addEventListener("click",()=>{const c=countries[country.value],a=app.value||"No especificada",n=need.options[need.selectedIndex].text;result.classList.remove("hidden");result.innerHTML=`<strong>${c.flag} ${c.name} · ${a}</strong><br><span>Solicitud: ${n}. Abriendo WhatsApp para que un asesor reciba tu país, aplicación y servicio solicitado.</span>`;openWhatsApp()});
document.getElementById("paymentWhatsApp").addEventListener("click",e=>{e.preventDefault();const msg=`Hola RutaGo LATAM 👋 Quiero realizar un pago. Necesito recibir el link o los datos de pago en tiempo real y después enviaré el comprobante para confirmar el depósito lo más rápido posible.`;window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,"_blank")});
document.getElementById("contactForm").addEventListener("submit",e=>{e.preventDefault();const text=`Hola RutaGo LATAM. Soy ${document.getElementById("name").value} de ${document.getElementById("city").value}. Mi teléfono: ${document.getElementById("phone").value}. Necesito: ${document.getElementById("message").value}`;window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,"_blank")});
document.getElementById("menuBtn").addEventListener("click",()=>document.getElementById("mainNav").classList.toggle("open"));document.querySelectorAll("#mainNav a").forEach(a=>a.addEventListener("click",()=>document.getElementById("mainNav").classList.remove("open")));
