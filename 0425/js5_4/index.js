/* 
  아래에 코드를 작성해주세요.
*/

const keyword = document.querySelector(".search-box__input")
const searchBtn = document.querySelector(".search-box__button")
const container = document.createElement("div")
document.body.appendChild(container)

// API 관련
const API_KEY = "aeccfb530bfa0640ef97597c433aa45c"
const baseURL = "http://ws.audioscrobbler.com/2.0/"

// 자식을 모두 삭제 하는 함수 만들기
const removeAllChildren = function(element) {
  while(element.firstChild) {
    element.removeChild(element.firstChild)
  }
}

const fetchAlbums = function(e, page=1, limit=10) {
  // 클릭시 이전 자료들 지우고 시작.
  removeAllChildren(container)

  // 클릭시 Ajax 요청 보내기
  axios({
    method: "GET",
    baseURL,
    params: {
      method: "album.search",
      album: keyword.value,
      api_key: API_KEY,
      format: "json",
    }
  })
  .then((Response) => {
    Response.data.results.albummatches.album.forEach(element => {

      const card = document.createElement("div")
      const img = document.createElement("img")
      const textDiv = document.createElement("div")
      const h2 = document.createElement("h2")
      const p = document.createElement("p")

      img.setAttribute("src", element.image[0]['#text'])
      card.classList.add("search-result__card")
      textDiv.classList.add("search-result__text")

      h2.innerText = element.artist
      p.innerText = element.name

      container.appendChild(card)
      card.appendChild(img)
      card.appendChild(textDiv)
      textDiv.appendChild(h2)
      textDiv.appendChild(p)
    });
  })
  .catch((error) => {
    console.log(error)
    alert("잠시 후 다시 시도해주세요.")
  })
}

searchBtn.addEventListener("click", fetchAlbums)

