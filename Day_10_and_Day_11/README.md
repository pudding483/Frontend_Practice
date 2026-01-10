Day 10 :
npm 開發環境 + vite 基礎介紹

Day 11 :
做 card component 包含樣式 複習 CSS (參照 Lab 2)

----------------------------------------------------------
React 從零開始：

1. 把 index.html 內的程式碼，抽出放置到 index.jsx

2. 接著新增 attribute 為 root ，作為一個定位點

3. 之後的行為就利用這個 root 去做 (例如： root.render(...))

常用關鍵字：

– 使用的套件或框架，例如：Bootstrap、Element、Materialize
– 使用的語言，例如：HTML 、CSS、JavaScript
– 使用的語法或組件，例如：Positioning absolute、input 元素、彈跳視窗元件
– 想要達成的目標，例如：背景圖片滿版、實作客製化 radio button
– 遇到的問題，例如：圖片溢出、視窗無法開啟、點擊沒有效果
– 特別想要參考的網站或類型，例如：CSS-tricks、MDN、範例、心得

querySelector V.S. getElementById：

雖然 querySelector 和 getElementById 都是原生 JavaScript 用來抓取 HTML 元素的方法（在這這兩者功能幾乎一樣），但重點在於React 怎麼使用這個元素。

* 舊版寫法 (React 17 以下)
```
import ReactDOM from "react-dom"

ReactDOM.render(page, document.getElementById("root"))
```
* 方式：這樣 React 會直接把內容「塞進」那個 DOM 元素裡
* 缺點：當網頁很大時，React 更新畫面會一次做完，如果運算太久，網頁可能會稍微「卡頓」一下（因為它是同步的，Blocking）

* 新版寫法 (React 18 以上)
```
import { createRoot } from "react-dom/client"

const root = createRoot(document.getElementById("root"))
root.render(page)
```
* 方式：
	1. 先用 createRoot 建立一個 React 的「根 (Root)」實例。
	2. 再呼叫 root.render() 把內容畫出來。
* 優點：Concurrent Mode (並行模式)
	* React 可以把渲染工作「切成小塊」。如果使用者正在打字或點擊，React 可以暫停渲染去回應使用者，讓網頁感覺更順暢、效能更好。
	* Automatic Batching (自動批次處理)：多個狀態改變會合併成一次渲染，減少運算次數。