
function switchCommentBarrage () {
  let flag = window.localStorage.getItem('commentBarrageDisplay') // undefined || false
  document.getElementById('comment-barrage').style.display = flag === 'false' ? 'block' : 'none'
  window.localStorage.setItem('commentBarrageDisplay', flag === 'false' ? 'undefined' : 'false', 86400000)
}