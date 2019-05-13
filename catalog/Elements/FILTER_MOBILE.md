```react
responsive: true
state: {clicked: 0}
---
     <section class="lts-filters--mobile">

        <div class="lts-filter__header">
            <span class="lts-filter__title">Filtri</span>
            <div class="lts-filters__selected">
                <button class="lts-btn">Legno
                    <span>&times;</span>
                </button>
                <button class="lts-btn">Argento
                    <span>&times;</span>
                </button>
                <button class="lts-btn">Vetro
                    <span>&times;</span>
                </button>
                <button class="lts-btn">Da 200€
                    <span>&times;</span>
                </button>
            </div>
        </div>

        <div class="lts-filter__slider-box">
            <div id="slider"></div>
            <div class="lts-price-container">
                <span><input type="number" class="lts-price-box" placeholder="€" /></span>
                <span><input type="number" class="lts-price-box" placeholder="€" /></span>
            </div>
        </div>

        <div class="lts-filter__body">
            <div class="lts-filters__wrapper">
                <div class="lts-filters__box">
                    <span class="lts-filter-cat__title">Filter Cat 1</span>
                        <label class="lts-filter-cat__item">Item
                            <input type="checkbox" />
                            <span class="lts-checkmark"></span>
                        </label>
                </div>

                <div class="lts-filters__box">
                    <span class="lts-filter-cat__title">Filter Cat 2</span>
                        <label class="lts-filter-cat__item">Item
                            <input type="checkbox" />
                            <span class="lts-checkmark"></span>
                        </label>
                </div>

                <div class="lts-filters__box">
                    <span class="lts-filter-cat__title">Filter Cat 3</span>
                        <label class="lts-filter-cat__item">Item
                            <input type="checkbox" />
                            <span class="lts-checkmark"></span>
                        </label>
                </div>

            </div>
        </div>

        <div class="lts-filter__footer">
            <button class="lts-btn">RESET</button>
            <button class="lts-btn lts-btn--primary">APPLICA</button>
        </div>


    </section>
```