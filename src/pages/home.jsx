import React from 'react'
import Header from '../components/header'
import Category from '../components/category'
import Map from '../components/map'
import Footer from '../components/footer'
import Unite from '../components/unite'
import Info from '../components/info'

export default function Home() {



    


    return (
        <div>
            <Header />
            <Category />
            <Unite />
            <Map />
            <Info />
            <Footer />
        </div>
    )
}

// {
//     "menu": [
//        [
//           {
//             "id": 0,
//             "imageUrl": "https://i.postimg.cc/D0xHWJGD/item1.png",
//             "name": "Гункан лосось",
//             "mas": [40],
//             "compound": "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
//             "price": 803,
//             "category": 0,
//             "rating": 4
//           },
//           {
//             "id": 1,
//             "imageUrl": "https://i.postimg.cc/g2C56PwY/item2.png",
//             "name": "Гункан креветка",
//             "mas": [40],
//             "compound": "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
//             "price": 245,
//             "category": 0,
//             "rating": 6
//           },
//           {
//             "id": 2,
//             "imageUrl": "https://i.postimg.cc/Gm8V2pm7/item3.png",
//             "name": "Нигири угорь",
//             "mas": [40],
//             "compound": "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
//             "price": 295,
//             "category": 0,
//             "rating": 4
//           },
//           {
//             "id": 3,
//             "imageUrl": "https://i.postimg.cc/ncwNpmp9/item4.png",
//             "name": "Нигири угорь",
//             "mas": [40],
//             "compound": "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
//             "price": 275,
//             "category": 0,
//             "rating": 2
//           },
//           {
//             "id": 4,
//             "imageUrl": "https://i.postimg.cc/SsqvD773/item5.png",
//             "name": "Гункан с тунцом и трюфелем",
//             "mas": [40],
//             "compound": "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
//             "price": 415,
//             "category": 0,
//             "rating": 8
//           },
//           {
//             "id": 5,
//             "imageUrl": "https://i.postimg.cc/1tHYTnvt/item6.png",
//             "name": "Гункан тунец спайси",
//             "mas": [40],
//             "compound": "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
//             "price": 580,
//             "category": 0,
//             "rating": 2
//           },
//           {
//             "id": 6,
//             "imageUrl": "https://i.postimg.cc/HnkPCYNt/item7.png",
//             "name": "Гункан угорь",
//             "mas": [40],
//             "compound": "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
//             "price": 675,
//             "category": 0,
//             "rating": 9
//           },
//           {
//             "id": 7,
//             "imageUrl": "https://i.postimg.cc/g037VBR3/item8.png",
//             "name": "Нигири тунец",
//             "mas": 40,
//             "compound": "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
//             "price": 450,
//             "category": 0,
//             "rating": 10
//           }
//         ],
//      [
//           {
//             "id": 8,
//             "imageUrl": "https://i.postimg.cc/1t73pKLc/item9.png",
//             "name": "Филадельфия с лососем",
//             "mas": [40],
//             "compound": "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
//             "price": 395,
//             "category": 1,
//             "rating": 10
//           },
//           {
//             "id": 9,
//             "imageUrl": "https://i.postimg.cc/DfDz0BQ7/item10.png",
//             "name": "Филадельфия с угрем",
//             "mas": [40],
//             "compound": "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
//             "price": 285,
//             "category": 1,
//             "rating": 7
//           },
//           {
//             "id": 10,
//             "imageUrl": "https://i.postimg.cc/VNYfpTwW/item11.png",
//             "name": "Кратос",
//             "mas": [40],
//             "compound": "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
//             "price": 285,
//             "category": 1,
//             "rating": 7
//           },
//           {
//             "id": 11,
//             "imageUrl": "https://i.postimg.cc/BQKnKHNH/item12.png",
//             "name": "Ямамото",
//             "mas": [40],
//             "compound": "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
//             "price": 285,
//             "category": 1,
//             "rating": 7
//           },
//           {
//             "id": 12,
//             "imageUrl": "https://i.postimg.cc/hvH4Yt4X/item13.png",
//             "name": "Запеченная креветка",
//             "mas": [40],
//             "compound": "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
//             "price": 285,
//             "category": 1,
//             "rating": 7
//           },
//           {
//             "id": 13,
//             "imageUrl": "https://i.postimg.cc/26yz8ZVq/item14.png",
//             "name": "Сырный с лососем",
//             "mas": [40],
//             "compound": "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
//             "price": 285,
//             "category": 1,
//             "rating": 7
//           },
//           {
//             "id": 14,
//             "imageUrl": "https://i.postimg.cc/W1mp9VB4/item15.png",
//             "name": "Микаса",
//             "mas": [40],
//             "compound": "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
//             "price": 285,
//             "category": 1,
//             "rating": 7
//           },
//           {
//             "id": 15,
//             "imageUrl": "https://i.postimg.cc/nL0FJkcb/item16.png",
//             "name": "Комбо Филадельфия",
//             "mas": [40],
//             "compound": "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
//             "price": 285,
//             "category": 1,
//             "rating": 7
//           }
//         ],
//        [
//           {
//             "id": 16,
//             "imageUrl": "https://i.postimg.cc/JzC4c0dg/item17.png",
//             "name": "Сет #1",
//             "mas": [40],
//             "compound": "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
//             "price": 285,
//             "category": 2,
//             "rating": 7
//           },
//           {
//             "id": 17,
//             "imageUrl": "https://i.postimg.cc/G2fbBmyX/item18.png",
//             "name": "Сет #2",
//             "mas": [40],
//             "compound": "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
//             "price": 285,
//             "category": 2,
//             "rating": 7
//           },
//           {
//             "id": 18,
//             "imageUrl": "https://i.postimg.cc/yxSs0Chs/item19.png",
//             "name": "Сет #3",
//             "mas": [40],
//             "compound": "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
//             "price": 285,
//             "category": 2,
//             "rating": 7
//           },
//           {
//             "id": 19,
//             "imageUrl": "https://i.postimg.cc/s1dycHKS/item20.png",
//             "name": "Сет #4",
//             "mas": [40],
//             "compound": "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
//             "price": 285,
//             "category": 2,
//             "rating": 7
//           },
//           {
//             "id": 20,
//             "imageUrl": "https://i.postimg.cc/dQ7y574t/item21.png",
//             "name": "Суши лосось в нори",
//             "mas": [40],
//             "compound": "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
//             "price": 285,
//             "category": 2,
//             "rating": 7
//           },
//           {
//             "id": 21,
//             "imageUrl": "https://i.postimg.cc/zXKR19ss/item22.png",
//             "name": "Сет #7",
//             "mas": [40],
//             "compound": "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
//             "price": 285,
//             "category": 2,
//             "rating": 7
//           },
//           {
//             "id": 22,
//             "imageUrl": "https://i.postimg.cc/KcdgwZH7/item23.png",
//             "name": "Сет #7",
//             "mas": [40],
//             "compound": "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
//             "price": 285,
//             "category": 2,
//             "rating": 7
//           },
//           {
//             "id": 23,
//             "imageUrl": "https://i.postimg.cc/0yvK5Vxb/item24.png",
//             "name": "Гункан Сет",
//             "mas": [40],
//             "compound": "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
//             "price": 285,
//             "category": 2,
//             "rating": 7
//           }
//         ],
//      [
//           {
//             "id": 24,
//             "imageUrl": "https://i.postimg.cc/7ZNG5SYX/item25.png",
//             "name": "Тартар из лосося с халапеньо",
//             "mas": [40],
//             "compound": "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
//             "price": 285,
//             "category": 3,
//             "rating": 7
//           },
//           {
//             "id": 25,
//             "imageUrl": "https://i.postimg.cc/G24HgNPS/item26.png",
//             "name": "Тартар из лосося с авокадо",
//             "mas": [40],
//             "compound": "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
//             "price": 285,
//             "category": 3,
//             "rating": 7
//           },
//           {
//             "id": 26,
//             "imageUrl": "https://i.postimg.cc/x8Hqnz4v/item27.png",
//             "name": "Салат Чука-Вакаме",
//             "mas": [40],
//             "compound": "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
//             "price": 285,
//             "category": 3,
//             "rating": 7
//           },
//           {
//             "id": 27,
//             "imageUrl": "https://i.postimg.cc/yNddW5GY/item28.png",
//             "name": "Салат с киноа, авокадо и курицей",
//             "mas": [40],
//             "compound": "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
//             "price": 285,
//             "category": 3,
//             "rating": 7
//           },
//           {
//             "id": 28,
//             "imageUrl": "https://i.postimg.cc/tgMg6k0d/item29.png",
//             "name": "Инари с тунцом и трюфелем",
//             "mas": [40],
//             "compound": "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
//             "price": 285,
//             "category": 3,
//             "rating": 7
//           },
//           {
//             "id": 29,
//             "imageUrl": "https://i.postimg.cc/3R0xFG7s/item30.png",
//             "name": "Инари с морским гребешком и сыром",
//             "mas": [40],
//             "compound": "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
//             "price": 285,
//             "category": 3,
//             "rating": 7
//           },
//           {
//             "id": 30,
//             "imageUrl": "https://i.postimg.cc/qqfMb7vz/item31.png",
//             "name": "Инари с лососем и авокадо",
//             "mas": [40],
//             "compound": "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
//             "price": 285,
//             "category": 3,
//             "rating": 7
//           },
//           {
//             "id": 31,
//             "imageUrl": "https://i.postimg.cc/3NgrPHk9/item32.png",
//             "name": "Тартар микс",
//             "mas": [40],
//             "compound": "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
//             "price": 285,
//             "category": 3,
//             "rating": 7
//           }
//         ],
//         [
//           {
//             "id": 32,
//             "imageUrl": "https://i.postimg.cc/Z5jnbZVM/item33.png",
//             "name": "Coca-Cola 0.25(ст)",
//             "mas": [40],
//             "compound": "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
//             "price": 285,
//             "category": 4,
//             "rating": 7
//           },
//           {
//             "id": 33,
//             "imageUrl": "https://i.postimg.cc/fTNRYkPP/item34.png",
//             "name": "Fanta",
//             "mas": [40],
//             "compound": "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
//             "price": 285,
//             "category": 4,
//             "rating": 7
//           },
//           {
//             "id": 34,
//             "imageUrl": "https://i.postimg.cc/Wbwb8TL1/item35.png",
//             "name": "Моршинская негаз.",
//             "mas": [40],
//             "compound": "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
//             "price": 285,
//             "category": 4,
//             "rating": 7
//           },
//           {
//             "id": 35,
//             "imageUrl": "https://i.postimg.cc/vZ88SkbL/item36.png",
//             "name": "Берн",
//             "mas": [40],
//             "compound": "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
//             "price": 285,
//             "category": 4,
//             "rating": 7
//           },
//           {
//             "id": 36,
//             "imageUrl": "https://i.postimg.cc/MpsZk5Gk/item37.png",
//             "name": "Coca-Cola Vanilla",
//             "mas": [40],
//             "compound": "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
//             "price": 285,
//             "category": 4,
//             "rating": 7
//           },
//           {
//             "id": 37,
//             "imageUrl": "https://i.postimg.cc/cJrxd3Kv/item38.png",
//             "name": "Dr Pepper вишня",
//             "mas": [40],
//             "compound": "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
//             "price": 285,
//             "category": 4,
//             "rating": 7
//           },
//           {
//             "id": 38,
//             "imageUrl": "https://i.postimg.cc/bvWzrvb3/item39.png",
//             "name": "Dr Pepper классический",
//             "mas": [40],
//             "compound": "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
//             "price": 285,
//             "category": 4,
//             "rating": 7
//           },
//           {
//             "id": 39,
//             "imageUrl": "https://i.postimg.cc/KzTmMyDF/item40.png",
//             "name": "Sprite",
//             "mas": [40],
//             "compound": "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
//             "price": 285,
//             "category": 4,
//            "rating": 7
//           }
//         ]
      
 
//     ]
//   }