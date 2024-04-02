import './App.css';
import video from "./media/video/car.mp4";


function App() {
    const btn = document.querySelectorAll('[data-open-modal]');
    btn.forEach(elem => {
      elem.addEventListener('click', () => {
        const modal = document.querySelector('#' + elem.getAttribute('data-open-modal'));
        modal.classList.add('active');
      });
    })
  
    const btnClose = document.querySelectorAll('.btn-close');
    btnClose.forEach((elem) => {
      elem.addEventListener('click', () => {
        let modal = elem.closest('.modal');
        modal.classList.remove('active');
      });
    });
  return (
    <>
  <header className="headlobby">
    <div className="container">
      <a href="#" className="headlobby-brand">
        ElectroSales
      </a>
      <nav className="headlobby-wrap">
        <a href="#">Авто в наличии</a>
        <a href="#">Услуги</a>
        <a href="#">Сервис</a>
        <a href="#">О нас</a>
        <a href="#">Контакты</a>
        <a href="#">Блог</a>
      </nav>
      <div className="headlobby-wrap-secondary">
        <a href="#">+79119745843</a>
        <a href="#">Обратный звонок</a>
      </div>
    </div>
  </header>
  {/* Main */}
  <main>
    <div className="vidio-and-text">
      <video src={video} className="main__video" autoplay="autoplay" playsinline = "playsinline" loop = "loop" muted = "muted" type="video/mp4"/>
      <div className="hero-block__wrap">
        <div className="container h1-block">
          <h1>Электромобили в России</h1>
          <div className="sub-title">Продажа и обслуживание</div>
        </div>
        <div className="hero-block__conteiner container">
          <a className="hero-block__btn" href="#">
            Выбрать автомобиль
          </a>
          <a className="hero-block__btn" href="#">
            Оставить заявку
          </a>
        </div>
      </div>
      {/* Кнопки */}
      {/* Кнопка 1 */}
      <div className="all-button">
        <button data-open-modal="modal" className="image-button-1" />
        <div className="modal" id="modal">
          <div className="modal-window">
            <h1 className="h1-button1">
              BYD – это китайская компания, специализирующаяся на производстве
              электрических автомобилей и аккумуляторов, а также разработке
              новаторских решений в области чистой энергетики. В последние годы
              эта марка привлекла внимание не только потребителей, но и весьма
              важных игроков в мировой автомобильной индустрии.{" "}
              <a href="https://byd-motor.ru/?ysclid=lu8h4gmqx3549084511">
                Оффициальный сайт диллера
              </a>{" "}
            </h1>
            <button className="btn-close">X</button>
          </div>
          <div className="overlay" />
        </div>
        {/* Кнопка 2 */}
        <button data-open-modal="modal-2" className="image-button-2" />
        <div className="modal" id="modal-2">
          <div className="modal-window">
            <h1>
              Lixiang – это компания, основанная в 2015 году в Китае. История
              компании началась с создания электрического автомобиля, который
              был предназначен для конкуренции с Tesla.{" "}
              <a href="https://lixiang.su/?ysclid=lu8hlrd6j2323318632">
                Оффициальный сайт диллера
              </a>
            </h1>
            <button className="btn-close">X</button>
          </div>
          <div className="overlay" />
        </div>
        {/* Кнопка 3 */}
        <button data-open-modal="modal-3" className="image-button-3" />
        <div className="modal" id="modal-3">
          <div className="modal-window">
            <h1>
              Полностью электрический бренд Zeekr — дочерняя структура компании
              Geely. Он основан в 2021 году с привлечением мировой команды
              специалистов. Над дизайном моделей бренда работает легендарный
              Штефан Зилафф, который сотрудничал с Audi, Bentley и
              Mercedes-Benz. Ему помогает шведский дизайн-центр в Гётеборге.
              <a href="https://zeekr-avto.ru/?ysclid=lu8hoixua7215649414">
                Оффициальный сайт диллера
              </a>
            </h1>
            <button className="btn-close">X</button>
          </div>
          <div className="overlay" />
        </div>
        {/* Кнопка 4 */}
        <button data-open-modal="modal-4" className="image-button-4" />
        <div className="modal" id="modal-4">
          <div className="modal-window">
            <h1>
              Voyah - Марка создана в 2018 с фокусом на глобальные продажи.
              Марка VOYAH изменила ситуацию в премиальном сегменте рынка
              электромобилей. Инновационный дизайн, непревзойденное качество,
              революционный уровень технологий – вот те столпы, на которые
              опирается бренд VOYAH, созданный как ответ вызовам нового времени.
              <a href="https://voyah-spb.promo-major.ru/?utm_source=yandex_primo&utm_medium=cpc&utm_campaign=108758981&utm_content=15964166970&utm_term=voyah&calltouch_tm=yd_c:108758981_gb:5421896156_ad:15964166970_ph:50940095455_st:search_pt:premium_p:1_s:none_dt:desktop_reg:2_ret:50940095455_apt:none&yclid=6503935461271273471">
                Оффициальный сайт диллера
              </a>
            </h1>
            <button className="btn-close">X</button>
          </div>
          <div className="overlay" />
        </div>
        {/* Кнопка 5 */}
        <button data-open-modal="modal-5" className="image-button-5" />
        <div className="modal" id="modal-5">
          <div className="modal-window">
            <h1>
              NIO - китайский производитель электромобилей и аккумуляторов,
              основанный в 2014 году. Компания была создана на основе опыта
              других производителей электромобилей и имеет ряд инновационных
              технологий в своих автомобилях.
              <a href="https://zeekr-avto.ru/?ysclid=lu8hoixua7215649414">
                Оффициальный сайт диллера
              </a>
            </h1>
            <button className="btn-close">X</button>
          </div>
          <div className="overlay" />
        </div>
      </div>
      {/* Скрипт */}
      {/* Конец Скрипта */}
    </div>
  </main>
</>
  );
}

export default App;
