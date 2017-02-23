var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
//var DB = require('models/db.js');
require('vendor/marionette.polymerview.js');
require('webcomponents/custom-panel.html');

//DB.createDB();
var mainLayout = new Backbone.Marionette.LayoutView({
    el: '#main',
    regions: {
        content: "#content"
    },
    template: require('./templates/layout.html'),

});

mainLayout.render();

// var layoutView = Backbone.Marionette.ItemView.extend({
//     el: '#main',
//     template: require('./templates/layout.html')
// });

var person = new Backbone.Model({
    name: 'Jeremy Fairbank',
    job: 'Web Developer'
});
var PanelView = Marionette.PolymerView.extend({
    tagName: 'custom-panel-element',
    model: person,

});



//var panel = new PanelView();

//mainLayout.content.show(panel);



// var TodoList = Marionette.CollectionView.extend({
//     el: '#app-hook',
//     tagName: 'ul',
//
//     childView: ToDo
// });
//
// var todo = new TodoList({
//     collection: new Backbone.Collection([
//         {assignee: 'Scott', text: 'Write a book about Marionette'},
//         {assignee: 'Andrew', text: 'Do some coding'}
//     ])
// });
//
// todo.render();