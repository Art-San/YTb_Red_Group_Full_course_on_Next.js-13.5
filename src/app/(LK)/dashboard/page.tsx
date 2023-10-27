import { use } from 'react'

// SSR service sate rendering // Юзер зашел, отправил запрос, зашло 100 юзеров, отправилось 100 запросов
// SSG server static generation // Данные генерируются при сборке проекта, Минус: Добавил новый продукт надо пересобирать проект
// ISR

// SSR | SSG | ISR //в режиме разработки три эти штуки работают как SSR.
// SSG | ISR // Протестировать их можно после сборки проекта
// 39:20

// ==========================   SSR =====================================
// const fetchData = () =>
//   fetch('https://jsonplaceholder.typicode.com/todos/1', {
//     cache: 'no-store'  <======================================  SSR
//   }).then((response) => response.json())

// export default async function DashboardPage() {
//   const data = await fetchData()
//   return (
//     <div className="">
//       <div className="">{data.id}</div>
//     </div>
//   )
// }

// =============================== SSG  ===================================
// const fetchData = () =>
//   fetch('https://jsonplaceholder.typicode.com/todos/1', {
//     cache: 'force-cache' //  <====================================== SSG
//   }).then((response) => response.json())

// export default async function DashboardPage() {
//   const data = await fetchData()
//   return (
//     <div className="">
//       <div className="">{data.id}</div>
//     </div>
//   )
// }
const fetchData = () =>
  fetch('https://jsonplaceholder.typicode.com/todos/1', {
    next: { revalidate: 10 } //  <====================================== SSG // каждые 10 сек будут ревалидироватся данные
  }).then((response) => response.json())

export default async function DashboardPage() {
  const data = await fetchData()
  return (
    <div className="">
      <div className="">{data.id}</div>
    </div>
  )
}
// default в page.tsx указывать обязательно требование next.js
