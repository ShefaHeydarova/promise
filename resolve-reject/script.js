let h2 = document.querySelector("h2");
let ul = document.querySelector("ul");


function getUser(id) {
  console.log(`${id}-in datalarini al`);

  return new Promise((resolve, reject) => {
    resolve({ name: "Arif", surname: "Quliyev" });
  });
}

function getKurs(id) {
  console.log(`${id}-in kurslarini al`);

  return new Promise((resolve, reject) => {
    resolve(["JavaScript", "Java", "C#"]);
  });
}

function getComment(num) {
  console.log(`${num}-ci kursun aciqlamasini al`);

  return new Promise((resolve, reject) => {
    resolve([
      "Javascript dilindən səmərəli istifadə edə biləcəksiniz. Javascript ilə Obyektyönümlü Proqramlaşdırma və ES6 Dərslərini, Asinxron Əməliyyatların icrasını təmin edən CallBack, ES6 Promise və ES7 Async Await strukturlarını ətraflı öyrənəcəksiniz. Ən əsası isə React və VueJs ilə proqramlar inkişaf etdirə biləcək bir infrastrukturunuz olacaq.",
      "Mobil və Veb İnkişafı Dünyası ilə bir çox sahələrdə istifadə olunan Java dilini öyrənməklə karyeranıza istiqamət verin.Proqramlaşdırma dillərinin əsas strukturlarını, Java Proqramlaşdırma Dilinin bütün təfərrüatlarını öyrənəcəksiniz.Məntiqi və detalları ilə obyekt yönümlü proqramlaşdırmanın bütün anlayışlarını başa düşəcəksiniz.",
      "Layihələr hazırlayaraq C# proqramlaşdırma məntiqini öyrənin!Obyekt yönümlü proqramlaşdırmanın incəlikləri,Verilənlər bazası qeyd proqramlarına nəzarət etmək imkanı, 2D oyun infrastrukturlarına daxil olmaq kursun sonunda qazanacağınız bacarıqlar olacaqdır.",
    ]);
  });
}

getUser(1)
  .then((userName) => {
    h2.innerHTML = `Müəllim: ${userName.name} ${userName.surname}
    <input type='button' id='inp' value='${userName.name} müəllimin kurslarını gör'>`;
  })
  .catch((err) => {
    alert(err);
  });

getKurs(1)
  .then((kurslar) => {
  let input= document.querySelector('#inp');
 
  input.addEventListener('click',()=>{
    let kurs = "";
    kurslar.forEach((element) => {
      kurs += `<li>${element}
      <button>${element} kursunun açıqlamasını gör</button>
      <p></p>
      </li>`;
    });
    ul.innerHTML = kurs;
 })
  })
  .catch((err) => {
    alert(err);
  });

getComment(1)
  .then((comment) => {
   
    let button = document.querySelectorAll('button');
    let p = document.querySelectorAll("p");
    let m = comment.length;
   
    for (let i = 0; i < m; i++) {
     button[i].addEventListener("click", () => {
        setTimeout(() => { 
          p[i].style.display = "block";
          p[i].innerHTML = comment[i];
        },500);
      });
    }
  })
  .catch((err) => {
    alert(err);
  });
