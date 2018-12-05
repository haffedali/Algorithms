var myList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,10]
const binary = (list, num) => {
    const l = list.length;
    l -= 1;
    l = Math.round((l/2));
    if (l > num) {
        binary(list[l])
    }

}






handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.newMessage) {
        console.log(this.state)
        this.socket.emit('newMessage',this.state.newMessage)
    }
};