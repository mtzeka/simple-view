module.exports = {
  addEventListeners: function (events) {
    for (var target in events) {
      for (var i = 0; i < events[target].length; i++) {
        var type = events[target][i][0];
        var listener = events[target][i][1];
        var binding = events[target][i][2];
        var event = (binding) ? listener.bind(binding) : listener;

        document.querySelector(target).addEventListener(type, event);
      }
    }
  },
  render: function (element, wrapper) {
    if (!wrapper) {
      return element;
    }
    // client side
    document.querySelector(wrapper).innerHTML = element[0];
    this.addEventListeners(element[1]);
  }
}
