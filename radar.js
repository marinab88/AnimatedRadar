// create 10 circles
const renderRadar = () => {
  let radar = document.querySelector('.circle');
  for (let i=0; i<=9; i++) {
    radar.innerHTML += `
    <div class="circle${i+1}">
  
    </div>
    `;
  }
}

renderRadar();
