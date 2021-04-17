
const getTemplate = () => {
  return `
    <div class="chat__helper__button">
        <div class="chat__helper__button__inner data-type="chatHelperButton">
            <button id="chat__helper__button" data-type="chatHelperButton"><i class="fas fa-robot" data-type="chatHelperButton"></i></button>
        </div>
    </div>
    <div class="chat__helper__modal hidden">
        <div class="chat__helper__modal__inner">
            <div class="chat__helper__head">
                <div class="chat__helper__head__info">
                    <div class="chat__helper__head__avatar"><i class="fas fa-robot"></i></div>
                    <p id="chat__helper__head__name">ChatBot</p>
                </div>
                <button id="chat__helper__head__close" data-type="chatHelperHeadClose">&times;</button>
            </div>
            <div class="chat__helper__chatlog" id="scroll__style"></div>
            <div class="chat__helper__message">
                    <input id = "chat__helper__input" type="text" autocomplete="off" >
                    <button id = "chat__helper__send__button" data-type="chatHelperSendButton">&rarr;</button>
            </div>
        </div>
    </div>
    `
}

export class ChatHelper {
  constructor(selector, options) {
    this.$el = document.querySelector(selector)

    this.render()
    // this.connect()
    this.setup()
  }

  async question(data) {
    let response = await fetch('http://localhost:3000/test', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({ question: data }),
    })

    const answer = await response.json()
    console.log(answer)
    this.sendMessage(answer.data, 'bot')
  }

  // connect() {
  //     this.socket = io.connect("http://localhost:3000", {reconnection: true})
  // }

  render() {
    this.$el.innerHTML = getTemplate()
  }

  setup() {
    // this.socket.on('req', (data) => {
    //     this.sendMessage(data, 'bot')
    // })
    this.clickHandler = this.clickHandler.bind(this)
    this.keydownHandler = this.keydownHandler.bind(this)
    this.$el.addEventListener('click', this.clickHandler)
    this.$el
      .querySelector('#chat__helper__input')
      .addEventListener('keydown', this.keydownHandler)
  }

  clickHandler(event) {
    const { type } = event.target.dataset

    if (type === 'chatHelperButton') {
      this.openChatHelper()
    } else if (type === 'chatHelperHeadClose') {
      this.closeChatHelper()
    } else if (type === 'chatHelperSendButton') {
      this.sendMessage(
        this.$el.querySelector('#chat__helper__input').value,
        'user'
      )
    }
  }

  keydownHandler(event) {
    if (event.key === 'Enter') {
      this.sendMessage(
        this.$el.querySelector('#chat__helper__input').value,
        'user'
      )
      this.$el.querySelector('#chat__helper__input').value = ''
    } else if (event.key === 'Escape') {
      this.closeChatHelper()
    }
  }

  openChatHelper() {
    this.$el.children[0].classList.add('hidden')
    this.$el.children[1].classList.remove('hidden')
  }

  closeChatHelper() {
    this.$el.children[0].classList.remove('hidden')
    this.$el.children[1].classList.add('hidden')
  }

  sendMessage(messageText = '', role = 'user') {
    const chatHelperInput = this.$el.querySelector('#chat__helper__input')

    if (role === 'user') {
      messageText = chatHelperInput.value
      console.log(messageText, typeof messageText)
      // this.socket.emit('msg', messageText)
      this.question(messageText)
    }

    const chatHelperChatlog = this.$el.querySelector('.chat__helper__chatlog')
    const message = document.createElement('div')

    const time = new Date()
    message.innerHTML = `
        <div class="chatlog__message ${role}">
            <p><span id="chatlog__message__time">${
              this.normTime(time.getHours()) +
              ':' +
              this.normTime(time.getMinutes())
            }</span></p>
            <p id="chatlog__message__text">${messageText}</p>
        </div>
        `

    if (messageText) {
      chatHelperChatlog.append(message)
      chatHelperChatlog.scrollTo(0, chatHelperChatlog.scrollHeight)
      chatHelperInput.value = ''
    } else {
      chatHelperInput.style.borderColor = '#d64c3b'
      chatHelperInput.style.boxShadow = '0 3px 10px 0 rgba(214, 76, 59, 0.3)'
      setTimeout(() => {
        chatHelperInput.style.borderColor = ''
        chatHelperInput.style.boxShadow = '0 3px 10px 0 rgba(0,0,0,.15)'
      }, 1000)
    }
  }

  normTime(s) {
    return s.toString().length == 1 ? '0' + s : s
  }

  destroy() {
    this.$el.removeEventListener('click', this.clickHandler)
    this.$el.removeEventListener('keydown', this.keydownHandler)
  }
}
