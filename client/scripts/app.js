// YOUR CODE HERE:
class App {
  
  constructor(server) {
    this.server = server;
  }
  
  init() {
    $('.username').on('click', () => this.handleUsernameClick(event));
    $('#send .submit').on('submit', () => this.handleSubmit(event));
  }
  
  send(message) {
    $.ajax({  
      url: `${this.server}/chatterbox/classes/messages`,
      type: 'POST',
      data: message,
      contentType: 'application/json',
      success: (data) => console.log(data),
      error: (data) => console.log(`failed: ${data}`)          
    });
  }
  
  fetch() {
    $.ajax({
      url: `${this.server}`,
      type: 'GET',
      contentType: 'application/json',
      success: (data) => console.log(data),
      error: (data) => console.log(`failed: ${data}`)
    });
  }
  
  clearMessages() {
    $('#chats').html('');
  }
  
  renderMessage(message) {
    let html = `<div class="message">
      <div class="username">${message.username}</div>
      <div class="text">${message.text}</div>
    </div>`;
    $('#chats').append(html);
  }
  
  renderRoom(roomname) {
    let room = `<div class="room">${roomname}</div>`;
    $('#roomSelect').append(room); 
  }
  
  handleUsernameClick(event) {
    console.log(event);
  }
  
  handleSubmit(event) {
    console.log(event);
  }
  
  
  
}
let app = new App('http://parse.sfm8.hackreactor.com');
app.send({a: '1', b: 'hello'});