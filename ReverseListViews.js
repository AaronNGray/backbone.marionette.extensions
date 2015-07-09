Backbone.Marionette.ReverseCompositeView = Backbone.Marionette.CompositeView.extend({
  reverse: true,
  // Create a fragment buffer from the currently buffered children
  _createBuffer: function() {
    var elBuffer = document.createDocumentFragment();
    if (this.getOption('reverse')) {
      _.each(this._bufferedChildren, function(b) {
        elBuffer.insertBefore(b.el, elBuffer.firstChild);
      });
    } else {
      _.each(this._bufferedChildren, function(b) {
        elBuffer.appendChild(b.el);
      });
    }
    return elBuffer;
  },
  // Internal method. Append a view to the end of the $el
  _insertAfter: function(childView) {
    var $container = this.getChildViewContainer(this, childView);
    if (this.getOption('reverse'))
      $container.prepend(childView.el);
    else
      $container.append(childView.el);
  }
});
