// YOUR CODE HERE:
class App {
  
  constructor(server) {
    this.server = server;
  }
  
  init() {
    
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
    
  }
  
  renderMessage() {
    
  }
  
  renderRoom() {
    
  }
  
  handleUsernameClick() {
    
  }
  
  handleSubmit() {
    
  }
  
  
  
}
let app = new App('http://parse.sfm8.hackreactor.com');
app.send({a: '1', b: 'hello'});