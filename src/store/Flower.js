import { makeAutoObservable } from "mobx";

export default class FlowerStore {
  constructor() {
    this._types = [
      { id: 1, name: "Все" },
      { id: 2, name: "Тюльпаны" },
      { id: 3, name: "розы" },
      { id: 4, name: "Хризантемы" },
      { id: 5, name: "Сборные букеты" },
      { id: 6, name: "Открытки" },
    ];
    this._flower = [
      {
        id: 1,
        name: "Сборный букет с розами",
        price: 4990,
        rating: 5,
        img: "https://i.pinimg.com/564x/69/6c/32/696c32138953a465c3001300a2369e98.jpg",
      },
      {
        id: 2,
        name: "Букет из роз",
        price: 3990,
        rating: 5,
        img: "https://i.pinimg.com/564x/d0/27/49/d02749d8d5aeb438316c5f40e97b69e2.jpg",
      },
      {
        id: 3,
        name: "Сборный букет с пионами",
        price: 3400,
        rating: 5,
        img: "https://i.pinimg.com/564x/2b/78/b0/2b78b08594f27d1c84f029177e3c2632.jpg",
      },
      {
        id: 4,
        name: "Сборный букет с пионами",
        price: 3590,
        rating: 5,
        img: "https://i.pinimg.com/564x/a2/ca/48/a2ca48b395ed6ebd354a694782f03e95.jpg",
      },
      {
        id: 5,
        name: "розы белые",
        price: 190,
        rating: 5,
        img: "https://shop-cdn1-2.vigbo.tech/shops/29666/products/20995625/images/3-9966b3560948cea18b40f7388192bc93.jpg",
      },
      {
        id: 6,
        name: "розы белые",
        price: 190,
        rating: 5,
        img: "https://shop-cdn1-2.vigbo.tech/shops/29666/products/20995625/images/3-9966b3560948cea18b40f7388192bc93.jpg",
      },
      {
        id: 7,
        name: "Букет с фиалками",
        price: 4390,
        rating: 5,
        img: "https://i.pinimg.com/564x/6f/97/f0/6f97f0fa57f80595ccfea34d9b31bbb1.jpg",
      },
      {
        id: 8,
        name: "розы белые",
        price: 190,
        rating: 5,
        img: "https://shop-cdn1-2.vigbo.tech/shops/29666/products/20995625/images/3-9966b3560948cea18b40f7388192bc93.jpg",
      },
      {
        id: 9,
        name: "Сборный букет с розами",
        price: 4000,
        rating: 5,
        img: "https://i.pinimg.com/564x/31/bb/00/31bb0085254ed53091751dc5a5071363.jpg",
      },
      {
        id: 10,
        name: "Букет с хризантемами",
        price: 3190,
        rating: 5,
        img: "https://i.pinimg.com/736x/cb/fe/83/cbfe83f8f81b260679b0702531012a21.jpg",
      },
      {
        id: 11,
        name: "Букет c ромашками",
        price: 2990,
        rating: 5,
        img: "https://i.pinimg.com/564x/40/0e/32/400e327c18a1f97199e576fab5de664b.jpg",
      },
      {
        id: 12,
        name: "Букет с розами",
        price: 5990,
        rating: 5,
        img: "https://i.pinimg.com/564x/dd/8c/92/dd8c929d9fe50ceefc61899cdd4f859e.jpg",
      },
      {
        id: 13,
        name: "Букет с тюльпанами",
        price: 3990,
        rating: 5,
        img: "https://i.pinimg.com/564x/e6/24/ef/e624ef722b09858905e4712706c322c5.jpg",
      },
      {
        id: 14,
        name: "Сборный букет с пионами",
        price: 4490,
        rating: 5,
        img: "https://i.pinimg.com/564x/03/f0/7b/03f07bb8d7117b3ad5dcc5c3d2a33b54.jpg",
      },
      {
        id: 15,
        name: "розы белые",
        price: 190,
        rating: 5,
        img: "https://shop-cdn1-2.vigbo.tech/shops/29666/products/20995625/images/3-9966b3560948cea18b40f7388192bc93.jpg",
      },
    ];
    this._selectedType = {};
    this._page = 1;
    this._totalCount = 0;
    this._limit = 15;
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }
  setFlower(flower) {
    this._flower = flower;
  }

  setSelectedType(type) {
    this.setPage(1);
    this._selectedType = type;
  }
  setPage(page) {
    this._page = page;
  }
  setTotalCount(count) {
    this._totalCount = count;
  }

  get types() {
    return this._types;
  }
  get flower() {
    return this._flower;
  }
  get selectedType() {
    return this._selectedType;
  }
  get totalCount() {
    return this._totalCount;
  }
  get page() {
    return this._page;
  }
  get limit() {
    return this._limit;
  }
}
